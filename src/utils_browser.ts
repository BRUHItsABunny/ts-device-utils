import {Browser, Browser_TLSFingerprint, Browser_TLSFingerprint_Extension} from "./device_utils";
import axios, {AxiosResponse} from "axios";

export function formatTLSFingerprint(fingerprint: Browser_TLSFingerprint | undefined, strict?: boolean): string {
    if (fingerprint == undefined) {
        return ""
    }
    if (!fingerprint.extensions ||
        !fingerprint.version ||
        !fingerprint.cipherSuites ||
        !fingerprint.ellipticCurves ||
        !fingerprint.ellipticCurvePointFormats
    ) {
        return ""
    }

    let fmtStrict = false;
    if (strict === true) {
        fmtStrict = strict;
    }

    let extensions: Browser_TLSFingerprint_Extension[] = [...fingerprint.extensions];
    if (!fmtStrict) {
        extensions.sort(() => Math.random() - 0.5);
    }

    let result: string[] = [
        fingerprint.version.toString(),
        "",
        "",
        "",
        "",
    ];

    let cipherSuites = fingerprint.cipherSuites.map(cipherSuite => cipherSuite.toString());
    result[1] = cipherSuites.join("-");

    let extensionsTmp: string[] = new Array(extensions.length);
    let extensionsEnd: number[] = [];
    extensions.forEach((extension, i) => {
        if (extension === 21 || extension === 41) {
            extensionsEnd.push(extension);
        } else {
            extensionsTmp[i - extensionsEnd.length] = extension.toString();
        }
    });
    extensionsEnd.sort();
    extensionsEnd.forEach((extensionEnd, i) => {
        extensionsTmp[extensionsTmp.length - extensionsEnd.length + i] = extensionEnd.toString();
    });
    result[2] = extensionsTmp.join("-");

    let ellipticCurves = fingerprint.ellipticCurves.map(ellipticCurve => ellipticCurve.toString());
    result[3] = ellipticCurves.join("-");

    let ellipticCurvePointFormats = fingerprint.ellipticCurvePointFormats.map(ellipticCurvePointFormat => ellipticCurvePointFormat.toString());
    result[4] = ellipticCurvePointFormats.join("-");

    return result.join(",")
}

export function getBrowserHeaders(browser: Browser, productOverride?: string, platform?: string, isMobile?: boolean): { [key: string]: string | string[]}  {
    if (!browser.userAgent) {
        return {}
    }

    if (typeof platform === "undefined") {
        platform = "Windows"
    }
    if (typeof isMobile === "undefined") {
        isMobile = false
    }

    const uaProductStart = browser.userAgent.indexOf("(");
    const uaProductEnd = browser.userAgent.indexOf(")");
    const uaStart = browser.userAgent.substring(0, uaProductStart + 1);
    const uaEnd = browser.userAgent.substring(uaProductEnd, browser.userAgent.length);
    if (typeof productOverride === 'undefined') {
        productOverride = browser.userAgent.substring(uaProductStart + 1, uaProductEnd);
    }

    const result: { [key: string]: string} = {
        "user-agent": uaStart + productOverride + uaEnd
    }

    if(browser.brandHeader && browser.brandHeader.length > 0) {
        result["sec-ch-ua"] = browser.brandHeader
        if (browser.platformHeader) {
            result["sec-ch-ua-platform"] = browser.platformHeader
        } else {
            result["sec-ch-ua-platform"] = platform
        }

        if (browser.mobileHeader) {
            result["sec-ch-ua-mobile"] = browser.mobileHeader
        } else {
            result["sec-ch-ua-mobile"] = "?0"
            if(isMobile) {
                result["sec-ch-ua-mobile"] = "?1"
            }
        }
    }

    return result;
}

export function setSecFetchHeaders(headers: { [key: string]: string | string[] }, site?: string, mode?: string, dest?: string,): { [key: string]: string | string[] } {
    // Guarantee default values for optional parameters
    if (typeof site === 'undefined') {
        site = 'same-origin';
    }
    if (typeof mode === 'undefined') {
        mode = 'cors';
    }
    if (typeof dest === 'undefined') {
        dest = 'empty';
    }

    // set values in headers
    headers['sec-fetch-site'] = site;
    headers['sec-fetch-mode'] = mode;
    headers['sec-fetch-dest'] = dest;
    return headers;
}

