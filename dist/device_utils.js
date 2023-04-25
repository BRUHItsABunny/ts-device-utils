"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AndroidDevice_DeviceSoftware_AppMetaDataEntry = exports.AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry = exports.AndroidDevice_DeviceSoftware = exports.AndroidDevice_BuildData = exports.AndroidDevice_ID = exports.AndroidDevice = exports.CPUData = exports.ScreenData = exports.Timezone = exports.MAC = exports.SIMCard_MEID = exports.SIMCard_IMEI = exports.SIMCard = exports.Locale = exports.GPSLocation = exports.Browser_TLSFingerprint = exports.Browser = exports.androidDevice_VersionToJSON = exports.androidDevice_VersionFromJSON = exports.AndroidDevice_Version = exports.cPUData_ArchitectureToJSON = exports.cPUData_ArchitectureFromJSON = exports.CPUData_Architecture = exports.gPSLocation_LocationProviderToJSON = exports.gPSLocation_LocationProviderFromJSON = exports.GPSLocation_LocationProvider = exports.browser_TLSFingerprint_EllipticCurvePointFormatToJSON = exports.browser_TLSFingerprint_EllipticCurvePointFormatFromJSON = exports.Browser_TLSFingerprint_EllipticCurvePointFormat = exports.browser_TLSFingerprint_EllipticCurveToJSON = exports.browser_TLSFingerprint_EllipticCurveFromJSON = exports.Browser_TLSFingerprint_EllipticCurve = exports.browser_TLSFingerprint_ExtensionsToJSON = exports.browser_TLSFingerprint_ExtensionsFromJSON = exports.Browser_TLSFingerprint_Extensions = exports.browser_TLSFingerprint_CipherSuiteToJSON = exports.browser_TLSFingerprint_CipherSuiteFromJSON = exports.Browser_TLSFingerprint_CipherSuite = exports.browser_TLSFingerprint_ProtocolVersionToJSON = exports.browser_TLSFingerprint_ProtocolVersionFromJSON = exports.Browser_TLSFingerprint_ProtocolVersion = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "device_utils";
/**
 * - RFC 5246 (TLS 1.2): https://tools.ietf.org/html/rfc5246
 * - RFC 6101 (SSL 3.0): https://tools.ietf.org/html/rfc6101
 * https://github.com/openssl/openssl/blob/c04e78f0c69201226430fed14c291c281da47f2d/include/openssl/prov_ssl.h
 */
