import {Browser, Browser_TLSFingerprint_ProtocolVersion} from "./device_utils";

const AvailableBrowsers: {[key: string]: {[key: string]: Browser}} = {
    "brave": {
        "1.64.109": {
            version: "1.64.109",
            name: "brave",
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
            brandHeader: "\"Chromium\";v=\"112\", \"Brave\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
            tlsFingerprint: {
                version: Browser_TLSFingerprint_ProtocolVersion.TLS1_2,
                cipherSuites: [
                    4865, 4866, 4867, 49195, 49199, 49196, 49200, 52393, 52392, 49171, 49172, 156, 157, 47, 53
                ],
                extensions: [
                    27, 16, 35, 11, 17513, 43, 13, 5, 23, 0, 18, 51, 10, 65281, 45, 21
                ],
                ellipticCurves: [
                    29, 23, 24
                ],
                ellipticCurvePointFormats: [
                    0
                ],
            }
        } as Browser,
    },
    "chrome": {
        "112.0.5615.50": {
            version: "112.0.5615.50",
            name: "chrome",
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
            brandHeader: "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
            tlsFingerprint: {
                version: Browser_TLSFingerprint_ProtocolVersion.TLS1_2,
                cipherSuites: [
                    4865, 4866, 4867, 49195, 49199, 49196, 49200, 52393, 52392, 49171, 49172, 156, 157, 47, 53
                ],
                extensions: [
                    10, 5, 13, 18, 23, 16, 27, 43, 35, 65281, 51, 45, 11, 17513, 0, 21, 41
                ],
                ellipticCurves: [
                    29, 23, 24
                ],
                ellipticCurvePointFormats: [
                    0
                ],
            }
        } as Browser,
    },
    "firefox": {
        "111.0.1": {
            version: "111.0.1",
            name: "firefox",
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0",
            brandHeader: "",
            tlsFingerprint: {
                version: Browser_TLSFingerprint_ProtocolVersion.TLS1_2,
                cipherSuites: [
                    4865, 4867, 4866, 49195, 49199, 52393, 52392, 49196, 49200, 49162, 49161, 49171, 49172, 156, 157, 47, 53
                ],
                extensions: [
                    0, 23, 65281, 10, 11, 16, 5, 34, 51, 43, 13, 45, 28, 41
                ],
                ellipticCurves: [
                    29, 23, 24, 25, 256, 257
                ],
                ellipticCurvePointFormats: [
                    0
                ],
            }
        } as Browser,
    },
    "opera": {
        "97.0.4719.56": {
            version: "97.0.4719.56",
            name: "opera",
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 OPR/97.0.0.0",
            brandHeader: "\"Chromium\";v=\"112\", \"Not_A Brand\";v=\"24\", \"Opera\";v=\"98\"",
            tlsFingerprint: {
                version: Browser_TLSFingerprint_ProtocolVersion.TLS1_2,
                cipherSuites: [
                    4865, 4866, 4867, 49195, 49199, 49196, 49200, 52393, 52392, 49171, 49172, 156, 157, 47, 53
                ],
                extensions: [
                    13, 16, 17513, 35, 65281, 43, 0, 10, 45, 23, 11, 27, 5, 51, 18, 21, 41,29, 23, 24
                ],
                ellipticCurves: [
                    29, 23, 24
                ],
                ellipticCurvePointFormats: [
                    0
                ],
            }
        } as Browser,
    },
}

function getRandomKey(collection: {[key: string]: any}): string {
    const keys = Array.from(Object.keys(collection));
    return <string>keys[Math.floor(Math.random() * keys.length)];
}

export function randomBrowserVersionByName(name: string): Browser | undefined {
    if (AvailableBrowsers.hasOwnProperty(name)){
        return AvailableBrowsers[name][getRandomKey(AvailableBrowsers[name])];
    }
    return undefined;
}

export function randomBrowser(): Browser {
    const browserName = getRandomKey(AvailableBrowsers);
    return AvailableBrowsers[browserName][getRandomKey(AvailableBrowsers[browserName])];
}