// Brand permutations
const brandPermutations: number[][] = [
    [0, 1, 2],
    [0, 2, 1],
    [1, 0, 2],
    [1, 2, 0],
    [2, 0, 1],
    [2, 1, 0],
];

// Greasy characters
const greasyChars: string[] = [' ', '(', ':', '-', '.', '/', ')', ';', '=', '?', '_'];
const greasyCharsLegacy: string[] = [' ', ' ', ';'];
const greasedVersions: string[] = ['8', '99', '24'];

/**
 * GenerateBrandHeader - Ported GREASing from Chromium
 */
export function generateBrandHeader(brand: string, majorVersion: number, useLegacy?: boolean): string {
    let grease: string;
    let result: string[] = new Array(3);

    const legacyAlg = useLegacy || false;
    const order = brandPermutations[majorVersion % brandPermutations.length];

    if (!legacyAlg) {
        grease = `"Not${greasyChars[majorVersion % greasyChars.length]}A${
            greasyChars[(majorVersion + 1) % greasyChars.length]
        }Brand";v="${greasedVersions[majorVersion % greasedVersions.length]}"`;
    } else {
        grease = `"${greasyCharsLegacy[order[0]]}Not${greasyCharsLegacy[order[1]]}A${
            greasyCharsLegacy[order[2]]
        }Brand";v="${greasedVersions[1]}"`;
    }

    if (brand.length > 0) {
        result[order[0]] = grease;
        result[order[1]] = `"Chromium";v="${majorVersion}"`;
        result[order[2]] = `"${brand}";v="${majorVersion}"`;
    } else {
        result = new Array(2);
        result[majorVersion % 2] = grease;
        result[(majorVersion + 1) % 2] = `"Chromium";v="${majorVersion}"`;
    }

    return result.join(', ');
}

// Platform constants
export const PlatformWindows = 'win';
export const PlatformWindows64 = 'win64';
export const PlatformIOS = 'ios';
export const PlatformAndroid = 'android';
export const PlatformMac = 'mac';
export const PlatformMacARM64 = 'mac_arm64';
export const PlatformLinux = 'linux';

// Channel constants
export const ChannelExtended = 'extended';
export const ChannelStable = 'stable';
export const ChannelBeta = 'beta';
export const ChannelDev = 'dev';
export const ChannelCanary = 'canary';

export interface ChromiumVersionResponse {
    versions: { name: string; version: string }[];
    nextPageToken: string;
}

export class ChromiumVersion {
    name: string;
    version: string;

    constructor(name: string, version: string) {
        this.name = name;
        this.version = version;
    }

    getMajorVersion(): number {
        const majorStr = this.version.split('.')[0];
        const majorInt = parseInt(majorStr, 10);
        return isNaN(majorInt) ? 0 : majorInt;
    }

    getUAVersion(): string {
        const majorStr = this.version.split('.')[0];
        return `${majorStr}.0.0.0`;
    }
}

export async function getLatestChromium(
    index: number,
    platform: string = PlatformWindows,
    channelId: string = ChannelStable
): Promise<ChromiumVersion> {
    const reqURL = `https://versionhistory.googleapis.com/v1/chrome/platforms/${platform}/channels/${channelId}/versions`;

    try {
        const response = await axios.get<ChromiumVersionResponse>(reqURL);
        const respParsed = response.data;
        const versionsLength = respParsed.versions.length;

        let unsignedIndex: number;
        let versionIndex: number;

        if (index < 0) {
            unsignedIndex = -index;
            versionIndex = (versionsLength - (unsignedIndex % versionsLength)) % versionsLength;
        } else {
            versionIndex = index % versionsLength;
        }

        const versionData = respParsed.versions[versionIndex];
        return new ChromiumVersion(versionData.name, versionData.version);
    } catch (error) {
        throw new Error(`Failed to get Chromium version: ${error}`);
    }
}
