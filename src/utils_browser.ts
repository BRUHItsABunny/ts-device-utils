import {Browser, Browser_TLSFingerprint, Browser_TLSFingerprint_Extension} from "./device_utils";

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
