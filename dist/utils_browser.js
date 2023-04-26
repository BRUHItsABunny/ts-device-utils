"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrowserHeaders = exports.formatTLSFingerprint = void 0;
function formatTLSFingerprint(fingerprint, strict) {
    if (fingerprint == undefined) {
        return "";
    }
    let fmtStrict = false;
    if (strict === true) {
        fmtStrict = strict;
    }
    let extensions = [...fingerprint.extensions];
    if (!fmtStrict) {
        extensions.sort(() => Math.random() - 0.5);
    }
    let result = [
        fingerprint.version.toString(),
        "",
        "",
        "",
        "",
    ];
    let cipherSuites = fingerprint.cipherSuites.map(cipherSuite => cipherSuite.toString());
    result[1] = cipherSuites.join("-");
    let extensionsTmp = new Array(extensions.length);
    let extensionsEnd = [];
    extensions.forEach((extension, i) => {
        if (extension === 21 || extension === 41) {
            extensionsEnd.push(extension);
        }
        else {
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
    return result.join(",");
}
exports.formatTLSFingerprint = formatTLSFingerprint;
function getBrowserHeaders(browser, productOverride, platform, isMobile) {
    if (typeof platform === "undefined") {
        platform = "Windows";
    }
    if (typeof isMobile === "undefined") {
        isMobile = false;
    }
    const uaProductStart = browser.userAgent.indexOf("(");
    const uaProductEnd = browser.userAgent.indexOf(")");
    const uaStart = browser.userAgent.substring(0, uaProductStart + 1);
    const uaEnd = browser.userAgent.substring(uaProductEnd, browser.userAgent.length);
    if (typeof productOverride === 'undefined') {
        productOverride = browser.userAgent.substring(uaProductStart + 1, uaProductEnd);
    }
    const result = {
        "user-agent": uaStart + productOverride + uaEnd
    };
    if (browser.brandHeader.length > 0) {
        result["sec-ch-ua"] = browser.brandHeader;
        result["sec-ch-ua-platform"] = platform;
        result["sec-ch-ua-mobile"] = "?0";
        if (isMobile) {
            result["sec-ch-ua-mobile"] = "?1";
        }
    }
    return result;
}
exports.getBrowserHeaders = getBrowserHeaders;
