import {Browser_TLSFingerprint, Browser_TLSFingerprint_Extensions} from "./device_utils";

export function formatTLSFingerprint(fingerprint: Browser_TLSFingerprint | undefined, strict?: boolean): string {
    if (fingerprint == undefined) {
        return ""
    }

    let fmtStrict = false;
    if (strict === true) {
        fmtStrict = strict;
    }

    let extensions: Browser_TLSFingerprint_Extensions[] = [...fingerprint.extensions];
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