var Browser_TLSFingerprint_ProtocolVersion;
(function (Browser_TLSFingerprint_ProtocolVersion) {
    Browser_TLSFingerprint_ProtocolVersion[Browser_TLSFingerprint_ProtocolVersion["UNKNOWN"] = 0] = "UNKNOWN";
    Browser_TLSFingerprint_ProtocolVersion[Browser_TLSFingerprint_ProtocolVersion["SSL3"] = 768] = "SSL3";
    Browser_TLSFingerprint_ProtocolVersion[Browser_TLSFingerprint_ProtocolVersion["TLS1"] = 769] = "TLS1";
    Browser_TLSFingerprint_ProtocolVersion[Browser_TLSFingerprint_ProtocolVersion["TLS1_1"] = 770] = "TLS1_1";
    Browser_TLSFingerprint_ProtocolVersion[Browser_TLSFingerprint_ProtocolVersion["TLS1_2"] = 771] = "TLS1_2";
    Browser_TLSFingerprint_ProtocolVersion[Browser_TLSFingerprint_ProtocolVersion["TLS1_3"] = 772] = "TLS1_3";
    Browser_TLSFingerprint_ProtocolVersion[Browser_TLSFingerprint_ProtocolVersion["DTLS1"] = 65279] = "DTLS1";
    Browser_TLSFingerprint_ProtocolVersion[Browser_TLSFingerprint_ProtocolVersion["DTLS1_2"] = 65277] = "DTLS1_2";
    Browser_TLSFingerprint_ProtocolVersion[Browser_TLSFingerprint_ProtocolVersion["DTLS1_BAD"] = 256] = "DTLS1_BAD";
    Browser_TLSFingerprint_ProtocolVersion[Browser_TLSFingerprint_ProtocolVersion["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Browser_TLSFingerprint_ProtocolVersion = exports.Browser_TLSFingerprint_ProtocolVersion || (exports.Browser_TLSFingerprint_ProtocolVersion = {}));
function browser_TLSFingerprint_ProtocolVersionFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return Browser_TLSFingerprint_ProtocolVersion.UNKNOWN;
        case 768:
        case "SSL3":
            return Browser_TLSFingerprint_ProtocolVersion.SSL3;
        case 769:
        case "TLS1":
            return Browser_TLSFingerprint_ProtocolVersion.TLS1;
        case 770:
        case "TLS1_1":
            return Browser_TLSFingerprint_ProtocolVersion.TLS1_1;
        case 771:
        case "TLS1_2":
            return Browser_TLSFingerprint_ProtocolVersion.TLS1_2;
        case 772:
        case "TLS1_3":
            return Browser_TLSFingerprint_ProtocolVersion.TLS1_3;
        case 65279:
        case "DTLS1":
            return Browser_TLSFingerprint_ProtocolVersion.DTLS1;
        case 65277:
        case "DTLS1_2":
            return Browser_TLSFingerprint_ProtocolVersion.DTLS1_2;
        case 256:
        case "DTLS1_BAD":
            return Browser_TLSFingerprint_ProtocolVersion.DTLS1_BAD;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Browser_TLSFingerprint_ProtocolVersion.UNRECOGNIZED;
    }
}
exports.browser_TLSFingerprint_ProtocolVersionFromJSON = browser_TLSFingerprint_ProtocolVersionFromJSON;
function browser_TLSFingerprint_ProtocolVersionToJSON(object) {
    switch (object) {
        case Browser_TLSFingerprint_ProtocolVersion.UNKNOWN:
            return "UNKNOWN";
        case Browser_TLSFingerprint_ProtocolVersion.SSL3:
            return "SSL3";
        case Browser_TLSFingerprint_ProtocolVersion.TLS1:
            return "TLS1";
        case Browser_TLSFingerprint_ProtocolVersion.TLS1_1:
            return "TLS1_1";
        case Browser_TLSFingerprint_ProtocolVersion.TLS1_2:
            return "TLS1_2";
        case Browser_TLSFingerprint_ProtocolVersion.TLS1_3:
            return "TLS1_3";
        case Browser_TLSFingerprint_ProtocolVersion.DTLS1:
            return "DTLS1";
        case Browser_TLSFingerprint_ProtocolVersion.DTLS1_2:
            return "DTLS1_2";
        case Browser_TLSFingerprint_ProtocolVersion.DTLS1_BAD:
            return "DTLS1_BAD";
        case Browser_TLSFingerprint_ProtocolVersion.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.browser_TLSFingerprint_ProtocolVersionToJSON = browser_TLSFingerprint_ProtocolVersionToJSON;
/** - TLS cipher-suites: https://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml#tls-parameters-4 */
var Browser_TLSFingerprint_CipherSuite;
(function (Browser_TLSFingerprint_CipherSuite) {
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_NULL_WITH_NULL_NULL"] = 0] = "TLS_NULL_WITH_NULL_NULL";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_NULL_MD5"] = 1] = "TLS_RSA_WITH_NULL_MD5";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_NULL_SHA"] = 2] = "TLS_RSA_WITH_NULL_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_EXPORT_WITH_RC4_40_MD5"] = 3] = "TLS_RSA_EXPORT_WITH_RC4_40_MD5";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_RC4_128_MD5"] = 4] = "TLS_RSA_WITH_RC4_128_MD5";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_RC4_128_SHA"] = 5] = "TLS_RSA_WITH_RC4_128_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_EXPORT_WITH_RC2_CBC_40_MD5"] = 6] = "TLS_RSA_EXPORT_WITH_RC2_CBC_40_MD5";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_IDEA_CBC_SHA"] = 7] = "TLS_RSA_WITH_IDEA_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_EXPORT_WITH_DES40_CBC_SHA"] = 8] = "TLS_RSA_EXPORT_WITH_DES40_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_DES_CBC_SHA"] = 9] = "TLS_RSA_WITH_DES_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_3DES_EDE_CBC_SHA"] = 10] = "TLS_RSA_WITH_3DES_EDE_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_DSS_EXPORT_WITH_DES40_CBC_SHA"] = 11] = "TLS_DH_DSS_EXPORT_WITH_DES40_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_DSS_WITH_DES_CBC_SHA"] = 12] = "TLS_DH_DSS_WITH_DES_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_DSS_WITH_3DES_EDE_CBC_SHA"] = 13] = "TLS_DH_DSS_WITH_3DES_EDE_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_RSA_EXPORT_WITH_DES40_CBC_SHA"] = 14] = "TLS_DH_RSA_EXPORT_WITH_DES40_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_RSA_WITH_DES_CBC_SHA"] = 15] = "TLS_DH_RSA_WITH_DES_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_RSA_WITH_3DES_EDE_CBC_SHA"] = 16] = "TLS_DH_RSA_WITH_3DES_EDE_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_DSS_EXPORT_WITH_DES40_CBC_SHA"] = 17] = "TLS_DHE_DSS_EXPORT_WITH_DES40_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_DSS_WITH_DES_CBC_SHA"] = 18] = "TLS_DHE_DSS_WITH_DES_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA"] = 19] = "TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA"] = 20] = "TLS_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_RSA_WITH_DES_CBC_SHA"] = 21] = "TLS_DHE_RSA_WITH_DES_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_RSA_WITH_3DES_EDE_CBC_SHA"] = 22] = "TLS_DHE_RSA_WITH_3DES_EDE_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_anon_EXPORT_WITH_RC4_40_MD5"] = 23] = "TLS_DH_anon_EXPORT_WITH_RC4_40_MD5";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_anon_WITH_RC4_128_MD5"] = 24] = "TLS_DH_anon_WITH_RC4_128_MD5";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_anon_EXPORT_WITH_DES40_CBC_SHA"] = 25] = "TLS_DH_anon_EXPORT_WITH_DES40_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_anon_WITH_DES_CBC_SHA"] = 26] = "TLS_DH_anon_WITH_DES_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_anon_WITH_3DES_EDE_CBC_SHA"] = 27] = "TLS_DH_anon_WITH_3DES_EDE_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_KRB5_WITH_DES_CBC_SHA"] = 30] = "TLS_KRB5_WITH_DES_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_KRB5_WITH_3DES_EDE_CBC_SHA"] = 31] = "TLS_KRB5_WITH_3DES_EDE_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_KRB5_WITH_RC4_128_SHA"] = 32] = "TLS_KRB5_WITH_RC4_128_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_KRB5_WITH_IDEA_CBC_SHA"] = 33] = "TLS_KRB5_WITH_IDEA_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_KRB5_WITH_DES_CBC_MD5"] = 34] = "TLS_KRB5_WITH_DES_CBC_MD5";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_KRB5_WITH_3DES_EDE_CBC_MD5"] = 35] = "TLS_KRB5_WITH_3DES_EDE_CBC_MD5";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_KRB5_WITH_RC4_128_MD5"] = 36] = "TLS_KRB5_WITH_RC4_128_MD5";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_KRB5_WITH_IDEA_CBC_MD5"] = 37] = "TLS_KRB5_WITH_IDEA_CBC_MD5";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_KRB5_EXPORT_WITH_DES_CBC_40_SHA"] = 38] = "TLS_KRB5_EXPORT_WITH_DES_CBC_40_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_KRB5_EXPORT_WITH_RC2_CBC_40_SHA"] = 39] = "TLS_KRB5_EXPORT_WITH_RC2_CBC_40_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_KRB5_EXPORT_WITH_RC4_40_SHA"] = 40] = "TLS_KRB5_EXPORT_WITH_RC4_40_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_KRB5_EXPORT_WITH_DES_CBC_40_MD5"] = 41] = "TLS_KRB5_EXPORT_WITH_DES_CBC_40_MD5";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_KRB5_EXPORT_WITH_RC2_CBC_40_MD5"] = 42] = "TLS_KRB5_EXPORT_WITH_RC2_CBC_40_MD5";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_KRB5_EXPORT_WITH_RC4_40_MD5"] = 43] = "TLS_KRB5_EXPORT_WITH_RC4_40_MD5";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_PSK_WITH_NULL_SHA"] = 44] = "TLS_PSK_WITH_NULL_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_PSK_WITH_NULL_SHA"] = 45] = "TLS_DHE_PSK_WITH_NULL_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_PSK_WITH_NULL_SHA"] = 46] = "TLS_RSA_PSK_WITH_NULL_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_AES_128_CBC_SHA"] = 47] = "TLS_RSA_WITH_AES_128_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_DSS_WITH_AES_128_CBC_SHA"] = 48] = "TLS_DH_DSS_WITH_AES_128_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_RSA_WITH_AES_128_CBC_SHA"] = 49] = "TLS_DH_RSA_WITH_AES_128_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_DSS_WITH_AES_128_CBC_SHA"] = 50] = "TLS_DHE_DSS_WITH_AES_128_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_RSA_WITH_AES_128_CBC_SHA"] = 51] = "TLS_DHE_RSA_WITH_AES_128_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_anon_WITH_AES_128_CBC_SHA"] = 52] = "TLS_DH_anon_WITH_AES_128_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_AES_256_CBC_SHA"] = 53] = "TLS_RSA_WITH_AES_256_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_DSS_WITH_AES_256_CBC_SHA"] = 54] = "TLS_DH_DSS_WITH_AES_256_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_RSA_WITH_AES_256_CBC_SHA"] = 55] = "TLS_DH_RSA_WITH_AES_256_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_DSS_WITH_AES_256_CBC_SHA"] = 56] = "TLS_DHE_DSS_WITH_AES_256_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_RSA_WITH_AES_256_CBC_SHA"] = 57] = "TLS_DHE_RSA_WITH_AES_256_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_anon_WITH_AES_256_CBC_SHA"] = 58] = "TLS_DH_anon_WITH_AES_256_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_NULL_SHA256"] = 59] = "TLS_RSA_WITH_NULL_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_AES_128_CBC_SHA256"] = 60] = "TLS_RSA_WITH_AES_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_AES_256_CBC_SHA256"] = 61] = "TLS_RSA_WITH_AES_256_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_DSS_WITH_AES_128_CBC_SHA256"] = 62] = "TLS_DH_DSS_WITH_AES_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_RSA_WITH_AES_128_CBC_SHA256"] = 63] = "TLS_DH_RSA_WITH_AES_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_DSS_WITH_AES_128_CBC_SHA256"] = 64] = "TLS_DHE_DSS_WITH_AES_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_CAMELLIA_128_CBC_SHA"] = 65] = "TLS_RSA_WITH_CAMELLIA_128_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_DSS_WITH_CAMELLIA_128_CBC_SHA"] = 66] = "TLS_DH_DSS_WITH_CAMELLIA_128_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_RSA_WITH_CAMELLIA_128_CBC_SHA"] = 67] = "TLS_DH_RSA_WITH_CAMELLIA_128_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA"] = 68] = "TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA"] = 69] = "TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_anon_WITH_CAMELLIA_128_CBC_SHA"] = 70] = "TLS_DH_anon_WITH_CAMELLIA_128_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_RSA_WITH_AES_128_CBC_SHA256"] = 103] = "TLS_DHE_RSA_WITH_AES_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_DSS_WITH_AES_256_CBC_SHA256"] = 104] = "TLS_DH_DSS_WITH_AES_256_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_RSA_WITH_AES_256_CBC_SHA256"] = 105] = "TLS_DH_RSA_WITH_AES_256_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_DSS_WITH_AES_256_CBC_SHA256"] = 106] = "TLS_DHE_DSS_WITH_AES_256_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_RSA_WITH_AES_256_CBC_SHA256"] = 107] = "TLS_DHE_RSA_WITH_AES_256_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_anon_WITH_AES_128_CBC_SHA256"] = 108] = "TLS_DH_anon_WITH_AES_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_anon_WITH_AES_256_CBC_SHA256"] = 109] = "TLS_DH_anon_WITH_AES_256_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_CAMELLIA_256_CBC_SHA"] = 132] = "TLS_RSA_WITH_CAMELLIA_256_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_DSS_WITH_CAMELLIA_256_CBC_SHA"] = 133] = "TLS_DH_DSS_WITH_CAMELLIA_256_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_RSA_WITH_CAMELLIA_256_CBC_SHA"] = 134] = "TLS_DH_RSA_WITH_CAMELLIA_256_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA"] = 135] = "TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA"] = 136] = "TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_anon_WITH_CAMELLIA_256_CBC_SHA"] = 137] = "TLS_DH_anon_WITH_CAMELLIA_256_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_PSK_WITH_RC4_128_SHA"] = 138] = "TLS_PSK_WITH_RC4_128_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_PSK_WITH_3DES_EDE_CBC_SHA"] = 139] = "TLS_PSK_WITH_3DES_EDE_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_PSK_WITH_AES_128_CBC_SHA"] = 140] = "TLS_PSK_WITH_AES_128_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_PSK_WITH_AES_256_CBC_SHA"] = 141] = "TLS_PSK_WITH_AES_256_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_PSK_WITH_RC4_128_SHA"] = 142] = "TLS_DHE_PSK_WITH_RC4_128_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_PSK_WITH_3DES_EDE_CBC_SHA"] = 143] = "TLS_DHE_PSK_WITH_3DES_EDE_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_PSK_WITH_AES_128_CBC_SHA"] = 144] = "TLS_DHE_PSK_WITH_AES_128_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_PSK_WITH_AES_256_CBC_SHA"] = 145] = "TLS_DHE_PSK_WITH_AES_256_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_PSK_WITH_RC4_128_SHA"] = 146] = "TLS_RSA_PSK_WITH_RC4_128_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_PSK_WITH_3DES_EDE_CBC_SHA"] = 147] = "TLS_RSA_PSK_WITH_3DES_EDE_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_PSK_WITH_AES_128_CBC_SHA"] = 148] = "TLS_RSA_PSK_WITH_AES_128_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_PSK_WITH_AES_256_CBC_SHA"] = 149] = "TLS_RSA_PSK_WITH_AES_256_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_SEED_CBC_SHA"] = 150] = "TLS_RSA_WITH_SEED_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_DSS_WITH_SEED_CBC_SHA"] = 151] = "TLS_DH_DSS_WITH_SEED_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_RSA_WITH_SEED_CBC_SHA"] = 152] = "TLS_DH_RSA_WITH_SEED_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_DSS_WITH_SEED_CBC_SHA"] = 153] = "TLS_DHE_DSS_WITH_SEED_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_RSA_WITH_SEED_CBC_SHA"] = 154] = "TLS_DHE_RSA_WITH_SEED_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_anon_WITH_SEED_CBC_SHA"] = 155] = "TLS_DH_anon_WITH_SEED_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_AES_128_GCM_SHA256"] = 156] = "TLS_RSA_WITH_AES_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_AES_256_GCM_SHA384"] = 157] = "TLS_RSA_WITH_AES_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_RSA_WITH_AES_128_GCM_SHA256"] = 158] = "TLS_DHE_RSA_WITH_AES_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_RSA_WITH_AES_256_GCM_SHA384"] = 159] = "TLS_DHE_RSA_WITH_AES_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_RSA_WITH_AES_128_GCM_SHA256"] = 160] = "TLS_DH_RSA_WITH_AES_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_RSA_WITH_AES_256_GCM_SHA384"] = 161] = "TLS_DH_RSA_WITH_AES_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_DSS_WITH_AES_128_GCM_SHA256"] = 162] = "TLS_DHE_DSS_WITH_AES_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_DSS_WITH_AES_256_GCM_SHA384"] = 163] = "TLS_DHE_DSS_WITH_AES_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_DSS_WITH_AES_128_GCM_SHA256"] = 164] = "TLS_DH_DSS_WITH_AES_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_DSS_WITH_AES_256_GCM_SHA384"] = 165] = "TLS_DH_DSS_WITH_AES_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_anon_WITH_AES_128_GCM_SHA256"] = 166] = "TLS_DH_anon_WITH_AES_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_anon_WITH_AES_256_GCM_SHA384"] = 167] = "TLS_DH_anon_WITH_AES_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_PSK_WITH_AES_128_GCM_SHA256"] = 168] = "TLS_PSK_WITH_AES_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_PSK_WITH_AES_256_GCM_SHA384"] = 169] = "TLS_PSK_WITH_AES_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_PSK_WITH_AES_128_GCM_SHA256"] = 170] = "TLS_DHE_PSK_WITH_AES_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_PSK_WITH_AES_256_GCM_SHA384"] = 171] = "TLS_DHE_PSK_WITH_AES_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_PSK_WITH_AES_128_GCM_SHA256"] = 172] = "TLS_RSA_PSK_WITH_AES_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_PSK_WITH_AES_256_GCM_SHA384"] = 173] = "TLS_RSA_PSK_WITH_AES_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_PSK_WITH_AES_128_CBC_SHA256"] = 174] = "TLS_PSK_WITH_AES_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_PSK_WITH_AES_256_CBC_SHA384"] = 175] = "TLS_PSK_WITH_AES_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_PSK_WITH_NULL_SHA256"] = 176] = "TLS_PSK_WITH_NULL_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_PSK_WITH_NULL_SHA384"] = 177] = "TLS_PSK_WITH_NULL_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_PSK_WITH_AES_128_CBC_SHA256"] = 178] = "TLS_DHE_PSK_WITH_AES_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_PSK_WITH_AES_256_CBC_SHA384"] = 179] = "TLS_DHE_PSK_WITH_AES_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_PSK_WITH_NULL_SHA256"] = 180] = "TLS_DHE_PSK_WITH_NULL_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_PSK_WITH_NULL_SHA384"] = 181] = "TLS_DHE_PSK_WITH_NULL_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_PSK_WITH_AES_128_CBC_SHA256"] = 182] = "TLS_RSA_PSK_WITH_AES_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_PSK_WITH_AES_256_CBC_SHA384"] = 183] = "TLS_RSA_PSK_WITH_AES_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_PSK_WITH_NULL_SHA256"] = 184] = "TLS_RSA_PSK_WITH_NULL_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_PSK_WITH_NULL_SHA384"] = 185] = "TLS_RSA_PSK_WITH_NULL_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_CAMELLIA_128_CBC_SHA256"] = 186] = "TLS_RSA_WITH_CAMELLIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_DSS_WITH_CAMELLIA_128_CBC_SHA256"] = 187] = "TLS_DH_DSS_WITH_CAMELLIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_RSA_WITH_CAMELLIA_128_CBC_SHA256"] = 188] = "TLS_DH_RSA_WITH_CAMELLIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA256"] = 189] = "TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA256"] = 190] = "TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_anon_WITH_CAMELLIA_128_CBC_SHA256"] = 191] = "TLS_DH_anon_WITH_CAMELLIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_CAMELLIA_256_CBC_SHA256"] = 192] = "TLS_RSA_WITH_CAMELLIA_256_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_DSS_WITH_CAMELLIA_256_CBC_SHA256"] = 193] = "TLS_DH_DSS_WITH_CAMELLIA_256_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_RSA_WITH_CAMELLIA_256_CBC_SHA256"] = 194] = "TLS_DH_RSA_WITH_CAMELLIA_256_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA256"] = 195] = "TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA256"] = 196] = "TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_anon_WITH_CAMELLIA_256_CBC_SHA256"] = 197] = "TLS_DH_anon_WITH_CAMELLIA_256_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_SM4_GCM_SM3"] = 198] = "TLS_SM4_GCM_SM3";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_SM4_CCM_SM3"] = 199] = "TLS_SM4_CCM_SM3";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_EMPTY_RENEGOTIATION_INFO_SCSV"] = 255] = "TLS_EMPTY_RENEGOTIATION_INFO_SCSV";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["Reserved"] = 2570] = "Reserved";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["Unassigned"] = 4864] = "Unassigned";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_AES_128_GCM_SHA256"] = 4865] = "TLS_AES_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_AES_256_GCM_SHA384"] = 4866] = "TLS_AES_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_CHACHA20_POLY1305_SHA256"] = 4867] = "TLS_CHACHA20_POLY1305_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_AES_128_CCM_SHA256"] = 4868] = "TLS_AES_128_CCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_AES_128_CCM_8_SHA256"] = 4869] = "TLS_AES_128_CCM_8_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_AEGIS_256_SHA384"] = 4870] = "TLS_AEGIS_256_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_AEGIS_128L_SHA256"] = 4871] = "TLS_AEGIS_128L_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_FALLBACK_SCSV"] = 22016] = "TLS_FALLBACK_SCSV";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_ECDSA_WITH_NULL_SHA"] = 49153] = "TLS_ECDH_ECDSA_WITH_NULL_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_ECDSA_WITH_RC4_128_SHA"] = 49154] = "TLS_ECDH_ECDSA_WITH_RC4_128_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_ECDSA_WITH_3DES_EDE_CBC_SHA"] = 49155] = "TLS_ECDH_ECDSA_WITH_3DES_EDE_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA"] = 49156] = "TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA"] = 49157] = "TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_ECDSA_WITH_NULL_SHA"] = 49158] = "TLS_ECDHE_ECDSA_WITH_NULL_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_ECDSA_WITH_RC4_128_SHA"] = 49159] = "TLS_ECDHE_ECDSA_WITH_RC4_128_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA"] = 49160] = "TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA"] = 49161] = "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA"] = 49162] = "TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_RSA_WITH_NULL_SHA"] = 49163] = "TLS_ECDH_RSA_WITH_NULL_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_RSA_WITH_RC4_128_SHA"] = 49164] = "TLS_ECDH_RSA_WITH_RC4_128_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_RSA_WITH_3DES_EDE_CBC_SHA"] = 49165] = "TLS_ECDH_RSA_WITH_3DES_EDE_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_RSA_WITH_AES_128_CBC_SHA"] = 49166] = "TLS_ECDH_RSA_WITH_AES_128_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_RSA_WITH_AES_256_CBC_SHA"] = 49167] = "TLS_ECDH_RSA_WITH_AES_256_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_RSA_WITH_NULL_SHA"] = 49168] = "TLS_ECDHE_RSA_WITH_NULL_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_RSA_WITH_RC4_128_SHA"] = 49169] = "TLS_ECDHE_RSA_WITH_RC4_128_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA"] = 49170] = "TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA"] = 49171] = "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA"] = 49172] = "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_anon_WITH_NULL_SHA"] = 49173] = "TLS_ECDH_anon_WITH_NULL_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_anon_WITH_RC4_128_SHA"] = 49174] = "TLS_ECDH_anon_WITH_RC4_128_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_anon_WITH_3DES_EDE_CBC_SHA"] = 49175] = "TLS_ECDH_anon_WITH_3DES_EDE_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_anon_WITH_AES_128_CBC_SHA"] = 49176] = "TLS_ECDH_anon_WITH_AES_128_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_anon_WITH_AES_256_CBC_SHA"] = 49177] = "TLS_ECDH_anon_WITH_AES_256_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_SRP_SHA_WITH_3DES_EDE_CBC_SHA"] = 49178] = "TLS_SRP_SHA_WITH_3DES_EDE_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_SRP_SHA_RSA_WITH_3DES_EDE_CBC_SHA"] = 49179] = "TLS_SRP_SHA_RSA_WITH_3DES_EDE_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_SRP_SHA_DSS_WITH_3DES_EDE_CBC_SHA"] = 49180] = "TLS_SRP_SHA_DSS_WITH_3DES_EDE_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_SRP_SHA_WITH_AES_128_CBC_SHA"] = 49181] = "TLS_SRP_SHA_WITH_AES_128_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_SRP_SHA_RSA_WITH_AES_128_CBC_SHA"] = 49182] = "TLS_SRP_SHA_RSA_WITH_AES_128_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_SRP_SHA_DSS_WITH_AES_128_CBC_SHA"] = 49183] = "TLS_SRP_SHA_DSS_WITH_AES_128_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_SRP_SHA_WITH_AES_256_CBC_SHA"] = 49184] = "TLS_SRP_SHA_WITH_AES_256_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_SRP_SHA_RSA_WITH_AES_256_CBC_SHA"] = 49185] = "TLS_SRP_SHA_RSA_WITH_AES_256_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_SRP_SHA_DSS_WITH_AES_256_CBC_SHA"] = 49186] = "TLS_SRP_SHA_DSS_WITH_AES_256_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256"] = 49187] = "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384"] = 49188] = "TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256"] = 49189] = "TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384"] = 49190] = "TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256"] = 49191] = "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384"] = 49192] = "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256"] = 49193] = "TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384"] = 49194] = "TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256"] = 49195] = "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384"] = 49196] = "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_ECDSA_WITH_AES_128_GCM_SHA256"] = 49197] = "TLS_ECDH_ECDSA_WITH_AES_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_ECDSA_WITH_AES_256_GCM_SHA384"] = 49198] = "TLS_ECDH_ECDSA_WITH_AES_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256"] = 49199] = "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384"] = 49200] = "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_RSA_WITH_AES_128_GCM_SHA256"] = 49201] = "TLS_ECDH_RSA_WITH_AES_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_RSA_WITH_AES_256_GCM_SHA384"] = 49202] = "TLS_ECDH_RSA_WITH_AES_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_PSK_WITH_RC4_128_SHA"] = 49203] = "TLS_ECDHE_PSK_WITH_RC4_128_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_PSK_WITH_3DES_EDE_CBC_SHA"] = 49204] = "TLS_ECDHE_PSK_WITH_3DES_EDE_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA"] = 49205] = "TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA"] = 49206] = "TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA256"] = 49207] = "TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA384"] = 49208] = "TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_PSK_WITH_NULL_SHA"] = 49209] = "TLS_ECDHE_PSK_WITH_NULL_SHA";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_PSK_WITH_NULL_SHA256"] = 49210] = "TLS_ECDHE_PSK_WITH_NULL_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_PSK_WITH_NULL_SHA384"] = 49211] = "TLS_ECDHE_PSK_WITH_NULL_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_ARIA_128_CBC_SHA256"] = 49212] = "TLS_RSA_WITH_ARIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_ARIA_256_CBC_SHA384"] = 49213] = "TLS_RSA_WITH_ARIA_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_DSS_WITH_ARIA_128_CBC_SHA256"] = 49214] = "TLS_DH_DSS_WITH_ARIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_DSS_WITH_ARIA_256_CBC_SHA384"] = 49215] = "TLS_DH_DSS_WITH_ARIA_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_RSA_WITH_ARIA_128_CBC_SHA256"] = 49216] = "TLS_DH_RSA_WITH_ARIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_RSA_WITH_ARIA_256_CBC_SHA384"] = 49217] = "TLS_DH_RSA_WITH_ARIA_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_DSS_WITH_ARIA_128_CBC_SHA256"] = 49218] = "TLS_DHE_DSS_WITH_ARIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_DSS_WITH_ARIA_256_CBC_SHA384"] = 49219] = "TLS_DHE_DSS_WITH_ARIA_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_RSA_WITH_ARIA_128_CBC_SHA256"] = 49220] = "TLS_DHE_RSA_WITH_ARIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_RSA_WITH_ARIA_256_CBC_SHA384"] = 49221] = "TLS_DHE_RSA_WITH_ARIA_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_anon_WITH_ARIA_128_CBC_SHA256"] = 49222] = "TLS_DH_anon_WITH_ARIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_anon_WITH_ARIA_256_CBC_SHA384"] = 49223] = "TLS_DH_anon_WITH_ARIA_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_ECDSA_WITH_ARIA_128_CBC_SHA256"] = 49224] = "TLS_ECDHE_ECDSA_WITH_ARIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_ECDSA_WITH_ARIA_256_CBC_SHA384"] = 49225] = "TLS_ECDHE_ECDSA_WITH_ARIA_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_ECDSA_WITH_ARIA_128_CBC_SHA256"] = 49226] = "TLS_ECDH_ECDSA_WITH_ARIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_ECDSA_WITH_ARIA_256_CBC_SHA384"] = 49227] = "TLS_ECDH_ECDSA_WITH_ARIA_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_RSA_WITH_ARIA_128_CBC_SHA256"] = 49228] = "TLS_ECDHE_RSA_WITH_ARIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_RSA_WITH_ARIA_256_CBC_SHA384"] = 49229] = "TLS_ECDHE_RSA_WITH_ARIA_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_RSA_WITH_ARIA_128_CBC_SHA256"] = 49230] = "TLS_ECDH_RSA_WITH_ARIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_RSA_WITH_ARIA_256_CBC_SHA384"] = 49231] = "TLS_ECDH_RSA_WITH_ARIA_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_ARIA_128_GCM_SHA256"] = 49232] = "TLS_RSA_WITH_ARIA_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_ARIA_256_GCM_SHA384"] = 49233] = "TLS_RSA_WITH_ARIA_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_RSA_WITH_ARIA_128_GCM_SHA256"] = 49234] = "TLS_DHE_RSA_WITH_ARIA_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_RSA_WITH_ARIA_256_GCM_SHA384"] = 49235] = "TLS_DHE_RSA_WITH_ARIA_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_RSA_WITH_ARIA_128_GCM_SHA256"] = 49236] = "TLS_DH_RSA_WITH_ARIA_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_RSA_WITH_ARIA_256_GCM_SHA384"] = 49237] = "TLS_DH_RSA_WITH_ARIA_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_DSS_WITH_ARIA_128_GCM_SHA256"] = 49238] = "TLS_DHE_DSS_WITH_ARIA_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_DSS_WITH_ARIA_256_GCM_SHA384"] = 49239] = "TLS_DHE_DSS_WITH_ARIA_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_DSS_WITH_ARIA_128_GCM_SHA256"] = 49240] = "TLS_DH_DSS_WITH_ARIA_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_DSS_WITH_ARIA_256_GCM_SHA384"] = 49241] = "TLS_DH_DSS_WITH_ARIA_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_anon_WITH_ARIA_128_GCM_SHA256"] = 49242] = "TLS_DH_anon_WITH_ARIA_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_anon_WITH_ARIA_256_GCM_SHA384"] = 49243] = "TLS_DH_anon_WITH_ARIA_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_ECDSA_WITH_ARIA_128_GCM_SHA256"] = 49244] = "TLS_ECDHE_ECDSA_WITH_ARIA_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_ECDSA_WITH_ARIA_256_GCM_SHA384"] = 49245] = "TLS_ECDHE_ECDSA_WITH_ARIA_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_ECDSA_WITH_ARIA_128_GCM_SHA256"] = 49246] = "TLS_ECDH_ECDSA_WITH_ARIA_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_ECDSA_WITH_ARIA_256_GCM_SHA384"] = 49247] = "TLS_ECDH_ECDSA_WITH_ARIA_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_RSA_WITH_ARIA_128_GCM_SHA256"] = 49248] = "TLS_ECDHE_RSA_WITH_ARIA_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_RSA_WITH_ARIA_256_GCM_SHA384"] = 49249] = "TLS_ECDHE_RSA_WITH_ARIA_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_RSA_WITH_ARIA_128_GCM_SHA256"] = 49250] = "TLS_ECDH_RSA_WITH_ARIA_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_RSA_WITH_ARIA_256_GCM_SHA384"] = 49251] = "TLS_ECDH_RSA_WITH_ARIA_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_PSK_WITH_ARIA_128_CBC_SHA256"] = 49252] = "TLS_PSK_WITH_ARIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_PSK_WITH_ARIA_256_CBC_SHA384"] = 49253] = "TLS_PSK_WITH_ARIA_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_PSK_WITH_ARIA_128_CBC_SHA256"] = 49254] = "TLS_DHE_PSK_WITH_ARIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_PSK_WITH_ARIA_256_CBC_SHA384"] = 49255] = "TLS_DHE_PSK_WITH_ARIA_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_PSK_WITH_ARIA_128_CBC_SHA256"] = 49256] = "TLS_RSA_PSK_WITH_ARIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_PSK_WITH_ARIA_256_CBC_SHA384"] = 49257] = "TLS_RSA_PSK_WITH_ARIA_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_PSK_WITH_ARIA_128_GCM_SHA256"] = 49258] = "TLS_PSK_WITH_ARIA_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_PSK_WITH_ARIA_256_GCM_SHA384"] = 49259] = "TLS_PSK_WITH_ARIA_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_PSK_WITH_ARIA_128_GCM_SHA256"] = 49260] = "TLS_DHE_PSK_WITH_ARIA_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_PSK_WITH_ARIA_256_GCM_SHA384"] = 49261] = "TLS_DHE_PSK_WITH_ARIA_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_PSK_WITH_ARIA_128_GCM_SHA256"] = 49262] = "TLS_RSA_PSK_WITH_ARIA_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_PSK_WITH_ARIA_256_GCM_SHA384"] = 49263] = "TLS_RSA_PSK_WITH_ARIA_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_PSK_WITH_ARIA_128_CBC_SHA256"] = 49264] = "TLS_ECDHE_PSK_WITH_ARIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_PSK_WITH_ARIA_256_CBC_SHA384"] = 49265] = "TLS_ECDHE_PSK_WITH_ARIA_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_ECDSA_WITH_CAMELLIA_128_CBC_SHA256"] = 49266] = "TLS_ECDHE_ECDSA_WITH_CAMELLIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_ECDSA_WITH_CAMELLIA_256_CBC_SHA384"] = 49267] = "TLS_ECDHE_ECDSA_WITH_CAMELLIA_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_ECDSA_WITH_CAMELLIA_128_CBC_SHA256"] = 49268] = "TLS_ECDH_ECDSA_WITH_CAMELLIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_ECDSA_WITH_CAMELLIA_256_CBC_SHA384"] = 49269] = "TLS_ECDH_ECDSA_WITH_CAMELLIA_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_RSA_WITH_CAMELLIA_128_CBC_SHA256"] = 49270] = "TLS_ECDHE_RSA_WITH_CAMELLIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_RSA_WITH_CAMELLIA_256_CBC_SHA384"] = 49271] = "TLS_ECDHE_RSA_WITH_CAMELLIA_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_RSA_WITH_CAMELLIA_128_CBC_SHA256"] = 49272] = "TLS_ECDH_RSA_WITH_CAMELLIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_RSA_WITH_CAMELLIA_256_CBC_SHA384"] = 49273] = "TLS_ECDH_RSA_WITH_CAMELLIA_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_CAMELLIA_128_GCM_SHA256"] = 49274] = "TLS_RSA_WITH_CAMELLIA_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_CAMELLIA_256_GCM_SHA384"] = 49275] = "TLS_RSA_WITH_CAMELLIA_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_RSA_WITH_CAMELLIA_128_GCM_SHA256"] = 49276] = "TLS_DHE_RSA_WITH_CAMELLIA_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_RSA_WITH_CAMELLIA_256_GCM_SHA384"] = 49277] = "TLS_DHE_RSA_WITH_CAMELLIA_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_RSA_WITH_CAMELLIA_128_GCM_SHA256"] = 49278] = "TLS_DH_RSA_WITH_CAMELLIA_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_RSA_WITH_CAMELLIA_256_GCM_SHA384"] = 49279] = "TLS_DH_RSA_WITH_CAMELLIA_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_DSS_WITH_CAMELLIA_128_GCM_SHA256"] = 49280] = "TLS_DHE_DSS_WITH_CAMELLIA_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_DSS_WITH_CAMELLIA_256_GCM_SHA384"] = 49281] = "TLS_DHE_DSS_WITH_CAMELLIA_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_DSS_WITH_CAMELLIA_128_GCM_SHA256"] = 49282] = "TLS_DH_DSS_WITH_CAMELLIA_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_DSS_WITH_CAMELLIA_256_GCM_SHA384"] = 49283] = "TLS_DH_DSS_WITH_CAMELLIA_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_anon_WITH_CAMELLIA_128_GCM_SHA256"] = 49284] = "TLS_DH_anon_WITH_CAMELLIA_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DH_anon_WITH_CAMELLIA_256_GCM_SHA384"] = 49285] = "TLS_DH_anon_WITH_CAMELLIA_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_ECDSA_WITH_CAMELLIA_128_GCM_SHA256"] = 49286] = "TLS_ECDHE_ECDSA_WITH_CAMELLIA_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_ECDSA_WITH_CAMELLIA_256_GCM_SHA384"] = 49287] = "TLS_ECDHE_ECDSA_WITH_CAMELLIA_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_ECDSA_WITH_CAMELLIA_128_GCM_SHA256"] = 49288] = "TLS_ECDH_ECDSA_WITH_CAMELLIA_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_ECDSA_WITH_CAMELLIA_256_GCM_SHA384"] = 49289] = "TLS_ECDH_ECDSA_WITH_CAMELLIA_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_RSA_WITH_CAMELLIA_128_GCM_SHA256"] = 49290] = "TLS_ECDHE_RSA_WITH_CAMELLIA_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_RSA_WITH_CAMELLIA_256_GCM_SHA384"] = 49291] = "TLS_ECDHE_RSA_WITH_CAMELLIA_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_RSA_WITH_CAMELLIA_128_GCM_SHA256"] = 49292] = "TLS_ECDH_RSA_WITH_CAMELLIA_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDH_RSA_WITH_CAMELLIA_256_GCM_SHA384"] = 49293] = "TLS_ECDH_RSA_WITH_CAMELLIA_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_PSK_WITH_CAMELLIA_128_GCM_SHA256"] = 49294] = "TLS_PSK_WITH_CAMELLIA_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_PSK_WITH_CAMELLIA_256_GCM_SHA384"] = 49295] = "TLS_PSK_WITH_CAMELLIA_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_PSK_WITH_CAMELLIA_128_GCM_SHA256"] = 49296] = "TLS_DHE_PSK_WITH_CAMELLIA_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_PSK_WITH_CAMELLIA_256_GCM_SHA384"] = 49297] = "TLS_DHE_PSK_WITH_CAMELLIA_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_PSK_WITH_CAMELLIA_128_GCM_SHA256"] = 49298] = "TLS_RSA_PSK_WITH_CAMELLIA_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_PSK_WITH_CAMELLIA_256_GCM_SHA384"] = 49299] = "TLS_RSA_PSK_WITH_CAMELLIA_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_PSK_WITH_CAMELLIA_128_CBC_SHA256"] = 49300] = "TLS_PSK_WITH_CAMELLIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_PSK_WITH_CAMELLIA_256_CBC_SHA384"] = 49301] = "TLS_PSK_WITH_CAMELLIA_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_PSK_WITH_CAMELLIA_128_CBC_SHA256"] = 49302] = "TLS_DHE_PSK_WITH_CAMELLIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_PSK_WITH_CAMELLIA_256_CBC_SHA384"] = 49303] = "TLS_DHE_PSK_WITH_CAMELLIA_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_PSK_WITH_CAMELLIA_128_CBC_SHA256"] = 49304] = "TLS_RSA_PSK_WITH_CAMELLIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_PSK_WITH_CAMELLIA_256_CBC_SHA384"] = 49305] = "TLS_RSA_PSK_WITH_CAMELLIA_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_PSK_WITH_CAMELLIA_128_CBC_SHA256"] = 49306] = "TLS_ECDHE_PSK_WITH_CAMELLIA_128_CBC_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_PSK_WITH_CAMELLIA_256_CBC_SHA384"] = 49307] = "TLS_ECDHE_PSK_WITH_CAMELLIA_256_CBC_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_AES_128_CCM"] = 49308] = "TLS_RSA_WITH_AES_128_CCM";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_AES_256_CCM"] = 49309] = "TLS_RSA_WITH_AES_256_CCM";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_RSA_WITH_AES_128_CCM"] = 49310] = "TLS_DHE_RSA_WITH_AES_128_CCM";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_RSA_WITH_AES_256_CCM"] = 49311] = "TLS_DHE_RSA_WITH_AES_256_CCM";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_AES_128_CCM_8"] = 49312] = "TLS_RSA_WITH_AES_128_CCM_8";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_WITH_AES_256_CCM_8"] = 49313] = "TLS_RSA_WITH_AES_256_CCM_8";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_RSA_WITH_AES_128_CCM_8"] = 49314] = "TLS_DHE_RSA_WITH_AES_128_CCM_8";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_RSA_WITH_AES_256_CCM_8"] = 49315] = "TLS_DHE_RSA_WITH_AES_256_CCM_8";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_PSK_WITH_AES_128_CCM"] = 49316] = "TLS_PSK_WITH_AES_128_CCM";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_PSK_WITH_AES_256_CCM"] = 49317] = "TLS_PSK_WITH_AES_256_CCM";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_PSK_WITH_AES_128_CCM"] = 49318] = "TLS_DHE_PSK_WITH_AES_128_CCM";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_PSK_WITH_AES_256_CCM"] = 49319] = "TLS_DHE_PSK_WITH_AES_256_CCM";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_PSK_WITH_AES_128_CCM_8"] = 49320] = "TLS_PSK_WITH_AES_128_CCM_8";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_PSK_WITH_AES_256_CCM_8"] = 49321] = "TLS_PSK_WITH_AES_256_CCM_8";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_PSK_DHE_WITH_AES_128_CCM_8"] = 49322] = "TLS_PSK_DHE_WITH_AES_128_CCM_8";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_PSK_DHE_WITH_AES_256_CCM_8"] = 49323] = "TLS_PSK_DHE_WITH_AES_256_CCM_8";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_ECDSA_WITH_AES_128_CCM"] = 49324] = "TLS_ECDHE_ECDSA_WITH_AES_128_CCM";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_ECDSA_WITH_AES_256_CCM"] = 49325] = "TLS_ECDHE_ECDSA_WITH_AES_256_CCM";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8"] = 49326] = "TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_ECDSA_WITH_AES_256_CCM_8"] = 49327] = "TLS_ECDHE_ECDSA_WITH_AES_256_CCM_8";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECCPWD_WITH_AES_128_GCM_SHA256"] = 49328] = "TLS_ECCPWD_WITH_AES_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECCPWD_WITH_AES_256_GCM_SHA384"] = 49329] = "TLS_ECCPWD_WITH_AES_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECCPWD_WITH_AES_128_CCM_SHA256"] = 49330] = "TLS_ECCPWD_WITH_AES_128_CCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECCPWD_WITH_AES_256_CCM_SHA384"] = 49331] = "TLS_ECCPWD_WITH_AES_256_CCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_SHA256_SHA256"] = 49332] = "TLS_SHA256_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_SHA384_SHA384"] = 49333] = "TLS_SHA384_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_GOSTR341112_256_WITH_KUZNYECHIK_CTR_OMAC"] = 49408] = "TLS_GOSTR341112_256_WITH_KUZNYECHIK_CTR_OMAC";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_GOSTR341112_256_WITH_MAGMA_CTR_OMAC"] = 49409] = "TLS_GOSTR341112_256_WITH_MAGMA_CTR_OMAC";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_GOSTR341112_256_WITH_28147_CNT_IMIT"] = 49410] = "TLS_GOSTR341112_256_WITH_28147_CNT_IMIT";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_GOSTR341112_256_WITH_KUZNYECHIK_MGM_L"] = 49411] = "TLS_GOSTR341112_256_WITH_KUZNYECHIK_MGM_L";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_GOSTR341112_256_WITH_MAGMA_MGM_L"] = 49412] = "TLS_GOSTR341112_256_WITH_MAGMA_MGM_L";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_GOSTR341112_256_WITH_KUZNYECHIK_MGM_S"] = 49413] = "TLS_GOSTR341112_256_WITH_KUZNYECHIK_MGM_S";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_GOSTR341112_256_WITH_MAGMA_MGM_S"] = 49414] = "TLS_GOSTR341112_256_WITH_MAGMA_MGM_S";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256"] = 52392] = "TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256"] = 52393] = "TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256"] = 52394] = "TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_PSK_WITH_CHACHA20_POLY1305_SHA256"] = 52395] = "TLS_PSK_WITH_CHACHA20_POLY1305_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_PSK_WITH_CHACHA20_POLY1305_SHA256"] = 52396] = "TLS_ECDHE_PSK_WITH_CHACHA20_POLY1305_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_DHE_PSK_WITH_CHACHA20_POLY1305_SHA256"] = 52397] = "TLS_DHE_PSK_WITH_CHACHA20_POLY1305_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_RSA_PSK_WITH_CHACHA20_POLY1305_SHA256"] = 52398] = "TLS_RSA_PSK_WITH_CHACHA20_POLY1305_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_PSK_WITH_AES_128_GCM_SHA256"] = 53249] = "TLS_ECDHE_PSK_WITH_AES_128_GCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_PSK_WITH_AES_256_GCM_SHA384"] = 53250] = "TLS_ECDHE_PSK_WITH_AES_256_GCM_SHA384";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_PSK_WITH_AES_128_CCM_8_SHA256"] = 53251] = "TLS_ECDHE_PSK_WITH_AES_128_CCM_8_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["TLS_ECDHE_PSK_WITH_AES_128_CCM_SHA256"] = 53253] = "TLS_ECDHE_PSK_WITH_AES_128_CCM_SHA256";
    Browser_TLSFingerprint_CipherSuite[Browser_TLSFingerprint_CipherSuite["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Browser_TLSFingerprint_CipherSuite = exports.Browser_TLSFingerprint_CipherSuite || (exports.Browser_TLSFingerprint_CipherSuite = {}));
function browser_TLSFingerprint_CipherSuiteFromJSON(object) {
    switch (object) {
        case 0:
        case "TLS_NULL_WITH_NULL_NULL":
            return Browser_TLSFingerprint_CipherSuite.TLS_NULL_WITH_NULL_NULL;
        case 1:
        case "TLS_RSA_WITH_NULL_MD5":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_NULL_MD5;
        case 2:
        case "TLS_RSA_WITH_NULL_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_NULL_SHA;
        case 3:
        case "TLS_RSA_EXPORT_WITH_RC4_40_MD5":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_EXPORT_WITH_RC4_40_MD5;
        case 4:
        case "TLS_RSA_WITH_RC4_128_MD5":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_RC4_128_MD5;
        case 5:
        case "TLS_RSA_WITH_RC4_128_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_RC4_128_SHA;
        case 6:
        case "TLS_RSA_EXPORT_WITH_RC2_CBC_40_MD5":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_EXPORT_WITH_RC2_CBC_40_MD5;
        case 7:
        case "TLS_RSA_WITH_IDEA_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_IDEA_CBC_SHA;
        case 8:
        case "TLS_RSA_EXPORT_WITH_DES40_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_EXPORT_WITH_DES40_CBC_SHA;
        case 9:
        case "TLS_RSA_WITH_DES_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_DES_CBC_SHA;
        case 10:
        case "TLS_RSA_WITH_3DES_EDE_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_3DES_EDE_CBC_SHA;
        case 11:
        case "TLS_DH_DSS_EXPORT_WITH_DES40_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_EXPORT_WITH_DES40_CBC_SHA;
        case 12:
        case "TLS_DH_DSS_WITH_DES_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_DES_CBC_SHA;
        case 13:
        case "TLS_DH_DSS_WITH_3DES_EDE_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_3DES_EDE_CBC_SHA;
        case 14:
        case "TLS_DH_RSA_EXPORT_WITH_DES40_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_EXPORT_WITH_DES40_CBC_SHA;
        case 15:
        case "TLS_DH_RSA_WITH_DES_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_DES_CBC_SHA;
        case 16:
        case "TLS_DH_RSA_WITH_3DES_EDE_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_3DES_EDE_CBC_SHA;
        case 17:
        case "TLS_DHE_DSS_EXPORT_WITH_DES40_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_EXPORT_WITH_DES40_CBC_SHA;
        case 18:
        case "TLS_DHE_DSS_WITH_DES_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_DES_CBC_SHA;
        case 19:
        case "TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA;
        case 20:
        case "TLS_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA;
        case 21:
        case "TLS_DHE_RSA_WITH_DES_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_DES_CBC_SHA;
        case 22:
        case "TLS_DHE_RSA_WITH_3DES_EDE_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_3DES_EDE_CBC_SHA;
        case 23:
        case "TLS_DH_anon_EXPORT_WITH_RC4_40_MD5":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_EXPORT_WITH_RC4_40_MD5;
        case 24:
        case "TLS_DH_anon_WITH_RC4_128_MD5":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_RC4_128_MD5;
        case 25:
        case "TLS_DH_anon_EXPORT_WITH_DES40_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_EXPORT_WITH_DES40_CBC_SHA;
        case 26:
        case "TLS_DH_anon_WITH_DES_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_DES_CBC_SHA;
        case 27:
        case "TLS_DH_anon_WITH_3DES_EDE_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_3DES_EDE_CBC_SHA;
        case 30:
        case "TLS_KRB5_WITH_DES_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_KRB5_WITH_DES_CBC_SHA;
        case 31:
        case "TLS_KRB5_WITH_3DES_EDE_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_KRB5_WITH_3DES_EDE_CBC_SHA;
        case 32:
        case "TLS_KRB5_WITH_RC4_128_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_KRB5_WITH_RC4_128_SHA;
        case 33:
        case "TLS_KRB5_WITH_IDEA_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_KRB5_WITH_IDEA_CBC_SHA;
        case 34:
        case "TLS_KRB5_WITH_DES_CBC_MD5":
            return Browser_TLSFingerprint_CipherSuite.TLS_KRB5_WITH_DES_CBC_MD5;
        case 35:
        case "TLS_KRB5_WITH_3DES_EDE_CBC_MD5":
            return Browser_TLSFingerprint_CipherSuite.TLS_KRB5_WITH_3DES_EDE_CBC_MD5;
        case 36:
        case "TLS_KRB5_WITH_RC4_128_MD5":
            return Browser_TLSFingerprint_CipherSuite.TLS_KRB5_WITH_RC4_128_MD5;
        case 37:
        case "TLS_KRB5_WITH_IDEA_CBC_MD5":
            return Browser_TLSFingerprint_CipherSuite.TLS_KRB5_WITH_IDEA_CBC_MD5;
        case 38:
        case "TLS_KRB5_EXPORT_WITH_DES_CBC_40_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_KRB5_EXPORT_WITH_DES_CBC_40_SHA;
        case 39:
        case "TLS_KRB5_EXPORT_WITH_RC2_CBC_40_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_KRB5_EXPORT_WITH_RC2_CBC_40_SHA;
        case 40:
        case "TLS_KRB5_EXPORT_WITH_RC4_40_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_KRB5_EXPORT_WITH_RC4_40_SHA;
        case 41:
        case "TLS_KRB5_EXPORT_WITH_DES_CBC_40_MD5":
            return Browser_TLSFingerprint_CipherSuite.TLS_KRB5_EXPORT_WITH_DES_CBC_40_MD5;
        case 42:
        case "TLS_KRB5_EXPORT_WITH_RC2_CBC_40_MD5":
            return Browser_TLSFingerprint_CipherSuite.TLS_KRB5_EXPORT_WITH_RC2_CBC_40_MD5;
        case 43:
        case "TLS_KRB5_EXPORT_WITH_RC4_40_MD5":
            return Browser_TLSFingerprint_CipherSuite.TLS_KRB5_EXPORT_WITH_RC4_40_MD5;
        case 44:
        case "TLS_PSK_WITH_NULL_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_NULL_SHA;
        case 45:
        case "TLS_DHE_PSK_WITH_NULL_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_NULL_SHA;
        case 46:
        case "TLS_RSA_PSK_WITH_NULL_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_NULL_SHA;
        case 47:
        case "TLS_RSA_WITH_AES_128_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_AES_128_CBC_SHA;
        case 48:
        case "TLS_DH_DSS_WITH_AES_128_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_AES_128_CBC_SHA;
        case 49:
        case "TLS_DH_RSA_WITH_AES_128_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_AES_128_CBC_SHA;
        case 50:
        case "TLS_DHE_DSS_WITH_AES_128_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_AES_128_CBC_SHA;
        case 51:
        case "TLS_DHE_RSA_WITH_AES_128_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_AES_128_CBC_SHA;
        case 52:
        case "TLS_DH_anon_WITH_AES_128_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_AES_128_CBC_SHA;
        case 53:
        case "TLS_RSA_WITH_AES_256_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_AES_256_CBC_SHA;
        case 54:
        case "TLS_DH_DSS_WITH_AES_256_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_AES_256_CBC_SHA;
        case 55:
        case "TLS_DH_RSA_WITH_AES_256_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_AES_256_CBC_SHA;
        case 56:
        case "TLS_DHE_DSS_WITH_AES_256_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_AES_256_CBC_SHA;
        case 57:
        case "TLS_DHE_RSA_WITH_AES_256_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_AES_256_CBC_SHA;
        case 58:
        case "TLS_DH_anon_WITH_AES_256_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_AES_256_CBC_SHA;
        case 59:
        case "TLS_RSA_WITH_NULL_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_NULL_SHA256;
        case 60:
        case "TLS_RSA_WITH_AES_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_AES_128_CBC_SHA256;
        case 61:
        case "TLS_RSA_WITH_AES_256_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_AES_256_CBC_SHA256;
        case 62:
        case "TLS_DH_DSS_WITH_AES_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_AES_128_CBC_SHA256;
        case 63:
        case "TLS_DH_RSA_WITH_AES_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_AES_128_CBC_SHA256;
        case 64:
        case "TLS_DHE_DSS_WITH_AES_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_AES_128_CBC_SHA256;
        case 65:
        case "TLS_RSA_WITH_CAMELLIA_128_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_CAMELLIA_128_CBC_SHA;
        case 66:
        case "TLS_DH_DSS_WITH_CAMELLIA_128_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_CAMELLIA_128_CBC_SHA;
        case 67:
        case "TLS_DH_RSA_WITH_CAMELLIA_128_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_CAMELLIA_128_CBC_SHA;
        case 68:
        case "TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA;
        case 69:
        case "TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA;
        case 70:
        case "TLS_DH_anon_WITH_CAMELLIA_128_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_CAMELLIA_128_CBC_SHA;
        case 103:
        case "TLS_DHE_RSA_WITH_AES_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_AES_128_CBC_SHA256;
        case 104:
        case "TLS_DH_DSS_WITH_AES_256_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_AES_256_CBC_SHA256;
        case 105:
        case "TLS_DH_RSA_WITH_AES_256_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_AES_256_CBC_SHA256;
        case 106:
        case "TLS_DHE_DSS_WITH_AES_256_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_AES_256_CBC_SHA256;
        case 107:
        case "TLS_DHE_RSA_WITH_AES_256_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_AES_256_CBC_SHA256;
        case 108:
        case "TLS_DH_anon_WITH_AES_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_AES_128_CBC_SHA256;
        case 109:
        case "TLS_DH_anon_WITH_AES_256_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_AES_256_CBC_SHA256;
        case 132:
        case "TLS_RSA_WITH_CAMELLIA_256_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_CAMELLIA_256_CBC_SHA;
        case 133:
        case "TLS_DH_DSS_WITH_CAMELLIA_256_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_CAMELLIA_256_CBC_SHA;
        case 134:
        case "TLS_DH_RSA_WITH_CAMELLIA_256_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_CAMELLIA_256_CBC_SHA;
        case 135:
        case "TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA;
        case 136:
        case "TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA;
        case 137:
        case "TLS_DH_anon_WITH_CAMELLIA_256_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_CAMELLIA_256_CBC_SHA;
        case 138:
        case "TLS_PSK_WITH_RC4_128_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_RC4_128_SHA;
        case 139:
        case "TLS_PSK_WITH_3DES_EDE_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_3DES_EDE_CBC_SHA;
        case 140:
        case "TLS_PSK_WITH_AES_128_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_AES_128_CBC_SHA;
        case 141:
        case "TLS_PSK_WITH_AES_256_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_AES_256_CBC_SHA;
        case 142:
        case "TLS_DHE_PSK_WITH_RC4_128_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_RC4_128_SHA;
        case 143:
        case "TLS_DHE_PSK_WITH_3DES_EDE_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_3DES_EDE_CBC_SHA;
        case 144:
        case "TLS_DHE_PSK_WITH_AES_128_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_AES_128_CBC_SHA;
        case 145:
        case "TLS_DHE_PSK_WITH_AES_256_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_AES_256_CBC_SHA;
        case 146:
        case "TLS_RSA_PSK_WITH_RC4_128_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_RC4_128_SHA;
        case 147:
        case "TLS_RSA_PSK_WITH_3DES_EDE_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_3DES_EDE_CBC_SHA;
        case 148:
        case "TLS_RSA_PSK_WITH_AES_128_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_AES_128_CBC_SHA;
        case 149:
        case "TLS_RSA_PSK_WITH_AES_256_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_AES_256_CBC_SHA;
        case 150:
        case "TLS_RSA_WITH_SEED_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_SEED_CBC_SHA;
        case 151:
        case "TLS_DH_DSS_WITH_SEED_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_SEED_CBC_SHA;
        case 152:
        case "TLS_DH_RSA_WITH_SEED_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_SEED_CBC_SHA;
        case 153:
        case "TLS_DHE_DSS_WITH_SEED_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_SEED_CBC_SHA;
        case 154:
        case "TLS_DHE_RSA_WITH_SEED_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_SEED_CBC_SHA;
        case 155:
        case "TLS_DH_anon_WITH_SEED_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_SEED_CBC_SHA;
        case 156:
        case "TLS_RSA_WITH_AES_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_AES_128_GCM_SHA256;
        case 157:
        case "TLS_RSA_WITH_AES_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_AES_256_GCM_SHA384;
        case 158:
        case "TLS_DHE_RSA_WITH_AES_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_AES_128_GCM_SHA256;
        case 159:
        case "TLS_DHE_RSA_WITH_AES_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_AES_256_GCM_SHA384;
        case 160:
        case "TLS_DH_RSA_WITH_AES_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_AES_128_GCM_SHA256;
        case 161:
        case "TLS_DH_RSA_WITH_AES_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_AES_256_GCM_SHA384;
        case 162:
        case "TLS_DHE_DSS_WITH_AES_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_AES_128_GCM_SHA256;
        case 163:
        case "TLS_DHE_DSS_WITH_AES_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_AES_256_GCM_SHA384;
        case 164:
        case "TLS_DH_DSS_WITH_AES_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_AES_128_GCM_SHA256;
        case 165:
        case "TLS_DH_DSS_WITH_AES_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_AES_256_GCM_SHA384;
        case 166:
        case "TLS_DH_anon_WITH_AES_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_AES_128_GCM_SHA256;
        case 167:
        case "TLS_DH_anon_WITH_AES_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_AES_256_GCM_SHA384;
        case 168:
        case "TLS_PSK_WITH_AES_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_AES_128_GCM_SHA256;
        case 169:
        case "TLS_PSK_WITH_AES_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_AES_256_GCM_SHA384;
        case 170:
        case "TLS_DHE_PSK_WITH_AES_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_AES_128_GCM_SHA256;
        case 171:
        case "TLS_DHE_PSK_WITH_AES_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_AES_256_GCM_SHA384;
        case 172:
        case "TLS_RSA_PSK_WITH_AES_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_AES_128_GCM_SHA256;
        case 173:
        case "TLS_RSA_PSK_WITH_AES_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_AES_256_GCM_SHA384;
        case 174:
        case "TLS_PSK_WITH_AES_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_AES_128_CBC_SHA256;
        case 175:
        case "TLS_PSK_WITH_AES_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_AES_256_CBC_SHA384;
        case 176:
        case "TLS_PSK_WITH_NULL_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_NULL_SHA256;
        case 177:
        case "TLS_PSK_WITH_NULL_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_NULL_SHA384;
        case 178:
        case "TLS_DHE_PSK_WITH_AES_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_AES_128_CBC_SHA256;
        case 179:
        case "TLS_DHE_PSK_WITH_AES_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_AES_256_CBC_SHA384;
        case 180:
        case "TLS_DHE_PSK_WITH_NULL_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_NULL_SHA256;
        case 181:
        case "TLS_DHE_PSK_WITH_NULL_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_NULL_SHA384;
        case 182:
        case "TLS_RSA_PSK_WITH_AES_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_AES_128_CBC_SHA256;
        case 183:
        case "TLS_RSA_PSK_WITH_AES_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_AES_256_CBC_SHA384;
        case 184:
        case "TLS_RSA_PSK_WITH_NULL_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_NULL_SHA256;
        case 185:
        case "TLS_RSA_PSK_WITH_NULL_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_NULL_SHA384;
        case 186:
        case "TLS_RSA_WITH_CAMELLIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_CAMELLIA_128_CBC_SHA256;
        case 187:
        case "TLS_DH_DSS_WITH_CAMELLIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_CAMELLIA_128_CBC_SHA256;
        case 188:
        case "TLS_DH_RSA_WITH_CAMELLIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_CAMELLIA_128_CBC_SHA256;
        case 189:
        case "TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA256;
        case 190:
        case "TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA256;
        case 191:
        case "TLS_DH_anon_WITH_CAMELLIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_CAMELLIA_128_CBC_SHA256;
        case 192:
        case "TLS_RSA_WITH_CAMELLIA_256_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_CAMELLIA_256_CBC_SHA256;
        case 193:
        case "TLS_DH_DSS_WITH_CAMELLIA_256_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_CAMELLIA_256_CBC_SHA256;
        case 194:
        case "TLS_DH_RSA_WITH_CAMELLIA_256_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_CAMELLIA_256_CBC_SHA256;
        case 195:
        case "TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA256;
        case 196:
        case "TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA256;
        case 197:
        case "TLS_DH_anon_WITH_CAMELLIA_256_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_CAMELLIA_256_CBC_SHA256;
        case 198:
        case "TLS_SM4_GCM_SM3":
            return Browser_TLSFingerprint_CipherSuite.TLS_SM4_GCM_SM3;
        case 199:
        case "TLS_SM4_CCM_SM3":
            return Browser_TLSFingerprint_CipherSuite.TLS_SM4_CCM_SM3;
        case 255:
        case "TLS_EMPTY_RENEGOTIATION_INFO_SCSV":
            return Browser_TLSFingerprint_CipherSuite.TLS_EMPTY_RENEGOTIATION_INFO_SCSV;
        case 2570:
        case "Reserved":
            return Browser_TLSFingerprint_CipherSuite.Reserved;
        case 4864:
        case "Unassigned":
            return Browser_TLSFingerprint_CipherSuite.Unassigned;
        case 4865:
        case "TLS_AES_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_AES_128_GCM_SHA256;
        case 4866:
        case "TLS_AES_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_AES_256_GCM_SHA384;
        case 4867:
        case "TLS_CHACHA20_POLY1305_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_CHACHA20_POLY1305_SHA256;
        case 4868:
        case "TLS_AES_128_CCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_AES_128_CCM_SHA256;
        case 4869:
        case "TLS_AES_128_CCM_8_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_AES_128_CCM_8_SHA256;
        case 4870:
        case "TLS_AEGIS_256_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_AEGIS_256_SHA384;
        case 4871:
        case "TLS_AEGIS_128L_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_AEGIS_128L_SHA256;
        case 22016:
        case "TLS_FALLBACK_SCSV":
            return Browser_TLSFingerprint_CipherSuite.TLS_FALLBACK_SCSV;
        case 49153:
        case "TLS_ECDH_ECDSA_WITH_NULL_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_NULL_SHA;
        case 49154:
        case "TLS_ECDH_ECDSA_WITH_RC4_128_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_RC4_128_SHA;
        case 49155:
        case "TLS_ECDH_ECDSA_WITH_3DES_EDE_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_3DES_EDE_CBC_SHA;
        case 49156:
        case "TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA;
        case 49157:
        case "TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA;
        case 49158:
        case "TLS_ECDHE_ECDSA_WITH_NULL_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_NULL_SHA;
        case 49159:
        case "TLS_ECDHE_ECDSA_WITH_RC4_128_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_RC4_128_SHA;
        case 49160:
        case "TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA;
        case 49161:
        case "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA;
        case 49162:
        case "TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA;
        case 49163:
        case "TLS_ECDH_RSA_WITH_NULL_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_NULL_SHA;
        case 49164:
        case "TLS_ECDH_RSA_WITH_RC4_128_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_RC4_128_SHA;
        case 49165:
        case "TLS_ECDH_RSA_WITH_3DES_EDE_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_3DES_EDE_CBC_SHA;
        case 49166:
        case "TLS_ECDH_RSA_WITH_AES_128_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_AES_128_CBC_SHA;
        case 49167:
        case "TLS_ECDH_RSA_WITH_AES_256_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_AES_256_CBC_SHA;
        case 49168:
        case "TLS_ECDHE_RSA_WITH_NULL_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_NULL_SHA;
        case 49169:
        case "TLS_ECDHE_RSA_WITH_RC4_128_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_RC4_128_SHA;
        case 49170:
        case "TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA;
        case 49171:
        case "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA;
        case 49172:
        case "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA;
        case 49173:
        case "TLS_ECDH_anon_WITH_NULL_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_anon_WITH_NULL_SHA;
        case 49174:
        case "TLS_ECDH_anon_WITH_RC4_128_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_anon_WITH_RC4_128_SHA;
        case 49175:
        case "TLS_ECDH_anon_WITH_3DES_EDE_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_anon_WITH_3DES_EDE_CBC_SHA;
        case 49176:
        case "TLS_ECDH_anon_WITH_AES_128_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_anon_WITH_AES_128_CBC_SHA;
        case 49177:
        case "TLS_ECDH_anon_WITH_AES_256_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_anon_WITH_AES_256_CBC_SHA;
        case 49178:
        case "TLS_SRP_SHA_WITH_3DES_EDE_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_SRP_SHA_WITH_3DES_EDE_CBC_SHA;
        case 49179:
        case "TLS_SRP_SHA_RSA_WITH_3DES_EDE_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_SRP_SHA_RSA_WITH_3DES_EDE_CBC_SHA;
        case 49180:
        case "TLS_SRP_SHA_DSS_WITH_3DES_EDE_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_SRP_SHA_DSS_WITH_3DES_EDE_CBC_SHA;
        case 49181:
        case "TLS_SRP_SHA_WITH_AES_128_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_SRP_SHA_WITH_AES_128_CBC_SHA;
        case 49182:
        case "TLS_SRP_SHA_RSA_WITH_AES_128_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_SRP_SHA_RSA_WITH_AES_128_CBC_SHA;
        case 49183:
        case "TLS_SRP_SHA_DSS_WITH_AES_128_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_SRP_SHA_DSS_WITH_AES_128_CBC_SHA;
        case 49184:
        case "TLS_SRP_SHA_WITH_AES_256_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_SRP_SHA_WITH_AES_256_CBC_SHA;
        case 49185:
        case "TLS_SRP_SHA_RSA_WITH_AES_256_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_SRP_SHA_RSA_WITH_AES_256_CBC_SHA;
        case 49186:
        case "TLS_SRP_SHA_DSS_WITH_AES_256_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_SRP_SHA_DSS_WITH_AES_256_CBC_SHA;
        case 49187:
        case "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256;
        case 49188:
        case "TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384;
        case 49189:
        case "TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256;
        case 49190:
        case "TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384;
        case 49191:
        case "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256;
        case 49192:
        case "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384;
        case 49193:
        case "TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256;
        case 49194:
        case "TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384;
        case 49195:
        case "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256;
        case 49196:
        case "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384;
        case 49197:
        case "TLS_ECDH_ECDSA_WITH_AES_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_AES_128_GCM_SHA256;
        case 49198:
        case "TLS_ECDH_ECDSA_WITH_AES_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_AES_256_GCM_SHA384;
        case 49199:
        case "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256;
        case 49200:
        case "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384;
        case 49201:
        case "TLS_ECDH_RSA_WITH_AES_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_AES_128_GCM_SHA256;
        case 49202:
        case "TLS_ECDH_RSA_WITH_AES_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_AES_256_GCM_SHA384;
        case 49203:
        case "TLS_ECDHE_PSK_WITH_RC4_128_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_RC4_128_SHA;
        case 49204:
        case "TLS_ECDHE_PSK_WITH_3DES_EDE_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_3DES_EDE_CBC_SHA;
        case 49205:
        case "TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA;
        case 49206:
        case "TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA;
        case 49207:
        case "TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA256;
        case 49208:
        case "TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA384;
        case 49209:
        case "TLS_ECDHE_PSK_WITH_NULL_SHA":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_NULL_SHA;
        case 49210:
        case "TLS_ECDHE_PSK_WITH_NULL_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_NULL_SHA256;
        case 49211:
        case "TLS_ECDHE_PSK_WITH_NULL_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_NULL_SHA384;
        case 49212:
        case "TLS_RSA_WITH_ARIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_ARIA_128_CBC_SHA256;
        case 49213:
        case "TLS_RSA_WITH_ARIA_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_ARIA_256_CBC_SHA384;
        case 49214:
        case "TLS_DH_DSS_WITH_ARIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_ARIA_128_CBC_SHA256;
        case 49215:
        case "TLS_DH_DSS_WITH_ARIA_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_ARIA_256_CBC_SHA384;
        case 49216:
        case "TLS_DH_RSA_WITH_ARIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_ARIA_128_CBC_SHA256;
        case 49217:
        case "TLS_DH_RSA_WITH_ARIA_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_ARIA_256_CBC_SHA384;
        case 49218:
        case "TLS_DHE_DSS_WITH_ARIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_ARIA_128_CBC_SHA256;
        case 49219:
        case "TLS_DHE_DSS_WITH_ARIA_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_ARIA_256_CBC_SHA384;
        case 49220:
        case "TLS_DHE_RSA_WITH_ARIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_ARIA_128_CBC_SHA256;
        case 49221:
        case "TLS_DHE_RSA_WITH_ARIA_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_ARIA_256_CBC_SHA384;
        case 49222:
        case "TLS_DH_anon_WITH_ARIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_ARIA_128_CBC_SHA256;
        case 49223:
        case "TLS_DH_anon_WITH_ARIA_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_ARIA_256_CBC_SHA384;
        case 49224:
        case "TLS_ECDHE_ECDSA_WITH_ARIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_ARIA_128_CBC_SHA256;
        case 49225:
        case "TLS_ECDHE_ECDSA_WITH_ARIA_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_ARIA_256_CBC_SHA384;
        case 49226:
        case "TLS_ECDH_ECDSA_WITH_ARIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_ARIA_128_CBC_SHA256;
        case 49227:
        case "TLS_ECDH_ECDSA_WITH_ARIA_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_ARIA_256_CBC_SHA384;
        case 49228:
        case "TLS_ECDHE_RSA_WITH_ARIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_ARIA_128_CBC_SHA256;
        case 49229:
        case "TLS_ECDHE_RSA_WITH_ARIA_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_ARIA_256_CBC_SHA384;
        case 49230:
        case "TLS_ECDH_RSA_WITH_ARIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_ARIA_128_CBC_SHA256;
        case 49231:
        case "TLS_ECDH_RSA_WITH_ARIA_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_ARIA_256_CBC_SHA384;
        case 49232:
        case "TLS_RSA_WITH_ARIA_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_ARIA_128_GCM_SHA256;
        case 49233:
        case "TLS_RSA_WITH_ARIA_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_ARIA_256_GCM_SHA384;
        case 49234:
        case "TLS_DHE_RSA_WITH_ARIA_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_ARIA_128_GCM_SHA256;
        case 49235:
        case "TLS_DHE_RSA_WITH_ARIA_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_ARIA_256_GCM_SHA384;
        case 49236:
        case "TLS_DH_RSA_WITH_ARIA_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_ARIA_128_GCM_SHA256;
        case 49237:
        case "TLS_DH_RSA_WITH_ARIA_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_ARIA_256_GCM_SHA384;
        case 49238:
        case "TLS_DHE_DSS_WITH_ARIA_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_ARIA_128_GCM_SHA256;
        case 49239:
        case "TLS_DHE_DSS_WITH_ARIA_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_ARIA_256_GCM_SHA384;
        case 49240:
        case "TLS_DH_DSS_WITH_ARIA_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_ARIA_128_GCM_SHA256;
        case 49241:
        case "TLS_DH_DSS_WITH_ARIA_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_ARIA_256_GCM_SHA384;
        case 49242:
        case "TLS_DH_anon_WITH_ARIA_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_ARIA_128_GCM_SHA256;
        case 49243:
        case "TLS_DH_anon_WITH_ARIA_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_ARIA_256_GCM_SHA384;
        case 49244:
        case "TLS_ECDHE_ECDSA_WITH_ARIA_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_ARIA_128_GCM_SHA256;
        case 49245:
        case "TLS_ECDHE_ECDSA_WITH_ARIA_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_ARIA_256_GCM_SHA384;
        case 49246:
        case "TLS_ECDH_ECDSA_WITH_ARIA_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_ARIA_128_GCM_SHA256;
        case 49247:
        case "TLS_ECDH_ECDSA_WITH_ARIA_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_ARIA_256_GCM_SHA384;
        case 49248:
        case "TLS_ECDHE_RSA_WITH_ARIA_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_ARIA_128_GCM_SHA256;
        case 49249:
        case "TLS_ECDHE_RSA_WITH_ARIA_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_ARIA_256_GCM_SHA384;
        case 49250:
        case "TLS_ECDH_RSA_WITH_ARIA_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_ARIA_128_GCM_SHA256;
        case 49251:
        case "TLS_ECDH_RSA_WITH_ARIA_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_ARIA_256_GCM_SHA384;
        case 49252:
        case "TLS_PSK_WITH_ARIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_ARIA_128_CBC_SHA256;
        case 49253:
        case "TLS_PSK_WITH_ARIA_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_ARIA_256_CBC_SHA384;
        case 49254:
        case "TLS_DHE_PSK_WITH_ARIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_ARIA_128_CBC_SHA256;
        case 49255:
        case "TLS_DHE_PSK_WITH_ARIA_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_ARIA_256_CBC_SHA384;
        case 49256:
        case "TLS_RSA_PSK_WITH_ARIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_ARIA_128_CBC_SHA256;
        case 49257:
        case "TLS_RSA_PSK_WITH_ARIA_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_ARIA_256_CBC_SHA384;
        case 49258:
        case "TLS_PSK_WITH_ARIA_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_ARIA_128_GCM_SHA256;
        case 49259:
        case "TLS_PSK_WITH_ARIA_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_ARIA_256_GCM_SHA384;
        case 49260:
        case "TLS_DHE_PSK_WITH_ARIA_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_ARIA_128_GCM_SHA256;
        case 49261:
        case "TLS_DHE_PSK_WITH_ARIA_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_ARIA_256_GCM_SHA384;
        case 49262:
        case "TLS_RSA_PSK_WITH_ARIA_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_ARIA_128_GCM_SHA256;
        case 49263:
        case "TLS_RSA_PSK_WITH_ARIA_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_ARIA_256_GCM_SHA384;
        case 49264:
        case "TLS_ECDHE_PSK_WITH_ARIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_ARIA_128_CBC_SHA256;
        case 49265:
        case "TLS_ECDHE_PSK_WITH_ARIA_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_ARIA_256_CBC_SHA384;
        case 49266:
        case "TLS_ECDHE_ECDSA_WITH_CAMELLIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_CAMELLIA_128_CBC_SHA256;
        case 49267:
        case "TLS_ECDHE_ECDSA_WITH_CAMELLIA_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_CAMELLIA_256_CBC_SHA384;
        case 49268:
        case "TLS_ECDH_ECDSA_WITH_CAMELLIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_CAMELLIA_128_CBC_SHA256;
        case 49269:
        case "TLS_ECDH_ECDSA_WITH_CAMELLIA_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_CAMELLIA_256_CBC_SHA384;
        case 49270:
        case "TLS_ECDHE_RSA_WITH_CAMELLIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_CAMELLIA_128_CBC_SHA256;
        case 49271:
        case "TLS_ECDHE_RSA_WITH_CAMELLIA_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_CAMELLIA_256_CBC_SHA384;
        case 49272:
        case "TLS_ECDH_RSA_WITH_CAMELLIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_CAMELLIA_128_CBC_SHA256;
        case 49273:
        case "TLS_ECDH_RSA_WITH_CAMELLIA_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_CAMELLIA_256_CBC_SHA384;
        case 49274:
        case "TLS_RSA_WITH_CAMELLIA_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_CAMELLIA_128_GCM_SHA256;
        case 49275:
        case "TLS_RSA_WITH_CAMELLIA_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_CAMELLIA_256_GCM_SHA384;
        case 49276:
        case "TLS_DHE_RSA_WITH_CAMELLIA_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_CAMELLIA_128_GCM_SHA256;
        case 49277:
        case "TLS_DHE_RSA_WITH_CAMELLIA_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_CAMELLIA_256_GCM_SHA384;
        case 49278:
        case "TLS_DH_RSA_WITH_CAMELLIA_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_CAMELLIA_128_GCM_SHA256;
        case 49279:
        case "TLS_DH_RSA_WITH_CAMELLIA_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_CAMELLIA_256_GCM_SHA384;
        case 49280:
        case "TLS_DHE_DSS_WITH_CAMELLIA_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_CAMELLIA_128_GCM_SHA256;
        case 49281:
        case "TLS_DHE_DSS_WITH_CAMELLIA_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_CAMELLIA_256_GCM_SHA384;
        case 49282:
        case "TLS_DH_DSS_WITH_CAMELLIA_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_CAMELLIA_128_GCM_SHA256;
        case 49283:
        case "TLS_DH_DSS_WITH_CAMELLIA_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_CAMELLIA_256_GCM_SHA384;
        case 49284:
        case "TLS_DH_anon_WITH_CAMELLIA_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_CAMELLIA_128_GCM_SHA256;
        case 49285:
        case "TLS_DH_anon_WITH_CAMELLIA_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_CAMELLIA_256_GCM_SHA384;
        case 49286:
        case "TLS_ECDHE_ECDSA_WITH_CAMELLIA_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_CAMELLIA_128_GCM_SHA256;
        case 49287:
        case "TLS_ECDHE_ECDSA_WITH_CAMELLIA_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_CAMELLIA_256_GCM_SHA384;
        case 49288:
        case "TLS_ECDH_ECDSA_WITH_CAMELLIA_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_CAMELLIA_128_GCM_SHA256;
        case 49289:
        case "TLS_ECDH_ECDSA_WITH_CAMELLIA_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_CAMELLIA_256_GCM_SHA384;
        case 49290:
        case "TLS_ECDHE_RSA_WITH_CAMELLIA_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_CAMELLIA_128_GCM_SHA256;
        case 49291:
        case "TLS_ECDHE_RSA_WITH_CAMELLIA_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_CAMELLIA_256_GCM_SHA384;
        case 49292:
        case "TLS_ECDH_RSA_WITH_CAMELLIA_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_CAMELLIA_128_GCM_SHA256;
        case 49293:
        case "TLS_ECDH_RSA_WITH_CAMELLIA_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_CAMELLIA_256_GCM_SHA384;
        case 49294:
        case "TLS_PSK_WITH_CAMELLIA_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_CAMELLIA_128_GCM_SHA256;
        case 49295:
        case "TLS_PSK_WITH_CAMELLIA_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_CAMELLIA_256_GCM_SHA384;
        case 49296:
        case "TLS_DHE_PSK_WITH_CAMELLIA_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_CAMELLIA_128_GCM_SHA256;
        case 49297:
        case "TLS_DHE_PSK_WITH_CAMELLIA_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_CAMELLIA_256_GCM_SHA384;
        case 49298:
        case "TLS_RSA_PSK_WITH_CAMELLIA_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_CAMELLIA_128_GCM_SHA256;
        case 49299:
        case "TLS_RSA_PSK_WITH_CAMELLIA_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_CAMELLIA_256_GCM_SHA384;
        case 49300:
        case "TLS_PSK_WITH_CAMELLIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_CAMELLIA_128_CBC_SHA256;
        case 49301:
        case "TLS_PSK_WITH_CAMELLIA_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_CAMELLIA_256_CBC_SHA384;
        case 49302:
        case "TLS_DHE_PSK_WITH_CAMELLIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_CAMELLIA_128_CBC_SHA256;
        case 49303:
        case "TLS_DHE_PSK_WITH_CAMELLIA_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_CAMELLIA_256_CBC_SHA384;
        case 49304:
        case "TLS_RSA_PSK_WITH_CAMELLIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_CAMELLIA_128_CBC_SHA256;
        case 49305:
        case "TLS_RSA_PSK_WITH_CAMELLIA_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_CAMELLIA_256_CBC_SHA384;
        case 49306:
        case "TLS_ECDHE_PSK_WITH_CAMELLIA_128_CBC_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_CAMELLIA_128_CBC_SHA256;
        case 49307:
        case "TLS_ECDHE_PSK_WITH_CAMELLIA_256_CBC_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_CAMELLIA_256_CBC_SHA384;
        case 49308:
        case "TLS_RSA_WITH_AES_128_CCM":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_AES_128_CCM;
        case 49309:
        case "TLS_RSA_WITH_AES_256_CCM":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_AES_256_CCM;
        case 49310:
        case "TLS_DHE_RSA_WITH_AES_128_CCM":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_AES_128_CCM;
        case 49311:
        case "TLS_DHE_RSA_WITH_AES_256_CCM":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_AES_256_CCM;
        case 49312:
        case "TLS_RSA_WITH_AES_128_CCM_8":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_AES_128_CCM_8;
        case 49313:
        case "TLS_RSA_WITH_AES_256_CCM_8":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_AES_256_CCM_8;
        case 49314:
        case "TLS_DHE_RSA_WITH_AES_128_CCM_8":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_AES_128_CCM_8;
        case 49315:
        case "TLS_DHE_RSA_WITH_AES_256_CCM_8":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_AES_256_CCM_8;
        case 49316:
        case "TLS_PSK_WITH_AES_128_CCM":
            return Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_AES_128_CCM;
        case 49317:
        case "TLS_PSK_WITH_AES_256_CCM":
            return Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_AES_256_CCM;
        case 49318:
        case "TLS_DHE_PSK_WITH_AES_128_CCM":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_AES_128_CCM;
        case 49319:
        case "TLS_DHE_PSK_WITH_AES_256_CCM":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_AES_256_CCM;
        case 49320:
        case "TLS_PSK_WITH_AES_128_CCM_8":
            return Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_AES_128_CCM_8;
        case 49321:
        case "TLS_PSK_WITH_AES_256_CCM_8":
            return Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_AES_256_CCM_8;
        case 49322:
        case "TLS_PSK_DHE_WITH_AES_128_CCM_8":
            return Browser_TLSFingerprint_CipherSuite.TLS_PSK_DHE_WITH_AES_128_CCM_8;
        case 49323:
        case "TLS_PSK_DHE_WITH_AES_256_CCM_8":
            return Browser_TLSFingerprint_CipherSuite.TLS_PSK_DHE_WITH_AES_256_CCM_8;
        case 49324:
        case "TLS_ECDHE_ECDSA_WITH_AES_128_CCM":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_AES_128_CCM;
        case 49325:
        case "TLS_ECDHE_ECDSA_WITH_AES_256_CCM":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_AES_256_CCM;
        case 49326:
        case "TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8;
        case 49327:
        case "TLS_ECDHE_ECDSA_WITH_AES_256_CCM_8":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_AES_256_CCM_8;
        case 49328:
        case "TLS_ECCPWD_WITH_AES_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECCPWD_WITH_AES_128_GCM_SHA256;
        case 49329:
        case "TLS_ECCPWD_WITH_AES_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECCPWD_WITH_AES_256_GCM_SHA384;
        case 49330:
        case "TLS_ECCPWD_WITH_AES_128_CCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECCPWD_WITH_AES_128_CCM_SHA256;
        case 49331:
        case "TLS_ECCPWD_WITH_AES_256_CCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECCPWD_WITH_AES_256_CCM_SHA384;
        case 49332:
        case "TLS_SHA256_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_SHA256_SHA256;
        case 49333:
        case "TLS_SHA384_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_SHA384_SHA384;
        case 49408:
        case "TLS_GOSTR341112_256_WITH_KUZNYECHIK_CTR_OMAC":
            return Browser_TLSFingerprint_CipherSuite.TLS_GOSTR341112_256_WITH_KUZNYECHIK_CTR_OMAC;
        case 49409:
        case "TLS_GOSTR341112_256_WITH_MAGMA_CTR_OMAC":
            return Browser_TLSFingerprint_CipherSuite.TLS_GOSTR341112_256_WITH_MAGMA_CTR_OMAC;
        case 49410:
        case "TLS_GOSTR341112_256_WITH_28147_CNT_IMIT":
            return Browser_TLSFingerprint_CipherSuite.TLS_GOSTR341112_256_WITH_28147_CNT_IMIT;
        case 49411:
        case "TLS_GOSTR341112_256_WITH_KUZNYECHIK_MGM_L":
            return Browser_TLSFingerprint_CipherSuite.TLS_GOSTR341112_256_WITH_KUZNYECHIK_MGM_L;
        case 49412:
        case "TLS_GOSTR341112_256_WITH_MAGMA_MGM_L":
            return Browser_TLSFingerprint_CipherSuite.TLS_GOSTR341112_256_WITH_MAGMA_MGM_L;
        case 49413:
        case "TLS_GOSTR341112_256_WITH_KUZNYECHIK_MGM_S":
            return Browser_TLSFingerprint_CipherSuite.TLS_GOSTR341112_256_WITH_KUZNYECHIK_MGM_S;
        case 49414:
        case "TLS_GOSTR341112_256_WITH_MAGMA_MGM_S":
            return Browser_TLSFingerprint_CipherSuite.TLS_GOSTR341112_256_WITH_MAGMA_MGM_S;
        case 52392:
        case "TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256;
        case 52393:
        case "TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256;
        case 52394:
        case "TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256;
        case 52395:
        case "TLS_PSK_WITH_CHACHA20_POLY1305_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_CHACHA20_POLY1305_SHA256;
        case 52396:
        case "TLS_ECDHE_PSK_WITH_CHACHA20_POLY1305_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_CHACHA20_POLY1305_SHA256;
        case 52397:
        case "TLS_DHE_PSK_WITH_CHACHA20_POLY1305_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_CHACHA20_POLY1305_SHA256;
        case 52398:
        case "TLS_RSA_PSK_WITH_CHACHA20_POLY1305_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_CHACHA20_POLY1305_SHA256;
        case 53249:
        case "TLS_ECDHE_PSK_WITH_AES_128_GCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_AES_128_GCM_SHA256;
        case 53250:
        case "TLS_ECDHE_PSK_WITH_AES_256_GCM_SHA384":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_AES_256_GCM_SHA384;
        case 53251:
        case "TLS_ECDHE_PSK_WITH_AES_128_CCM_8_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_AES_128_CCM_8_SHA256;
        case 53253:
        case "TLS_ECDHE_PSK_WITH_AES_128_CCM_SHA256":
            return Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_AES_128_CCM_SHA256;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Browser_TLSFingerprint_CipherSuite.UNRECOGNIZED;
    }
}
exports.browser_TLSFingerprint_CipherSuiteFromJSON = browser_TLSFingerprint_CipherSuiteFromJSON;
function browser_TLSFingerprint_CipherSuiteToJSON(object) {
    switch (object) {
        case Browser_TLSFingerprint_CipherSuite.TLS_NULL_WITH_NULL_NULL:
            return "TLS_NULL_WITH_NULL_NULL";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_NULL_MD5:
            return "TLS_RSA_WITH_NULL_MD5";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_NULL_SHA:
            return "TLS_RSA_WITH_NULL_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_EXPORT_WITH_RC4_40_MD5:
            return "TLS_RSA_EXPORT_WITH_RC4_40_MD5";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_RC4_128_MD5:
            return "TLS_RSA_WITH_RC4_128_MD5";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_RC4_128_SHA:
            return "TLS_RSA_WITH_RC4_128_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_EXPORT_WITH_RC2_CBC_40_MD5:
            return "TLS_RSA_EXPORT_WITH_RC2_CBC_40_MD5";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_IDEA_CBC_SHA:
            return "TLS_RSA_WITH_IDEA_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_EXPORT_WITH_DES40_CBC_SHA:
            return "TLS_RSA_EXPORT_WITH_DES40_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_DES_CBC_SHA:
            return "TLS_RSA_WITH_DES_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_3DES_EDE_CBC_SHA:
            return "TLS_RSA_WITH_3DES_EDE_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_EXPORT_WITH_DES40_CBC_SHA:
            return "TLS_DH_DSS_EXPORT_WITH_DES40_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_DES_CBC_SHA:
            return "TLS_DH_DSS_WITH_DES_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_3DES_EDE_CBC_SHA:
            return "TLS_DH_DSS_WITH_3DES_EDE_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_EXPORT_WITH_DES40_CBC_SHA:
            return "TLS_DH_RSA_EXPORT_WITH_DES40_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_DES_CBC_SHA:
            return "TLS_DH_RSA_WITH_DES_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_3DES_EDE_CBC_SHA:
            return "TLS_DH_RSA_WITH_3DES_EDE_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_EXPORT_WITH_DES40_CBC_SHA:
            return "TLS_DHE_DSS_EXPORT_WITH_DES40_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_DES_CBC_SHA:
            return "TLS_DHE_DSS_WITH_DES_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA:
            return "TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA:
            return "TLS_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_DES_CBC_SHA:
            return "TLS_DHE_RSA_WITH_DES_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_3DES_EDE_CBC_SHA:
            return "TLS_DHE_RSA_WITH_3DES_EDE_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_EXPORT_WITH_RC4_40_MD5:
            return "TLS_DH_anon_EXPORT_WITH_RC4_40_MD5";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_RC4_128_MD5:
            return "TLS_DH_anon_WITH_RC4_128_MD5";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_EXPORT_WITH_DES40_CBC_SHA:
            return "TLS_DH_anon_EXPORT_WITH_DES40_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_DES_CBC_SHA:
            return "TLS_DH_anon_WITH_DES_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_3DES_EDE_CBC_SHA:
            return "TLS_DH_anon_WITH_3DES_EDE_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_KRB5_WITH_DES_CBC_SHA:
            return "TLS_KRB5_WITH_DES_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_KRB5_WITH_3DES_EDE_CBC_SHA:
            return "TLS_KRB5_WITH_3DES_EDE_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_KRB5_WITH_RC4_128_SHA:
            return "TLS_KRB5_WITH_RC4_128_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_KRB5_WITH_IDEA_CBC_SHA:
            return "TLS_KRB5_WITH_IDEA_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_KRB5_WITH_DES_CBC_MD5:
            return "TLS_KRB5_WITH_DES_CBC_MD5";
        case Browser_TLSFingerprint_CipherSuite.TLS_KRB5_WITH_3DES_EDE_CBC_MD5:
            return "TLS_KRB5_WITH_3DES_EDE_CBC_MD5";
        case Browser_TLSFingerprint_CipherSuite.TLS_KRB5_WITH_RC4_128_MD5:
            return "TLS_KRB5_WITH_RC4_128_MD5";
        case Browser_TLSFingerprint_CipherSuite.TLS_KRB5_WITH_IDEA_CBC_MD5:
            return "TLS_KRB5_WITH_IDEA_CBC_MD5";
        case Browser_TLSFingerprint_CipherSuite.TLS_KRB5_EXPORT_WITH_DES_CBC_40_SHA:
            return "TLS_KRB5_EXPORT_WITH_DES_CBC_40_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_KRB5_EXPORT_WITH_RC2_CBC_40_SHA:
            return "TLS_KRB5_EXPORT_WITH_RC2_CBC_40_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_KRB5_EXPORT_WITH_RC4_40_SHA:
            return "TLS_KRB5_EXPORT_WITH_RC4_40_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_KRB5_EXPORT_WITH_DES_CBC_40_MD5:
            return "TLS_KRB5_EXPORT_WITH_DES_CBC_40_MD5";
        case Browser_TLSFingerprint_CipherSuite.TLS_KRB5_EXPORT_WITH_RC2_CBC_40_MD5:
            return "TLS_KRB5_EXPORT_WITH_RC2_CBC_40_MD5";
        case Browser_TLSFingerprint_CipherSuite.TLS_KRB5_EXPORT_WITH_RC4_40_MD5:
            return "TLS_KRB5_EXPORT_WITH_RC4_40_MD5";
        case Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_NULL_SHA:
            return "TLS_PSK_WITH_NULL_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_NULL_SHA:
            return "TLS_DHE_PSK_WITH_NULL_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_NULL_SHA:
            return "TLS_RSA_PSK_WITH_NULL_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_AES_128_CBC_SHA:
            return "TLS_RSA_WITH_AES_128_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_AES_128_CBC_SHA:
            return "TLS_DH_DSS_WITH_AES_128_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_AES_128_CBC_SHA:
            return "TLS_DH_RSA_WITH_AES_128_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_AES_128_CBC_SHA:
            return "TLS_DHE_DSS_WITH_AES_128_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_AES_128_CBC_SHA:
            return "TLS_DHE_RSA_WITH_AES_128_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_AES_128_CBC_SHA:
            return "TLS_DH_anon_WITH_AES_128_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_AES_256_CBC_SHA:
            return "TLS_RSA_WITH_AES_256_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_AES_256_CBC_SHA:
            return "TLS_DH_DSS_WITH_AES_256_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_AES_256_CBC_SHA:
            return "TLS_DH_RSA_WITH_AES_256_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_AES_256_CBC_SHA:
            return "TLS_DHE_DSS_WITH_AES_256_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_AES_256_CBC_SHA:
            return "TLS_DHE_RSA_WITH_AES_256_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_AES_256_CBC_SHA:
            return "TLS_DH_anon_WITH_AES_256_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_NULL_SHA256:
            return "TLS_RSA_WITH_NULL_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_AES_128_CBC_SHA256:
            return "TLS_RSA_WITH_AES_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_AES_256_CBC_SHA256:
            return "TLS_RSA_WITH_AES_256_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_AES_128_CBC_SHA256:
            return "TLS_DH_DSS_WITH_AES_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_AES_128_CBC_SHA256:
            return "TLS_DH_RSA_WITH_AES_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_AES_128_CBC_SHA256:
            return "TLS_DHE_DSS_WITH_AES_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_CAMELLIA_128_CBC_SHA:
            return "TLS_RSA_WITH_CAMELLIA_128_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_CAMELLIA_128_CBC_SHA:
            return "TLS_DH_DSS_WITH_CAMELLIA_128_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_CAMELLIA_128_CBC_SHA:
            return "TLS_DH_RSA_WITH_CAMELLIA_128_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA:
            return "TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA:
            return "TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_CAMELLIA_128_CBC_SHA:
            return "TLS_DH_anon_WITH_CAMELLIA_128_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_AES_128_CBC_SHA256:
            return "TLS_DHE_RSA_WITH_AES_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_AES_256_CBC_SHA256:
            return "TLS_DH_DSS_WITH_AES_256_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_AES_256_CBC_SHA256:
            return "TLS_DH_RSA_WITH_AES_256_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_AES_256_CBC_SHA256:
            return "TLS_DHE_DSS_WITH_AES_256_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_AES_256_CBC_SHA256:
            return "TLS_DHE_RSA_WITH_AES_256_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_AES_128_CBC_SHA256:
            return "TLS_DH_anon_WITH_AES_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_AES_256_CBC_SHA256:
            return "TLS_DH_anon_WITH_AES_256_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_CAMELLIA_256_CBC_SHA:
            return "TLS_RSA_WITH_CAMELLIA_256_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_CAMELLIA_256_CBC_SHA:
            return "TLS_DH_DSS_WITH_CAMELLIA_256_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_CAMELLIA_256_CBC_SHA:
            return "TLS_DH_RSA_WITH_CAMELLIA_256_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA:
            return "TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA:
            return "TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_CAMELLIA_256_CBC_SHA:
            return "TLS_DH_anon_WITH_CAMELLIA_256_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_RC4_128_SHA:
            return "TLS_PSK_WITH_RC4_128_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_3DES_EDE_CBC_SHA:
            return "TLS_PSK_WITH_3DES_EDE_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_AES_128_CBC_SHA:
            return "TLS_PSK_WITH_AES_128_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_AES_256_CBC_SHA:
            return "TLS_PSK_WITH_AES_256_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_RC4_128_SHA:
            return "TLS_DHE_PSK_WITH_RC4_128_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_3DES_EDE_CBC_SHA:
            return "TLS_DHE_PSK_WITH_3DES_EDE_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_AES_128_CBC_SHA:
            return "TLS_DHE_PSK_WITH_AES_128_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_AES_256_CBC_SHA:
            return "TLS_DHE_PSK_WITH_AES_256_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_RC4_128_SHA:
            return "TLS_RSA_PSK_WITH_RC4_128_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_3DES_EDE_CBC_SHA:
            return "TLS_RSA_PSK_WITH_3DES_EDE_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_AES_128_CBC_SHA:
            return "TLS_RSA_PSK_WITH_AES_128_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_AES_256_CBC_SHA:
            return "TLS_RSA_PSK_WITH_AES_256_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_SEED_CBC_SHA:
            return "TLS_RSA_WITH_SEED_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_SEED_CBC_SHA:
            return "TLS_DH_DSS_WITH_SEED_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_SEED_CBC_SHA:
            return "TLS_DH_RSA_WITH_SEED_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_SEED_CBC_SHA:
            return "TLS_DHE_DSS_WITH_SEED_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_SEED_CBC_SHA:
            return "TLS_DHE_RSA_WITH_SEED_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_SEED_CBC_SHA:
            return "TLS_DH_anon_WITH_SEED_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_AES_128_GCM_SHA256:
            return "TLS_RSA_WITH_AES_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_AES_256_GCM_SHA384:
            return "TLS_RSA_WITH_AES_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_AES_128_GCM_SHA256:
            return "TLS_DHE_RSA_WITH_AES_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_AES_256_GCM_SHA384:
            return "TLS_DHE_RSA_WITH_AES_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_AES_128_GCM_SHA256:
            return "TLS_DH_RSA_WITH_AES_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_AES_256_GCM_SHA384:
            return "TLS_DH_RSA_WITH_AES_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_AES_128_GCM_SHA256:
            return "TLS_DHE_DSS_WITH_AES_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_AES_256_GCM_SHA384:
            return "TLS_DHE_DSS_WITH_AES_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_AES_128_GCM_SHA256:
            return "TLS_DH_DSS_WITH_AES_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_AES_256_GCM_SHA384:
            return "TLS_DH_DSS_WITH_AES_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_AES_128_GCM_SHA256:
            return "TLS_DH_anon_WITH_AES_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_AES_256_GCM_SHA384:
            return "TLS_DH_anon_WITH_AES_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_AES_128_GCM_SHA256:
            return "TLS_PSK_WITH_AES_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_AES_256_GCM_SHA384:
            return "TLS_PSK_WITH_AES_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_AES_128_GCM_SHA256:
            return "TLS_DHE_PSK_WITH_AES_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_AES_256_GCM_SHA384:
            return "TLS_DHE_PSK_WITH_AES_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_AES_128_GCM_SHA256:
            return "TLS_RSA_PSK_WITH_AES_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_AES_256_GCM_SHA384:
            return "TLS_RSA_PSK_WITH_AES_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_AES_128_CBC_SHA256:
            return "TLS_PSK_WITH_AES_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_AES_256_CBC_SHA384:
            return "TLS_PSK_WITH_AES_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_NULL_SHA256:
            return "TLS_PSK_WITH_NULL_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_NULL_SHA384:
            return "TLS_PSK_WITH_NULL_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_AES_128_CBC_SHA256:
            return "TLS_DHE_PSK_WITH_AES_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_AES_256_CBC_SHA384:
            return "TLS_DHE_PSK_WITH_AES_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_NULL_SHA256:
            return "TLS_DHE_PSK_WITH_NULL_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_NULL_SHA384:
            return "TLS_DHE_PSK_WITH_NULL_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_AES_128_CBC_SHA256:
            return "TLS_RSA_PSK_WITH_AES_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_AES_256_CBC_SHA384:
            return "TLS_RSA_PSK_WITH_AES_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_NULL_SHA256:
            return "TLS_RSA_PSK_WITH_NULL_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_NULL_SHA384:
            return "TLS_RSA_PSK_WITH_NULL_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_CAMELLIA_128_CBC_SHA256:
            return "TLS_RSA_WITH_CAMELLIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_CAMELLIA_128_CBC_SHA256:
            return "TLS_DH_DSS_WITH_CAMELLIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_CAMELLIA_128_CBC_SHA256:
            return "TLS_DH_RSA_WITH_CAMELLIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA256:
            return "TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA256:
            return "TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_CAMELLIA_128_CBC_SHA256:
            return "TLS_DH_anon_WITH_CAMELLIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_CAMELLIA_256_CBC_SHA256:
            return "TLS_RSA_WITH_CAMELLIA_256_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_CAMELLIA_256_CBC_SHA256:
            return "TLS_DH_DSS_WITH_CAMELLIA_256_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_CAMELLIA_256_CBC_SHA256:
            return "TLS_DH_RSA_WITH_CAMELLIA_256_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA256:
            return "TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA256:
            return "TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_CAMELLIA_256_CBC_SHA256:
            return "TLS_DH_anon_WITH_CAMELLIA_256_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_SM4_GCM_SM3:
            return "TLS_SM4_GCM_SM3";
        case Browser_TLSFingerprint_CipherSuite.TLS_SM4_CCM_SM3:
            return "TLS_SM4_CCM_SM3";
        case Browser_TLSFingerprint_CipherSuite.TLS_EMPTY_RENEGOTIATION_INFO_SCSV:
            return "TLS_EMPTY_RENEGOTIATION_INFO_SCSV";
        case Browser_TLSFingerprint_CipherSuite.Reserved:
            return "Reserved";
        case Browser_TLSFingerprint_CipherSuite.Unassigned:
            return "Unassigned";
        case Browser_TLSFingerprint_CipherSuite.TLS_AES_128_GCM_SHA256:
            return "TLS_AES_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_AES_256_GCM_SHA384:
            return "TLS_AES_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_CHACHA20_POLY1305_SHA256:
            return "TLS_CHACHA20_POLY1305_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_AES_128_CCM_SHA256:
            return "TLS_AES_128_CCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_AES_128_CCM_8_SHA256:
            return "TLS_AES_128_CCM_8_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_AEGIS_256_SHA384:
            return "TLS_AEGIS_256_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_AEGIS_128L_SHA256:
            return "TLS_AEGIS_128L_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_FALLBACK_SCSV:
            return "TLS_FALLBACK_SCSV";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_NULL_SHA:
            return "TLS_ECDH_ECDSA_WITH_NULL_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_RC4_128_SHA:
            return "TLS_ECDH_ECDSA_WITH_RC4_128_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_3DES_EDE_CBC_SHA:
            return "TLS_ECDH_ECDSA_WITH_3DES_EDE_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA:
            return "TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA:
            return "TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_NULL_SHA:
            return "TLS_ECDHE_ECDSA_WITH_NULL_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_RC4_128_SHA:
            return "TLS_ECDHE_ECDSA_WITH_RC4_128_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA:
            return "TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA:
            return "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA:
            return "TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_NULL_SHA:
            return "TLS_ECDH_RSA_WITH_NULL_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_RC4_128_SHA:
            return "TLS_ECDH_RSA_WITH_RC4_128_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_3DES_EDE_CBC_SHA:
            return "TLS_ECDH_RSA_WITH_3DES_EDE_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_AES_128_CBC_SHA:
            return "TLS_ECDH_RSA_WITH_AES_128_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_AES_256_CBC_SHA:
            return "TLS_ECDH_RSA_WITH_AES_256_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_NULL_SHA:
            return "TLS_ECDHE_RSA_WITH_NULL_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_RC4_128_SHA:
            return "TLS_ECDHE_RSA_WITH_RC4_128_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA:
            return "TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA:
            return "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA:
            return "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_anon_WITH_NULL_SHA:
            return "TLS_ECDH_anon_WITH_NULL_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_anon_WITH_RC4_128_SHA:
            return "TLS_ECDH_anon_WITH_RC4_128_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_anon_WITH_3DES_EDE_CBC_SHA:
            return "TLS_ECDH_anon_WITH_3DES_EDE_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_anon_WITH_AES_128_CBC_SHA:
            return "TLS_ECDH_anon_WITH_AES_128_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_anon_WITH_AES_256_CBC_SHA:
            return "TLS_ECDH_anon_WITH_AES_256_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_SRP_SHA_WITH_3DES_EDE_CBC_SHA:
            return "TLS_SRP_SHA_WITH_3DES_EDE_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_SRP_SHA_RSA_WITH_3DES_EDE_CBC_SHA:
            return "TLS_SRP_SHA_RSA_WITH_3DES_EDE_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_SRP_SHA_DSS_WITH_3DES_EDE_CBC_SHA:
            return "TLS_SRP_SHA_DSS_WITH_3DES_EDE_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_SRP_SHA_WITH_AES_128_CBC_SHA:
            return "TLS_SRP_SHA_WITH_AES_128_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_SRP_SHA_RSA_WITH_AES_128_CBC_SHA:
            return "TLS_SRP_SHA_RSA_WITH_AES_128_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_SRP_SHA_DSS_WITH_AES_128_CBC_SHA:
            return "TLS_SRP_SHA_DSS_WITH_AES_128_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_SRP_SHA_WITH_AES_256_CBC_SHA:
            return "TLS_SRP_SHA_WITH_AES_256_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_SRP_SHA_RSA_WITH_AES_256_CBC_SHA:
            return "TLS_SRP_SHA_RSA_WITH_AES_256_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_SRP_SHA_DSS_WITH_AES_256_CBC_SHA:
            return "TLS_SRP_SHA_DSS_WITH_AES_256_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256:
            return "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384:
            return "TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256:
            return "TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384:
            return "TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256:
            return "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384:
            return "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256:
            return "TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384:
            return "TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256:
            return "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384:
            return "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_AES_128_GCM_SHA256:
            return "TLS_ECDH_ECDSA_WITH_AES_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_AES_256_GCM_SHA384:
            return "TLS_ECDH_ECDSA_WITH_AES_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256:
            return "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384:
            return "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_AES_128_GCM_SHA256:
            return "TLS_ECDH_RSA_WITH_AES_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_AES_256_GCM_SHA384:
            return "TLS_ECDH_RSA_WITH_AES_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_RC4_128_SHA:
            return "TLS_ECDHE_PSK_WITH_RC4_128_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_3DES_EDE_CBC_SHA:
            return "TLS_ECDHE_PSK_WITH_3DES_EDE_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA:
            return "TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA:
            return "TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA256:
            return "TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA384:
            return "TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_NULL_SHA:
            return "TLS_ECDHE_PSK_WITH_NULL_SHA";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_NULL_SHA256:
            return "TLS_ECDHE_PSK_WITH_NULL_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_NULL_SHA384:
            return "TLS_ECDHE_PSK_WITH_NULL_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_ARIA_128_CBC_SHA256:
            return "TLS_RSA_WITH_ARIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_ARIA_256_CBC_SHA384:
            return "TLS_RSA_WITH_ARIA_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_ARIA_128_CBC_SHA256:
            return "TLS_DH_DSS_WITH_ARIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_ARIA_256_CBC_SHA384:
            return "TLS_DH_DSS_WITH_ARIA_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_ARIA_128_CBC_SHA256:
            return "TLS_DH_RSA_WITH_ARIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_ARIA_256_CBC_SHA384:
            return "TLS_DH_RSA_WITH_ARIA_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_ARIA_128_CBC_SHA256:
            return "TLS_DHE_DSS_WITH_ARIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_ARIA_256_CBC_SHA384:
            return "TLS_DHE_DSS_WITH_ARIA_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_ARIA_128_CBC_SHA256:
            return "TLS_DHE_RSA_WITH_ARIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_ARIA_256_CBC_SHA384:
            return "TLS_DHE_RSA_WITH_ARIA_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_ARIA_128_CBC_SHA256:
            return "TLS_DH_anon_WITH_ARIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_ARIA_256_CBC_SHA384:
            return "TLS_DH_anon_WITH_ARIA_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_ARIA_128_CBC_SHA256:
            return "TLS_ECDHE_ECDSA_WITH_ARIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_ARIA_256_CBC_SHA384:
            return "TLS_ECDHE_ECDSA_WITH_ARIA_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_ARIA_128_CBC_SHA256:
            return "TLS_ECDH_ECDSA_WITH_ARIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_ARIA_256_CBC_SHA384:
            return "TLS_ECDH_ECDSA_WITH_ARIA_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_ARIA_128_CBC_SHA256:
            return "TLS_ECDHE_RSA_WITH_ARIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_ARIA_256_CBC_SHA384:
            return "TLS_ECDHE_RSA_WITH_ARIA_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_ARIA_128_CBC_SHA256:
            return "TLS_ECDH_RSA_WITH_ARIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_ARIA_256_CBC_SHA384:
            return "TLS_ECDH_RSA_WITH_ARIA_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_ARIA_128_GCM_SHA256:
            return "TLS_RSA_WITH_ARIA_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_ARIA_256_GCM_SHA384:
            return "TLS_RSA_WITH_ARIA_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_ARIA_128_GCM_SHA256:
            return "TLS_DHE_RSA_WITH_ARIA_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_ARIA_256_GCM_SHA384:
            return "TLS_DHE_RSA_WITH_ARIA_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_ARIA_128_GCM_SHA256:
            return "TLS_DH_RSA_WITH_ARIA_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_ARIA_256_GCM_SHA384:
            return "TLS_DH_RSA_WITH_ARIA_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_ARIA_128_GCM_SHA256:
            return "TLS_DHE_DSS_WITH_ARIA_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_ARIA_256_GCM_SHA384:
            return "TLS_DHE_DSS_WITH_ARIA_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_ARIA_128_GCM_SHA256:
            return "TLS_DH_DSS_WITH_ARIA_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_ARIA_256_GCM_SHA384:
            return "TLS_DH_DSS_WITH_ARIA_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_ARIA_128_GCM_SHA256:
            return "TLS_DH_anon_WITH_ARIA_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_ARIA_256_GCM_SHA384:
            return "TLS_DH_anon_WITH_ARIA_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_ARIA_128_GCM_SHA256:
            return "TLS_ECDHE_ECDSA_WITH_ARIA_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_ARIA_256_GCM_SHA384:
            return "TLS_ECDHE_ECDSA_WITH_ARIA_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_ARIA_128_GCM_SHA256:
            return "TLS_ECDH_ECDSA_WITH_ARIA_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_ARIA_256_GCM_SHA384:
            return "TLS_ECDH_ECDSA_WITH_ARIA_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_ARIA_128_GCM_SHA256:
            return "TLS_ECDHE_RSA_WITH_ARIA_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_ARIA_256_GCM_SHA384:
            return "TLS_ECDHE_RSA_WITH_ARIA_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_ARIA_128_GCM_SHA256:
            return "TLS_ECDH_RSA_WITH_ARIA_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_ARIA_256_GCM_SHA384:
            return "TLS_ECDH_RSA_WITH_ARIA_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_ARIA_128_CBC_SHA256:
            return "TLS_PSK_WITH_ARIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_ARIA_256_CBC_SHA384:
            return "TLS_PSK_WITH_ARIA_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_ARIA_128_CBC_SHA256:
            return "TLS_DHE_PSK_WITH_ARIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_ARIA_256_CBC_SHA384:
            return "TLS_DHE_PSK_WITH_ARIA_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_ARIA_128_CBC_SHA256:
            return "TLS_RSA_PSK_WITH_ARIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_ARIA_256_CBC_SHA384:
            return "TLS_RSA_PSK_WITH_ARIA_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_ARIA_128_GCM_SHA256:
            return "TLS_PSK_WITH_ARIA_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_ARIA_256_GCM_SHA384:
            return "TLS_PSK_WITH_ARIA_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_ARIA_128_GCM_SHA256:
            return "TLS_DHE_PSK_WITH_ARIA_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_ARIA_256_GCM_SHA384:
            return "TLS_DHE_PSK_WITH_ARIA_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_ARIA_128_GCM_SHA256:
            return "TLS_RSA_PSK_WITH_ARIA_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_ARIA_256_GCM_SHA384:
            return "TLS_RSA_PSK_WITH_ARIA_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_ARIA_128_CBC_SHA256:
            return "TLS_ECDHE_PSK_WITH_ARIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_ARIA_256_CBC_SHA384:
            return "TLS_ECDHE_PSK_WITH_ARIA_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_CAMELLIA_128_CBC_SHA256:
            return "TLS_ECDHE_ECDSA_WITH_CAMELLIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_CAMELLIA_256_CBC_SHA384:
            return "TLS_ECDHE_ECDSA_WITH_CAMELLIA_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_CAMELLIA_128_CBC_SHA256:
            return "TLS_ECDH_ECDSA_WITH_CAMELLIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_CAMELLIA_256_CBC_SHA384:
            return "TLS_ECDH_ECDSA_WITH_CAMELLIA_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_CAMELLIA_128_CBC_SHA256:
            return "TLS_ECDHE_RSA_WITH_CAMELLIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_CAMELLIA_256_CBC_SHA384:
            return "TLS_ECDHE_RSA_WITH_CAMELLIA_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_CAMELLIA_128_CBC_SHA256:
            return "TLS_ECDH_RSA_WITH_CAMELLIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_CAMELLIA_256_CBC_SHA384:
            return "TLS_ECDH_RSA_WITH_CAMELLIA_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_CAMELLIA_128_GCM_SHA256:
            return "TLS_RSA_WITH_CAMELLIA_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_CAMELLIA_256_GCM_SHA384:
            return "TLS_RSA_WITH_CAMELLIA_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_CAMELLIA_128_GCM_SHA256:
            return "TLS_DHE_RSA_WITH_CAMELLIA_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_CAMELLIA_256_GCM_SHA384:
            return "TLS_DHE_RSA_WITH_CAMELLIA_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_CAMELLIA_128_GCM_SHA256:
            return "TLS_DH_RSA_WITH_CAMELLIA_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_RSA_WITH_CAMELLIA_256_GCM_SHA384:
            return "TLS_DH_RSA_WITH_CAMELLIA_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_CAMELLIA_128_GCM_SHA256:
            return "TLS_DHE_DSS_WITH_CAMELLIA_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_DSS_WITH_CAMELLIA_256_GCM_SHA384:
            return "TLS_DHE_DSS_WITH_CAMELLIA_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_CAMELLIA_128_GCM_SHA256:
            return "TLS_DH_DSS_WITH_CAMELLIA_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_DSS_WITH_CAMELLIA_256_GCM_SHA384:
            return "TLS_DH_DSS_WITH_CAMELLIA_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_CAMELLIA_128_GCM_SHA256:
            return "TLS_DH_anon_WITH_CAMELLIA_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DH_anon_WITH_CAMELLIA_256_GCM_SHA384:
            return "TLS_DH_anon_WITH_CAMELLIA_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_CAMELLIA_128_GCM_SHA256:
            return "TLS_ECDHE_ECDSA_WITH_CAMELLIA_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_CAMELLIA_256_GCM_SHA384:
            return "TLS_ECDHE_ECDSA_WITH_CAMELLIA_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_CAMELLIA_128_GCM_SHA256:
            return "TLS_ECDH_ECDSA_WITH_CAMELLIA_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_ECDSA_WITH_CAMELLIA_256_GCM_SHA384:
            return "TLS_ECDH_ECDSA_WITH_CAMELLIA_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_CAMELLIA_128_GCM_SHA256:
            return "TLS_ECDHE_RSA_WITH_CAMELLIA_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_CAMELLIA_256_GCM_SHA384:
            return "TLS_ECDHE_RSA_WITH_CAMELLIA_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_CAMELLIA_128_GCM_SHA256:
            return "TLS_ECDH_RSA_WITH_CAMELLIA_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDH_RSA_WITH_CAMELLIA_256_GCM_SHA384:
            return "TLS_ECDH_RSA_WITH_CAMELLIA_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_CAMELLIA_128_GCM_SHA256:
            return "TLS_PSK_WITH_CAMELLIA_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_CAMELLIA_256_GCM_SHA384:
            return "TLS_PSK_WITH_CAMELLIA_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_CAMELLIA_128_GCM_SHA256:
            return "TLS_DHE_PSK_WITH_CAMELLIA_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_CAMELLIA_256_GCM_SHA384:
            return "TLS_DHE_PSK_WITH_CAMELLIA_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_CAMELLIA_128_GCM_SHA256:
            return "TLS_RSA_PSK_WITH_CAMELLIA_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_CAMELLIA_256_GCM_SHA384:
            return "TLS_RSA_PSK_WITH_CAMELLIA_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_CAMELLIA_128_CBC_SHA256:
            return "TLS_PSK_WITH_CAMELLIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_CAMELLIA_256_CBC_SHA384:
            return "TLS_PSK_WITH_CAMELLIA_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_CAMELLIA_128_CBC_SHA256:
            return "TLS_DHE_PSK_WITH_CAMELLIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_CAMELLIA_256_CBC_SHA384:
            return "TLS_DHE_PSK_WITH_CAMELLIA_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_CAMELLIA_128_CBC_SHA256:
            return "TLS_RSA_PSK_WITH_CAMELLIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_CAMELLIA_256_CBC_SHA384:
            return "TLS_RSA_PSK_WITH_CAMELLIA_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_CAMELLIA_128_CBC_SHA256:
            return "TLS_ECDHE_PSK_WITH_CAMELLIA_128_CBC_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_CAMELLIA_256_CBC_SHA384:
            return "TLS_ECDHE_PSK_WITH_CAMELLIA_256_CBC_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_AES_128_CCM:
            return "TLS_RSA_WITH_AES_128_CCM";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_AES_256_CCM:
            return "TLS_RSA_WITH_AES_256_CCM";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_AES_128_CCM:
            return "TLS_DHE_RSA_WITH_AES_128_CCM";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_AES_256_CCM:
            return "TLS_DHE_RSA_WITH_AES_256_CCM";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_AES_128_CCM_8:
            return "TLS_RSA_WITH_AES_128_CCM_8";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_WITH_AES_256_CCM_8:
            return "TLS_RSA_WITH_AES_256_CCM_8";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_AES_128_CCM_8:
            return "TLS_DHE_RSA_WITH_AES_128_CCM_8";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_AES_256_CCM_8:
            return "TLS_DHE_RSA_WITH_AES_256_CCM_8";
        case Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_AES_128_CCM:
            return "TLS_PSK_WITH_AES_128_CCM";
        case Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_AES_256_CCM:
            return "TLS_PSK_WITH_AES_256_CCM";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_AES_128_CCM:
            return "TLS_DHE_PSK_WITH_AES_128_CCM";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_AES_256_CCM:
            return "TLS_DHE_PSK_WITH_AES_256_CCM";
        case Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_AES_128_CCM_8:
            return "TLS_PSK_WITH_AES_128_CCM_8";
        case Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_AES_256_CCM_8:
            return "TLS_PSK_WITH_AES_256_CCM_8";
        case Browser_TLSFingerprint_CipherSuite.TLS_PSK_DHE_WITH_AES_128_CCM_8:
            return "TLS_PSK_DHE_WITH_AES_128_CCM_8";
        case Browser_TLSFingerprint_CipherSuite.TLS_PSK_DHE_WITH_AES_256_CCM_8:
            return "TLS_PSK_DHE_WITH_AES_256_CCM_8";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_AES_128_CCM:
            return "TLS_ECDHE_ECDSA_WITH_AES_128_CCM";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_AES_256_CCM:
            return "TLS_ECDHE_ECDSA_WITH_AES_256_CCM";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8:
            return "TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_AES_256_CCM_8:
            return "TLS_ECDHE_ECDSA_WITH_AES_256_CCM_8";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECCPWD_WITH_AES_128_GCM_SHA256:
            return "TLS_ECCPWD_WITH_AES_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECCPWD_WITH_AES_256_GCM_SHA384:
            return "TLS_ECCPWD_WITH_AES_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECCPWD_WITH_AES_128_CCM_SHA256:
            return "TLS_ECCPWD_WITH_AES_128_CCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECCPWD_WITH_AES_256_CCM_SHA384:
            return "TLS_ECCPWD_WITH_AES_256_CCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_SHA256_SHA256:
            return "TLS_SHA256_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_SHA384_SHA384:
            return "TLS_SHA384_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_GOSTR341112_256_WITH_KUZNYECHIK_CTR_OMAC:
            return "TLS_GOSTR341112_256_WITH_KUZNYECHIK_CTR_OMAC";
        case Browser_TLSFingerprint_CipherSuite.TLS_GOSTR341112_256_WITH_MAGMA_CTR_OMAC:
            return "TLS_GOSTR341112_256_WITH_MAGMA_CTR_OMAC";
        case Browser_TLSFingerprint_CipherSuite.TLS_GOSTR341112_256_WITH_28147_CNT_IMIT:
            return "TLS_GOSTR341112_256_WITH_28147_CNT_IMIT";
        case Browser_TLSFingerprint_CipherSuite.TLS_GOSTR341112_256_WITH_KUZNYECHIK_MGM_L:
            return "TLS_GOSTR341112_256_WITH_KUZNYECHIK_MGM_L";
        case Browser_TLSFingerprint_CipherSuite.TLS_GOSTR341112_256_WITH_MAGMA_MGM_L:
            return "TLS_GOSTR341112_256_WITH_MAGMA_MGM_L";
        case Browser_TLSFingerprint_CipherSuite.TLS_GOSTR341112_256_WITH_KUZNYECHIK_MGM_S:
            return "TLS_GOSTR341112_256_WITH_KUZNYECHIK_MGM_S";
        case Browser_TLSFingerprint_CipherSuite.TLS_GOSTR341112_256_WITH_MAGMA_MGM_S:
            return "TLS_GOSTR341112_256_WITH_MAGMA_MGM_S";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256:
            return "TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256:
            return "TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256:
            return "TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_PSK_WITH_CHACHA20_POLY1305_SHA256:
            return "TLS_PSK_WITH_CHACHA20_POLY1305_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_CHACHA20_POLY1305_SHA256:
            return "TLS_ECDHE_PSK_WITH_CHACHA20_POLY1305_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_DHE_PSK_WITH_CHACHA20_POLY1305_SHA256:
            return "TLS_DHE_PSK_WITH_CHACHA20_POLY1305_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_RSA_PSK_WITH_CHACHA20_POLY1305_SHA256:
            return "TLS_RSA_PSK_WITH_CHACHA20_POLY1305_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_AES_128_GCM_SHA256:
            return "TLS_ECDHE_PSK_WITH_AES_128_GCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_AES_256_GCM_SHA384:
            return "TLS_ECDHE_PSK_WITH_AES_256_GCM_SHA384";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_AES_128_CCM_8_SHA256:
            return "TLS_ECDHE_PSK_WITH_AES_128_CCM_8_SHA256";
        case Browser_TLSFingerprint_CipherSuite.TLS_ECDHE_PSK_WITH_AES_128_CCM_SHA256:
            return "TLS_ECDHE_PSK_WITH_AES_128_CCM_SHA256";
        case Browser_TLSFingerprint_CipherSuite.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.browser_TLSFingerprint_CipherSuiteToJSON = browser_TLSFingerprint_CipherSuiteToJSON;
/** - TLS extensions: https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml */
var Browser_TLSFingerprint_Extensions;
(function (Browser_TLSFingerprint_Extensions) {
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["SERVER_NAME"] = 0] = "SERVER_NAME";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["MAX_FRAGMENT_LENGTH"] = 1] = "MAX_FRAGMENT_LENGTH";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["CLIENT_CERTIFICATE_URL"] = 2] = "CLIENT_CERTIFICATE_URL";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["TRUSTED_CA_KEYS"] = 3] = "TRUSTED_CA_KEYS";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["TRUNCATED_HMAC"] = 4] = "TRUNCATED_HMAC";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["STATUS_REQUEST"] = 5] = "STATUS_REQUEST";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["USER_MAPPING"] = 6] = "USER_MAPPING";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["CLIENT_AUTHZ"] = 7] = "CLIENT_AUTHZ";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["SERVER_AUTHZ"] = 8] = "SERVER_AUTHZ";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["CERT_TYPE"] = 9] = "CERT_TYPE";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["SUPPORTED_GROUPS"] = 10] = "SUPPORTED_GROUPS";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["EC_POINT_FORMATS"] = 11] = "EC_POINT_FORMATS";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["SRP"] = 12] = "SRP";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["SIGNATURE_ALGORITHMS"] = 13] = "SIGNATURE_ALGORITHMS";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["USE_SRTP"] = 14] = "USE_SRTP";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["HEARTBEAT"] = 15] = "HEARTBEAT";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["APPLICATION_LAYER_PROTOCOL_NEGOTIATION"] = 16] = "APPLICATION_LAYER_PROTOCOL_NEGOTIATION";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["STATUS_REQUEST_V2"] = 17] = "STATUS_REQUEST_V2";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["SIGNED_CERTIFICATE_TIMESTAMP"] = 18] = "SIGNED_CERTIFICATE_TIMESTAMP";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["CLIENT_CERTIFICATE_TYPE"] = 19] = "CLIENT_CERTIFICATE_TYPE";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["SERVER_CERTIFICATE_TYPE"] = 20] = "SERVER_CERTIFICATE_TYPE";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["PADDING"] = 21] = "PADDING";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["ENCRYPT_THEN_MAC"] = 22] = "ENCRYPT_THEN_MAC";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["EXTENDED_MASTER_SECRET"] = 23] = "EXTENDED_MASTER_SECRET";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["TOKEN_BINDING"] = 24] = "TOKEN_BINDING";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["CACHED_INFO"] = 25] = "CACHED_INFO";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["TLS_LTS"] = 26] = "TLS_LTS";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["COMPRESS_CERTIFICATE"] = 27] = "COMPRESS_CERTIFICATE";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["RECORD_SIZE_LIMIT"] = 28] = "RECORD_SIZE_LIMIT";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["PWD_PROTECT"] = 29] = "PWD_PROTECT";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["PWD_CLEAR"] = 30] = "PWD_CLEAR";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["PASSWORD_SALT"] = 31] = "PASSWORD_SALT";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["TICKET_PINNING"] = 32] = "TICKET_PINNING";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["TLS_CERT_WITH_EXTERN_PSK"] = 33] = "TLS_CERT_WITH_EXTERN_PSK";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["DELEGATED_CREDENTIAL"] = 34] = "DELEGATED_CREDENTIAL";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["SESSION_TICKET"] = 35] = "SESSION_TICKET";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["TLMSP"] = 36] = "TLMSP";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["TLMSP_PROXYING"] = 37] = "TLMSP_PROXYING";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["TLMSP_DELEGATE"] = 38] = "TLMSP_DELEGATE";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["SUPPORTED_EKT_CIPHERS"] = 39] = "SUPPORTED_EKT_CIPHERS";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["PRE_SHARED_KEY"] = 41] = "PRE_SHARED_KEY";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["EARLY_DATA"] = 42] = "EARLY_DATA";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["SUPPORTED_VERSIONS"] = 43] = "SUPPORTED_VERSIONS";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["COOKIE"] = 44] = "COOKIE";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["PSK_KEY_EXCHANGE_MODES"] = 45] = "PSK_KEY_EXCHANGE_MODES";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["CERTIFICATE_AUTHORITIES"] = 47] = "CERTIFICATE_AUTHORITIES";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["OID_FILTERS"] = 48] = "OID_FILTERS";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["POST_HANDSHAKE_AUTH"] = 49] = "POST_HANDSHAKE_AUTH";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["SIGNATURE_ALGORITHMS_CERT"] = 50] = "SIGNATURE_ALGORITHMS_CERT";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["KEY_SHARE"] = 51] = "KEY_SHARE";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["TRANSPARENCY_INFO"] = 52] = "TRANSPARENCY_INFO";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["CONNECTION_ID_DEPRECATED"] = 53] = "CONNECTION_ID_DEPRECATED";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["CONNECTION_ID"] = 54] = "CONNECTION_ID";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["EXTERNAL_ID_HASH"] = 55] = "EXTERNAL_ID_HASH";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["EXTERNAL_SESSION_ID"] = 56] = "EXTERNAL_SESSION_ID";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["QUIC_TRANSPORT_PARAMETERS"] = 57] = "QUIC_TRANSPORT_PARAMETERS";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["TICKET_REQUEST"] = 58] = "TICKET_REQUEST";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["DNSSEC_CHAIN"] = 59] = "DNSSEC_CHAIN";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["SEQUENCE_NUMBER_ENCRYPTION_ALGORITHMS"] = 60] = "SEQUENCE_NUMBER_ENCRYPTION_ALGORITHMS";
    /** EXTENSION_APPLICATIONS_SETTINGS - src: boringssl */
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["EXTENSION_APPLICATIONS_SETTINGS"] = 17513] = "EXTENSION_APPLICATIONS_SETTINGS";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["EXTENSION_RENEGOTIATION_INFO"] = 65281] = "EXTENSION_RENEGOTIATION_INFO";
    Browser_TLSFingerprint_Extensions[Browser_TLSFingerprint_Extensions["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Browser_TLSFingerprint_Extensions = exports.Browser_TLSFingerprint_Extensions || (exports.Browser_TLSFingerprint_Extensions = {}));
function browser_TLSFingerprint_ExtensionsFromJSON(object) {
    switch (object) {
        case 0:
        case "SERVER_NAME":
            return Browser_TLSFingerprint_Extensions.SERVER_NAME;
        case 1:
        case "MAX_FRAGMENT_LENGTH":
            return Browser_TLSFingerprint_Extensions.MAX_FRAGMENT_LENGTH;
        case 2:
        case "CLIENT_CERTIFICATE_URL":
            return Browser_TLSFingerprint_Extensions.CLIENT_CERTIFICATE_URL;
        case 3:
        case "TRUSTED_CA_KEYS":
            return Browser_TLSFingerprint_Extensions.TRUSTED_CA_KEYS;
        case 4:
        case "TRUNCATED_HMAC":
            return Browser_TLSFingerprint_Extensions.TRUNCATED_HMAC;
        case 5:
        case "STATUS_REQUEST":
            return Browser_TLSFingerprint_Extensions.STATUS_REQUEST;
        case 6:
        case "USER_MAPPING":
            return Browser_TLSFingerprint_Extensions.USER_MAPPING;
        case 7:
        case "CLIENT_AUTHZ":
            return Browser_TLSFingerprint_Extensions.CLIENT_AUTHZ;
        case 8:
        case "SERVER_AUTHZ":
            return Browser_TLSFingerprint_Extensions.SERVER_AUTHZ;
        case 9:
        case "CERT_TYPE":
            return Browser_TLSFingerprint_Extensions.CERT_TYPE;
        case 10:
        case "SUPPORTED_GROUPS":
            return Browser_TLSFingerprint_Extensions.SUPPORTED_GROUPS;
        case 11:
        case "EC_POINT_FORMATS":
            return Browser_TLSFingerprint_Extensions.EC_POINT_FORMATS;
        case 12:
        case "SRP":
            return Browser_TLSFingerprint_Extensions.SRP;
        case 13:
        case "SIGNATURE_ALGORITHMS":
            return Browser_TLSFingerprint_Extensions.SIGNATURE_ALGORITHMS;
        case 14:
        case "USE_SRTP":
            return Browser_TLSFingerprint_Extensions.USE_SRTP;
        case 15:
        case "HEARTBEAT":
            return Browser_TLSFingerprint_Extensions.HEARTBEAT;
        case 16:
        case "APPLICATION_LAYER_PROTOCOL_NEGOTIATION":
            return Browser_TLSFingerprint_Extensions.APPLICATION_LAYER_PROTOCOL_NEGOTIATION;
        case 17:
        case "STATUS_REQUEST_V2":
            return Browser_TLSFingerprint_Extensions.STATUS_REQUEST_V2;
        case 18:
        case "SIGNED_CERTIFICATE_TIMESTAMP":
            return Browser_TLSFingerprint_Extensions.SIGNED_CERTIFICATE_TIMESTAMP;
        case 19:
        case "CLIENT_CERTIFICATE_TYPE":
            return Browser_TLSFingerprint_Extensions.CLIENT_CERTIFICATE_TYPE;
        case 20:
        case "SERVER_CERTIFICATE_TYPE":
            return Browser_TLSFingerprint_Extensions.SERVER_CERTIFICATE_TYPE;
        case 21:
        case "PADDING":
            return Browser_TLSFingerprint_Extensions.PADDING;
        case 22:
        case "ENCRYPT_THEN_MAC":
            return Browser_TLSFingerprint_Extensions.ENCRYPT_THEN_MAC;
        case 23:
        case "EXTENDED_MASTER_SECRET":
            return Browser_TLSFingerprint_Extensions.EXTENDED_MASTER_SECRET;
        case 24:
        case "TOKEN_BINDING":
            return Browser_TLSFingerprint_Extensions.TOKEN_BINDING;
        case 25:
        case "CACHED_INFO":
            return Browser_TLSFingerprint_Extensions.CACHED_INFO;
        case 26:
        case "TLS_LTS":
            return Browser_TLSFingerprint_Extensions.TLS_LTS;
        case 27:
        case "COMPRESS_CERTIFICATE":
            return Browser_TLSFingerprint_Extensions.COMPRESS_CERTIFICATE;
        case 28:
        case "RECORD_SIZE_LIMIT":
            return Browser_TLSFingerprint_Extensions.RECORD_SIZE_LIMIT;
        case 29:
        case "PWD_PROTECT":
            return Browser_TLSFingerprint_Extensions.PWD_PROTECT;
        case 30:
        case "PWD_CLEAR":
            return Browser_TLSFingerprint_Extensions.PWD_CLEAR;
        case 31:
        case "PASSWORD_SALT":
            return Browser_TLSFingerprint_Extensions.PASSWORD_SALT;
        case 32:
        case "TICKET_PINNING":
            return Browser_TLSFingerprint_Extensions.TICKET_PINNING;
        case 33:
        case "TLS_CERT_WITH_EXTERN_PSK":
            return Browser_TLSFingerprint_Extensions.TLS_CERT_WITH_EXTERN_PSK;
        case 34:
        case "DELEGATED_CREDENTIAL":
            return Browser_TLSFingerprint_Extensions.DELEGATED_CREDENTIAL;
        case 35:
        case "SESSION_TICKET":
            return Browser_TLSFingerprint_Extensions.SESSION_TICKET;
        case 36:
        case "TLMSP":
            return Browser_TLSFingerprint_Extensions.TLMSP;
        case 37:
        case "TLMSP_PROXYING":
            return Browser_TLSFingerprint_Extensions.TLMSP_PROXYING;
        case 38:
        case "TLMSP_DELEGATE":
            return Browser_TLSFingerprint_Extensions.TLMSP_DELEGATE;
        case 39:
        case "SUPPORTED_EKT_CIPHERS":
            return Browser_TLSFingerprint_Extensions.SUPPORTED_EKT_CIPHERS;
        case 41:
        case "PRE_SHARED_KEY":
            return Browser_TLSFingerprint_Extensions.PRE_SHARED_KEY;
        case 42:
        case "EARLY_DATA":
            return Browser_TLSFingerprint_Extensions.EARLY_DATA;
        case 43:
        case "SUPPORTED_VERSIONS":
            return Browser_TLSFingerprint_Extensions.SUPPORTED_VERSIONS;
        case 44:
        case "COOKIE":
            return Browser_TLSFingerprint_Extensions.COOKIE;
        case 45:
        case "PSK_KEY_EXCHANGE_MODES":
            return Browser_TLSFingerprint_Extensions.PSK_KEY_EXCHANGE_MODES;
        case 47:
        case "CERTIFICATE_AUTHORITIES":
            return Browser_TLSFingerprint_Extensions.CERTIFICATE_AUTHORITIES;
        case 48:
        case "OID_FILTERS":
            return Browser_TLSFingerprint_Extensions.OID_FILTERS;
        case 49:
        case "POST_HANDSHAKE_AUTH":
            return Browser_TLSFingerprint_Extensions.POST_HANDSHAKE_AUTH;
        case 50:
        case "SIGNATURE_ALGORITHMS_CERT":
            return Browser_TLSFingerprint_Extensions.SIGNATURE_ALGORITHMS_CERT;
        case 51:
        case "KEY_SHARE":
            return Browser_TLSFingerprint_Extensions.KEY_SHARE;
        case 52:
        case "TRANSPARENCY_INFO":
            return Browser_TLSFingerprint_Extensions.TRANSPARENCY_INFO;
        case 53:
        case "CONNECTION_ID_DEPRECATED":
            return Browser_TLSFingerprint_Extensions.CONNECTION_ID_DEPRECATED;
        case 54:
        case "CONNECTION_ID":
            return Browser_TLSFingerprint_Extensions.CONNECTION_ID;
        case 55:
        case "EXTERNAL_ID_HASH":
            return Browser_TLSFingerprint_Extensions.EXTERNAL_ID_HASH;
        case 56:
        case "EXTERNAL_SESSION_ID":
            return Browser_TLSFingerprint_Extensions.EXTERNAL_SESSION_ID;
        case 57:
        case "QUIC_TRANSPORT_PARAMETERS":
            return Browser_TLSFingerprint_Extensions.QUIC_TRANSPORT_PARAMETERS;
        case 58:
        case "TICKET_REQUEST":
            return Browser_TLSFingerprint_Extensions.TICKET_REQUEST;
        case 59:
        case "DNSSEC_CHAIN":
            return Browser_TLSFingerprint_Extensions.DNSSEC_CHAIN;
        case 60:
        case "SEQUENCE_NUMBER_ENCRYPTION_ALGORITHMS":
            return Browser_TLSFingerprint_Extensions.SEQUENCE_NUMBER_ENCRYPTION_ALGORITHMS;
        case 17513:
        case "EXTENSION_APPLICATIONS_SETTINGS":
            return Browser_TLSFingerprint_Extensions.EXTENSION_APPLICATIONS_SETTINGS;
        case 65281:
        case "EXTENSION_RENEGOTIATION_INFO":
            return Browser_TLSFingerprint_Extensions.EXTENSION_RENEGOTIATION_INFO;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Browser_TLSFingerprint_Extensions.UNRECOGNIZED;
    }
}
exports.browser_TLSFingerprint_ExtensionsFromJSON = browser_TLSFingerprint_ExtensionsFromJSON;
function browser_TLSFingerprint_ExtensionsToJSON(object) {
    switch (object) {
        case Browser_TLSFingerprint_Extensions.SERVER_NAME:
            return "SERVER_NAME";
        case Browser_TLSFingerprint_Extensions.MAX_FRAGMENT_LENGTH:
            return "MAX_FRAGMENT_LENGTH";
        case Browser_TLSFingerprint_Extensions.CLIENT_CERTIFICATE_URL:
            return "CLIENT_CERTIFICATE_URL";
        case Browser_TLSFingerprint_Extensions.TRUSTED_CA_KEYS:
            return "TRUSTED_CA_KEYS";
        case Browser_TLSFingerprint_Extensions.TRUNCATED_HMAC:
            return "TRUNCATED_HMAC";
        case Browser_TLSFingerprint_Extensions.STATUS_REQUEST:
            return "STATUS_REQUEST";
        case Browser_TLSFingerprint_Extensions.USER_MAPPING:
            return "USER_MAPPING";
        case Browser_TLSFingerprint_Extensions.CLIENT_AUTHZ:
            return "CLIENT_AUTHZ";
        case Browser_TLSFingerprint_Extensions.SERVER_AUTHZ:
            return "SERVER_AUTHZ";
        case Browser_TLSFingerprint_Extensions.CERT_TYPE:
            return "CERT_TYPE";
        case Browser_TLSFingerprint_Extensions.SUPPORTED_GROUPS:
            return "SUPPORTED_GROUPS";
        case Browser_TLSFingerprint_Extensions.EC_POINT_FORMATS:
            return "EC_POINT_FORMATS";
        case Browser_TLSFingerprint_Extensions.SRP:
            return "SRP";
        case Browser_TLSFingerprint_Extensions.SIGNATURE_ALGORITHMS:
            return "SIGNATURE_ALGORITHMS";
        case Browser_TLSFingerprint_Extensions.USE_SRTP:
            return "USE_SRTP";
        case Browser_TLSFingerprint_Extensions.HEARTBEAT:
            return "HEARTBEAT";
        case Browser_TLSFingerprint_Extensions.APPLICATION_LAYER_PROTOCOL_NEGOTIATION:
            return "APPLICATION_LAYER_PROTOCOL_NEGOTIATION";
        case Browser_TLSFingerprint_Extensions.STATUS_REQUEST_V2:
            return "STATUS_REQUEST_V2";
        case Browser_TLSFingerprint_Extensions.SIGNED_CERTIFICATE_TIMESTAMP:
            return "SIGNED_CERTIFICATE_TIMESTAMP";
        case Browser_TLSFingerprint_Extensions.CLIENT_CERTIFICATE_TYPE:
            return "CLIENT_CERTIFICATE_TYPE";
        case Browser_TLSFingerprint_Extensions.SERVER_CERTIFICATE_TYPE:
            return "SERVER_CERTIFICATE_TYPE";
        case Browser_TLSFingerprint_Extensions.PADDING:
            return "PADDING";
        case Browser_TLSFingerprint_Extensions.ENCRYPT_THEN_MAC:
            return "ENCRYPT_THEN_MAC";
        case Browser_TLSFingerprint_Extensions.EXTENDED_MASTER_SECRET:
            return "EXTENDED_MASTER_SECRET";
        case Browser_TLSFingerprint_Extensions.TOKEN_BINDING:
            return "TOKEN_BINDING";
        case Browser_TLSFingerprint_Extensions.CACHED_INFO:
            return "CACHED_INFO";
        case Browser_TLSFingerprint_Extensions.TLS_LTS:
            return "TLS_LTS";
        case Browser_TLSFingerprint_Extensions.COMPRESS_CERTIFICATE:
            return "COMPRESS_CERTIFICATE";
        case Browser_TLSFingerprint_Extensions.RECORD_SIZE_LIMIT:
            return "RECORD_SIZE_LIMIT";
        case Browser_TLSFingerprint_Extensions.PWD_PROTECT:
            return "PWD_PROTECT";
        case Browser_TLSFingerprint_Extensions.PWD_CLEAR:
            return "PWD_CLEAR";
        case Browser_TLSFingerprint_Extensions.PASSWORD_SALT:
            return "PASSWORD_SALT";
        case Browser_TLSFingerprint_Extensions.TICKET_PINNING:
            return "TICKET_PINNING";
        case Browser_TLSFingerprint_Extensions.TLS_CERT_WITH_EXTERN_PSK:
            return "TLS_CERT_WITH_EXTERN_PSK";
        case Browser_TLSFingerprint_Extensions.DELEGATED_CREDENTIAL:
            return "DELEGATED_CREDENTIAL";
        case Browser_TLSFingerprint_Extensions.SESSION_TICKET:
            return "SESSION_TICKET";
        case Browser_TLSFingerprint_Extensions.TLMSP:
            return "TLMSP";
        case Browser_TLSFingerprint_Extensions.TLMSP_PROXYING:
            return "TLMSP_PROXYING";
        case Browser_TLSFingerprint_Extensions.TLMSP_DELEGATE:
            return "TLMSP_DELEGATE";
        case Browser_TLSFingerprint_Extensions.SUPPORTED_EKT_CIPHERS:
            return "SUPPORTED_EKT_CIPHERS";
        case Browser_TLSFingerprint_Extensions.PRE_SHARED_KEY:
            return "PRE_SHARED_KEY";
        case Browser_TLSFingerprint_Extensions.EARLY_DATA:
            return "EARLY_DATA";
        case Browser_TLSFingerprint_Extensions.SUPPORTED_VERSIONS:
            return "SUPPORTED_VERSIONS";
        case Browser_TLSFingerprint_Extensions.COOKIE:
            return "COOKIE";
        case Browser_TLSFingerprint_Extensions.PSK_KEY_EXCHANGE_MODES:
            return "PSK_KEY_EXCHANGE_MODES";
        case Browser_TLSFingerprint_Extensions.CERTIFICATE_AUTHORITIES:
            return "CERTIFICATE_AUTHORITIES";
        case Browser_TLSFingerprint_Extensions.OID_FILTERS:
            return "OID_FILTERS";
        case Browser_TLSFingerprint_Extensions.POST_HANDSHAKE_AUTH:
            return "POST_HANDSHAKE_AUTH";
        case Browser_TLSFingerprint_Extensions.SIGNATURE_ALGORITHMS_CERT:
            return "SIGNATURE_ALGORITHMS_CERT";
        case Browser_TLSFingerprint_Extensions.KEY_SHARE:
            return "KEY_SHARE";
        case Browser_TLSFingerprint_Extensions.TRANSPARENCY_INFO:
            return "TRANSPARENCY_INFO";
        case Browser_TLSFingerprint_Extensions.CONNECTION_ID_DEPRECATED:
            return "CONNECTION_ID_DEPRECATED";
        case Browser_TLSFingerprint_Extensions.CONNECTION_ID:
            return "CONNECTION_ID";
        case Browser_TLSFingerprint_Extensions.EXTERNAL_ID_HASH:
            return "EXTERNAL_ID_HASH";
        case Browser_TLSFingerprint_Extensions.EXTERNAL_SESSION_ID:
            return "EXTERNAL_SESSION_ID";
        case Browser_TLSFingerprint_Extensions.QUIC_TRANSPORT_PARAMETERS:
            return "QUIC_TRANSPORT_PARAMETERS";
        case Browser_TLSFingerprint_Extensions.TICKET_REQUEST:
            return "TICKET_REQUEST";
        case Browser_TLSFingerprint_Extensions.DNSSEC_CHAIN:
            return "DNSSEC_CHAIN";
        case Browser_TLSFingerprint_Extensions.SEQUENCE_NUMBER_ENCRYPTION_ALGORITHMS:
            return "SEQUENCE_NUMBER_ENCRYPTION_ALGORITHMS";
        case Browser_TLSFingerprint_Extensions.EXTENSION_APPLICATIONS_SETTINGS:
            return "EXTENSION_APPLICATIONS_SETTINGS";
        case Browser_TLSFingerprint_Extensions.EXTENSION_RENEGOTIATION_INFO:
            return "EXTENSION_RENEGOTIATION_INFO";
        case Browser_TLSFingerprint_Extensions.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.browser_TLSFingerprint_ExtensionsToJSON = browser_TLSFingerprint_ExtensionsToJSON;
/** - Elliptic curves: https://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml#tls-parameters-8 */
var Browser_TLSFingerprint_EllipticCurve;
(function (Browser_TLSFingerprint_EllipticCurve) {
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["RESERVED"] = 0] = "RESERVED";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["SECT163K1"] = 1] = "SECT163K1";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["SECT163R1"] = 2] = "SECT163R1";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["SECT163R2"] = 3] = "SECT163R2";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["SECT193R1"] = 4] = "SECT193R1";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["SECT193R2"] = 5] = "SECT193R2";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["SECT233K1"] = 6] = "SECT233K1";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["SECT233R1"] = 7] = "SECT233R1";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["SECT239K1"] = 8] = "SECT239K1";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["SECT283K1"] = 9] = "SECT283K1";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["SECT283R1"] = 10] = "SECT283R1";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["SECT409K1"] = 11] = "SECT409K1";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["SECT409R1"] = 12] = "SECT409R1";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["SECT571K1"] = 13] = "SECT571K1";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["SECT571R1"] = 14] = "SECT571R1";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["SECP160K1"] = 15] = "SECP160K1";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["SECP160R1"] = 16] = "SECP160R1";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["SECP160R2"] = 17] = "SECP160R2";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["SECP192K1"] = 18] = "SECP192K1";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["SECP192R1"] = 19] = "SECP192R1";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["SECP224K1"] = 20] = "SECP224K1";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["SECP224R1"] = 21] = "SECP224R1";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["SECP256K1"] = 22] = "SECP256K1";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["SECP256R1"] = 23] = "SECP256R1";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["SECP384R1"] = 24] = "SECP384R1";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["SECP521R1"] = 25] = "SECP521R1";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["BRAINPOOLP256R1"] = 26] = "BRAINPOOLP256R1";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["BRAINPOOLP384R1"] = 27] = "BRAINPOOLP384R1";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["BRAINPOOLP512R1"] = 28] = "BRAINPOOLP512R1";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["X25519"] = 29] = "X25519";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["X448"] = 30] = "X448";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["BRAINPOOLP256R1TLS13"] = 31] = "BRAINPOOLP256R1TLS13";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["BRAINPOOLP384R1TLS13"] = 32] = "BRAINPOOLP384R1TLS13";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["BRAINPOOLP512R1TLS13"] = 33] = "BRAINPOOLP512R1TLS13";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["GC256A"] = 34] = "GC256A";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["GC256B"] = 35] = "GC256B";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["GC256C"] = 36] = "GC256C";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["GC256D"] = 37] = "GC256D";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["GC512A"] = 38] = "GC512A";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["GC512B"] = 39] = "GC512B";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["GC512C"] = 40] = "GC512C";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["CURVESM2"] = 41] = "CURVESM2";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["FFDHE2048"] = 256] = "FFDHE2048";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["FFDHE3072"] = 257] = "FFDHE3072";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["FFDHE4096"] = 258] = "FFDHE4096";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["FFDHE6144"] = 259] = "FFDHE6144";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["FFDHE8192"] = 260] = "FFDHE8192";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["ARBITRARY_EXPLICIT_PRIME_CURVES"] = 65281] = "ARBITRARY_EXPLICIT_PRIME_CURVES";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["ARBITRARY_EXPLICIT_CHAR2_CURVES"] = 65282] = "ARBITRARY_EXPLICIT_CHAR2_CURVES";
    Browser_TLSFingerprint_EllipticCurve[Browser_TLSFingerprint_EllipticCurve["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Browser_TLSFingerprint_EllipticCurve = exports.Browser_TLSFingerprint_EllipticCurve || (exports.Browser_TLSFingerprint_EllipticCurve = {}));
function browser_TLSFingerprint_EllipticCurveFromJSON(object) {
    switch (object) {
        case 0:
        case "RESERVED":
            return Browser_TLSFingerprint_EllipticCurve.RESERVED;
        case 1:
        case "SECT163K1":
            return Browser_TLSFingerprint_EllipticCurve.SECT163K1;
        case 2:
        case "SECT163R1":
            return Browser_TLSFingerprint_EllipticCurve.SECT163R1;
        case 3:
        case "SECT163R2":
            return Browser_TLSFingerprint_EllipticCurve.SECT163R2;
        case 4:
        case "SECT193R1":
            return Browser_TLSFingerprint_EllipticCurve.SECT193R1;
        case 5:
        case "SECT193R2":
            return Browser_TLSFingerprint_EllipticCurve.SECT193R2;
        case 6:
        case "SECT233K1":
            return Browser_TLSFingerprint_EllipticCurve.SECT233K1;
        case 7:
        case "SECT233R1":
            return Browser_TLSFingerprint_EllipticCurve.SECT233R1;
        case 8:
        case "SECT239K1":
            return Browser_TLSFingerprint_EllipticCurve.SECT239K1;
        case 9:
        case "SECT283K1":
            return Browser_TLSFingerprint_EllipticCurve.SECT283K1;
        case 10:
        case "SECT283R1":
            return Browser_TLSFingerprint_EllipticCurve.SECT283R1;
        case 11:
        case "SECT409K1":
            return Browser_TLSFingerprint_EllipticCurve.SECT409K1;
        case 12:
        case "SECT409R1":
            return Browser_TLSFingerprint_EllipticCurve.SECT409R1;
        case 13:
        case "SECT571K1":
            return Browser_TLSFingerprint_EllipticCurve.SECT571K1;
        case 14:
        case "SECT571R1":
            return Browser_TLSFingerprint_EllipticCurve.SECT571R1;
        case 15:
        case "SECP160K1":
            return Browser_TLSFingerprint_EllipticCurve.SECP160K1;
        case 16:
        case "SECP160R1":
            return Browser_TLSFingerprint_EllipticCurve.SECP160R1;
        case 17:
        case "SECP160R2":
            return Browser_TLSFingerprint_EllipticCurve.SECP160R2;
        case 18:
        case "SECP192K1":
            return Browser_TLSFingerprint_EllipticCurve.SECP192K1;
        case 19:
        case "SECP192R1":
            return Browser_TLSFingerprint_EllipticCurve.SECP192R1;
        case 20:
        case "SECP224K1":
            return Browser_TLSFingerprint_EllipticCurve.SECP224K1;
        case 21:
        case "SECP224R1":
            return Browser_TLSFingerprint_EllipticCurve.SECP224R1;
        case 22:
        case "SECP256K1":
            return Browser_TLSFingerprint_EllipticCurve.SECP256K1;
        case 23:
        case "SECP256R1":
            return Browser_TLSFingerprint_EllipticCurve.SECP256R1;
        case 24:
        case "SECP384R1":
            return Browser_TLSFingerprint_EllipticCurve.SECP384R1;
        case 25:
        case "SECP521R1":
            return Browser_TLSFingerprint_EllipticCurve.SECP521R1;
        case 26:
        case "BRAINPOOLP256R1":
            return Browser_TLSFingerprint_EllipticCurve.BRAINPOOLP256R1;
        case 27:
        case "BRAINPOOLP384R1":
            return Browser_TLSFingerprint_EllipticCurve.BRAINPOOLP384R1;
        case 28:
        case "BRAINPOOLP512R1":
            return Browser_TLSFingerprint_EllipticCurve.BRAINPOOLP512R1;
        case 29:
        case "X25519":
            return Browser_TLSFingerprint_EllipticCurve.X25519;
        case 30:
        case "X448":
            return Browser_TLSFingerprint_EllipticCurve.X448;
        case 31:
        case "BRAINPOOLP256R1TLS13":
            return Browser_TLSFingerprint_EllipticCurve.BRAINPOOLP256R1TLS13;
        case 32:
        case "BRAINPOOLP384R1TLS13":
            return Browser_TLSFingerprint_EllipticCurve.BRAINPOOLP384R1TLS13;
        case 33:
        case "BRAINPOOLP512R1TLS13":
            return Browser_TLSFingerprint_EllipticCurve.BRAINPOOLP512R1TLS13;
        case 34:
        case "GC256A":
            return Browser_TLSFingerprint_EllipticCurve.GC256A;
        case 35:
        case "GC256B":
            return Browser_TLSFingerprint_EllipticCurve.GC256B;
        case 36:
        case "GC256C":
            return Browser_TLSFingerprint_EllipticCurve.GC256C;
        case 37:
        case "GC256D":
            return Browser_TLSFingerprint_EllipticCurve.GC256D;
        case 38:
        case "GC512A":
            return Browser_TLSFingerprint_EllipticCurve.GC512A;
        case 39:
        case "GC512B":
            return Browser_TLSFingerprint_EllipticCurve.GC512B;
        case 40:
        case "GC512C":
            return Browser_TLSFingerprint_EllipticCurve.GC512C;
        case 41:
        case "CURVESM2":
            return Browser_TLSFingerprint_EllipticCurve.CURVESM2;
        case 256:
        case "FFDHE2048":
            return Browser_TLSFingerprint_EllipticCurve.FFDHE2048;
        case 257:
        case "FFDHE3072":
            return Browser_TLSFingerprint_EllipticCurve.FFDHE3072;
        case 258:
        case "FFDHE4096":
            return Browser_TLSFingerprint_EllipticCurve.FFDHE4096;
        case 259:
        case "FFDHE6144":
            return Browser_TLSFingerprint_EllipticCurve.FFDHE6144;
        case 260:
        case "FFDHE8192":
            return Browser_TLSFingerprint_EllipticCurve.FFDHE8192;
        case 65281:
        case "ARBITRARY_EXPLICIT_PRIME_CURVES":
            return Browser_TLSFingerprint_EllipticCurve.ARBITRARY_EXPLICIT_PRIME_CURVES;
        case 65282:
        case "ARBITRARY_EXPLICIT_CHAR2_CURVES":
            return Browser_TLSFingerprint_EllipticCurve.ARBITRARY_EXPLICIT_CHAR2_CURVES;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Browser_TLSFingerprint_EllipticCurve.UNRECOGNIZED;
    }
}
exports.browser_TLSFingerprint_EllipticCurveFromJSON = browser_TLSFingerprint_EllipticCurveFromJSON;
function browser_TLSFingerprint_EllipticCurveToJSON(object) {
    switch (object) {
        case Browser_TLSFingerprint_EllipticCurve.RESERVED:
            return "RESERVED";
        case Browser_TLSFingerprint_EllipticCurve.SECT163K1:
            return "SECT163K1";
        case Browser_TLSFingerprint_EllipticCurve.SECT163R1:
            return "SECT163R1";
        case Browser_TLSFingerprint_EllipticCurve.SECT163R2:
            return "SECT163R2";
        case Browser_TLSFingerprint_EllipticCurve.SECT193R1:
            return "SECT193R1";
        case Browser_TLSFingerprint_EllipticCurve.SECT193R2:
            return "SECT193R2";
        case Browser_TLSFingerprint_EllipticCurve.SECT233K1:
            return "SECT233K1";
        case Browser_TLSFingerprint_EllipticCurve.SECT233R1:
            return "SECT233R1";
        case Browser_TLSFingerprint_EllipticCurve.SECT239K1:
            return "SECT239K1";
        case Browser_TLSFingerprint_EllipticCurve.SECT283K1:
            return "SECT283K1";
        case Browser_TLSFingerprint_EllipticCurve.SECT283R1:
            return "SECT283R1";
        case Browser_TLSFingerprint_EllipticCurve.SECT409K1:
            return "SECT409K1";
        case Browser_TLSFingerprint_EllipticCurve.SECT409R1:
            return "SECT409R1";
        case Browser_TLSFingerprint_EllipticCurve.SECT571K1:
            return "SECT571K1";
        case Browser_TLSFingerprint_EllipticCurve.SECT571R1:
            return "SECT571R1";
        case Browser_TLSFingerprint_EllipticCurve.SECP160K1:
            return "SECP160K1";
        case Browser_TLSFingerprint_EllipticCurve.SECP160R1:
            return "SECP160R1";
        case Browser_TLSFingerprint_EllipticCurve.SECP160R2:
            return "SECP160R2";
        case Browser_TLSFingerprint_EllipticCurve.SECP192K1:
            return "SECP192K1";
        case Browser_TLSFingerprint_EllipticCurve.SECP192R1:
            return "SECP192R1";
        case Browser_TLSFingerprint_EllipticCurve.SECP224K1:
            return "SECP224K1";
        case Browser_TLSFingerprint_EllipticCurve.SECP224R1:
            return "SECP224R1";
        case Browser_TLSFingerprint_EllipticCurve.SECP256K1:
            return "SECP256K1";
        case Browser_TLSFingerprint_EllipticCurve.SECP256R1:
            return "SECP256R1";
        case Browser_TLSFingerprint_EllipticCurve.SECP384R1:
            return "SECP384R1";
        case Browser_TLSFingerprint_EllipticCurve.SECP521R1:
            return "SECP521R1";
        case Browser_TLSFingerprint_EllipticCurve.BRAINPOOLP256R1:
            return "BRAINPOOLP256R1";
        case Browser_TLSFingerprint_EllipticCurve.BRAINPOOLP384R1:
            return "BRAINPOOLP384R1";
        case Browser_TLSFingerprint_EllipticCurve.BRAINPOOLP512R1:
            return "BRAINPOOLP512R1";
        case Browser_TLSFingerprint_EllipticCurve.X25519:
            return "X25519";
        case Browser_TLSFingerprint_EllipticCurve.X448:
            return "X448";
        case Browser_TLSFingerprint_EllipticCurve.BRAINPOOLP256R1TLS13:
            return "BRAINPOOLP256R1TLS13";
        case Browser_TLSFingerprint_EllipticCurve.BRAINPOOLP384R1TLS13:
            return "BRAINPOOLP384R1TLS13";
        case Browser_TLSFingerprint_EllipticCurve.BRAINPOOLP512R1TLS13:
            return "BRAINPOOLP512R1TLS13";
        case Browser_TLSFingerprint_EllipticCurve.GC256A:
            return "GC256A";
        case Browser_TLSFingerprint_EllipticCurve.GC256B:
            return "GC256B";
        case Browser_TLSFingerprint_EllipticCurve.GC256C:
            return "GC256C";
        case Browser_TLSFingerprint_EllipticCurve.GC256D:
            return "GC256D";
        case Browser_TLSFingerprint_EllipticCurve.GC512A:
            return "GC512A";
        case Browser_TLSFingerprint_EllipticCurve.GC512B:
            return "GC512B";
        case Browser_TLSFingerprint_EllipticCurve.GC512C:
            return "GC512C";
        case Browser_TLSFingerprint_EllipticCurve.CURVESM2:
            return "CURVESM2";
        case Browser_TLSFingerprint_EllipticCurve.FFDHE2048:
            return "FFDHE2048";
        case Browser_TLSFingerprint_EllipticCurve.FFDHE3072:
            return "FFDHE3072";
        case Browser_TLSFingerprint_EllipticCurve.FFDHE4096:
            return "FFDHE4096";
        case Browser_TLSFingerprint_EllipticCurve.FFDHE6144:
            return "FFDHE6144";
        case Browser_TLSFingerprint_EllipticCurve.FFDHE8192:
            return "FFDHE8192";
        case Browser_TLSFingerprint_EllipticCurve.ARBITRARY_EXPLICIT_PRIME_CURVES:
            return "ARBITRARY_EXPLICIT_PRIME_CURVES";
        case Browser_TLSFingerprint_EllipticCurve.ARBITRARY_EXPLICIT_CHAR2_CURVES:
            return "ARBITRARY_EXPLICIT_CHAR2_CURVES";
        case Browser_TLSFingerprint_EllipticCurve.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.browser_TLSFingerprint_EllipticCurveToJSON = browser_TLSFingerprint_EllipticCurveToJSON;
/** https://www.rfc-editor.org/rfc/rfc4492#section-5.1.2 */
var Browser_TLSFingerprint_EllipticCurvePointFormat;
(function (Browser_TLSFingerprint_EllipticCurvePointFormat) {
    Browser_TLSFingerprint_EllipticCurvePointFormat[Browser_TLSFingerprint_EllipticCurvePointFormat["UNCOMPRESSED"] = 0] = "UNCOMPRESSED";
    Browser_TLSFingerprint_EllipticCurvePointFormat[Browser_TLSFingerprint_EllipticCurvePointFormat["ANSI_X962_COMPRESSED_PRIME"] = 1] = "ANSI_X962_COMPRESSED_PRIME";
    Browser_TLSFingerprint_EllipticCurvePointFormat[Browser_TLSFingerprint_EllipticCurvePointFormat["ANSI_X962_COMPRESSED_CHAR2"] = 2] = "ANSI_X962_COMPRESSED_CHAR2";
    Browser_TLSFingerprint_EllipticCurvePointFormat[Browser_TLSFingerprint_EllipticCurvePointFormat["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Browser_TLSFingerprint_EllipticCurvePointFormat = exports.Browser_TLSFingerprint_EllipticCurvePointFormat || (exports.Browser_TLSFingerprint_EllipticCurvePointFormat = {}));
function browser_TLSFingerprint_EllipticCurvePointFormatFromJSON(object) {
    switch (object) {
        case 0:
        case "UNCOMPRESSED":
            return Browser_TLSFingerprint_EllipticCurvePointFormat.UNCOMPRESSED;
        case 1:
        case "ANSI_X962_COMPRESSED_PRIME":
            return Browser_TLSFingerprint_EllipticCurvePointFormat.ANSI_X962_COMPRESSED_PRIME;
        case 2:
        case "ANSI_X962_COMPRESSED_CHAR2":
            return Browser_TLSFingerprint_EllipticCurvePointFormat.ANSI_X962_COMPRESSED_CHAR2;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Browser_TLSFingerprint_EllipticCurvePointFormat.UNRECOGNIZED;
    }
}
exports.browser_TLSFingerprint_EllipticCurvePointFormatFromJSON = browser_TLSFingerprint_EllipticCurvePointFormatFromJSON;
function browser_TLSFingerprint_EllipticCurvePointFormatToJSON(object) {
    switch (object) {
        case Browser_TLSFingerprint_EllipticCurvePointFormat.UNCOMPRESSED:
            return "UNCOMPRESSED";
        case Browser_TLSFingerprint_EllipticCurvePointFormat.ANSI_X962_COMPRESSED_PRIME:
            return "ANSI_X962_COMPRESSED_PRIME";
        case Browser_TLSFingerprint_EllipticCurvePointFormat.ANSI_X962_COMPRESSED_CHAR2:
            return "ANSI_X962_COMPRESSED_CHAR2";
        case Browser_TLSFingerprint_EllipticCurvePointFormat.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.browser_TLSFingerprint_EllipticCurvePointFormatToJSON = browser_TLSFingerprint_EllipticCurvePointFormatToJSON;
var GPSLocation_LocationProvider;
(function (GPSLocation_LocationProvider) {
    /** LocationProvider_NONE - Treat as random */
    GPSLocation_LocationProvider[GPSLocation_LocationProvider["LocationProvider_NONE"] = 0] = "LocationProvider_NONE";
    GPSLocation_LocationProvider[GPSLocation_LocationProvider["GPS"] = 1] = "GPS";
    GPSLocation_LocationProvider[GPSLocation_LocationProvider["NETWORK"] = 2] = "NETWORK";
    GPSLocation_LocationProvider[GPSLocation_LocationProvider["PASSIVE"] = 3] = "PASSIVE";
    GPSLocation_LocationProvider[GPSLocation_LocationProvider["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GPSLocation_LocationProvider = exports.GPSLocation_LocationProvider || (exports.GPSLocation_LocationProvider = {}));
function gPSLocation_LocationProviderFromJSON(object) {
    switch (object) {
        case 0:
        case "LocationProvider_NONE":
            return GPSLocation_LocationProvider.LocationProvider_NONE;
        case 1:
        case "GPS":
            return GPSLocation_LocationProvider.GPS;
        case 2:
        case "NETWORK":
            return GPSLocation_LocationProvider.NETWORK;
        case 3:
        case "PASSIVE":
            return GPSLocation_LocationProvider.PASSIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return GPSLocation_LocationProvider.UNRECOGNIZED;
    }
}
exports.gPSLocation_LocationProviderFromJSON = gPSLocation_LocationProviderFromJSON;
function gPSLocation_LocationProviderToJSON(object) {
    switch (object) {
        case GPSLocation_LocationProvider.LocationProvider_NONE:
            return "LocationProvider_NONE";
        case GPSLocation_LocationProvider.GPS:
            return "GPS";
        case GPSLocation_LocationProvider.NETWORK:
            return "NETWORK";
        case GPSLocation_LocationProvider.PASSIVE:
            return "PASSIVE";
        case GPSLocation_LocationProvider.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.gPSLocation_LocationProviderToJSON = gPSLocation_LocationProviderToJSON;
var CPUData_Architecture;
(function (CPUData_Architecture) {
    CPUData_Architecture[CPUData_Architecture["UNKNOWN"] = 0] = "UNKNOWN";
    CPUData_Architecture[CPUData_Architecture["ARM"] = 1] = "ARM";
    CPUData_Architecture[CPUData_Architecture["ARM64"] = 2] = "ARM64";
    CPUData_Architecture[CPUData_Architecture["MIPS"] = 3] = "MIPS";
    CPUData_Architecture[CPUData_Architecture["MIPSEL"] = 4] = "MIPSEL";
    CPUData_Architecture[CPUData_Architecture["PPC"] = 5] = "PPC";
    CPUData_Architecture[CPUData_Architecture["PPC64"] = 6] = "PPC64";
    CPUData_Architecture[CPUData_Architecture["X32"] = 7] = "X32";
    CPUData_Architecture[CPUData_Architecture["X64"] = 8] = "X64";
    CPUData_Architecture[CPUData_Architecture["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CPUData_Architecture = exports.CPUData_Architecture || (exports.CPUData_Architecture = {}));
function cPUData_ArchitectureFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return CPUData_Architecture.UNKNOWN;
        case 1:
        case "ARM":
            return CPUData_Architecture.ARM;
        case 2:
        case "ARM64":
            return CPUData_Architecture.ARM64;
        case 3:
        case "MIPS":
            return CPUData_Architecture.MIPS;
        case 4:
        case "MIPSEL":
            return CPUData_Architecture.MIPSEL;
        case 5:
        case "PPC":
            return CPUData_Architecture.PPC;
        case 6:
        case "PPC64":
            return CPUData_Architecture.PPC64;
        case 7:
        case "X32":
            return CPUData_Architecture.X32;
        case 8:
        case "X64":
            return CPUData_Architecture.X64;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CPUData_Architecture.UNRECOGNIZED;
    }
}
exports.cPUData_ArchitectureFromJSON = cPUData_ArchitectureFromJSON;
function cPUData_ArchitectureToJSON(object) {
    switch (object) {
        case CPUData_Architecture.UNKNOWN:
            return "UNKNOWN";
        case CPUData_Architecture.ARM:
            return "ARM";
        case CPUData_Architecture.ARM64:
            return "ARM64";
        case CPUData_Architecture.MIPS:
            return "MIPS";
        case CPUData_Architecture.MIPSEL:
            return "MIPSEL";
        case CPUData_Architecture.PPC:
            return "PPC";
        case CPUData_Architecture.PPC64:
            return "PPC64";
        case CPUData_Architecture.X32:
            return "X32";
        case CPUData_Architecture.X64:
            return "X64";
        case CPUData_Architecture.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.cPUData_ArchitectureToJSON = cPUData_ArchitectureToJSON;
/**
 * Src: https://apilevels.com/
 * BuildNumber defaults: https://source.android.com/docs/setup/about/build-numbers#source-code-tags-and-builds
 */
var AndroidDevice_Version;
(function (AndroidDevice_Version) {
    AndroidDevice_Version[AndroidDevice_Version["AndroidVersion_NONE"] = 0] = "AndroidVersion_NONE";
    /** V1_0 - BASE */
    AndroidDevice_Version[AndroidDevice_Version["V1_0"] = 1] = "V1_0";
    /** V1_1 - BASE_1_1 */
    AndroidDevice_Version[AndroidDevice_Version["V1_1"] = 2] = "V1_1";
    /** V1_5 - CUPCAKE */
    AndroidDevice_Version[AndroidDevice_Version["V1_5"] = 3] = "V1_5";
    /** V1_6 - DONUT */
    AndroidDevice_Version[AndroidDevice_Version["V1_6"] = 4] = "V1_6";
    /** V2 - ECLAIR */
    AndroidDevice_Version[AndroidDevice_Version["V2"] = 5] = "V2";
    /** V2_0_1 - ECLAIR_0_1 */
    AndroidDevice_Version[AndroidDevice_Version["V2_0_1"] = 6] = "V2_0_1";
    /** V2_1 - ECLAIR_MR1 */
    AndroidDevice_Version[AndroidDevice_Version["V2_1"] = 7] = "V2_1";
    /** V2_2 - FROYO */
    AndroidDevice_Version[AndroidDevice_Version["V2_2"] = 8] = "V2_2";
    /** V2_3_2 - GINGERBREAD */
    AndroidDevice_Version[AndroidDevice_Version["V2_3_2"] = 9] = "V2_3_2";
    /** V2_3_7 - GINGERBREAD_MR1 */
    AndroidDevice_Version[AndroidDevice_Version["V2_3_7"] = 10] = "V2_3_7";
    /** V3_0 - HONEYCOMB */
    AndroidDevice_Version[AndroidDevice_Version["V3_0"] = 11] = "V3_0";
    /** v3_1 - HONEYCOMB_MR1 */
    AndroidDevice_Version[AndroidDevice_Version["v3_1"] = 12] = "v3_1";
    /** V3_2 - HONEYCOMB_MR2 */
    AndroidDevice_Version[AndroidDevice_Version["V3_2"] = 13] = "V3_2";
    /** V4_0_2 - ICE_CREAM_SANDWICH */
    AndroidDevice_Version[AndroidDevice_Version["V4_0_2"] = 14] = "V4_0_2";
    /** V4_0_4 - ICE_CREAM_SANDWICH_MR1 */
    AndroidDevice_Version[AndroidDevice_Version["V4_0_4"] = 15] = "V4_0_4";
    /** V4_1 - JELLY_BEAN */
    AndroidDevice_Version[AndroidDevice_Version["V4_1"] = 16] = "V4_1";
    /** V4_2 - JELLY_BEAN_MR1 */
    AndroidDevice_Version[AndroidDevice_Version["V4_2"] = 17] = "V4_2";
    /** V4_3 - JELLY_BEAN_MR2 */
    AndroidDevice_Version[AndroidDevice_Version["V4_3"] = 18] = "V4_3";
    /** V4_4 - KITKAT */
    AndroidDevice_Version[AndroidDevice_Version["V4_4"] = 19] = "V4_4";
    /** V4_4W - KITKAT_WATCH */
    AndroidDevice_Version[AndroidDevice_Version["V4_4W"] = 20] = "V4_4W";
    /** V5_0 - LOLLIPOP / L */
    AndroidDevice_Version[AndroidDevice_Version["V5_0"] = 21] = "V5_0";
    /** V5_1 - LOLLIPOP_MR1 */
    AndroidDevice_Version[AndroidDevice_Version["V5_1"] = 22] = "V5_1";
    /** V6_0 - M */
    AndroidDevice_Version[AndroidDevice_Version["V6_0"] = 23] = "V6_0";
    /** V7_0 - N */
    AndroidDevice_Version[AndroidDevice_Version["V7_0"] = 24] = "V7_0";
    /** V7_1 - N_MR1 */
    AndroidDevice_Version[AndroidDevice_Version["V7_1"] = 25] = "V7_1";
    /** V8_0 - O */
    AndroidDevice_Version[AndroidDevice_Version["V8_0"] = 26] = "V8_0";
    /** V8_1 - O_MR1 */
    AndroidDevice_Version[AndroidDevice_Version["V8_1"] = 27] = "V8_1";
    /** V9_0 - P */
    AndroidDevice_Version[AndroidDevice_Version["V9_0"] = 28] = "V9_0";
    /** V10_0 - Q */
    AndroidDevice_Version[AndroidDevice_Version["V10_0"] = 29] = "V10_0";
    /** V11_0 - R */
    AndroidDevice_Version[AndroidDevice_Version["V11_0"] = 30] = "V11_0";
    /** V12_0 - S */
    AndroidDevice_Version[AndroidDevice_Version["V12_0"] = 31] = "V12_0";
    /** V12_0L - S_V2 */
    AndroidDevice_Version[AndroidDevice_Version["V12_0L"] = 32] = "V12_0L";
    /** V13_0 - TIRAMISU */
    AndroidDevice_Version[AndroidDevice_Version["V13_0"] = 33] = "V13_0";
    /** V14_0 - UPSIDE_DOWN_CAKE */
    AndroidDevice_Version[AndroidDevice_Version["V14_0"] = 34] = "V14_0";
    AndroidDevice_Version[AndroidDevice_Version["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AndroidDevice_Version = exports.AndroidDevice_Version || (exports.AndroidDevice_Version = {}));
function androidDevice_VersionFromJSON(object) {
    switch (object) {
        case 0:
        case "AndroidVersion_NONE":
            return AndroidDevice_Version.AndroidVersion_NONE;
        case 1:
        case "V1_0":
            return AndroidDevice_Version.V1_0;
        case 2:
        case "V1_1":
            return AndroidDevice_Version.V1_1;
        case 3:
        case "V1_5":
            return AndroidDevice_Version.V1_5;
        case 4:
        case "V1_6":
            return AndroidDevice_Version.V1_6;
        case 5:
        case "V2":
            return AndroidDevice_Version.V2;
        case 6:
        case "V2_0_1":
            return AndroidDevice_Version.V2_0_1;
        case 7:
        case "V2_1":
            return AndroidDevice_Version.V2_1;
        case 8:
        case "V2_2":
            return AndroidDevice_Version.V2_2;
        case 9:
        case "V2_3_2":
            return AndroidDevice_Version.V2_3_2;
        case 10:
        case "V2_3_7":
            return AndroidDevice_Version.V2_3_7;
        case 11:
        case "V3_0":
            return AndroidDevice_Version.V3_0;
        case 12:
        case "v3_1":
            return AndroidDevice_Version.v3_1;
        case 13:
        case "V3_2":
            return AndroidDevice_Version.V3_2;
        case 14:
        case "V4_0_2":
            return AndroidDevice_Version.V4_0_2;
        case 15:
        case "V4_0_4":
            return AndroidDevice_Version.V4_0_4;
        case 16:
        case "V4_1":
            return AndroidDevice_Version.V4_1;
        case 17:
        case "V4_2":
            return AndroidDevice_Version.V4_2;
        case 18:
        case "V4_3":
            return AndroidDevice_Version.V4_3;
        case 19:
        case "V4_4":
            return AndroidDevice_Version.V4_4;
        case 20:
        case "V4_4W":
            return AndroidDevice_Version.V4_4W;
        case 21:
        case "V5_0":
            return AndroidDevice_Version.V5_0;
        case 22:
        case "V5_1":
            return AndroidDevice_Version.V5_1;
        case 23:
        case "V6_0":
            return AndroidDevice_Version.V6_0;
        case 24:
        case "V7_0":
            return AndroidDevice_Version.V7_0;
        case 25:
        case "V7_1":
            return AndroidDevice_Version.V7_1;
        case 26:
        case "V8_0":
            return AndroidDevice_Version.V8_0;
        case 27:
        case "V8_1":
            return AndroidDevice_Version.V8_1;
        case 28:
        case "V9_0":
            return AndroidDevice_Version.V9_0;
        case 29:
        case "V10_0":
            return AndroidDevice_Version.V10_0;
        case 30:
        case "V11_0":
            return AndroidDevice_Version.V11_0;
        case 31:
        case "V12_0":
            return AndroidDevice_Version.V12_0;
        case 32:
        case "V12_0L":
            return AndroidDevice_Version.V12_0L;
        case 33:
        case "V13_0":
            return AndroidDevice_Version.V13_0;
        case 34:
        case "V14_0":
            return AndroidDevice_Version.V14_0;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AndroidDevice_Version.UNRECOGNIZED;
    }
}
exports.androidDevice_VersionFromJSON = androidDevice_VersionFromJSON;
function androidDevice_VersionToJSON(object) {
    switch (object) {
        case AndroidDevice_Version.AndroidVersion_NONE:
            return "AndroidVersion_NONE";
        case AndroidDevice_Version.V1_0:
            return "V1_0";
        case AndroidDevice_Version.V1_1:
            return "V1_1";
        case AndroidDevice_Version.V1_5:
            return "V1_5";
        case AndroidDevice_Version.V1_6:
            return "V1_6";
        case AndroidDevice_Version.V2:
            return "V2";
        case AndroidDevice_Version.V2_0_1:
            return "V2_0_1";
        case AndroidDevice_Version.V2_1:
            return "V2_1";
        case AndroidDevice_Version.V2_2:
            return "V2_2";
        case AndroidDevice_Version.V2_3_2:
            return "V2_3_2";
        case AndroidDevice_Version.V2_3_7:
            return "V2_3_7";
        case AndroidDevice_Version.V3_0:
            return "V3_0";
        case AndroidDevice_Version.v3_1:
            return "v3_1";
        case AndroidDevice_Version.V3_2:
            return "V3_2";
        case AndroidDevice_Version.V4_0_2:
            return "V4_0_2";
        case AndroidDevice_Version.V4_0_4:
            return "V4_0_4";
        case AndroidDevice_Version.V4_1:
            return "V4_1";
        case AndroidDevice_Version.V4_2:
            return "V4_2";
        case AndroidDevice_Version.V4_3:
            return "V4_3";
        case AndroidDevice_Version.V4_4:
            return "V4_4";
        case AndroidDevice_Version.V4_4W:
            return "V4_4W";
        case AndroidDevice_Version.V5_0:
            return "V5_0";
        case AndroidDevice_Version.V5_1:
            return "V5_1";
        case AndroidDevice_Version.V6_0:
            return "V6_0";
        case AndroidDevice_Version.V7_0:
            return "V7_0";
        case AndroidDevice_Version.V7_1:
            return "V7_1";
        case AndroidDevice_Version.V8_0:
            return "V8_0";
        case AndroidDevice_Version.V8_1:
            return "V8_1";
        case AndroidDevice_Version.V9_0:
            return "V9_0";
        case AndroidDevice_Version.V10_0:
            return "V10_0";
        case AndroidDevice_Version.V11_0:
            return "V11_0";
        case AndroidDevice_Version.V12_0:
            return "V12_0";
        case AndroidDevice_Version.V12_0L:
            return "V12_0L";
        case AndroidDevice_Version.V13_0:
            return "V13_0";
        case AndroidDevice_Version.V14_0:
            return "V14_0";
        case AndroidDevice_Version.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.androidDevice_VersionToJSON = androidDevice_VersionToJSON;
function createBaseBrowser() {
    return { version: "", name: "", userAgent: "", brandHeader: "", tlsFingerprint: undefined };
}
exports.Browser = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.userAgent !== "") {
            writer.uint32(26).string(message.userAgent);
        }
        if (message.brandHeader !== "") {
            writer.uint32(34).string(message.brandHeader);
        }
        if (message.tlsFingerprint !== undefined) {
            exports.Browser_TLSFingerprint.encode(message.tlsFingerprint, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBrowser();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.version = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.userAgent = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.brandHeader = reader.string();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.tlsFingerprint = exports.Browser_TLSFingerprint.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            version: isSet(object.version) ? String(object.version) : "",
            name: isSet(object.name) ? String(object.name) : "",
            userAgent: isSet(object.userAgent) ? String(object.userAgent) : "",
            brandHeader: isSet(object.brandHeader) ? String(object.brandHeader) : "",
            tlsFingerprint: isSet(object.tlsFingerprint) ? exports.Browser_TLSFingerprint.fromJSON(object.tlsFingerprint) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.name !== undefined && (obj.name = message.name);
        message.userAgent !== undefined && (obj.userAgent = message.userAgent);
        message.brandHeader !== undefined && (obj.brandHeader = message.brandHeader);
        message.tlsFingerprint !== undefined &&
            (obj.tlsFingerprint = message.tlsFingerprint ? exports.Browser_TLSFingerprint.toJSON(message.tlsFingerprint) : undefined);
        return obj;
    },
    create(base) {
        return exports.Browser.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBrowser();
        message.version = object.version ?? "";
        message.name = object.name ?? "";
        message.userAgent = object.userAgent ?? "";
        message.brandHeader = object.brandHeader ?? "";
        message.tlsFingerprint = (object.tlsFingerprint !== undefined && object.tlsFingerprint !== null)
            ? exports.Browser_TLSFingerprint.fromPartial(object.tlsFingerprint)
            : undefined;
        return message;
    },
};
function createBaseBrowser_TLSFingerprint() {
    return { version: 0, cipherSuites: [], extensions: [], ellipticCurves: [], ellipticCurvePointFormats: [] };
}
exports.Browser_TLSFingerprint = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== 0) {
            writer.uint32(8).int32(message.version);
        }
        writer.uint32(18).fork();
        for (const v of message.cipherSuites) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(26).fork();
        for (const v of message.extensions) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(34).fork();
        for (const v of message.ellipticCurves) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(42).fork();
        for (const v of message.ellipticCurvePointFormats) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBrowser_TLSFingerprint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.version = reader.int32();
                    continue;
                case 2:
                    if (tag == 16) {
                        message.cipherSuites.push(reader.int32());
                        continue;
                    }
                    if (tag == 18) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.cipherSuites.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 3:
                    if (tag == 24) {
                        message.extensions.push(reader.int32());
                        continue;
                    }
                    if (tag == 26) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.extensions.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 4:
                    if (tag == 32) {
                        message.ellipticCurves.push(reader.int32());
                        continue;
                    }
                    if (tag == 34) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.ellipticCurves.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 5:
                    if (tag == 40) {
                        message.ellipticCurvePointFormats.push(reader.int32());
                        continue;
                    }
                    if (tag == 42) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.ellipticCurvePointFormats.push(reader.int32());
                        }
                        continue;
                    }
                    break;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            version: isSet(object.version) ? browser_TLSFingerprint_ProtocolVersionFromJSON(object.version) : 0,
            cipherSuites: Array.isArray(object?.cipherSuites)
                ? object.cipherSuites.map((e) => browser_TLSFingerprint_CipherSuiteFromJSON(e))
                : [],
            extensions: Array.isArray(object?.extensions)
                ? object.extensions.map((e) => browser_TLSFingerprint_ExtensionsFromJSON(e))
                : [],
            ellipticCurves: Array.isArray(object?.ellipticCurves)
                ? object.ellipticCurves.map((e) => browser_TLSFingerprint_EllipticCurveFromJSON(e))
                : [],
            ellipticCurvePointFormats: Array.isArray(object?.ellipticCurvePointFormats)
                ? object.ellipticCurvePointFormats.map((e) => browser_TLSFingerprint_EllipticCurvePointFormatFromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = browser_TLSFingerprint_ProtocolVersionToJSON(message.version));
        if (message.cipherSuites) {
            obj.cipherSuites = message.cipherSuites.map((e) => browser_TLSFingerprint_CipherSuiteToJSON(e));
        }
        else {
            obj.cipherSuites = [];
        }
        if (message.extensions) {
            obj.extensions = message.extensions.map((e) => browser_TLSFingerprint_ExtensionsToJSON(e));
        }
        else {
            obj.extensions = [];
        }
        if (message.ellipticCurves) {
            obj.ellipticCurves = message.ellipticCurves.map((e) => browser_TLSFingerprint_EllipticCurveToJSON(e));
        }
        else {
            obj.ellipticCurves = [];
        }
        if (message.ellipticCurvePointFormats) {
            obj.ellipticCurvePointFormats = message.ellipticCurvePointFormats.map((e) => browser_TLSFingerprint_EllipticCurvePointFormatToJSON(e));
        }
        else {
            obj.ellipticCurvePointFormats = [];
        }
        return obj;
    },
    create(base) {
        return exports.Browser_TLSFingerprint.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBrowser_TLSFingerprint();
        message.version = object.version ?? 0;
        message.cipherSuites = object.cipherSuites?.map((e) => e) || [];
        message.extensions = object.extensions?.map((e) => e) || [];
        message.ellipticCurves = object.ellipticCurves?.map((e) => e) || [];
        message.ellipticCurvePointFormats = object.ellipticCurvePointFormats?.map((e) => e) || [];
        return message;
    },
};
function createBaseGPSLocation() {
    return { longitude: 0, latitude: 0, altitude: 0, provider: 0 };
}
exports.GPSLocation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.longitude !== 0) {
            writer.uint32(9).double(message.longitude);
        }
        if (message.latitude !== 0) {
            writer.uint32(17).double(message.latitude);
        }
        if (message.altitude !== 0) {
            writer.uint32(25).double(message.altitude);
        }
        if (message.provider !== 0) {
            writer.uint32(32).int32(message.provider);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGPSLocation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 9) {
                        break;
                    }
                    message.longitude = reader.double();
                    continue;
                case 2:
                    if (tag != 17) {
                        break;
                    }
                    message.latitude = reader.double();
                    continue;
                case 3:
                    if (tag != 25) {
                        break;
                    }
                    message.altitude = reader.double();
                    continue;
                case 4:
                    if (tag != 32) {
                        break;
                    }
                    message.provider = reader.int32();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            longitude: isSet(object.longitude) ? Number(object.longitude) : 0,
            latitude: isSet(object.latitude) ? Number(object.latitude) : 0,
            altitude: isSet(object.altitude) ? Number(object.altitude) : 0,
            provider: isSet(object.provider) ? gPSLocation_LocationProviderFromJSON(object.provider) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.longitude !== undefined && (obj.longitude = message.longitude);
        message.latitude !== undefined && (obj.latitude = message.latitude);
        message.altitude !== undefined && (obj.altitude = message.altitude);
        message.provider !== undefined && (obj.provider = gPSLocation_LocationProviderToJSON(message.provider));
        return obj;
    },
    create(base) {
        return exports.GPSLocation.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGPSLocation();
        message.longitude = object.longitude ?? 0;
        message.latitude = object.latitude ?? 0;
        message.altitude = object.altitude ?? 0;
        message.provider = object.provider ?? 0;
        return message;
    },
};
function createBaseLocale() {
    return { language: "", countryISO: "" };
}
exports.Locale = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.language !== "") {
            writer.uint32(10).string(message.language);
        }
        if (message.countryISO !== "") {
            writer.uint32(18).string(message.countryISO);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLocale();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.language = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.countryISO = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            language: isSet(object.language) ? String(object.language) : "",
            countryISO: isSet(object.countryISO) ? String(object.countryISO) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.language !== undefined && (obj.language = message.language);
        message.countryISO !== undefined && (obj.countryISO = message.countryISO);
        return obj;
    },
    create(base) {
        return exports.Locale.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLocale();
        message.language = object.language ?? "";
        message.countryISO = object.countryISO ?? "";
        return message;
    },
};
function createBaseSIMCard() {
    return {
        phoneNumber: "",
        MCC: "",
        MNC: "",
        carrier: "",
        countryISO: "",
        countryCode: "",
        imei: undefined,
        meid: undefined,
    };
}
exports.SIMCard = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.phoneNumber !== "") {
            writer.uint32(10).string(message.phoneNumber);
        }
        if (message.MCC !== "") {
            writer.uint32(18).string(message.MCC);
        }
        if (message.MNC !== "") {
            writer.uint32(26).string(message.MNC);
        }
        if (message.carrier !== "") {
            writer.uint32(34).string(message.carrier);
        }
        if (message.countryISO !== "") {
            writer.uint32(42).string(message.countryISO);
        }
        if (message.countryCode !== "") {
            writer.uint32(50).string(message.countryCode);
        }
        if (message.imei !== undefined) {
            exports.SIMCard_IMEI.encode(message.imei, writer.uint32(58).fork()).ldelim();
        }
        if (message.meid !== undefined) {
            exports.SIMCard_MEID.encode(message.meid, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSIMCard();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.phoneNumber = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.MCC = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.MNC = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.carrier = reader.string();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.countryISO = reader.string();
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.countryCode = reader.string();
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.imei = exports.SIMCard_IMEI.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag != 66) {
                        break;
                    }
                    message.meid = exports.SIMCard_MEID.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            phoneNumber: isSet(object.phoneNumber) ? String(object.phoneNumber) : "",
            MCC: isSet(object.MCC) ? String(object.MCC) : "",
            MNC: isSet(object.MNC) ? String(object.MNC) : "",
            carrier: isSet(object.carrier) ? String(object.carrier) : "",
            countryISO: isSet(object.countryISO) ? String(object.countryISO) : "",
            countryCode: isSet(object.countryCode) ? String(object.countryCode) : "",
            imei: isSet(object.imei) ? exports.SIMCard_IMEI.fromJSON(object.imei) : undefined,
            meid: isSet(object.meid) ? exports.SIMCard_MEID.fromJSON(object.meid) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.phoneNumber !== undefined && (obj.phoneNumber = message.phoneNumber);
        message.MCC !== undefined && (obj.MCC = message.MCC);
        message.MNC !== undefined && (obj.MNC = message.MNC);
        message.carrier !== undefined && (obj.carrier = message.carrier);
        message.countryISO !== undefined && (obj.countryISO = message.countryISO);
        message.countryCode !== undefined && (obj.countryCode = message.countryCode);
        message.imei !== undefined && (obj.imei = message.imei ? exports.SIMCard_IMEI.toJSON(message.imei) : undefined);
        message.meid !== undefined && (obj.meid = message.meid ? exports.SIMCard_MEID.toJSON(message.meid) : undefined);
        return obj;
    },
    create(base) {
        return exports.SIMCard.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSIMCard();
        message.phoneNumber = object.phoneNumber ?? "";
        message.MCC = object.MCC ?? "";
        message.MNC = object.MNC ?? "";
        message.carrier = object.carrier ?? "";
        message.countryISO = object.countryISO ?? "";
        message.countryCode = object.countryCode ?? "";
        message.imei = (object.imei !== undefined && object.imei !== null)
            ? exports.SIMCard_IMEI.fromPartial(object.imei)
            : undefined;
        message.meid = (object.meid !== undefined && object.meid !== null)
            ? exports.SIMCard_MEID.fromPartial(object.meid)
            : undefined;
        return message;
    },
};
function createBaseSIMCard_IMEI() {
    return { TAC: "", imei: "" };
}
exports.SIMCard_IMEI = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.TAC !== "") {
            writer.uint32(10).string(message.TAC);
        }
        if (message.imei !== "") {
            writer.uint32(18).string(message.imei);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSIMCard_IMEI();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.TAC = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.imei = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { TAC: isSet(object.TAC) ? String(object.TAC) : "", imei: isSet(object.imei) ? String(object.imei) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.TAC !== undefined && (obj.TAC = message.TAC);
        message.imei !== undefined && (obj.imei = message.imei);
        return obj;
    },
    create(base) {
        return exports.SIMCard_IMEI.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSIMCard_IMEI();
        message.TAC = object.TAC ?? "";
        message.imei = object.imei ?? "";
        return message;
    },
};
function createBaseSIMCard_MEID() {
    return { RegionCode: "", ManufacturerCode: "", meid: "" };
}
exports.SIMCard_MEID = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.RegionCode !== "") {
            writer.uint32(10).string(message.RegionCode);
        }
        if (message.ManufacturerCode !== "") {
            writer.uint32(18).string(message.ManufacturerCode);
        }
        if (message.meid !== "") {
            writer.uint32(26).string(message.meid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSIMCard_MEID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.RegionCode = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.ManufacturerCode = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.meid = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            RegionCode: isSet(object.RegionCode) ? String(object.RegionCode) : "",
            ManufacturerCode: isSet(object.ManufacturerCode) ? String(object.ManufacturerCode) : "",
            meid: isSet(object.meid) ? String(object.meid) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.RegionCode !== undefined && (obj.RegionCode = message.RegionCode);
        message.ManufacturerCode !== undefined && (obj.ManufacturerCode = message.ManufacturerCode);
        message.meid !== undefined && (obj.meid = message.meid);
        return obj;
    },
    create(base) {
        return exports.SIMCard_MEID.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSIMCard_MEID();
        message.RegionCode = object.RegionCode ?? "";
        message.ManufacturerCode = object.ManufacturerCode ?? "";
        message.meid = object.meid ?? "";
        return message;
    },
};
function createBaseMAC() {
    return { OUI: "", address: "" };
}
exports.MAC = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.OUI !== "") {
            writer.uint32(10).string(message.OUI);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMAC();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.OUI = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            OUI: isSet(object.OUI) ? String(object.OUI) : "",
            address: isSet(object.address) ? String(object.address) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.OUI !== undefined && (obj.OUI = message.OUI);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    create(base) {
        return exports.MAC.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMAC();
        message.OUI = object.OUI ?? "";
        message.address = object.address ?? "";
        return message;
    },
};
function createBaseTimezone() {
    return { name: "" };
}
exports.Timezone = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimezone();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { name: isSet(object.name) ? String(object.name) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    create(base) {
        return exports.Timezone.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTimezone();
        message.name = object.name ?? "";
        return message;
    },
};
function createBaseScreenData() {
    return { density: 0, resolutionHorizontal: 0, resolutionVertical: 0 };
}
exports.ScreenData = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.density !== 0) {
            writer.uint32(8).int32(message.density);
        }
        if (message.resolutionHorizontal !== 0) {
            writer.uint32(16).int32(message.resolutionHorizontal);
        }
        if (message.resolutionVertical !== 0) {
            writer.uint32(24).int32(message.resolutionVertical);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseScreenData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.density = reader.int32();
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.resolutionHorizontal = reader.int32();
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.resolutionVertical = reader.int32();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            density: isSet(object.density) ? Number(object.density) : 0,
            resolutionHorizontal: isSet(object.resolutionHorizontal) ? Number(object.resolutionHorizontal) : 0,
            resolutionVertical: isSet(object.resolutionVertical) ? Number(object.resolutionVertical) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.density !== undefined && (obj.density = Math.round(message.density));
        message.resolutionHorizontal !== undefined && (obj.resolutionHorizontal = Math.round(message.resolutionHorizontal));
        message.resolutionVertical !== undefined && (obj.resolutionVertical = Math.round(message.resolutionVertical));
        return obj;
    },
    create(base) {
        return exports.ScreenData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseScreenData();
        message.density = object.density ?? 0;
        message.resolutionHorizontal = object.resolutionHorizontal ?? 0;
        message.resolutionVertical = object.resolutionVertical ?? 0;
        return message;
    },
};
function createBaseCPUData() {
    return { arch: 0, archName: "", model: "", brand: "", board: "", abiList: [] };
}
exports.CPUData = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.arch !== 0) {
            writer.uint32(8).int32(message.arch);
        }
        if (message.archName !== "") {
            writer.uint32(18).string(message.archName);
        }
        if (message.model !== "") {
            writer.uint32(26).string(message.model);
        }
        if (message.brand !== "") {
            writer.uint32(34).string(message.brand);
        }
        if (message.board !== "") {
            writer.uint32(42).string(message.board);
        }
        for (const v of message.abiList) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCPUData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.arch = reader.int32();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.archName = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.model = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.brand = reader.string();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.board = reader.string();
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.abiList.push(reader.string());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            arch: isSet(object.arch) ? cPUData_ArchitectureFromJSON(object.arch) : 0,
            archName: isSet(object.archName) ? String(object.archName) : "",
            model: isSet(object.model) ? String(object.model) : "",
            brand: isSet(object.brand) ? String(object.brand) : "",
            board: isSet(object.board) ? String(object.board) : "",
            abiList: Array.isArray(object?.abiList) ? object.abiList.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.arch !== undefined && (obj.arch = cPUData_ArchitectureToJSON(message.arch));
        message.archName !== undefined && (obj.archName = message.archName);
        message.model !== undefined && (obj.model = message.model);
        message.brand !== undefined && (obj.brand = message.brand);
        message.board !== undefined && (obj.board = message.board);
        if (message.abiList) {
            obj.abiList = message.abiList.map((e) => e);
        }
        else {
            obj.abiList = [];
        }
        return obj;
    },
    create(base) {
        return exports.CPUData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCPUData();
        message.arch = object.arch ?? 0;
        message.archName = object.archName ?? "";
        message.model = object.model ?? "";
        message.brand = object.brand ?? "";
        message.board = object.board ?? "";
        message.abiList = object.abiList?.map((e) => e) || [];
        return message;
    },
};
function createBaseAndroidDevice() {
    return {
        id: undefined,
        version: 0,
        build: undefined,
        software: undefined,
        screen: undefined,
        cpu: undefined,
        locale: undefined,
        location: undefined,
        timezone: undefined,
        macAddress: undefined,
        simSlots: [],
    };
}
exports.AndroidDevice = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            exports.AndroidDevice_ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.version !== 0) {
            writer.uint32(16).int32(message.version);
        }
        if (message.build !== undefined) {
            exports.AndroidDevice_BuildData.encode(message.build, writer.uint32(26).fork()).ldelim();
        }
        if (message.software !== undefined) {
            exports.AndroidDevice_DeviceSoftware.encode(message.software, writer.uint32(34).fork()).ldelim();
        }
        if (message.screen !== undefined) {
            exports.ScreenData.encode(message.screen, writer.uint32(42).fork()).ldelim();
        }
        if (message.cpu !== undefined) {
            exports.CPUData.encode(message.cpu, writer.uint32(50).fork()).ldelim();
        }
        if (message.locale !== undefined) {
            exports.Locale.encode(message.locale, writer.uint32(58).fork()).ldelim();
        }
        if (message.location !== undefined) {
            exports.GPSLocation.encode(message.location, writer.uint32(66).fork()).ldelim();
        }
        if (message.timezone !== undefined) {
            exports.Timezone.encode(message.timezone, writer.uint32(74).fork()).ldelim();
        }
        if (message.macAddress !== undefined) {
            exports.MAC.encode(message.macAddress, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.simSlots) {
            exports.SIMCard.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAndroidDevice();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.id = exports.AndroidDevice_ID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.version = reader.int32();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.build = exports.AndroidDevice_BuildData.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.software = exports.AndroidDevice_DeviceSoftware.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.screen = exports.ScreenData.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.cpu = exports.CPUData.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.locale = exports.Locale.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag != 66) {
                        break;
                    }
                    message.location = exports.GPSLocation.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag != 74) {
                        break;
                    }
                    message.timezone = exports.Timezone.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag != 82) {
                        break;
                    }
                    message.macAddress = exports.MAC.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag != 90) {
                        break;
                    }
                    message.simSlots.push(exports.SIMCard.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? exports.AndroidDevice_ID.fromJSON(object.id) : undefined,
            version: isSet(object.version) ? androidDevice_VersionFromJSON(object.version) : 0,
            build: isSet(object.build) ? exports.AndroidDevice_BuildData.fromJSON(object.build) : undefined,
            software: isSet(object.software) ? exports.AndroidDevice_DeviceSoftware.fromJSON(object.software) : undefined,
            screen: isSet(object.screen) ? exports.ScreenData.fromJSON(object.screen) : undefined,
            cpu: isSet(object.cpu) ? exports.CPUData.fromJSON(object.cpu) : undefined,
            locale: isSet(object.locale) ? exports.Locale.fromJSON(object.locale) : undefined,
            location: isSet(object.location) ? exports.GPSLocation.fromJSON(object.location) : undefined,
            timezone: isSet(object.timezone) ? exports.Timezone.fromJSON(object.timezone) : undefined,
            macAddress: isSet(object.macAddress) ? exports.MAC.fromJSON(object.macAddress) : undefined,
            simSlots: Array.isArray(object?.simSlots) ? object.simSlots.map((e) => exports.SIMCard.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id ? exports.AndroidDevice_ID.toJSON(message.id) : undefined);
        message.version !== undefined && (obj.version = androidDevice_VersionToJSON(message.version));
        message.build !== undefined &&
            (obj.build = message.build ? exports.AndroidDevice_BuildData.toJSON(message.build) : undefined);
        message.software !== undefined &&
            (obj.software = message.software ? exports.AndroidDevice_DeviceSoftware.toJSON(message.software) : undefined);
        message.screen !== undefined && (obj.screen = message.screen ? exports.ScreenData.toJSON(message.screen) : undefined);
        message.cpu !== undefined && (obj.cpu = message.cpu ? exports.CPUData.toJSON(message.cpu) : undefined);
        message.locale !== undefined && (obj.locale = message.locale ? exports.Locale.toJSON(message.locale) : undefined);
        message.location !== undefined &&
            (obj.location = message.location ? exports.GPSLocation.toJSON(message.location) : undefined);
        message.timezone !== undefined && (obj.timezone = message.timezone ? exports.Timezone.toJSON(message.timezone) : undefined);
        message.macAddress !== undefined &&
            (obj.macAddress = message.macAddress ? exports.MAC.toJSON(message.macAddress) : undefined);
        if (message.simSlots) {
            obj.simSlots = message.simSlots.map((e) => e ? exports.SIMCard.toJSON(e) : undefined);
        }
        else {
            obj.simSlots = [];
        }
        return obj;
    },
    create(base) {
        return exports.AndroidDevice.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAndroidDevice();
        message.id = (object.id !== undefined && object.id !== null) ? exports.AndroidDevice_ID.fromPartial(object.id) : undefined;
        message.version = object.version ?? 0;
        message.build = (object.build !== undefined && object.build !== null)
            ? exports.AndroidDevice_BuildData.fromPartial(object.build)
            : undefined;
        message.software = (object.software !== undefined && object.software !== null)
            ? exports.AndroidDevice_DeviceSoftware.fromPartial(object.software)
            : undefined;
        message.screen = (object.screen !== undefined && object.screen !== null)
            ? exports.ScreenData.fromPartial(object.screen)
            : undefined;
        message.cpu = (object.cpu !== undefined && object.cpu !== null) ? exports.CPUData.fromPartial(object.cpu) : undefined;
        message.locale = (object.locale !== undefined && object.locale !== null)
            ? exports.Locale.fromPartial(object.locale)
            : undefined;
        message.location = (object.location !== undefined && object.location !== null)
            ? exports.GPSLocation.fromPartial(object.location)
            : undefined;
        message.timezone = (object.timezone !== undefined && object.timezone !== null)
            ? exports.Timezone.fromPartial(object.timezone)
            : undefined;
        message.macAddress = (object.macAddress !== undefined && object.macAddress !== null)
            ? exports.MAC.fromPartial(object.macAddress)
            : undefined;
        message.simSlots = object.simSlots?.map((e) => exports.SIMCard.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAndroidDevice_ID() {
    return { id: 0 };
}
exports.AndroidDevice_ID = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAndroidDevice_ID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.id = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? Number(object.id) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        return obj;
    },
    create(base) {
        return exports.AndroidDevice_ID.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAndroidDevice_ID();
        message.id = object.id ?? 0;
        return message;
    },
};
function createBaseAndroidDevice_BuildData() {
    return {
        board: "",
        bootloader: "",
        brand: "",
        device: "",
        display: "",
        fingerprint: "",
        hardware: "",
        id: "",
        manufacturer: "",
        model: "",
        odmSku: "",
        product: "",
        sku: "",
        socManufacturer: "",
        socModel: "",
        tags: "",
        type: "",
        incrementalVersion: "",
    };
}
exports.AndroidDevice_BuildData = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.board !== "") {
            writer.uint32(10).string(message.board);
        }
        if (message.bootloader !== "") {
            writer.uint32(18).string(message.bootloader);
        }
        if (message.brand !== "") {
            writer.uint32(26).string(message.brand);
        }
        if (message.device !== "") {
            writer.uint32(34).string(message.device);
        }
        if (message.display !== "") {
            writer.uint32(42).string(message.display);
        }
        if (message.fingerprint !== "") {
            writer.uint32(50).string(message.fingerprint);
        }
        if (message.hardware !== "") {
            writer.uint32(58).string(message.hardware);
        }
        if (message.id !== "") {
            writer.uint32(66).string(message.id);
        }
        if (message.manufacturer !== "") {
            writer.uint32(74).string(message.manufacturer);
        }
        if (message.model !== "") {
            writer.uint32(82).string(message.model);
        }
        if (message.odmSku !== "") {
            writer.uint32(90).string(message.odmSku);
        }
        if (message.product !== "") {
            writer.uint32(98).string(message.product);
        }
        if (message.sku !== "") {
            writer.uint32(106).string(message.sku);
        }
        if (message.socManufacturer !== "") {
            writer.uint32(114).string(message.socManufacturer);
        }
        if (message.socModel !== "") {
            writer.uint32(122).string(message.socModel);
        }
        if (message.tags !== "") {
            writer.uint32(130).string(message.tags);
        }
        if (message.type !== "") {
            writer.uint32(138).string(message.type);
        }
        if (message.incrementalVersion !== "") {
            writer.uint32(146).string(message.incrementalVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAndroidDevice_BuildData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.board = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.bootloader = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.brand = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.device = reader.string();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.display = reader.string();
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.fingerprint = reader.string();
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.hardware = reader.string();
                    continue;
                case 8:
                    if (tag != 66) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 9:
                    if (tag != 74) {
                        break;
                    }
                    message.manufacturer = reader.string();
                    continue;
                case 10:
                    if (tag != 82) {
                        break;
                    }
                    message.model = reader.string();
                    continue;
                case 11:
                    if (tag != 90) {
                        break;
                    }
                    message.odmSku = reader.string();
                    continue;
                case 12:
                    if (tag != 98) {
                        break;
                    }
                    message.product = reader.string();
                    continue;
                case 13:
                    if (tag != 106) {
                        break;
                    }
                    message.sku = reader.string();
                    continue;
                case 14:
                    if (tag != 114) {
                        break;
                    }
                    message.socManufacturer = reader.string();
                    continue;
                case 15:
                    if (tag != 122) {
                        break;
                    }
                    message.socModel = reader.string();
                    continue;
                case 16:
                    if (tag != 130) {
                        break;
                    }
                    message.tags = reader.string();
                    continue;
                case 17:
                    if (tag != 138) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 18:
                    if (tag != 146) {
                        break;
                    }
                    message.incrementalVersion = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            board: isSet(object.board) ? String(object.board) : "",
            bootloader: isSet(object.bootloader) ? String(object.bootloader) : "",
            brand: isSet(object.brand) ? String(object.brand) : "",
            device: isSet(object.device) ? String(object.device) : "",
            display: isSet(object.display) ? String(object.display) : "",
            fingerprint: isSet(object.fingerprint) ? String(object.fingerprint) : "",
            hardware: isSet(object.hardware) ? String(object.hardware) : "",
            id: isSet(object.id) ? String(object.id) : "",
            manufacturer: isSet(object.manufacturer) ? String(object.manufacturer) : "",
            model: isSet(object.model) ? String(object.model) : "",
            odmSku: isSet(object.odmSku) ? String(object.odmSku) : "",
            product: isSet(object.product) ? String(object.product) : "",
            sku: isSet(object.sku) ? String(object.sku) : "",
            socManufacturer: isSet(object.socManufacturer) ? String(object.socManufacturer) : "",
            socModel: isSet(object.socModel) ? String(object.socModel) : "",
            tags: isSet(object.tags) ? String(object.tags) : "",
            type: isSet(object.type) ? String(object.type) : "",
            incrementalVersion: isSet(object.incrementalVersion) ? String(object.incrementalVersion) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.board !== undefined && (obj.board = message.board);
        message.bootloader !== undefined && (obj.bootloader = message.bootloader);
        message.brand !== undefined && (obj.brand = message.brand);
        message.device !== undefined && (obj.device = message.device);
        message.display !== undefined && (obj.display = message.display);
        message.fingerprint !== undefined && (obj.fingerprint = message.fingerprint);
        message.hardware !== undefined && (obj.hardware = message.hardware);
        message.id !== undefined && (obj.id = message.id);
        message.manufacturer !== undefined && (obj.manufacturer = message.manufacturer);
        message.model !== undefined && (obj.model = message.model);
        message.odmSku !== undefined && (obj.odmSku = message.odmSku);
        message.product !== undefined && (obj.product = message.product);
        message.sku !== undefined && (obj.sku = message.sku);
        message.socManufacturer !== undefined && (obj.socManufacturer = message.socManufacturer);
        message.socModel !== undefined && (obj.socModel = message.socModel);
        message.tags !== undefined && (obj.tags = message.tags);
        message.type !== undefined && (obj.type = message.type);
        message.incrementalVersion !== undefined && (obj.incrementalVersion = message.incrementalVersion);
        return obj;
    },
    create(base) {
        return exports.AndroidDevice_BuildData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAndroidDevice_BuildData();
        message.board = object.board ?? "";
        message.bootloader = object.bootloader ?? "";
        message.brand = object.brand ?? "";
        message.device = object.device ?? "";
        message.display = object.display ?? "";
        message.fingerprint = object.fingerprint ?? "";
        message.hardware = object.hardware ?? "";
        message.id = object.id ?? "";
        message.manufacturer = object.manufacturer ?? "";
        message.model = object.model ?? "";
        message.odmSku = object.odmSku ?? "";
        message.product = object.product ?? "";
        message.sku = object.sku ?? "";
        message.socManufacturer = object.socManufacturer ?? "";
        message.socModel = object.socModel ?? "";
        message.tags = object.tags ?? "";
        message.type = object.type ?? "";
        message.incrementalVersion = object.incrementalVersion ?? "";
        return message;
    },
};
function createBaseAndroidDevice_DeviceSoftware() {
    return { softwareMetaData: {}, appMetaData: {} };
}
exports.AndroidDevice_DeviceSoftware = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        Object.entries(message.softwareMetaData).forEach(([key, value]) => {
            exports.AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry.encode({ key: key, value }, writer.uint32(10).fork())
                .ldelim();
        });
        Object.entries(message.appMetaData).forEach(([key, value]) => {
            exports.AndroidDevice_DeviceSoftware_AppMetaDataEntry.encode({ key: key, value }, writer.uint32(18).fork())
                .ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAndroidDevice_DeviceSoftware();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    const entry1 = exports.AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.softwareMetaData[entry1.key] = entry1.value;
                    }
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    const entry2 = exports.AndroidDevice_DeviceSoftware_AppMetaDataEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.appMetaData[entry2.key] = entry2.value;
                    }
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            softwareMetaData: isObject(object.softwareMetaData)
                ? Object.entries(object.softwareMetaData).reduce((acc, [key, value]) => {
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
            appMetaData: isObject(object.appMetaData)
                ? Object.entries(object.appMetaData).reduce((acc, [key, value]) => {
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        obj.softwareMetaData = {};
        if (message.softwareMetaData) {
            Object.entries(message.softwareMetaData).forEach(([k, v]) => {
                obj.softwareMetaData[k] = v;
            });
        }
        obj.appMetaData = {};
        if (message.appMetaData) {
            Object.entries(message.appMetaData).forEach(([k, v]) => {
                obj.appMetaData[k] = v;
            });
        }
        return obj;
    },
    create(base) {
        return exports.AndroidDevice_DeviceSoftware.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAndroidDevice_DeviceSoftware();
        message.softwareMetaData = Object.entries(object.softwareMetaData ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.appMetaData = Object.entries(object.appMetaData ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseAndroidDevice_DeviceSoftware_SoftwareMetaDataEntry() {
    return { key: "", value: "" };
}
exports.AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAndroidDevice_DeviceSoftware_SoftwareMetaDataEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.value = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    create(base) {
        return exports.AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAndroidDevice_DeviceSoftware_SoftwareMetaDataEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
};
function createBaseAndroidDevice_DeviceSoftware_AppMetaDataEntry() {
    return { key: "", value: "" };
}
exports.AndroidDevice_DeviceSoftware_AppMetaDataEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAndroidDevice_DeviceSoftware_AppMetaDataEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.value = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    create(base) {
        return exports.AndroidDevice_DeviceSoftware_AppMetaDataEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAndroidDevice_DeviceSoftware_AppMetaDataEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
};
var tsProtoGlobalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
