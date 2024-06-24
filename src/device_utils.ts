/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "device_utils";

export interface Browser {
  version?: string;
  name?: string;
  userAgent?: string;
  brandHeader?: string;
  platformHeader?: string;
  mobileHeader?: string;
  tlsFingerprint?: Browser_TLSFingerprint;
  httpFingerprint?: Browser_HTTPFingerprint;
  /** src: https://kaliiiiiiiiii.github.io/driverless-fp-collector/ */
  appCodeName?: string;
  appName?: string;
  appVersion?: string;
  cookieEnabled?: boolean;
  deviceMemory?: number;
  doNotTrack?: number;
  hardwareConcurrency?: number;
  language?: string;
  languages?: string[];
  maxTouchPoints?: number;
  pdfViewerEnabled?: boolean;
  platform?: string;
  product?: string;
  productSub?: string;
  vendor?: string;
  vendorSub?: string;
  webdriver?: boolean;
  devicePixelRatio?: number;
  innerWidth?: number;
  innerHeight?: number;
  outerWidth?: number;
  outerHeight?: number;
  screen?: Browser_BrowserScreen;
  webGPU?: Browser_WebGPU;
  speechSynthesis?: Browser_SpeechSynthesis[];
  plugins?: Browser_Plugin[];
  highEntropyValues?: Browser_HighEntropyValues;
  webRTC?: Browser_WebRTC;
  availableFonts?: Browser_BrowserCollection;
  navigator?: Browser_BrowserCollection;
  window?: Browser_BrowserCollection;
  document?: Browser_BrowserCollection;
  documentElement?: Browser_BrowserCollection;
  audioTypes?: Browser_BrowserCollection;
  videoTypes?: Browser_BrowserCollection;
  css?: Browser_BrowserCollection;
  gl?: Browser_BrowserCollection;
  gl2?: Browser_BrowserCollection;
  glExperimental?: Browser_BrowserCollection;
}

export interface Browser_TLSFingerprint {
  version?: Browser_TLSFingerprint_ProtocolVersion;
  cipherSuites?: Browser_TLSFingerprint_CipherSuite[];
  extensions?: Browser_TLSFingerprint_Extension[];
  ellipticCurves?: Browser_TLSFingerprint_EllipticCurve[];
  ellipticCurvePointFormats?: Browser_TLSFingerprint_EllipticCurvePointFormat[];
  extensionData?: Browser_TLSFingerprint_ExtensionData[];
}

/**
 * - RFC 5246 (TLS 1.2): https://tools.ietf.org/html/rfc5246
 * - RFC 6101 (SSL 3.0): https://tools.ietf.org/html/rfc6101
 * https://github.com/openssl/openssl/blob/c04e78f0c69201226430fed14c291c281da47f2d/include/openssl/prov_ssl.h
 */
export enum Browser_TLSFingerprint_ProtocolVersion {
  UNKNOWN = 0,
  SSL3 = 768,
  TLS1 = 769,
  TLS1_1 = 770,
  TLS1_2 = 771,
  TLS1_3 = 772,
  DTLS1 = 65279,
  DTLS1_2 = 65277,
  DTLS1_BAD = 256,
  UNRECOGNIZED = -1,
}

export function browser_TLSFingerprint_ProtocolVersionFromJSON(object: any): Browser_TLSFingerprint_ProtocolVersion {
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

export function browser_TLSFingerprint_ProtocolVersionToJSON(object: Browser_TLSFingerprint_ProtocolVersion): string {
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

/** - TLS cipher-suites: https://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml#tls-parameters-4 */
export enum Browser_TLSFingerprint_CipherSuite {
  TLS_NULL_WITH_NULL_NULL = 0,
  TLS_RSA_WITH_NULL_MD5 = 1,
  TLS_RSA_WITH_NULL_SHA = 2,
  TLS_RSA_EXPORT_WITH_RC4_40_MD5 = 3,
  TLS_RSA_WITH_RC4_128_MD5 = 4,
  TLS_RSA_WITH_RC4_128_SHA = 5,
  TLS_RSA_EXPORT_WITH_RC2_CBC_40_MD5 = 6,
  TLS_RSA_WITH_IDEA_CBC_SHA = 7,
  TLS_RSA_EXPORT_WITH_DES40_CBC_SHA = 8,
  TLS_RSA_WITH_DES_CBC_SHA = 9,
  TLS_RSA_WITH_3DES_EDE_CBC_SHA = 10,
  TLS_DH_DSS_EXPORT_WITH_DES40_CBC_SHA = 11,
  TLS_DH_DSS_WITH_DES_CBC_SHA = 12,
  TLS_DH_DSS_WITH_3DES_EDE_CBC_SHA = 13,
  TLS_DH_RSA_EXPORT_WITH_DES40_CBC_SHA = 14,
  TLS_DH_RSA_WITH_DES_CBC_SHA = 15,
  TLS_DH_RSA_WITH_3DES_EDE_CBC_SHA = 16,
  TLS_DHE_DSS_EXPORT_WITH_DES40_CBC_SHA = 17,
  TLS_DHE_DSS_WITH_DES_CBC_SHA = 18,
  TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA = 19,
  TLS_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA = 20,
  TLS_DHE_RSA_WITH_DES_CBC_SHA = 21,
  TLS_DHE_RSA_WITH_3DES_EDE_CBC_SHA = 22,
  TLS_DH_anon_EXPORT_WITH_RC4_40_MD5 = 23,
  TLS_DH_anon_WITH_RC4_128_MD5 = 24,
  TLS_DH_anon_EXPORT_WITH_DES40_CBC_SHA = 25,
  TLS_DH_anon_WITH_DES_CBC_SHA = 26,
  TLS_DH_anon_WITH_3DES_EDE_CBC_SHA = 27,
  TLS_KRB5_WITH_DES_CBC_SHA = 30,
  TLS_KRB5_WITH_3DES_EDE_CBC_SHA = 31,
  TLS_KRB5_WITH_RC4_128_SHA = 32,
  TLS_KRB5_WITH_IDEA_CBC_SHA = 33,
  TLS_KRB5_WITH_DES_CBC_MD5 = 34,
  TLS_KRB5_WITH_3DES_EDE_CBC_MD5 = 35,
  TLS_KRB5_WITH_RC4_128_MD5 = 36,
  TLS_KRB5_WITH_IDEA_CBC_MD5 = 37,
  TLS_KRB5_EXPORT_WITH_DES_CBC_40_SHA = 38,
  TLS_KRB5_EXPORT_WITH_RC2_CBC_40_SHA = 39,
  TLS_KRB5_EXPORT_WITH_RC4_40_SHA = 40,
  TLS_KRB5_EXPORT_WITH_DES_CBC_40_MD5 = 41,
  TLS_KRB5_EXPORT_WITH_RC2_CBC_40_MD5 = 42,
  TLS_KRB5_EXPORT_WITH_RC4_40_MD5 = 43,
  TLS_PSK_WITH_NULL_SHA = 44,
  TLS_DHE_PSK_WITH_NULL_SHA = 45,
  TLS_RSA_PSK_WITH_NULL_SHA = 46,
  TLS_RSA_WITH_AES_128_CBC_SHA = 47,
  TLS_DH_DSS_WITH_AES_128_CBC_SHA = 48,
  TLS_DH_RSA_WITH_AES_128_CBC_SHA = 49,
  TLS_DHE_DSS_WITH_AES_128_CBC_SHA = 50,
  TLS_DHE_RSA_WITH_AES_128_CBC_SHA = 51,
  TLS_DH_anon_WITH_AES_128_CBC_SHA = 52,
  TLS_RSA_WITH_AES_256_CBC_SHA = 53,
  TLS_DH_DSS_WITH_AES_256_CBC_SHA = 54,
  TLS_DH_RSA_WITH_AES_256_CBC_SHA = 55,
  TLS_DHE_DSS_WITH_AES_256_CBC_SHA = 56,
  TLS_DHE_RSA_WITH_AES_256_CBC_SHA = 57,
  TLS_DH_anon_WITH_AES_256_CBC_SHA = 58,
  TLS_RSA_WITH_NULL_SHA256 = 59,
  TLS_RSA_WITH_AES_128_CBC_SHA256 = 60,
  TLS_RSA_WITH_AES_256_CBC_SHA256 = 61,
  TLS_DH_DSS_WITH_AES_128_CBC_SHA256 = 62,
  TLS_DH_RSA_WITH_AES_128_CBC_SHA256 = 63,
  TLS_DHE_DSS_WITH_AES_128_CBC_SHA256 = 64,
  TLS_RSA_WITH_CAMELLIA_128_CBC_SHA = 65,
  TLS_DH_DSS_WITH_CAMELLIA_128_CBC_SHA = 66,
  TLS_DH_RSA_WITH_CAMELLIA_128_CBC_SHA = 67,
  TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA = 68,
  TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA = 69,
  TLS_DH_anon_WITH_CAMELLIA_128_CBC_SHA = 70,
  TLS_DHE_RSA_WITH_AES_128_CBC_SHA256 = 103,
  TLS_DH_DSS_WITH_AES_256_CBC_SHA256 = 104,
  TLS_DH_RSA_WITH_AES_256_CBC_SHA256 = 105,
  TLS_DHE_DSS_WITH_AES_256_CBC_SHA256 = 106,
  TLS_DHE_RSA_WITH_AES_256_CBC_SHA256 = 107,
  TLS_DH_anon_WITH_AES_128_CBC_SHA256 = 108,
  TLS_DH_anon_WITH_AES_256_CBC_SHA256 = 109,
  TLS_RSA_WITH_CAMELLIA_256_CBC_SHA = 132,
  TLS_DH_DSS_WITH_CAMELLIA_256_CBC_SHA = 133,
  TLS_DH_RSA_WITH_CAMELLIA_256_CBC_SHA = 134,
  TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA = 135,
  TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA = 136,
  TLS_DH_anon_WITH_CAMELLIA_256_CBC_SHA = 137,
  TLS_PSK_WITH_RC4_128_SHA = 138,
  TLS_PSK_WITH_3DES_EDE_CBC_SHA = 139,
  TLS_PSK_WITH_AES_128_CBC_SHA = 140,
  TLS_PSK_WITH_AES_256_CBC_SHA = 141,
  TLS_DHE_PSK_WITH_RC4_128_SHA = 142,
  TLS_DHE_PSK_WITH_3DES_EDE_CBC_SHA = 143,
  TLS_DHE_PSK_WITH_AES_128_CBC_SHA = 144,
  TLS_DHE_PSK_WITH_AES_256_CBC_SHA = 145,
  TLS_RSA_PSK_WITH_RC4_128_SHA = 146,
  TLS_RSA_PSK_WITH_3DES_EDE_CBC_SHA = 147,
  TLS_RSA_PSK_WITH_AES_128_CBC_SHA = 148,
  TLS_RSA_PSK_WITH_AES_256_CBC_SHA = 149,
  TLS_RSA_WITH_SEED_CBC_SHA = 150,
  TLS_DH_DSS_WITH_SEED_CBC_SHA = 151,
  TLS_DH_RSA_WITH_SEED_CBC_SHA = 152,
  TLS_DHE_DSS_WITH_SEED_CBC_SHA = 153,
  TLS_DHE_RSA_WITH_SEED_CBC_SHA = 154,
  TLS_DH_anon_WITH_SEED_CBC_SHA = 155,
  TLS_RSA_WITH_AES_128_GCM_SHA256 = 156,
  TLS_RSA_WITH_AES_256_GCM_SHA384 = 157,
  TLS_DHE_RSA_WITH_AES_128_GCM_SHA256 = 158,
  TLS_DHE_RSA_WITH_AES_256_GCM_SHA384 = 159,
  TLS_DH_RSA_WITH_AES_128_GCM_SHA256 = 160,
  TLS_DH_RSA_WITH_AES_256_GCM_SHA384 = 161,
  TLS_DHE_DSS_WITH_AES_128_GCM_SHA256 = 162,
  TLS_DHE_DSS_WITH_AES_256_GCM_SHA384 = 163,
  TLS_DH_DSS_WITH_AES_128_GCM_SHA256 = 164,
  TLS_DH_DSS_WITH_AES_256_GCM_SHA384 = 165,
  TLS_DH_anon_WITH_AES_128_GCM_SHA256 = 166,
  TLS_DH_anon_WITH_AES_256_GCM_SHA384 = 167,
  TLS_PSK_WITH_AES_128_GCM_SHA256 = 168,
  TLS_PSK_WITH_AES_256_GCM_SHA384 = 169,
  TLS_DHE_PSK_WITH_AES_128_GCM_SHA256 = 170,
  TLS_DHE_PSK_WITH_AES_256_GCM_SHA384 = 171,
  TLS_RSA_PSK_WITH_AES_128_GCM_SHA256 = 172,
  TLS_RSA_PSK_WITH_AES_256_GCM_SHA384 = 173,
  TLS_PSK_WITH_AES_128_CBC_SHA256 = 174,
  TLS_PSK_WITH_AES_256_CBC_SHA384 = 175,
  TLS_PSK_WITH_NULL_SHA256 = 176,
  TLS_PSK_WITH_NULL_SHA384 = 177,
  TLS_DHE_PSK_WITH_AES_128_CBC_SHA256 = 178,
  TLS_DHE_PSK_WITH_AES_256_CBC_SHA384 = 179,
  TLS_DHE_PSK_WITH_NULL_SHA256 = 180,
  TLS_DHE_PSK_WITH_NULL_SHA384 = 181,
  TLS_RSA_PSK_WITH_AES_128_CBC_SHA256 = 182,
  TLS_RSA_PSK_WITH_AES_256_CBC_SHA384 = 183,
  TLS_RSA_PSK_WITH_NULL_SHA256 = 184,
  TLS_RSA_PSK_WITH_NULL_SHA384 = 185,
  TLS_RSA_WITH_CAMELLIA_128_CBC_SHA256 = 186,
  TLS_DH_DSS_WITH_CAMELLIA_128_CBC_SHA256 = 187,
  TLS_DH_RSA_WITH_CAMELLIA_128_CBC_SHA256 = 188,
  TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA256 = 189,
  TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA256 = 190,
  TLS_DH_anon_WITH_CAMELLIA_128_CBC_SHA256 = 191,
  TLS_RSA_WITH_CAMELLIA_256_CBC_SHA256 = 192,
  TLS_DH_DSS_WITH_CAMELLIA_256_CBC_SHA256 = 193,
  TLS_DH_RSA_WITH_CAMELLIA_256_CBC_SHA256 = 194,
  TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA256 = 195,
  TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA256 = 196,
  TLS_DH_anon_WITH_CAMELLIA_256_CBC_SHA256 = 197,
  TLS_SM4_GCM_SM3 = 198,
  TLS_SM4_CCM_SM3 = 199,
  TLS_EMPTY_RENEGOTIATION_INFO_SCSV = 255,
  Reserved = 2570,
  Unassigned = 4864,
  TLS_AES_128_GCM_SHA256 = 4865,
  TLS_AES_256_GCM_SHA384 = 4866,
  TLS_CHACHA20_POLY1305_SHA256 = 4867,
  TLS_AES_128_CCM_SHA256 = 4868,
  TLS_AES_128_CCM_8_SHA256 = 4869,
  TLS_AEGIS_256_SHA384 = 4870,
  TLS_AEGIS_128L_SHA256 = 4871,
  TLS_FALLBACK_SCSV = 22016,
  TLS_ECDH_ECDSA_WITH_NULL_SHA = 49153,
  TLS_ECDH_ECDSA_WITH_RC4_128_SHA = 49154,
  TLS_ECDH_ECDSA_WITH_3DES_EDE_CBC_SHA = 49155,
  TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA = 49156,
  TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA = 49157,
  TLS_ECDHE_ECDSA_WITH_NULL_SHA = 49158,
  TLS_ECDHE_ECDSA_WITH_RC4_128_SHA = 49159,
  TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA = 49160,
  TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA = 49161,
  TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA = 49162,
  TLS_ECDH_RSA_WITH_NULL_SHA = 49163,
  TLS_ECDH_RSA_WITH_RC4_128_SHA = 49164,
  TLS_ECDH_RSA_WITH_3DES_EDE_CBC_SHA = 49165,
  TLS_ECDH_RSA_WITH_AES_128_CBC_SHA = 49166,
  TLS_ECDH_RSA_WITH_AES_256_CBC_SHA = 49167,
  TLS_ECDHE_RSA_WITH_NULL_SHA = 49168,
  TLS_ECDHE_RSA_WITH_RC4_128_SHA = 49169,
  TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA = 49170,
  TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA = 49171,
  TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA = 49172,
  TLS_ECDH_anon_WITH_NULL_SHA = 49173,
  TLS_ECDH_anon_WITH_RC4_128_SHA = 49174,
  TLS_ECDH_anon_WITH_3DES_EDE_CBC_SHA = 49175,
  TLS_ECDH_anon_WITH_AES_128_CBC_SHA = 49176,
  TLS_ECDH_anon_WITH_AES_256_CBC_SHA = 49177,
  TLS_SRP_SHA_WITH_3DES_EDE_CBC_SHA = 49178,
  TLS_SRP_SHA_RSA_WITH_3DES_EDE_CBC_SHA = 49179,
  TLS_SRP_SHA_DSS_WITH_3DES_EDE_CBC_SHA = 49180,
  TLS_SRP_SHA_WITH_AES_128_CBC_SHA = 49181,
  TLS_SRP_SHA_RSA_WITH_AES_128_CBC_SHA = 49182,
  TLS_SRP_SHA_DSS_WITH_AES_128_CBC_SHA = 49183,
  TLS_SRP_SHA_WITH_AES_256_CBC_SHA = 49184,
  TLS_SRP_SHA_RSA_WITH_AES_256_CBC_SHA = 49185,
  TLS_SRP_SHA_DSS_WITH_AES_256_CBC_SHA = 49186,
  TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256 = 49187,
  TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384 = 49188,
  TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256 = 49189,
  TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384 = 49190,
  TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256 = 49191,
  TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384 = 49192,
  TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256 = 49193,
  TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384 = 49194,
  TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 = 49195,
  TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 = 49196,
  TLS_ECDH_ECDSA_WITH_AES_128_GCM_SHA256 = 49197,
  TLS_ECDH_ECDSA_WITH_AES_256_GCM_SHA384 = 49198,
  TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 = 49199,
  TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 = 49200,
  TLS_ECDH_RSA_WITH_AES_128_GCM_SHA256 = 49201,
  TLS_ECDH_RSA_WITH_AES_256_GCM_SHA384 = 49202,
  TLS_ECDHE_PSK_WITH_RC4_128_SHA = 49203,
  TLS_ECDHE_PSK_WITH_3DES_EDE_CBC_SHA = 49204,
  TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA = 49205,
  TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA = 49206,
  TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA256 = 49207,
  TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA384 = 49208,
  TLS_ECDHE_PSK_WITH_NULL_SHA = 49209,
  TLS_ECDHE_PSK_WITH_NULL_SHA256 = 49210,
  TLS_ECDHE_PSK_WITH_NULL_SHA384 = 49211,
  TLS_RSA_WITH_ARIA_128_CBC_SHA256 = 49212,
  TLS_RSA_WITH_ARIA_256_CBC_SHA384 = 49213,
  TLS_DH_DSS_WITH_ARIA_128_CBC_SHA256 = 49214,
  TLS_DH_DSS_WITH_ARIA_256_CBC_SHA384 = 49215,
  TLS_DH_RSA_WITH_ARIA_128_CBC_SHA256 = 49216,
  TLS_DH_RSA_WITH_ARIA_256_CBC_SHA384 = 49217,
  TLS_DHE_DSS_WITH_ARIA_128_CBC_SHA256 = 49218,
  TLS_DHE_DSS_WITH_ARIA_256_CBC_SHA384 = 49219,
  TLS_DHE_RSA_WITH_ARIA_128_CBC_SHA256 = 49220,
  TLS_DHE_RSA_WITH_ARIA_256_CBC_SHA384 = 49221,
  TLS_DH_anon_WITH_ARIA_128_CBC_SHA256 = 49222,
  TLS_DH_anon_WITH_ARIA_256_CBC_SHA384 = 49223,
  TLS_ECDHE_ECDSA_WITH_ARIA_128_CBC_SHA256 = 49224,
  TLS_ECDHE_ECDSA_WITH_ARIA_256_CBC_SHA384 = 49225,
  TLS_ECDH_ECDSA_WITH_ARIA_128_CBC_SHA256 = 49226,
  TLS_ECDH_ECDSA_WITH_ARIA_256_CBC_SHA384 = 49227,
  TLS_ECDHE_RSA_WITH_ARIA_128_CBC_SHA256 = 49228,
  TLS_ECDHE_RSA_WITH_ARIA_256_CBC_SHA384 = 49229,
  TLS_ECDH_RSA_WITH_ARIA_128_CBC_SHA256 = 49230,
  TLS_ECDH_RSA_WITH_ARIA_256_CBC_SHA384 = 49231,
  TLS_RSA_WITH_ARIA_128_GCM_SHA256 = 49232,
  TLS_RSA_WITH_ARIA_256_GCM_SHA384 = 49233,
  TLS_DHE_RSA_WITH_ARIA_128_GCM_SHA256 = 49234,
  TLS_DHE_RSA_WITH_ARIA_256_GCM_SHA384 = 49235,
  TLS_DH_RSA_WITH_ARIA_128_GCM_SHA256 = 49236,
  TLS_DH_RSA_WITH_ARIA_256_GCM_SHA384 = 49237,
  TLS_DHE_DSS_WITH_ARIA_128_GCM_SHA256 = 49238,
  TLS_DHE_DSS_WITH_ARIA_256_GCM_SHA384 = 49239,
  TLS_DH_DSS_WITH_ARIA_128_GCM_SHA256 = 49240,
  TLS_DH_DSS_WITH_ARIA_256_GCM_SHA384 = 49241,
  TLS_DH_anon_WITH_ARIA_128_GCM_SHA256 = 49242,
  TLS_DH_anon_WITH_ARIA_256_GCM_SHA384 = 49243,
  TLS_ECDHE_ECDSA_WITH_ARIA_128_GCM_SHA256 = 49244,
  TLS_ECDHE_ECDSA_WITH_ARIA_256_GCM_SHA384 = 49245,
  TLS_ECDH_ECDSA_WITH_ARIA_128_GCM_SHA256 = 49246,
  TLS_ECDH_ECDSA_WITH_ARIA_256_GCM_SHA384 = 49247,
  TLS_ECDHE_RSA_WITH_ARIA_128_GCM_SHA256 = 49248,
  TLS_ECDHE_RSA_WITH_ARIA_256_GCM_SHA384 = 49249,
  TLS_ECDH_RSA_WITH_ARIA_128_GCM_SHA256 = 49250,
  TLS_ECDH_RSA_WITH_ARIA_256_GCM_SHA384 = 49251,
  TLS_PSK_WITH_ARIA_128_CBC_SHA256 = 49252,
  TLS_PSK_WITH_ARIA_256_CBC_SHA384 = 49253,
  TLS_DHE_PSK_WITH_ARIA_128_CBC_SHA256 = 49254,
  TLS_DHE_PSK_WITH_ARIA_256_CBC_SHA384 = 49255,
  TLS_RSA_PSK_WITH_ARIA_128_CBC_SHA256 = 49256,
  TLS_RSA_PSK_WITH_ARIA_256_CBC_SHA384 = 49257,
  TLS_PSK_WITH_ARIA_128_GCM_SHA256 = 49258,
  TLS_PSK_WITH_ARIA_256_GCM_SHA384 = 49259,
  TLS_DHE_PSK_WITH_ARIA_128_GCM_SHA256 = 49260,
  TLS_DHE_PSK_WITH_ARIA_256_GCM_SHA384 = 49261,
  TLS_RSA_PSK_WITH_ARIA_128_GCM_SHA256 = 49262,
  TLS_RSA_PSK_WITH_ARIA_256_GCM_SHA384 = 49263,
  TLS_ECDHE_PSK_WITH_ARIA_128_CBC_SHA256 = 49264,
  TLS_ECDHE_PSK_WITH_ARIA_256_CBC_SHA384 = 49265,
  TLS_ECDHE_ECDSA_WITH_CAMELLIA_128_CBC_SHA256 = 49266,
  TLS_ECDHE_ECDSA_WITH_CAMELLIA_256_CBC_SHA384 = 49267,
  TLS_ECDH_ECDSA_WITH_CAMELLIA_128_CBC_SHA256 = 49268,
  TLS_ECDH_ECDSA_WITH_CAMELLIA_256_CBC_SHA384 = 49269,
  TLS_ECDHE_RSA_WITH_CAMELLIA_128_CBC_SHA256 = 49270,
  TLS_ECDHE_RSA_WITH_CAMELLIA_256_CBC_SHA384 = 49271,
  TLS_ECDH_RSA_WITH_CAMELLIA_128_CBC_SHA256 = 49272,
  TLS_ECDH_RSA_WITH_CAMELLIA_256_CBC_SHA384 = 49273,
  TLS_RSA_WITH_CAMELLIA_128_GCM_SHA256 = 49274,
  TLS_RSA_WITH_CAMELLIA_256_GCM_SHA384 = 49275,
  TLS_DHE_RSA_WITH_CAMELLIA_128_GCM_SHA256 = 49276,
  TLS_DHE_RSA_WITH_CAMELLIA_256_GCM_SHA384 = 49277,
  TLS_DH_RSA_WITH_CAMELLIA_128_GCM_SHA256 = 49278,
  TLS_DH_RSA_WITH_CAMELLIA_256_GCM_SHA384 = 49279,
  TLS_DHE_DSS_WITH_CAMELLIA_128_GCM_SHA256 = 49280,
  TLS_DHE_DSS_WITH_CAMELLIA_256_GCM_SHA384 = 49281,
  TLS_DH_DSS_WITH_CAMELLIA_128_GCM_SHA256 = 49282,
  TLS_DH_DSS_WITH_CAMELLIA_256_GCM_SHA384 = 49283,
  TLS_DH_anon_WITH_CAMELLIA_128_GCM_SHA256 = 49284,
  TLS_DH_anon_WITH_CAMELLIA_256_GCM_SHA384 = 49285,
  TLS_ECDHE_ECDSA_WITH_CAMELLIA_128_GCM_SHA256 = 49286,
  TLS_ECDHE_ECDSA_WITH_CAMELLIA_256_GCM_SHA384 = 49287,
  TLS_ECDH_ECDSA_WITH_CAMELLIA_128_GCM_SHA256 = 49288,
  TLS_ECDH_ECDSA_WITH_CAMELLIA_256_GCM_SHA384 = 49289,
  TLS_ECDHE_RSA_WITH_CAMELLIA_128_GCM_SHA256 = 49290,
  TLS_ECDHE_RSA_WITH_CAMELLIA_256_GCM_SHA384 = 49291,
  TLS_ECDH_RSA_WITH_CAMELLIA_128_GCM_SHA256 = 49292,
  TLS_ECDH_RSA_WITH_CAMELLIA_256_GCM_SHA384 = 49293,
  TLS_PSK_WITH_CAMELLIA_128_GCM_SHA256 = 49294,
  TLS_PSK_WITH_CAMELLIA_256_GCM_SHA384 = 49295,
  TLS_DHE_PSK_WITH_CAMELLIA_128_GCM_SHA256 = 49296,
  TLS_DHE_PSK_WITH_CAMELLIA_256_GCM_SHA384 = 49297,
  TLS_RSA_PSK_WITH_CAMELLIA_128_GCM_SHA256 = 49298,
  TLS_RSA_PSK_WITH_CAMELLIA_256_GCM_SHA384 = 49299,
  TLS_PSK_WITH_CAMELLIA_128_CBC_SHA256 = 49300,
  TLS_PSK_WITH_CAMELLIA_256_CBC_SHA384 = 49301,
  TLS_DHE_PSK_WITH_CAMELLIA_128_CBC_SHA256 = 49302,
  TLS_DHE_PSK_WITH_CAMELLIA_256_CBC_SHA384 = 49303,
  TLS_RSA_PSK_WITH_CAMELLIA_128_CBC_SHA256 = 49304,
  TLS_RSA_PSK_WITH_CAMELLIA_256_CBC_SHA384 = 49305,
  TLS_ECDHE_PSK_WITH_CAMELLIA_128_CBC_SHA256 = 49306,
  TLS_ECDHE_PSK_WITH_CAMELLIA_256_CBC_SHA384 = 49307,
  TLS_RSA_WITH_AES_128_CCM = 49308,
  TLS_RSA_WITH_AES_256_CCM = 49309,
  TLS_DHE_RSA_WITH_AES_128_CCM = 49310,
  TLS_DHE_RSA_WITH_AES_256_CCM = 49311,
  TLS_RSA_WITH_AES_128_CCM_8 = 49312,
  TLS_RSA_WITH_AES_256_CCM_8 = 49313,
  TLS_DHE_RSA_WITH_AES_128_CCM_8 = 49314,
  TLS_DHE_RSA_WITH_AES_256_CCM_8 = 49315,
  TLS_PSK_WITH_AES_128_CCM = 49316,
  TLS_PSK_WITH_AES_256_CCM = 49317,
  TLS_DHE_PSK_WITH_AES_128_CCM = 49318,
  TLS_DHE_PSK_WITH_AES_256_CCM = 49319,
  TLS_PSK_WITH_AES_128_CCM_8 = 49320,
  TLS_PSK_WITH_AES_256_CCM_8 = 49321,
  TLS_PSK_DHE_WITH_AES_128_CCM_8 = 49322,
  TLS_PSK_DHE_WITH_AES_256_CCM_8 = 49323,
  TLS_ECDHE_ECDSA_WITH_AES_128_CCM = 49324,
  TLS_ECDHE_ECDSA_WITH_AES_256_CCM = 49325,
  TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8 = 49326,
  TLS_ECDHE_ECDSA_WITH_AES_256_CCM_8 = 49327,
  TLS_ECCPWD_WITH_AES_128_GCM_SHA256 = 49328,
  TLS_ECCPWD_WITH_AES_256_GCM_SHA384 = 49329,
  TLS_ECCPWD_WITH_AES_128_CCM_SHA256 = 49330,
  TLS_ECCPWD_WITH_AES_256_CCM_SHA384 = 49331,
  TLS_SHA256_SHA256 = 49332,
  TLS_SHA384_SHA384 = 49333,
  TLS_GOSTR341112_256_WITH_KUZNYECHIK_CTR_OMAC = 49408,
  TLS_GOSTR341112_256_WITH_MAGMA_CTR_OMAC = 49409,
  TLS_GOSTR341112_256_WITH_28147_CNT_IMIT = 49410,
  TLS_GOSTR341112_256_WITH_KUZNYECHIK_MGM_L = 49411,
  TLS_GOSTR341112_256_WITH_MAGMA_MGM_L = 49412,
  TLS_GOSTR341112_256_WITH_KUZNYECHIK_MGM_S = 49413,
  TLS_GOSTR341112_256_WITH_MAGMA_MGM_S = 49414,
  TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256 = 52392,
  TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256 = 52393,
  TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256 = 52394,
  TLS_PSK_WITH_CHACHA20_POLY1305_SHA256 = 52395,
  TLS_ECDHE_PSK_WITH_CHACHA20_POLY1305_SHA256 = 52396,
  TLS_DHE_PSK_WITH_CHACHA20_POLY1305_SHA256 = 52397,
  TLS_RSA_PSK_WITH_CHACHA20_POLY1305_SHA256 = 52398,
  TLS_ECDHE_PSK_WITH_AES_128_GCM_SHA256 = 53249,
  TLS_ECDHE_PSK_WITH_AES_256_GCM_SHA384 = 53250,
  TLS_ECDHE_PSK_WITH_AES_128_CCM_8_SHA256 = 53251,
  TLS_ECDHE_PSK_WITH_AES_128_CCM_SHA256 = 53253,
  UNRECOGNIZED = -1,
}

export function browser_TLSFingerprint_CipherSuiteFromJSON(object: any): Browser_TLSFingerprint_CipherSuite {
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

export function browser_TLSFingerprint_CipherSuiteToJSON(object: Browser_TLSFingerprint_CipherSuite): string {
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

/** - TLS extensions: https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml */
export enum Browser_TLSFingerprint_Extension {
  SERVER_NAME = 0,
  MAX_FRAGMENT_LENGTH = 1,
  CLIENT_CERTIFICATE_URL = 2,
  TRUSTED_CA_KEYS = 3,
  TRUNCATED_HMAC = 4,
  STATUS_REQUEST = 5,
  USER_MAPPING = 6,
  CLIENT_AUTHZ = 7,
  SERVER_AUTHZ = 8,
  CERT_TYPE = 9,
  SUPPORTED_GROUPS = 10,
  EC_POINT_FORMATS = 11,
  SRP = 12,
  SIGNATURE_ALGORITHMS = 13,
  USE_SRTP = 14,
  HEARTBEAT = 15,
  APPLICATION_LAYER_PROTOCOL_NEGOTIATION = 16,
  STATUS_REQUEST_V2 = 17,
  SIGNED_CERTIFICATE_TIMESTAMP = 18,
  CLIENT_CERTIFICATE_TYPE = 19,
  SERVER_CERTIFICATE_TYPE = 20,
  PADDING = 21,
  ENCRYPT_THEN_MAC = 22,
  EXTENDED_MASTER_SECRET = 23,
  TOKEN_BINDING = 24,
  CACHED_INFO = 25,
  TLS_LTS = 26,
  COMPRESS_CERTIFICATE = 27,
  RECORD_SIZE_LIMIT = 28,
  PWD_PROTECT = 29,
  PWD_CLEAR = 30,
  PASSWORD_SALT = 31,
  TICKET_PINNING = 32,
  TLS_CERT_WITH_EXTERN_PSK = 33,
  DELEGATED_CREDENTIAL = 34,
  SESSION_TICKET = 35,
  TLMSP = 36,
  TLMSP_PROXYING = 37,
  TLMSP_DELEGATE = 38,
  SUPPORTED_EKT_CIPHERS = 39,
  PRE_SHARED_KEY = 41,
  EARLY_DATA = 42,
  SUPPORTED_VERSIONS = 43,
  COOKIE = 44,
  PSK_KEY_EXCHANGE_MODES = 45,
  CERTIFICATE_AUTHORITIES = 47,
  OID_FILTERS = 48,
  POST_HANDSHAKE_AUTH = 49,
  SIGNATURE_ALGORITHMS_CERT = 50,
  KEY_SHARE = 51,
  TRANSPARENCY_INFO = 52,
  CONNECTION_ID_DEPRECATED = 53,
  CONNECTION_ID = 54,
  EXTERNAL_ID_HASH = 55,
  EXTERNAL_SESSION_ID = 56,
  QUIC_TRANSPORT_PARAMETERS = 57,
  TICKET_REQUEST = 58,
  DNSSEC_CHAIN = 59,
  SEQUENCE_NUMBER_ENCRYPTION_ALGORITHMS = 60,
  /** EXTENSION_APPLICATIONS_SETTINGS - src: boringssl */
  EXTENSION_APPLICATIONS_SETTINGS = 17513,
  EXTENSION_ENCRYPTED_CLIENT_HELLO = 65037,
  EXTENSION_RENEGOTIATION_INFO = 65281,
  UNRECOGNIZED = -1,
}

export function browser_TLSFingerprint_ExtensionFromJSON(object: any): Browser_TLSFingerprint_Extension {
  switch (object) {
    case 0:
    case "SERVER_NAME":
      return Browser_TLSFingerprint_Extension.SERVER_NAME;
    case 1:
    case "MAX_FRAGMENT_LENGTH":
      return Browser_TLSFingerprint_Extension.MAX_FRAGMENT_LENGTH;
    case 2:
    case "CLIENT_CERTIFICATE_URL":
      return Browser_TLSFingerprint_Extension.CLIENT_CERTIFICATE_URL;
    case 3:
    case "TRUSTED_CA_KEYS":
      return Browser_TLSFingerprint_Extension.TRUSTED_CA_KEYS;
    case 4:
    case "TRUNCATED_HMAC":
      return Browser_TLSFingerprint_Extension.TRUNCATED_HMAC;
    case 5:
    case "STATUS_REQUEST":
      return Browser_TLSFingerprint_Extension.STATUS_REQUEST;
    case 6:
    case "USER_MAPPING":
      return Browser_TLSFingerprint_Extension.USER_MAPPING;
    case 7:
    case "CLIENT_AUTHZ":
      return Browser_TLSFingerprint_Extension.CLIENT_AUTHZ;
    case 8:
    case "SERVER_AUTHZ":
      return Browser_TLSFingerprint_Extension.SERVER_AUTHZ;
    case 9:
    case "CERT_TYPE":
      return Browser_TLSFingerprint_Extension.CERT_TYPE;
    case 10:
    case "SUPPORTED_GROUPS":
      return Browser_TLSFingerprint_Extension.SUPPORTED_GROUPS;
    case 11:
    case "EC_POINT_FORMATS":
      return Browser_TLSFingerprint_Extension.EC_POINT_FORMATS;
    case 12:
    case "SRP":
      return Browser_TLSFingerprint_Extension.SRP;
    case 13:
    case "SIGNATURE_ALGORITHMS":
      return Browser_TLSFingerprint_Extension.SIGNATURE_ALGORITHMS;
    case 14:
    case "USE_SRTP":
      return Browser_TLSFingerprint_Extension.USE_SRTP;
    case 15:
    case "HEARTBEAT":
      return Browser_TLSFingerprint_Extension.HEARTBEAT;
    case 16:
    case "APPLICATION_LAYER_PROTOCOL_NEGOTIATION":
      return Browser_TLSFingerprint_Extension.APPLICATION_LAYER_PROTOCOL_NEGOTIATION;
    case 17:
    case "STATUS_REQUEST_V2":
      return Browser_TLSFingerprint_Extension.STATUS_REQUEST_V2;
    case 18:
    case "SIGNED_CERTIFICATE_TIMESTAMP":
      return Browser_TLSFingerprint_Extension.SIGNED_CERTIFICATE_TIMESTAMP;
    case 19:
    case "CLIENT_CERTIFICATE_TYPE":
      return Browser_TLSFingerprint_Extension.CLIENT_CERTIFICATE_TYPE;
    case 20:
    case "SERVER_CERTIFICATE_TYPE":
      return Browser_TLSFingerprint_Extension.SERVER_CERTIFICATE_TYPE;
    case 21:
    case "PADDING":
      return Browser_TLSFingerprint_Extension.PADDING;
    case 22:
    case "ENCRYPT_THEN_MAC":
      return Browser_TLSFingerprint_Extension.ENCRYPT_THEN_MAC;
    case 23:
    case "EXTENDED_MASTER_SECRET":
      return Browser_TLSFingerprint_Extension.EXTENDED_MASTER_SECRET;
    case 24:
    case "TOKEN_BINDING":
      return Browser_TLSFingerprint_Extension.TOKEN_BINDING;
    case 25:
    case "CACHED_INFO":
      return Browser_TLSFingerprint_Extension.CACHED_INFO;
    case 26:
    case "TLS_LTS":
      return Browser_TLSFingerprint_Extension.TLS_LTS;
    case 27:
    case "COMPRESS_CERTIFICATE":
      return Browser_TLSFingerprint_Extension.COMPRESS_CERTIFICATE;
    case 28:
    case "RECORD_SIZE_LIMIT":
      return Browser_TLSFingerprint_Extension.RECORD_SIZE_LIMIT;
    case 29:
    case "PWD_PROTECT":
      return Browser_TLSFingerprint_Extension.PWD_PROTECT;
    case 30:
    case "PWD_CLEAR":
      return Browser_TLSFingerprint_Extension.PWD_CLEAR;
    case 31:
    case "PASSWORD_SALT":
      return Browser_TLSFingerprint_Extension.PASSWORD_SALT;
    case 32:
    case "TICKET_PINNING":
      return Browser_TLSFingerprint_Extension.TICKET_PINNING;
    case 33:
    case "TLS_CERT_WITH_EXTERN_PSK":
      return Browser_TLSFingerprint_Extension.TLS_CERT_WITH_EXTERN_PSK;
    case 34:
    case "DELEGATED_CREDENTIAL":
      return Browser_TLSFingerprint_Extension.DELEGATED_CREDENTIAL;
    case 35:
    case "SESSION_TICKET":
      return Browser_TLSFingerprint_Extension.SESSION_TICKET;
    case 36:
    case "TLMSP":
      return Browser_TLSFingerprint_Extension.TLMSP;
    case 37:
    case "TLMSP_PROXYING":
      return Browser_TLSFingerprint_Extension.TLMSP_PROXYING;
    case 38:
    case "TLMSP_DELEGATE":
      return Browser_TLSFingerprint_Extension.TLMSP_DELEGATE;
    case 39:
    case "SUPPORTED_EKT_CIPHERS":
      return Browser_TLSFingerprint_Extension.SUPPORTED_EKT_CIPHERS;
    case 41:
    case "PRE_SHARED_KEY":
      return Browser_TLSFingerprint_Extension.PRE_SHARED_KEY;
    case 42:
    case "EARLY_DATA":
      return Browser_TLSFingerprint_Extension.EARLY_DATA;
    case 43:
    case "SUPPORTED_VERSIONS":
      return Browser_TLSFingerprint_Extension.SUPPORTED_VERSIONS;
    case 44:
    case "COOKIE":
      return Browser_TLSFingerprint_Extension.COOKIE;
    case 45:
    case "PSK_KEY_EXCHANGE_MODES":
      return Browser_TLSFingerprint_Extension.PSK_KEY_EXCHANGE_MODES;
    case 47:
    case "CERTIFICATE_AUTHORITIES":
      return Browser_TLSFingerprint_Extension.CERTIFICATE_AUTHORITIES;
    case 48:
    case "OID_FILTERS":
      return Browser_TLSFingerprint_Extension.OID_FILTERS;
    case 49:
    case "POST_HANDSHAKE_AUTH":
      return Browser_TLSFingerprint_Extension.POST_HANDSHAKE_AUTH;
    case 50:
    case "SIGNATURE_ALGORITHMS_CERT":
      return Browser_TLSFingerprint_Extension.SIGNATURE_ALGORITHMS_CERT;
    case 51:
    case "KEY_SHARE":
      return Browser_TLSFingerprint_Extension.KEY_SHARE;
    case 52:
    case "TRANSPARENCY_INFO":
      return Browser_TLSFingerprint_Extension.TRANSPARENCY_INFO;
    case 53:
    case "CONNECTION_ID_DEPRECATED":
      return Browser_TLSFingerprint_Extension.CONNECTION_ID_DEPRECATED;
    case 54:
    case "CONNECTION_ID":
      return Browser_TLSFingerprint_Extension.CONNECTION_ID;
    case 55:
    case "EXTERNAL_ID_HASH":
      return Browser_TLSFingerprint_Extension.EXTERNAL_ID_HASH;
    case 56:
    case "EXTERNAL_SESSION_ID":
      return Browser_TLSFingerprint_Extension.EXTERNAL_SESSION_ID;
    case 57:
    case "QUIC_TRANSPORT_PARAMETERS":
      return Browser_TLSFingerprint_Extension.QUIC_TRANSPORT_PARAMETERS;
    case 58:
    case "TICKET_REQUEST":
      return Browser_TLSFingerprint_Extension.TICKET_REQUEST;
    case 59:
    case "DNSSEC_CHAIN":
      return Browser_TLSFingerprint_Extension.DNSSEC_CHAIN;
    case 60:
    case "SEQUENCE_NUMBER_ENCRYPTION_ALGORITHMS":
      return Browser_TLSFingerprint_Extension.SEQUENCE_NUMBER_ENCRYPTION_ALGORITHMS;
    case 17513:
    case "EXTENSION_APPLICATIONS_SETTINGS":
      return Browser_TLSFingerprint_Extension.EXTENSION_APPLICATIONS_SETTINGS;
    case 65037:
    case "EXTENSION_ENCRYPTED_CLIENT_HELLO":
      return Browser_TLSFingerprint_Extension.EXTENSION_ENCRYPTED_CLIENT_HELLO;
    case 65281:
    case "EXTENSION_RENEGOTIATION_INFO":
      return Browser_TLSFingerprint_Extension.EXTENSION_RENEGOTIATION_INFO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Browser_TLSFingerprint_Extension.UNRECOGNIZED;
  }
}

export function browser_TLSFingerprint_ExtensionToJSON(object: Browser_TLSFingerprint_Extension): string {
  switch (object) {
    case Browser_TLSFingerprint_Extension.SERVER_NAME:
      return "SERVER_NAME";
    case Browser_TLSFingerprint_Extension.MAX_FRAGMENT_LENGTH:
      return "MAX_FRAGMENT_LENGTH";
    case Browser_TLSFingerprint_Extension.CLIENT_CERTIFICATE_URL:
      return "CLIENT_CERTIFICATE_URL";
    case Browser_TLSFingerprint_Extension.TRUSTED_CA_KEYS:
      return "TRUSTED_CA_KEYS";
    case Browser_TLSFingerprint_Extension.TRUNCATED_HMAC:
      return "TRUNCATED_HMAC";
    case Browser_TLSFingerprint_Extension.STATUS_REQUEST:
      return "STATUS_REQUEST";
    case Browser_TLSFingerprint_Extension.USER_MAPPING:
      return "USER_MAPPING";
    case Browser_TLSFingerprint_Extension.CLIENT_AUTHZ:
      return "CLIENT_AUTHZ";
    case Browser_TLSFingerprint_Extension.SERVER_AUTHZ:
      return "SERVER_AUTHZ";
    case Browser_TLSFingerprint_Extension.CERT_TYPE:
      return "CERT_TYPE";
    case Browser_TLSFingerprint_Extension.SUPPORTED_GROUPS:
      return "SUPPORTED_GROUPS";
    case Browser_TLSFingerprint_Extension.EC_POINT_FORMATS:
      return "EC_POINT_FORMATS";
    case Browser_TLSFingerprint_Extension.SRP:
      return "SRP";
    case Browser_TLSFingerprint_Extension.SIGNATURE_ALGORITHMS:
      return "SIGNATURE_ALGORITHMS";
    case Browser_TLSFingerprint_Extension.USE_SRTP:
      return "USE_SRTP";
    case Browser_TLSFingerprint_Extension.HEARTBEAT:
      return "HEARTBEAT";
    case Browser_TLSFingerprint_Extension.APPLICATION_LAYER_PROTOCOL_NEGOTIATION:
      return "APPLICATION_LAYER_PROTOCOL_NEGOTIATION";
    case Browser_TLSFingerprint_Extension.STATUS_REQUEST_V2:
      return "STATUS_REQUEST_V2";
    case Browser_TLSFingerprint_Extension.SIGNED_CERTIFICATE_TIMESTAMP:
      return "SIGNED_CERTIFICATE_TIMESTAMP";
    case Browser_TLSFingerprint_Extension.CLIENT_CERTIFICATE_TYPE:
      return "CLIENT_CERTIFICATE_TYPE";
    case Browser_TLSFingerprint_Extension.SERVER_CERTIFICATE_TYPE:
      return "SERVER_CERTIFICATE_TYPE";
    case Browser_TLSFingerprint_Extension.PADDING:
      return "PADDING";
    case Browser_TLSFingerprint_Extension.ENCRYPT_THEN_MAC:
      return "ENCRYPT_THEN_MAC";
    case Browser_TLSFingerprint_Extension.EXTENDED_MASTER_SECRET:
      return "EXTENDED_MASTER_SECRET";
    case Browser_TLSFingerprint_Extension.TOKEN_BINDING:
      return "TOKEN_BINDING";
    case Browser_TLSFingerprint_Extension.CACHED_INFO:
      return "CACHED_INFO";
    case Browser_TLSFingerprint_Extension.TLS_LTS:
      return "TLS_LTS";
    case Browser_TLSFingerprint_Extension.COMPRESS_CERTIFICATE:
      return "COMPRESS_CERTIFICATE";
    case Browser_TLSFingerprint_Extension.RECORD_SIZE_LIMIT:
      return "RECORD_SIZE_LIMIT";
    case Browser_TLSFingerprint_Extension.PWD_PROTECT:
      return "PWD_PROTECT";
    case Browser_TLSFingerprint_Extension.PWD_CLEAR:
      return "PWD_CLEAR";
    case Browser_TLSFingerprint_Extension.PASSWORD_SALT:
      return "PASSWORD_SALT";
    case Browser_TLSFingerprint_Extension.TICKET_PINNING:
      return "TICKET_PINNING";
    case Browser_TLSFingerprint_Extension.TLS_CERT_WITH_EXTERN_PSK:
      return "TLS_CERT_WITH_EXTERN_PSK";
    case Browser_TLSFingerprint_Extension.DELEGATED_CREDENTIAL:
      return "DELEGATED_CREDENTIAL";
    case Browser_TLSFingerprint_Extension.SESSION_TICKET:
      return "SESSION_TICKET";
    case Browser_TLSFingerprint_Extension.TLMSP:
      return "TLMSP";
    case Browser_TLSFingerprint_Extension.TLMSP_PROXYING:
      return "TLMSP_PROXYING";
    case Browser_TLSFingerprint_Extension.TLMSP_DELEGATE:
      return "TLMSP_DELEGATE";
    case Browser_TLSFingerprint_Extension.SUPPORTED_EKT_CIPHERS:
      return "SUPPORTED_EKT_CIPHERS";
    case Browser_TLSFingerprint_Extension.PRE_SHARED_KEY:
      return "PRE_SHARED_KEY";
    case Browser_TLSFingerprint_Extension.EARLY_DATA:
      return "EARLY_DATA";
    case Browser_TLSFingerprint_Extension.SUPPORTED_VERSIONS:
      return "SUPPORTED_VERSIONS";
    case Browser_TLSFingerprint_Extension.COOKIE:
      return "COOKIE";
    case Browser_TLSFingerprint_Extension.PSK_KEY_EXCHANGE_MODES:
      return "PSK_KEY_EXCHANGE_MODES";
    case Browser_TLSFingerprint_Extension.CERTIFICATE_AUTHORITIES:
      return "CERTIFICATE_AUTHORITIES";
    case Browser_TLSFingerprint_Extension.OID_FILTERS:
      return "OID_FILTERS";
    case Browser_TLSFingerprint_Extension.POST_HANDSHAKE_AUTH:
      return "POST_HANDSHAKE_AUTH";
    case Browser_TLSFingerprint_Extension.SIGNATURE_ALGORITHMS_CERT:
      return "SIGNATURE_ALGORITHMS_CERT";
    case Browser_TLSFingerprint_Extension.KEY_SHARE:
      return "KEY_SHARE";
    case Browser_TLSFingerprint_Extension.TRANSPARENCY_INFO:
      return "TRANSPARENCY_INFO";
    case Browser_TLSFingerprint_Extension.CONNECTION_ID_DEPRECATED:
      return "CONNECTION_ID_DEPRECATED";
    case Browser_TLSFingerprint_Extension.CONNECTION_ID:
      return "CONNECTION_ID";
    case Browser_TLSFingerprint_Extension.EXTERNAL_ID_HASH:
      return "EXTERNAL_ID_HASH";
    case Browser_TLSFingerprint_Extension.EXTERNAL_SESSION_ID:
      return "EXTERNAL_SESSION_ID";
    case Browser_TLSFingerprint_Extension.QUIC_TRANSPORT_PARAMETERS:
      return "QUIC_TRANSPORT_PARAMETERS";
    case Browser_TLSFingerprint_Extension.TICKET_REQUEST:
      return "TICKET_REQUEST";
    case Browser_TLSFingerprint_Extension.DNSSEC_CHAIN:
      return "DNSSEC_CHAIN";
    case Browser_TLSFingerprint_Extension.SEQUENCE_NUMBER_ENCRYPTION_ALGORITHMS:
      return "SEQUENCE_NUMBER_ENCRYPTION_ALGORITHMS";
    case Browser_TLSFingerprint_Extension.EXTENSION_APPLICATIONS_SETTINGS:
      return "EXTENSION_APPLICATIONS_SETTINGS";
    case Browser_TLSFingerprint_Extension.EXTENSION_ENCRYPTED_CLIENT_HELLO:
      return "EXTENSION_ENCRYPTED_CLIENT_HELLO";
    case Browser_TLSFingerprint_Extension.EXTENSION_RENEGOTIATION_INFO:
      return "EXTENSION_RENEGOTIATION_INFO";
    case Browser_TLSFingerprint_Extension.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Browser_TLSFingerprint_RenegotiationSupport {
  RENEGOTIATE_NEVER = 0,
  RENEGOTIATE_ONCE_AS_CLIENT = 1,
  RENEGOTIATE_FREELY_AS_CLIENT = 2,
  UNRECOGNIZED = -1,
}

export function browser_TLSFingerprint_RenegotiationSupportFromJSON(
  object: any,
): Browser_TLSFingerprint_RenegotiationSupport {
  switch (object) {
    case 0:
    case "RENEGOTIATE_NEVER":
      return Browser_TLSFingerprint_RenegotiationSupport.RENEGOTIATE_NEVER;
    case 1:
    case "RENEGOTIATE_ONCE_AS_CLIENT":
      return Browser_TLSFingerprint_RenegotiationSupport.RENEGOTIATE_ONCE_AS_CLIENT;
    case 2:
    case "RENEGOTIATE_FREELY_AS_CLIENT":
      return Browser_TLSFingerprint_RenegotiationSupport.RENEGOTIATE_FREELY_AS_CLIENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Browser_TLSFingerprint_RenegotiationSupport.UNRECOGNIZED;
  }
}

export function browser_TLSFingerprint_RenegotiationSupportToJSON(
  object: Browser_TLSFingerprint_RenegotiationSupport,
): string {
  switch (object) {
    case Browser_TLSFingerprint_RenegotiationSupport.RENEGOTIATE_NEVER:
      return "RENEGOTIATE_NEVER";
    case Browser_TLSFingerprint_RenegotiationSupport.RENEGOTIATE_ONCE_AS_CLIENT:
      return "RENEGOTIATE_ONCE_AS_CLIENT";
    case Browser_TLSFingerprint_RenegotiationSupport.RENEGOTIATE_FREELY_AS_CLIENT:
      return "RENEGOTIATE_FREELY_AS_CLIENT";
    case Browser_TLSFingerprint_RenegotiationSupport.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Browser_TLSFingerprint_SignatureScheme {
  NO_SIGNATURE = 0,
  RSA_PKCS1_SHA256 = 1025,
  RSA_PKCS1_SHA384 = 1281,
  RSA_PKCS1_SHA512 = 1537,
  ECDSA_SECP256R1_SHA256 = 1027,
  ECDSA_SECP384R1_SHA384 = 1283,
  ECDSA_SECP521R1_SHA512 = 1539,
  RSA_PSS_RSAE_SHA256 = 2052,
  RSA_PSS_RSAE_SHA384 = 2053,
  RSA_PSS_RSAE_SHA512 = 2054,
  ED25519 = 2055,
  ED448 = 2056,
  RSA_PSS_PSS_SHA256 = 2057,
  RSA_PSS_PSS_SHA384 = 2058,
  RSA_PSS_PSS_SHA512 = 2059,
  RSA_PKCS1_SHA1 = 513,
  ECDSA_SHA1 = 515,
  UNRECOGNIZED = -1,
}

export function browser_TLSFingerprint_SignatureSchemeFromJSON(object: any): Browser_TLSFingerprint_SignatureScheme {
  switch (object) {
    case 0:
    case "NO_SIGNATURE":
      return Browser_TLSFingerprint_SignatureScheme.NO_SIGNATURE;
    case 1025:
    case "RSA_PKCS1_SHA256":
      return Browser_TLSFingerprint_SignatureScheme.RSA_PKCS1_SHA256;
    case 1281:
    case "RSA_PKCS1_SHA384":
      return Browser_TLSFingerprint_SignatureScheme.RSA_PKCS1_SHA384;
    case 1537:
    case "RSA_PKCS1_SHA512":
      return Browser_TLSFingerprint_SignatureScheme.RSA_PKCS1_SHA512;
    case 1027:
    case "ECDSA_SECP256R1_SHA256":
      return Browser_TLSFingerprint_SignatureScheme.ECDSA_SECP256R1_SHA256;
    case 1283:
    case "ECDSA_SECP384R1_SHA384":
      return Browser_TLSFingerprint_SignatureScheme.ECDSA_SECP384R1_SHA384;
    case 1539:
    case "ECDSA_SECP521R1_SHA512":
      return Browser_TLSFingerprint_SignatureScheme.ECDSA_SECP521R1_SHA512;
    case 2052:
    case "RSA_PSS_RSAE_SHA256":
      return Browser_TLSFingerprint_SignatureScheme.RSA_PSS_RSAE_SHA256;
    case 2053:
    case "RSA_PSS_RSAE_SHA384":
      return Browser_TLSFingerprint_SignatureScheme.RSA_PSS_RSAE_SHA384;
    case 2054:
    case "RSA_PSS_RSAE_SHA512":
      return Browser_TLSFingerprint_SignatureScheme.RSA_PSS_RSAE_SHA512;
    case 2055:
    case "ED25519":
      return Browser_TLSFingerprint_SignatureScheme.ED25519;
    case 2056:
    case "ED448":
      return Browser_TLSFingerprint_SignatureScheme.ED448;
    case 2057:
    case "RSA_PSS_PSS_SHA256":
      return Browser_TLSFingerprint_SignatureScheme.RSA_PSS_PSS_SHA256;
    case 2058:
    case "RSA_PSS_PSS_SHA384":
      return Browser_TLSFingerprint_SignatureScheme.RSA_PSS_PSS_SHA384;
    case 2059:
    case "RSA_PSS_PSS_SHA512":
      return Browser_TLSFingerprint_SignatureScheme.RSA_PSS_PSS_SHA512;
    case 513:
    case "RSA_PKCS1_SHA1":
      return Browser_TLSFingerprint_SignatureScheme.RSA_PKCS1_SHA1;
    case 515:
    case "ECDSA_SHA1":
      return Browser_TLSFingerprint_SignatureScheme.ECDSA_SHA1;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Browser_TLSFingerprint_SignatureScheme.UNRECOGNIZED;
  }
}

export function browser_TLSFingerprint_SignatureSchemeToJSON(object: Browser_TLSFingerprint_SignatureScheme): string {
  switch (object) {
    case Browser_TLSFingerprint_SignatureScheme.NO_SIGNATURE:
      return "NO_SIGNATURE";
    case Browser_TLSFingerprint_SignatureScheme.RSA_PKCS1_SHA256:
      return "RSA_PKCS1_SHA256";
    case Browser_TLSFingerprint_SignatureScheme.RSA_PKCS1_SHA384:
      return "RSA_PKCS1_SHA384";
    case Browser_TLSFingerprint_SignatureScheme.RSA_PKCS1_SHA512:
      return "RSA_PKCS1_SHA512";
    case Browser_TLSFingerprint_SignatureScheme.ECDSA_SECP256R1_SHA256:
      return "ECDSA_SECP256R1_SHA256";
    case Browser_TLSFingerprint_SignatureScheme.ECDSA_SECP384R1_SHA384:
      return "ECDSA_SECP384R1_SHA384";
    case Browser_TLSFingerprint_SignatureScheme.ECDSA_SECP521R1_SHA512:
      return "ECDSA_SECP521R1_SHA512";
    case Browser_TLSFingerprint_SignatureScheme.RSA_PSS_RSAE_SHA256:
      return "RSA_PSS_RSAE_SHA256";
    case Browser_TLSFingerprint_SignatureScheme.RSA_PSS_RSAE_SHA384:
      return "RSA_PSS_RSAE_SHA384";
    case Browser_TLSFingerprint_SignatureScheme.RSA_PSS_RSAE_SHA512:
      return "RSA_PSS_RSAE_SHA512";
    case Browser_TLSFingerprint_SignatureScheme.ED25519:
      return "ED25519";
    case Browser_TLSFingerprint_SignatureScheme.ED448:
      return "ED448";
    case Browser_TLSFingerprint_SignatureScheme.RSA_PSS_PSS_SHA256:
      return "RSA_PSS_PSS_SHA256";
    case Browser_TLSFingerprint_SignatureScheme.RSA_PSS_PSS_SHA384:
      return "RSA_PSS_PSS_SHA384";
    case Browser_TLSFingerprint_SignatureScheme.RSA_PSS_PSS_SHA512:
      return "RSA_PSS_PSS_SHA512";
    case Browser_TLSFingerprint_SignatureScheme.RSA_PKCS1_SHA1:
      return "RSA_PKCS1_SHA1";
    case Browser_TLSFingerprint_SignatureScheme.ECDSA_SHA1:
      return "ECDSA_SHA1";
    case Browser_TLSFingerprint_SignatureScheme.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** - Elliptic curves: https://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml#tls-parameters-8 */
export enum Browser_TLSFingerprint_EllipticCurve {
  RESERVED = 0,
  SECT163K1 = 1,
  SECT163R1 = 2,
  SECT163R2 = 3,
  SECT193R1 = 4,
  SECT193R2 = 5,
  SECT233K1 = 6,
  SECT233R1 = 7,
  SECT239K1 = 8,
  SECT283K1 = 9,
  SECT283R1 = 10,
  SECT409K1 = 11,
  SECT409R1 = 12,
  SECT571K1 = 13,
  SECT571R1 = 14,
  SECP160K1 = 15,
  SECP160R1 = 16,
  SECP160R2 = 17,
  SECP192K1 = 18,
  SECP192R1 = 19,
  SECP224K1 = 20,
  SECP224R1 = 21,
  SECP256K1 = 22,
  SECP256R1 = 23,
  SECP384R1 = 24,
  SECP521R1 = 25,
  BRAINPOOLP256R1 = 26,
  BRAINPOOLP384R1 = 27,
  BRAINPOOLP512R1 = 28,
  X25519 = 29,
  X448 = 30,
  BRAINPOOLP256R1TLS13 = 31,
  BRAINPOOLP384R1TLS13 = 32,
  BRAINPOOLP512R1TLS13 = 33,
  GC256A = 34,
  GC256B = 35,
  GC256C = 36,
  GC256D = 37,
  GC512A = 38,
  GC512B = 39,
  GC512C = 40,
  CURVESM2 = 41,
  FFDHE2048 = 256,
  FFDHE3072 = 257,
  FFDHE4096 = 258,
  FFDHE6144 = 259,
  FFDHE8192 = 260,
  X25519KYBER512DRAFT00 = 65072,
  X25519KYBER768DRAFT00 = 25497,
  X25519KYBER768DRAFT00OLD = 65073,
  P256Kyber768Draft00 = 65074,
  ARBITRARY_EXPLICIT_PRIME_CURVES = 65281,
  ARBITRARY_EXPLICIT_CHAR2_CURVES = 65282,
  UNRECOGNIZED = -1,
}

export function browser_TLSFingerprint_EllipticCurveFromJSON(object: any): Browser_TLSFingerprint_EllipticCurve {
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
    case 65072:
    case "X25519KYBER512DRAFT00":
      return Browser_TLSFingerprint_EllipticCurve.X25519KYBER512DRAFT00;
    case 25497:
    case "X25519KYBER768DRAFT00":
      return Browser_TLSFingerprint_EllipticCurve.X25519KYBER768DRAFT00;
    case 65073:
    case "X25519KYBER768DRAFT00OLD":
      return Browser_TLSFingerprint_EllipticCurve.X25519KYBER768DRAFT00OLD;
    case 65074:
    case "P256Kyber768Draft00":
      return Browser_TLSFingerprint_EllipticCurve.P256Kyber768Draft00;
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

export function browser_TLSFingerprint_EllipticCurveToJSON(object: Browser_TLSFingerprint_EllipticCurve): string {
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
    case Browser_TLSFingerprint_EllipticCurve.X25519KYBER512DRAFT00:
      return "X25519KYBER512DRAFT00";
    case Browser_TLSFingerprint_EllipticCurve.X25519KYBER768DRAFT00:
      return "X25519KYBER768DRAFT00";
    case Browser_TLSFingerprint_EllipticCurve.X25519KYBER768DRAFT00OLD:
      return "X25519KYBER768DRAFT00OLD";
    case Browser_TLSFingerprint_EllipticCurve.P256Kyber768Draft00:
      return "P256Kyber768Draft00";
    case Browser_TLSFingerprint_EllipticCurve.ARBITRARY_EXPLICIT_PRIME_CURVES:
      return "ARBITRARY_EXPLICIT_PRIME_CURVES";
    case Browser_TLSFingerprint_EllipticCurve.ARBITRARY_EXPLICIT_CHAR2_CURVES:
      return "ARBITRARY_EXPLICIT_CHAR2_CURVES";
    case Browser_TLSFingerprint_EllipticCurve.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** https://www.rfc-editor.org/rfc/rfc4492#section-5.1.2 */
export enum Browser_TLSFingerprint_EllipticCurvePointFormat {
  UNCOMPRESSED = 0,
  ANSI_X962_COMPRESSED_PRIME = 1,
  ANSI_X962_COMPRESSED_CHAR2 = 2,
  UNRECOGNIZED = -1,
}

export function browser_TLSFingerprint_EllipticCurvePointFormatFromJSON(
  object: any,
): Browser_TLSFingerprint_EllipticCurvePointFormat {
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

export function browser_TLSFingerprint_EllipticCurvePointFormatToJSON(
  object: Browser_TLSFingerprint_EllipticCurvePointFormat,
): string {
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

export interface Browser_TLSFingerprint_ExtensionData {
  extensionId?: Browser_TLSFingerprint_Extension;
  signatureAlgorithms?: Browser_TLSFingerprint_ExtensionData_SignatureAlgorithms;
  applicationLayerProtocolNegotiation?: Browser_TLSFingerprint_ExtensionData_ApplicationLayerProtocolNegotiation;
  compressCertificate?: Browser_TLSFingerprint_ExtensionData_CompressCertificate;
  recordSizeLimit?: Browser_TLSFingerprint_ExtensionData_RecordSizeLimit;
  supportedVersions?: Browser_TLSFingerprint_ExtensionData_SupportedVersions;
  pskKeyExchangeModes?: Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes;
  keyShareExtension?: Browser_TLSFingerprint_ExtensionData_KeyShareExtension;
  extensionApplicationsSettings?: Browser_TLSFingerprint_ExtensionData_ExtensionApplicationsSettings;
  extensionEncryptedClientHello?: Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello;
  extensionRenegotiationInfo?: Browser_TLSFingerprint_ExtensionData_ExtensionRenegotiationInfo;
}

export interface Browser_TLSFingerprint_ExtensionData_SignatureAlgorithms {
  supportedSignatureAlgorithms?: Browser_TLSFingerprint_SignatureScheme[];
}

export interface Browser_TLSFingerprint_ExtensionData_ApplicationLayerProtocolNegotiation {
  protocols?: string[];
}

export interface Browser_TLSFingerprint_ExtensionData_RecordSizeLimit {
  limit?: number;
}

export interface Browser_TLSFingerprint_ExtensionData_CompressCertificate {
  algorithms?: Browser_TLSFingerprint_ExtensionData_CompressCertificate_CertificateCompression[];
}

export enum Browser_TLSFingerprint_ExtensionData_CompressCertificate_CertificateCompression {
  NO_COMPRESSION = 0,
  ZLIB = 1,
  BROTLI = 2,
  ZSTD = 3,
  UNRECOGNIZED = -1,
}

export function browser_TLSFingerprint_ExtensionData_CompressCertificate_CertificateCompressionFromJSON(
  object: any,
): Browser_TLSFingerprint_ExtensionData_CompressCertificate_CertificateCompression {
  switch (object) {
    case 0:
    case "NO_COMPRESSION":
      return Browser_TLSFingerprint_ExtensionData_CompressCertificate_CertificateCompression.NO_COMPRESSION;
    case 1:
    case "ZLIB":
      return Browser_TLSFingerprint_ExtensionData_CompressCertificate_CertificateCompression.ZLIB;
    case 2:
    case "BROTLI":
      return Browser_TLSFingerprint_ExtensionData_CompressCertificate_CertificateCompression.BROTLI;
    case 3:
    case "ZSTD":
      return Browser_TLSFingerprint_ExtensionData_CompressCertificate_CertificateCompression.ZSTD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Browser_TLSFingerprint_ExtensionData_CompressCertificate_CertificateCompression.UNRECOGNIZED;
  }
}

export function browser_TLSFingerprint_ExtensionData_CompressCertificate_CertificateCompressionToJSON(
  object: Browser_TLSFingerprint_ExtensionData_CompressCertificate_CertificateCompression,
): string {
  switch (object) {
    case Browser_TLSFingerprint_ExtensionData_CompressCertificate_CertificateCompression.NO_COMPRESSION:
      return "NO_COMPRESSION";
    case Browser_TLSFingerprint_ExtensionData_CompressCertificate_CertificateCompression.ZLIB:
      return "ZLIB";
    case Browser_TLSFingerprint_ExtensionData_CompressCertificate_CertificateCompression.BROTLI:
      return "BROTLI";
    case Browser_TLSFingerprint_ExtensionData_CompressCertificate_CertificateCompression.ZSTD:
      return "ZSTD";
    case Browser_TLSFingerprint_ExtensionData_CompressCertificate_CertificateCompression.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Browser_TLSFingerprint_ExtensionData_SupportedVersions {
  versions?: Browser_TLSFingerprint_ProtocolVersion[];
}

export interface Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes {
  modes?: Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes_Mode[];
}

export enum Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes_Mode {
  PLAIN = 0,
  DHE = 1,
  UNRECOGNIZED = -1,
}

export function browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes_ModeFromJSON(
  object: any,
): Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes_Mode {
  switch (object) {
    case 0:
    case "PLAIN":
      return Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes_Mode.PLAIN;
    case 1:
    case "DHE":
      return Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes_Mode.DHE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes_Mode.UNRECOGNIZED;
  }
}

export function browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes_ModeToJSON(
  object: Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes_Mode,
): string {
  switch (object) {
    case Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes_Mode.PLAIN:
      return "PLAIN";
    case Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes_Mode.DHE:
      return "DHE";
    case Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes_Mode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Browser_TLSFingerprint_ExtensionData_KeyShareExtension {
  keyShares?: Browser_TLSFingerprint_ExtensionData_KeyShareExtension_KeyShare[];
}

export interface Browser_TLSFingerprint_ExtensionData_KeyShareExtension_KeyShare {
  group?: Browser_TLSFingerprint_EllipticCurve;
  data?: Uint8Array;
}

export interface Browser_TLSFingerprint_ExtensionData_ExtensionApplicationsSettings {
  protocols?: string[];
}

export interface Browser_TLSFingerprint_ExtensionData_ExtensionRenegotiationInfo {
  renegotiationSupport?: Browser_TLSFingerprint_RenegotiationSupport;
}

export interface Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello {
  candidateCipherSuites?: Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKESymmetricCipherSuite[];
  candidatePayloadLens?: number[];
}

export enum Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HKDF {
  HKDF_RESERVED = 0,
  HKDF_SHA256 = 1,
  HKDF_SHA384 = 2,
  HKDF_SHA512 = 3,
  UNRECOGNIZED = -1,
}

export function browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HKDFFromJSON(
  object: any,
): Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HKDF {
  switch (object) {
    case 0:
    case "HKDF_RESERVED":
      return Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HKDF.HKDF_RESERVED;
    case 1:
    case "HKDF_SHA256":
      return Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HKDF.HKDF_SHA256;
    case 2:
    case "HKDF_SHA384":
      return Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HKDF.HKDF_SHA384;
    case 3:
    case "HKDF_SHA512":
      return Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HKDF.HKDF_SHA512;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HKDF.UNRECOGNIZED;
  }
}

export function browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HKDFToJSON(
  object: Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HKDF,
): string {
  switch (object) {
    case Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HKDF.HKDF_RESERVED:
      return "HKDF_RESERVED";
    case Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HKDF.HKDF_SHA256:
      return "HKDF_SHA256";
    case Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HKDF.HKDF_SHA384:
      return "HKDF_SHA384";
    case Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HKDF.HKDF_SHA512:
      return "HKDF_SHA512";
    case Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HKDF.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKEAEAD {
  HPKEAEAD_RESERVED = 0,
  HPKEAEAD_AES_128_GCM = 1,
  HPKEAEAD_AES_256_GCM = 2,
  HPKEAEAD_CHACHA20POLY1305 = 3,
  UNRECOGNIZED = -1,
}

export function browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKEAEADFromJSON(
  object: any,
): Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKEAEAD {
  switch (object) {
    case 0:
    case "HPKEAEAD_RESERVED":
      return Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKEAEAD.HPKEAEAD_RESERVED;
    case 1:
    case "HPKEAEAD_AES_128_GCM":
      return Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKEAEAD.HPKEAEAD_AES_128_GCM;
    case 2:
    case "HPKEAEAD_AES_256_GCM":
      return Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKEAEAD.HPKEAEAD_AES_256_GCM;
    case 3:
    case "HPKEAEAD_CHACHA20POLY1305":
      return Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKEAEAD.HPKEAEAD_CHACHA20POLY1305;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKEAEAD.UNRECOGNIZED;
  }
}

export function browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKEAEADToJSON(
  object: Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKEAEAD,
): string {
  switch (object) {
    case Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKEAEAD.HPKEAEAD_RESERVED:
      return "HPKEAEAD_RESERVED";
    case Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKEAEAD.HPKEAEAD_AES_128_GCM:
      return "HPKEAEAD_AES_128_GCM";
    case Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKEAEAD.HPKEAEAD_AES_256_GCM:
      return "HPKEAEAD_AES_256_GCM";
    case Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKEAEAD.HPKEAEAD_CHACHA20POLY1305:
      return "HPKEAEAD_CHACHA20POLY1305";
    case Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKEAEAD.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKESymmetricCipherSuite {
  kdfId?: Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HKDF;
  aeadId?: Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKEAEAD;
}

export interface Browser_HTTPFingerprint {
  /** HTTP 1 */
  headerOrder?: string[];
  /** HTTP 2 */
  pseudoHeaderOrder?: string[];
  settingsFrame?: Browser_HTTPFingerprint_SettingsFrameOpts;
  windowUpdateIncrement?: number;
  priorityFrames?: Browser_HTTPFingerprint_PriorityFrameOpts[];
  headerFramePriority?: Browser_HTTPFingerprint_PriorityFrameOpts;
}

export interface Browser_HTTPFingerprint_PriorityFrameOpts {
  streamId?: number;
  streamDep?: number;
  exclusive?: boolean;
  weight?: number;
}

export interface Browser_HTTPFingerprint_SettingsFrameOpts {
  headerTableSize?: number;
  enablePush?: number;
  maxConcurrentStreams?: number;
  initialWindowSize?: number;
  maxFrameSize?: number;
  maxHeaderListSize?: number;
}

export interface Browser_GLCapability {
  boolValue?: boolean[];
  intValue?: number[];
  floatValue?: number[];
  stringValue?: string[];
  enumValue?: number;
  enumName?: string;
}

export interface Browser_BrowserCollection {
  id?: number;
  hash?: string;
  listData?: string[];
  mapData?: { [key: string]: string };
  glCapabilities?: { [key: string]: Browser_GLCapability };
}

export interface Browser_BrowserCollection_MapDataEntry {
  key: string;
  value: string;
}

export interface Browser_BrowserCollection_GlCapabilitiesEntry {
  key: string;
  value?: Browser_GLCapability;
}

export interface Browser_BrowserScreen {
  availWidth?: number;
  availHeight?: number;
  width?: number;
  height?: number;
  colorDepth?: number;
  pixelDepth?: number;
  availLeft?: number;
  availTop?: number;
  isExtended?: boolean;
  orientation?: Browser_BrowserScreen_Orientation;
}

export interface Browser_BrowserScreen_Orientation {
  angle?: number;
  type?: string;
}

export interface Browser_WebGPU {
  features?: Browser_WebGPU_Features;
  limits?: { [key: string]: number };
  isFallbackAdapter?: boolean;
  vendor?: string;
  architecture?: string;
  device?: string;
  description?: string;
}

export interface Browser_WebGPU_Features {
  size?: number;
}

export interface Browser_WebGPU_LimitsEntry {
  key: string;
  value: number;
}

export interface Browser_SpeechSynthesis {
  voiceURI?: string;
  name?: string;
  lang?: string;
  localService?: boolean;
  default?: boolean;
}

export interface Browser_Plugin {
  name?: string;
  fileName?: string;
  description?: string;
  supportedMIMETypes?: { [key: string]: Browser_Plugin_MIMEType };
}

export interface Browser_Plugin_MIMEType {
  type?: string;
  suffixes?: string;
  description?: string;
}

export interface Browser_Plugin_SupportedMIMETypesEntry {
  key: string;
  value?: Browser_Plugin_MIMEType;
}

export interface Browser_HighEntropyValues {
  architecture?: string;
  bitness?: string;
  mobile?: boolean;
  model?: string;
  platform?: string;
  platformVersion?: string;
  usFullVersion?: string;
  brands?: Browser_HighEntropyValues_Brand[];
  fullVersionList?: Browser_HighEntropyValues_Brand[];
}

export interface Browser_HighEntropyValues_Brand {
  brand?: string;
  version?: string;
}

export interface Browser_WebRTC {
  video?: Browser_WebRTC_CodecInformation;
  audio?: Browser_WebRTC_CodecInformation;
}

export interface Browser_WebRTC_Codec {
  channels?: number;
  clockRate?: number;
  mimeType?: string;
  sdpFmtLine?: string;
}

export interface Browser_WebRTC_HeaderExtension {
  direction?: string;
  uri?: string;
}

export interface Browser_WebRTC_CodecInformation {
  codecs?: Browser_WebRTC_Codec[];
  headerExtensions?: Browser_WebRTC_HeaderExtension[];
}

/** Potentially common for more than just Android */
export interface GPSLocation {
  longitude?: number;
  latitude?: number;
  altitude?: number;
  provider?: GPSLocation_LocationProvider;
}

export enum GPSLocation_LocationProvider {
  /** LocationProvider_NONE - Treat as random */
  LocationProvider_NONE = 0,
  GPS = 1,
  NETWORK = 2,
  PASSIVE = 3,
  UNRECOGNIZED = -1,
}

export function gPSLocation_LocationProviderFromJSON(object: any): GPSLocation_LocationProvider {
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

export function gPSLocation_LocationProviderToJSON(object: GPSLocation_LocationProvider): string {
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

export interface Locale {
  language?: string;
  countryISO?: string;
}

export interface SIMCard {
  /** With or without country code? */
  phoneNumber?: string;
  /** Provider and country information */
  MCC?: string;
  MNC?: string;
  carrier?: string;
  countryISO?: string;
  countryCode?: string;
  imei?: SIMCard_IMEI;
  meid?: SIMCard_MEID;
}

export interface SIMCard_IMEI {
  TAC?: string;
  /**
   * src: https://en.wikipedia.org/wiki/International_Mobile_Equipment_Identity
   * AA	-	BB	BB	BB	-	CC	CC	CC	D
   * Where AA and BB = TAC, CC = serial (randomized) and D = Luhn validation
   */
  imei?: string;
}

export interface SIMCard_MEID {
  RegionCode?: string;
  ManufacturerCode?: string;
  /**
   * src: https://en.wikipedia.org/wiki/Mobile_equipment_identifier
   * R R	X	X	X	X	X	X	Z	Z	Z	Z	Z	Z	C
   * Where R = region, X = manufacturer, Z = serial (randomized) and C = Luhn validation
   */
  meid?: string;
}

export interface MAC {
  OUI?: string;
  address?: string;
}

export interface Timezone {
  /** IANA standard */
  name?: string;
}

export interface ScreenData {
  /** in DPI */
  density?: number;
  /** in pixels */
  resolutionHorizontal?: number;
  /** in pixels */
  resolutionVertical?: number;
}

export interface CPUData {
  arch?: CPUData_Architecture;
  archName?: string;
  model?: string;
  brand?: string;
  board?: string;
  abiList?: string[];
}

export enum CPUData_Architecture {
  UNKNOWN = 0,
  ARM = 1,
  ARM64 = 2,
  MIPS = 3,
  MIPSEL = 4,
  PPC = 5,
  PPC64 = 6,
  X32 = 7,
  X64 = 8,
  UNRECOGNIZED = -1,
}

export function cPUData_ArchitectureFromJSON(object: any): CPUData_Architecture {
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

export function cPUData_ArchitectureToJSON(object: CPUData_Architecture): string {
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

/** Android device */
export interface AndroidDevice {
  id?: AndroidDevice_ID;
  version?: AndroidDevice_Version;
  build?: AndroidDevice_BuildData;
  software?: AndroidDevice_DeviceSoftware;
  /** Everything below this can technically be abstracted to unified device */
  screen?: ScreenData;
  cpu?: CPUData;
  locale?: Locale;
  location?: GPSLocation;
  timezone?: Timezone;
  macAddress?: MAC;
  /** Dual SIM compatibility */
  simSlots?: SIMCard[];
}

/**
 * Src: https://apilevels.com/
 * BuildNumber defaults: https://source.android.com/docs/setup/about/build-numbers#source-code-tags-and-builds
 */
export enum AndroidDevice_Version {
  AndroidVersion_NONE = 0,
  /** V1_0 - BASE */
  V1_0 = 1,
  /** V1_1 - BASE_1_1 */
  V1_1 = 2,
  /** V1_5 - CUPCAKE */
  V1_5 = 3,
  /** V1_6 - DONUT */
  V1_6 = 4,
  /** V2 - ECLAIR */
  V2 = 5,
  /** V2_0_1 - ECLAIR_0_1 */
  V2_0_1 = 6,
  /** V2_1 - ECLAIR_MR1 */
  V2_1 = 7,
  /** V2_2 - FROYO */
  V2_2 = 8,
  /** V2_3_2 - GINGERBREAD */
  V2_3_2 = 9,
  /** V2_3_7 - GINGERBREAD_MR1 */
  V2_3_7 = 10,
  /** V3_0 - HONEYCOMB */
  V3_0 = 11,
  /** v3_1 - HONEYCOMB_MR1 */
  v3_1 = 12,
  /** V3_2 - HONEYCOMB_MR2 */
  V3_2 = 13,
  /** V4_0_2 - ICE_CREAM_SANDWICH */
  V4_0_2 = 14,
  /** V4_0_4 - ICE_CREAM_SANDWICH_MR1 */
  V4_0_4 = 15,
  /** V4_1 - JELLY_BEAN */
  V4_1 = 16,
  /** V4_2 - JELLY_BEAN_MR1 */
  V4_2 = 17,
  /** V4_3 - JELLY_BEAN_MR2 */
  V4_3 = 18,
  /** V4_4 - KITKAT */
  V4_4 = 19,
  /** V4_4W - KITKAT_WATCH */
  V4_4W = 20,
  /** V5_0 - LOLLIPOP / L */
  V5_0 = 21,
  /** V5_1 - LOLLIPOP_MR1 */
  V5_1 = 22,
  /** V6_0 - M */
  V6_0 = 23,
  /** V7_0 - N */
  V7_0 = 24,
  /** V7_1 - N_MR1 */
  V7_1 = 25,
  /** V8_0 - O */
  V8_0 = 26,
  /** V8_1 - O_MR1 */
  V8_1 = 27,
  /** V9_0 - P */
  V9_0 = 28,
  /** V10_0 - Q */
  V10_0 = 29,
  /** V11_0 - R */
  V11_0 = 30,
  /** V12_0 - S */
  V12_0 = 31,
  /** V12_0L - S_V2 */
  V12_0L = 32,
  /** V13_0 - TIRAMISU */
  V13_0 = 33,
  /** V14_0 - UPSIDE_DOWN_CAKE */
  V14_0 = 34,
  UNRECOGNIZED = -1,
}

export function androidDevice_VersionFromJSON(object: any): AndroidDevice_Version {
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

export function androidDevice_VersionToJSON(object: AndroidDevice_Version): string {
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

export interface AndroidDevice_ID {
  id?: number;
}

/** https://developer.android.com/reference/android/os/Build */
export interface AndroidDevice_BuildData {
  board?: string;
  bootloader?: string;
  brand?: string;
  device?: string;
  display?: string;
  fingerprint?: string;
  hardware?: string;
  id?: string;
  manufacturer?: string;
  model?: string;
  odmSku?: string;
  product?: string;
  sku?: string;
  socManufacturer?: string;
  socModel?: string;
  tags?: string;
  type?: string;
  incrementalVersion?: string;
}

export interface AndroidDevice_DeviceSoftware {
  softwareMetaData?: { [key: string]: string };
  /** app package : version string */
  appMetaData?: { [key: string]: string };
}

export interface AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry {
  key: string;
  value: string;
}

export interface AndroidDevice_DeviceSoftware_AppMetaDataEntry {
  key: string;
  value: string;
}

function createBaseBrowser(): Browser {
  return {
    version: "",
    name: "",
    userAgent: "",
    brandHeader: "",
    platformHeader: "",
    mobileHeader: "",
    tlsFingerprint: undefined,
    httpFingerprint: undefined,
    appCodeName: "",
    appName: "",
    appVersion: "",
    cookieEnabled: false,
    deviceMemory: 0,
    doNotTrack: 0,
    hardwareConcurrency: 0,
    language: "",
    languages: [],
    maxTouchPoints: 0,
    pdfViewerEnabled: false,
    platform: "",
    product: "",
    productSub: "",
    vendor: "",
    vendorSub: "",
    webdriver: false,
    devicePixelRatio: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0,
    screen: undefined,
    webGPU: undefined,
    speechSynthesis: [],
    plugins: [],
    highEntropyValues: undefined,
    webRTC: undefined,
    availableFonts: undefined,
    navigator: undefined,
    window: undefined,
    document: undefined,
    documentElement: undefined,
    audioTypes: undefined,
    videoTypes: undefined,
    css: undefined,
    gl: undefined,
    gl2: undefined,
    glExperimental: undefined,
  };
}

export const Browser = {
  encode(message: Browser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== undefined && message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.userAgent !== undefined && message.userAgent !== "") {
      writer.uint32(26).string(message.userAgent);
    }
    if (message.brandHeader !== undefined && message.brandHeader !== "") {
      writer.uint32(34).string(message.brandHeader);
    }
    if (message.platformHeader !== undefined && message.platformHeader !== "") {
      writer.uint32(42).string(message.platformHeader);
    }
    if (message.mobileHeader !== undefined && message.mobileHeader !== "") {
      writer.uint32(50).string(message.mobileHeader);
    }
    if (message.tlsFingerprint !== undefined) {
      Browser_TLSFingerprint.encode(message.tlsFingerprint, writer.uint32(82).fork()).ldelim();
    }
    if (message.httpFingerprint !== undefined) {
      Browser_HTTPFingerprint.encode(message.httpFingerprint, writer.uint32(90).fork()).ldelim();
    }
    if (message.appCodeName !== undefined && message.appCodeName !== "") {
      writer.uint32(162).string(message.appCodeName);
    }
    if (message.appName !== undefined && message.appName !== "") {
      writer.uint32(170).string(message.appName);
    }
    if (message.appVersion !== undefined && message.appVersion !== "") {
      writer.uint32(178).string(message.appVersion);
    }
    if (message.cookieEnabled === true) {
      writer.uint32(184).bool(message.cookieEnabled);
    }
    if (message.deviceMemory !== undefined && message.deviceMemory !== 0) {
      writer.uint32(192).int64(message.deviceMemory);
    }
    if (message.doNotTrack !== undefined && message.doNotTrack !== 0) {
      writer.uint32(200).int32(message.doNotTrack);
    }
    if (message.hardwareConcurrency !== undefined && message.hardwareConcurrency !== 0) {
      writer.uint32(208).int32(message.hardwareConcurrency);
    }
    if (message.language !== undefined && message.language !== "") {
      writer.uint32(218).string(message.language);
    }
    if (message.languages !== undefined && message.languages.length !== 0) {
      for (const v of message.languages) {
        writer.uint32(226).string(v!);
      }
    }
    if (message.maxTouchPoints !== undefined && message.maxTouchPoints !== 0) {
      writer.uint32(232).int32(message.maxTouchPoints);
    }
    if (message.pdfViewerEnabled === true) {
      writer.uint32(240).bool(message.pdfViewerEnabled);
    }
    if (message.platform !== undefined && message.platform !== "") {
      writer.uint32(250).string(message.platform);
    }
    if (message.product !== undefined && message.product !== "") {
      writer.uint32(258).string(message.product);
    }
    if (message.productSub !== undefined && message.productSub !== "") {
      writer.uint32(266).string(message.productSub);
    }
    if (message.vendor !== undefined && message.vendor !== "") {
      writer.uint32(274).string(message.vendor);
    }
    if (message.vendorSub !== undefined && message.vendorSub !== "") {
      writer.uint32(282).string(message.vendorSub);
    }
    if (message.webdriver === true) {
      writer.uint32(288).bool(message.webdriver);
    }
    if (message.devicePixelRatio !== undefined && message.devicePixelRatio !== 0) {
      writer.uint32(297).double(message.devicePixelRatio);
    }
    if (message.innerWidth !== undefined && message.innerWidth !== 0) {
      writer.uint32(304).int32(message.innerWidth);
    }
    if (message.innerHeight !== undefined && message.innerHeight !== 0) {
      writer.uint32(312).int32(message.innerHeight);
    }
    if (message.outerWidth !== undefined && message.outerWidth !== 0) {
      writer.uint32(320).int32(message.outerWidth);
    }
    if (message.outerHeight !== undefined && message.outerHeight !== 0) {
      writer.uint32(328).int32(message.outerHeight);
    }
    if (message.screen !== undefined) {
      Browser_BrowserScreen.encode(message.screen, writer.uint32(338).fork()).ldelim();
    }
    if (message.webGPU !== undefined) {
      Browser_WebGPU.encode(message.webGPU, writer.uint32(346).fork()).ldelim();
    }
    if (message.speechSynthesis !== undefined && message.speechSynthesis.length !== 0) {
      for (const v of message.speechSynthesis) {
        Browser_SpeechSynthesis.encode(v!, writer.uint32(354).fork()).ldelim();
      }
    }
    if (message.plugins !== undefined && message.plugins.length !== 0) {
      for (const v of message.plugins) {
        Browser_Plugin.encode(v!, writer.uint32(362).fork()).ldelim();
      }
    }
    if (message.highEntropyValues !== undefined) {
      Browser_HighEntropyValues.encode(message.highEntropyValues, writer.uint32(370).fork()).ldelim();
    }
    if (message.webRTC !== undefined) {
      Browser_WebRTC.encode(message.webRTC, writer.uint32(378).fork()).ldelim();
    }
    if (message.availableFonts !== undefined) {
      Browser_BrowserCollection.encode(message.availableFonts, writer.uint32(802).fork()).ldelim();
    }
    if (message.navigator !== undefined) {
      Browser_BrowserCollection.encode(message.navigator, writer.uint32(810).fork()).ldelim();
    }
    if (message.window !== undefined) {
      Browser_BrowserCollection.encode(message.window, writer.uint32(818).fork()).ldelim();
    }
    if (message.document !== undefined) {
      Browser_BrowserCollection.encode(message.document, writer.uint32(826).fork()).ldelim();
    }
    if (message.documentElement !== undefined) {
      Browser_BrowserCollection.encode(message.documentElement, writer.uint32(834).fork()).ldelim();
    }
    if (message.audioTypes !== undefined) {
      Browser_BrowserCollection.encode(message.audioTypes, writer.uint32(842).fork()).ldelim();
    }
    if (message.videoTypes !== undefined) {
      Browser_BrowserCollection.encode(message.videoTypes, writer.uint32(850).fork()).ldelim();
    }
    if (message.css !== undefined) {
      Browser_BrowserCollection.encode(message.css, writer.uint32(858).fork()).ldelim();
    }
    if (message.gl !== undefined) {
      Browser_BrowserCollection.encode(message.gl, writer.uint32(866).fork()).ldelim();
    }
    if (message.gl2 !== undefined) {
      Browser_BrowserCollection.encode(message.gl2, writer.uint32(874).fork()).ldelim();
    }
    if (message.glExperimental !== undefined) {
      Browser_BrowserCollection.encode(message.glExperimental, writer.uint32(882).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

          message.platformHeader = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.mobileHeader = reader.string();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.tlsFingerprint = Browser_TLSFingerprint.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.httpFingerprint = Browser_HTTPFingerprint.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag != 162) {
            break;
          }

          message.appCodeName = reader.string();
          continue;
        case 21:
          if (tag != 170) {
            break;
          }

          message.appName = reader.string();
          continue;
        case 22:
          if (tag != 178) {
            break;
          }

          message.appVersion = reader.string();
          continue;
        case 23:
          if (tag != 184) {
            break;
          }

          message.cookieEnabled = reader.bool();
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.deviceMemory = longToNumber(reader.int64() as Long);
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.doNotTrack = reader.int32();
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.hardwareConcurrency = reader.int32();
          continue;
        case 27:
          if (tag != 218) {
            break;
          }

          message.language = reader.string();
          continue;
        case 28:
          if (tag != 226) {
            break;
          }

          message.languages!.push(reader.string());
          continue;
        case 29:
          if (tag != 232) {
            break;
          }

          message.maxTouchPoints = reader.int32();
          continue;
        case 30:
          if (tag != 240) {
            break;
          }

          message.pdfViewerEnabled = reader.bool();
          continue;
        case 31:
          if (tag != 250) {
            break;
          }

          message.platform = reader.string();
          continue;
        case 32:
          if (tag != 258) {
            break;
          }

          message.product = reader.string();
          continue;
        case 33:
          if (tag != 266) {
            break;
          }

          message.productSub = reader.string();
          continue;
        case 34:
          if (tag != 274) {
            break;
          }

          message.vendor = reader.string();
          continue;
        case 35:
          if (tag != 282) {
            break;
          }

          message.vendorSub = reader.string();
          continue;
        case 36:
          if (tag != 288) {
            break;
          }

          message.webdriver = reader.bool();
          continue;
        case 37:
          if (tag != 297) {
            break;
          }

          message.devicePixelRatio = reader.double();
          continue;
        case 38:
          if (tag != 304) {
            break;
          }

          message.innerWidth = reader.int32();
          continue;
        case 39:
          if (tag != 312) {
            break;
          }

          message.innerHeight = reader.int32();
          continue;
        case 40:
          if (tag != 320) {
            break;
          }

          message.outerWidth = reader.int32();
          continue;
        case 41:
          if (tag != 328) {
            break;
          }

          message.outerHeight = reader.int32();
          continue;
        case 42:
          if (tag != 338) {
            break;
          }

          message.screen = Browser_BrowserScreen.decode(reader, reader.uint32());
          continue;
        case 43:
          if (tag != 346) {
            break;
          }

          message.webGPU = Browser_WebGPU.decode(reader, reader.uint32());
          continue;
        case 44:
          if (tag != 354) {
            break;
          }

          message.speechSynthesis!.push(Browser_SpeechSynthesis.decode(reader, reader.uint32()));
          continue;
        case 45:
          if (tag != 362) {
            break;
          }

          message.plugins!.push(Browser_Plugin.decode(reader, reader.uint32()));
          continue;
        case 46:
          if (tag != 370) {
            break;
          }

          message.highEntropyValues = Browser_HighEntropyValues.decode(reader, reader.uint32());
          continue;
        case 47:
          if (tag != 378) {
            break;
          }

          message.webRTC = Browser_WebRTC.decode(reader, reader.uint32());
          continue;
        case 100:
          if (tag != 802) {
            break;
          }

          message.availableFonts = Browser_BrowserCollection.decode(reader, reader.uint32());
          continue;
        case 101:
          if (tag != 810) {
            break;
          }

          message.navigator = Browser_BrowserCollection.decode(reader, reader.uint32());
          continue;
        case 102:
          if (tag != 818) {
            break;
          }

          message.window = Browser_BrowserCollection.decode(reader, reader.uint32());
          continue;
        case 103:
          if (tag != 826) {
            break;
          }

          message.document = Browser_BrowserCollection.decode(reader, reader.uint32());
          continue;
        case 104:
          if (tag != 834) {
            break;
          }

          message.documentElement = Browser_BrowserCollection.decode(reader, reader.uint32());
          continue;
        case 105:
          if (tag != 842) {
            break;
          }

          message.audioTypes = Browser_BrowserCollection.decode(reader, reader.uint32());
          continue;
        case 106:
          if (tag != 850) {
            break;
          }

          message.videoTypes = Browser_BrowserCollection.decode(reader, reader.uint32());
          continue;
        case 107:
          if (tag != 858) {
            break;
          }

          message.css = Browser_BrowserCollection.decode(reader, reader.uint32());
          continue;
        case 108:
          if (tag != 866) {
            break;
          }

          message.gl = Browser_BrowserCollection.decode(reader, reader.uint32());
          continue;
        case 109:
          if (tag != 874) {
            break;
          }

          message.gl2 = Browser_BrowserCollection.decode(reader, reader.uint32());
          continue;
        case 110:
          if (tag != 882) {
            break;
          }

          message.glExperimental = Browser_BrowserCollection.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser {
    return {
      version: isSet(object.version) ? String(object.version) : "",
      name: isSet(object.name) ? String(object.name) : "",
      userAgent: isSet(object.userAgent) ? String(object.userAgent) : "",
      brandHeader: isSet(object.brandHeader) ? String(object.brandHeader) : "",
      platformHeader: isSet(object.platformHeader) ? String(object.platformHeader) : "",
      mobileHeader: isSet(object.mobileHeader) ? String(object.mobileHeader) : "",
      tlsFingerprint: isSet(object.tlsFingerprint) ? Browser_TLSFingerprint.fromJSON(object.tlsFingerprint) : undefined,
      httpFingerprint: isSet(object.httpFingerprint)
        ? Browser_HTTPFingerprint.fromJSON(object.httpFingerprint)
        : undefined,
      appCodeName: isSet(object.appCodeName) ? String(object.appCodeName) : "",
      appName: isSet(object.appName) ? String(object.appName) : "",
      appVersion: isSet(object.appVersion) ? String(object.appVersion) : "",
      cookieEnabled: isSet(object.cookieEnabled) ? Boolean(object.cookieEnabled) : false,
      deviceMemory: isSet(object.deviceMemory) ? Number(object.deviceMemory) : 0,
      doNotTrack: isSet(object.doNotTrack) ? Number(object.doNotTrack) : 0,
      hardwareConcurrency: isSet(object.hardwareConcurrency) ? Number(object.hardwareConcurrency) : 0,
      language: isSet(object.language) ? String(object.language) : "",
      languages: Array.isArray(object?.languages) ? object.languages.map((e: any) => String(e)) : [],
      maxTouchPoints: isSet(object.maxTouchPoints) ? Number(object.maxTouchPoints) : 0,
      pdfViewerEnabled: isSet(object.pdfViewerEnabled) ? Boolean(object.pdfViewerEnabled) : false,
      platform: isSet(object.platform) ? String(object.platform) : "",
      product: isSet(object.product) ? String(object.product) : "",
      productSub: isSet(object.productSub) ? String(object.productSub) : "",
      vendor: isSet(object.vendor) ? String(object.vendor) : "",
      vendorSub: isSet(object.vendorSub) ? String(object.vendorSub) : "",
      webdriver: isSet(object.webdriver) ? Boolean(object.webdriver) : false,
      devicePixelRatio: isSet(object.devicePixelRatio) ? Number(object.devicePixelRatio) : 0,
      innerWidth: isSet(object.innerWidth) ? Number(object.innerWidth) : 0,
      innerHeight: isSet(object.innerHeight) ? Number(object.innerHeight) : 0,
      outerWidth: isSet(object.outerWidth) ? Number(object.outerWidth) : 0,
      outerHeight: isSet(object.outerHeight) ? Number(object.outerHeight) : 0,
      screen: isSet(object.screen) ? Browser_BrowserScreen.fromJSON(object.screen) : undefined,
      webGPU: isSet(object.webGPU) ? Browser_WebGPU.fromJSON(object.webGPU) : undefined,
      speechSynthesis: Array.isArray(object?.speechSynthesis)
        ? object.speechSynthesis.map((e: any) => Browser_SpeechSynthesis.fromJSON(e))
        : [],
      plugins: Array.isArray(object?.plugins) ? object.plugins.map((e: any) => Browser_Plugin.fromJSON(e)) : [],
      highEntropyValues: isSet(object.highEntropyValues)
        ? Browser_HighEntropyValues.fromJSON(object.highEntropyValues)
        : undefined,
      webRTC: isSet(object.webRTC) ? Browser_WebRTC.fromJSON(object.webRTC) : undefined,
      availableFonts: isSet(object.availableFonts)
        ? Browser_BrowserCollection.fromJSON(object.availableFonts)
        : undefined,
      navigator: isSet(object.navigator) ? Browser_BrowserCollection.fromJSON(object.navigator) : undefined,
      window: isSet(object.window) ? Browser_BrowserCollection.fromJSON(object.window) : undefined,
      document: isSet(object.document) ? Browser_BrowserCollection.fromJSON(object.document) : undefined,
      documentElement: isSet(object.documentElement)
        ? Browser_BrowserCollection.fromJSON(object.documentElement)
        : undefined,
      audioTypes: isSet(object.audioTypes) ? Browser_BrowserCollection.fromJSON(object.audioTypes) : undefined,
      videoTypes: isSet(object.videoTypes) ? Browser_BrowserCollection.fromJSON(object.videoTypes) : undefined,
      css: isSet(object.css) ? Browser_BrowserCollection.fromJSON(object.css) : undefined,
      gl: isSet(object.gl) ? Browser_BrowserCollection.fromJSON(object.gl) : undefined,
      gl2: isSet(object.gl2) ? Browser_BrowserCollection.fromJSON(object.gl2) : undefined,
      glExperimental: isSet(object.glExperimental)
        ? Browser_BrowserCollection.fromJSON(object.glExperimental)
        : undefined,
    };
  },

  toJSON(message: Browser): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.name !== undefined && (obj.name = message.name);
    message.userAgent !== undefined && (obj.userAgent = message.userAgent);
    message.brandHeader !== undefined && (obj.brandHeader = message.brandHeader);
    message.platformHeader !== undefined && (obj.platformHeader = message.platformHeader);
    message.mobileHeader !== undefined && (obj.mobileHeader = message.mobileHeader);
    message.tlsFingerprint !== undefined &&
      (obj.tlsFingerprint = message.tlsFingerprint ? Browser_TLSFingerprint.toJSON(message.tlsFingerprint) : undefined);
    message.httpFingerprint !== undefined && (obj.httpFingerprint = message.httpFingerprint
      ? Browser_HTTPFingerprint.toJSON(message.httpFingerprint)
      : undefined);
    message.appCodeName !== undefined && (obj.appCodeName = message.appCodeName);
    message.appName !== undefined && (obj.appName = message.appName);
    message.appVersion !== undefined && (obj.appVersion = message.appVersion);
    message.cookieEnabled !== undefined && (obj.cookieEnabled = message.cookieEnabled);
    message.deviceMemory !== undefined && (obj.deviceMemory = Math.round(message.deviceMemory));
    message.doNotTrack !== undefined && (obj.doNotTrack = Math.round(message.doNotTrack));
    message.hardwareConcurrency !== undefined && (obj.hardwareConcurrency = Math.round(message.hardwareConcurrency));
    message.language !== undefined && (obj.language = message.language);
    if (message.languages) {
      obj.languages = message.languages.map((e) => e);
    } else {
      obj.languages = [];
    }
    message.maxTouchPoints !== undefined && (obj.maxTouchPoints = Math.round(message.maxTouchPoints));
    message.pdfViewerEnabled !== undefined && (obj.pdfViewerEnabled = message.pdfViewerEnabled);
    message.platform !== undefined && (obj.platform = message.platform);
    message.product !== undefined && (obj.product = message.product);
    message.productSub !== undefined && (obj.productSub = message.productSub);
    message.vendor !== undefined && (obj.vendor = message.vendor);
    message.vendorSub !== undefined && (obj.vendorSub = message.vendorSub);
    message.webdriver !== undefined && (obj.webdriver = message.webdriver);
    message.devicePixelRatio !== undefined && (obj.devicePixelRatio = message.devicePixelRatio);
    message.innerWidth !== undefined && (obj.innerWidth = Math.round(message.innerWidth));
    message.innerHeight !== undefined && (obj.innerHeight = Math.round(message.innerHeight));
    message.outerWidth !== undefined && (obj.outerWidth = Math.round(message.outerWidth));
    message.outerHeight !== undefined && (obj.outerHeight = Math.round(message.outerHeight));
    message.screen !== undefined &&
      (obj.screen = message.screen ? Browser_BrowserScreen.toJSON(message.screen) : undefined);
    message.webGPU !== undefined && (obj.webGPU = message.webGPU ? Browser_WebGPU.toJSON(message.webGPU) : undefined);
    if (message.speechSynthesis) {
      obj.speechSynthesis = message.speechSynthesis.map((e) => e ? Browser_SpeechSynthesis.toJSON(e) : undefined);
    } else {
      obj.speechSynthesis = [];
    }
    if (message.plugins) {
      obj.plugins = message.plugins.map((e) => e ? Browser_Plugin.toJSON(e) : undefined);
    } else {
      obj.plugins = [];
    }
    message.highEntropyValues !== undefined && (obj.highEntropyValues = message.highEntropyValues
      ? Browser_HighEntropyValues.toJSON(message.highEntropyValues)
      : undefined);
    message.webRTC !== undefined && (obj.webRTC = message.webRTC ? Browser_WebRTC.toJSON(message.webRTC) : undefined);
    message.availableFonts !== undefined && (obj.availableFonts = message.availableFonts
      ? Browser_BrowserCollection.toJSON(message.availableFonts)
      : undefined);
    message.navigator !== undefined &&
      (obj.navigator = message.navigator ? Browser_BrowserCollection.toJSON(message.navigator) : undefined);
    message.window !== undefined &&
      (obj.window = message.window ? Browser_BrowserCollection.toJSON(message.window) : undefined);
    message.document !== undefined &&
      (obj.document = message.document ? Browser_BrowserCollection.toJSON(message.document) : undefined);
    message.documentElement !== undefined && (obj.documentElement = message.documentElement
      ? Browser_BrowserCollection.toJSON(message.documentElement)
      : undefined);
    message.audioTypes !== undefined &&
      (obj.audioTypes = message.audioTypes ? Browser_BrowserCollection.toJSON(message.audioTypes) : undefined);
    message.videoTypes !== undefined &&
      (obj.videoTypes = message.videoTypes ? Browser_BrowserCollection.toJSON(message.videoTypes) : undefined);
    message.css !== undefined && (obj.css = message.css ? Browser_BrowserCollection.toJSON(message.css) : undefined);
    message.gl !== undefined && (obj.gl = message.gl ? Browser_BrowserCollection.toJSON(message.gl) : undefined);
    message.gl2 !== undefined && (obj.gl2 = message.gl2 ? Browser_BrowserCollection.toJSON(message.gl2) : undefined);
    message.glExperimental !== undefined && (obj.glExperimental = message.glExperimental
      ? Browser_BrowserCollection.toJSON(message.glExperimental)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser>, I>>(base?: I): Browser {
    return Browser.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser>, I>>(object: I): Browser {
    const message = createBaseBrowser();
    message.version = object.version ?? "";
    message.name = object.name ?? "";
    message.userAgent = object.userAgent ?? "";
    message.brandHeader = object.brandHeader ?? "";
    message.platformHeader = object.platformHeader ?? "";
    message.mobileHeader = object.mobileHeader ?? "";
    message.tlsFingerprint = (object.tlsFingerprint !== undefined && object.tlsFingerprint !== null)
      ? Browser_TLSFingerprint.fromPartial(object.tlsFingerprint)
      : undefined;
    message.httpFingerprint = (object.httpFingerprint !== undefined && object.httpFingerprint !== null)
      ? Browser_HTTPFingerprint.fromPartial(object.httpFingerprint)
      : undefined;
    message.appCodeName = object.appCodeName ?? "";
    message.appName = object.appName ?? "";
    message.appVersion = object.appVersion ?? "";
    message.cookieEnabled = object.cookieEnabled ?? false;
    message.deviceMemory = object.deviceMemory ?? 0;
    message.doNotTrack = object.doNotTrack ?? 0;
    message.hardwareConcurrency = object.hardwareConcurrency ?? 0;
    message.language = object.language ?? "";
    message.languages = object.languages?.map((e) => e) || [];
    message.maxTouchPoints = object.maxTouchPoints ?? 0;
    message.pdfViewerEnabled = object.pdfViewerEnabled ?? false;
    message.platform = object.platform ?? "";
    message.product = object.product ?? "";
    message.productSub = object.productSub ?? "";
    message.vendor = object.vendor ?? "";
    message.vendorSub = object.vendorSub ?? "";
    message.webdriver = object.webdriver ?? false;
    message.devicePixelRatio = object.devicePixelRatio ?? 0;
    message.innerWidth = object.innerWidth ?? 0;
    message.innerHeight = object.innerHeight ?? 0;
    message.outerWidth = object.outerWidth ?? 0;
    message.outerHeight = object.outerHeight ?? 0;
    message.screen = (object.screen !== undefined && object.screen !== null)
      ? Browser_BrowserScreen.fromPartial(object.screen)
      : undefined;
    message.webGPU = (object.webGPU !== undefined && object.webGPU !== null)
      ? Browser_WebGPU.fromPartial(object.webGPU)
      : undefined;
    message.speechSynthesis = object.speechSynthesis?.map((e) => Browser_SpeechSynthesis.fromPartial(e)) || [];
    message.plugins = object.plugins?.map((e) => Browser_Plugin.fromPartial(e)) || [];
    message.highEntropyValues = (object.highEntropyValues !== undefined && object.highEntropyValues !== null)
      ? Browser_HighEntropyValues.fromPartial(object.highEntropyValues)
      : undefined;
    message.webRTC = (object.webRTC !== undefined && object.webRTC !== null)
      ? Browser_WebRTC.fromPartial(object.webRTC)
      : undefined;
    message.availableFonts = (object.availableFonts !== undefined && object.availableFonts !== null)
      ? Browser_BrowserCollection.fromPartial(object.availableFonts)
      : undefined;
    message.navigator = (object.navigator !== undefined && object.navigator !== null)
      ? Browser_BrowserCollection.fromPartial(object.navigator)
      : undefined;
    message.window = (object.window !== undefined && object.window !== null)
      ? Browser_BrowserCollection.fromPartial(object.window)
      : undefined;
    message.document = (object.document !== undefined && object.document !== null)
      ? Browser_BrowserCollection.fromPartial(object.document)
      : undefined;
    message.documentElement = (object.documentElement !== undefined && object.documentElement !== null)
      ? Browser_BrowserCollection.fromPartial(object.documentElement)
      : undefined;
    message.audioTypes = (object.audioTypes !== undefined && object.audioTypes !== null)
      ? Browser_BrowserCollection.fromPartial(object.audioTypes)
      : undefined;
    message.videoTypes = (object.videoTypes !== undefined && object.videoTypes !== null)
      ? Browser_BrowserCollection.fromPartial(object.videoTypes)
      : undefined;
    message.css = (object.css !== undefined && object.css !== null)
      ? Browser_BrowserCollection.fromPartial(object.css)
      : undefined;
    message.gl = (object.gl !== undefined && object.gl !== null)
      ? Browser_BrowserCollection.fromPartial(object.gl)
      : undefined;
    message.gl2 = (object.gl2 !== undefined && object.gl2 !== null)
      ? Browser_BrowserCollection.fromPartial(object.gl2)
      : undefined;
    message.glExperimental = (object.glExperimental !== undefined && object.glExperimental !== null)
      ? Browser_BrowserCollection.fromPartial(object.glExperimental)
      : undefined;
    return message;
  },
};

function createBaseBrowser_TLSFingerprint(): Browser_TLSFingerprint {
  return {
    version: 0,
    cipherSuites: [],
    extensions: [],
    ellipticCurves: [],
    ellipticCurvePointFormats: [],
    extensionData: [],
  };
}

export const Browser_TLSFingerprint = {
  encode(message: Browser_TLSFingerprint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== undefined && message.version !== 0) {
      writer.uint32(8).int32(message.version);
    }
    if (message.cipherSuites !== undefined && message.cipherSuites.length !== 0) {
      writer.uint32(18).fork();
      for (const v of message.cipherSuites) {
        writer.int32(v);
      }
      writer.ldelim();
    }
    if (message.extensions !== undefined && message.extensions.length !== 0) {
      writer.uint32(26).fork();
      for (const v of message.extensions) {
        writer.int32(v);
      }
      writer.ldelim();
    }
    if (message.ellipticCurves !== undefined && message.ellipticCurves.length !== 0) {
      writer.uint32(34).fork();
      for (const v of message.ellipticCurves) {
        writer.int32(v);
      }
      writer.ldelim();
    }
    if (message.ellipticCurvePointFormats !== undefined && message.ellipticCurvePointFormats.length !== 0) {
      writer.uint32(42).fork();
      for (const v of message.ellipticCurvePointFormats) {
        writer.int32(v);
      }
      writer.ldelim();
    }
    if (message.extensionData !== undefined && message.extensionData.length !== 0) {
      for (const v of message.extensionData) {
        Browser_TLSFingerprint_ExtensionData.encode(v!, writer.uint32(50).fork()).ldelim();
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_TLSFingerprint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_TLSFingerprint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.version = reader.int32() as any;
          continue;
        case 2:
          if (tag == 16) {
            message.cipherSuites!.push(reader.int32() as any);
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.cipherSuites!.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 3:
          if (tag == 24) {
            message.extensions!.push(reader.int32() as any);
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.extensions!.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 4:
          if (tag == 32) {
            message.ellipticCurves!.push(reader.int32() as any);
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ellipticCurves!.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 5:
          if (tag == 40) {
            message.ellipticCurvePointFormats!.push(reader.int32() as any);
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ellipticCurvePointFormats!.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 6:
          if (tag != 50) {
            break;
          }

          message.extensionData!.push(Browser_TLSFingerprint_ExtensionData.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_TLSFingerprint {
    return {
      version: isSet(object.version) ? browser_TLSFingerprint_ProtocolVersionFromJSON(object.version) : 0,
      cipherSuites: Array.isArray(object?.cipherSuites)
        ? object.cipherSuites.map((e: any) => browser_TLSFingerprint_CipherSuiteFromJSON(e))
        : [],
      extensions: Array.isArray(object?.extensions)
        ? object.extensions.map((e: any) => browser_TLSFingerprint_ExtensionFromJSON(e))
        : [],
      ellipticCurves: Array.isArray(object?.ellipticCurves)
        ? object.ellipticCurves.map((e: any) => browser_TLSFingerprint_EllipticCurveFromJSON(e))
        : [],
      ellipticCurvePointFormats: Array.isArray(object?.ellipticCurvePointFormats)
        ? object.ellipticCurvePointFormats.map((e: any) => browser_TLSFingerprint_EllipticCurvePointFormatFromJSON(e))
        : [],
      extensionData: Array.isArray(object?.extensionData)
        ? object.extensionData.map((e: any) => Browser_TLSFingerprint_ExtensionData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Browser_TLSFingerprint): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = browser_TLSFingerprint_ProtocolVersionToJSON(message.version));
    if (message.cipherSuites) {
      obj.cipherSuites = message.cipherSuites.map((e) => browser_TLSFingerprint_CipherSuiteToJSON(e));
    } else {
      obj.cipherSuites = [];
    }
    if (message.extensions) {
      obj.extensions = message.extensions.map((e) => browser_TLSFingerprint_ExtensionToJSON(e));
    } else {
      obj.extensions = [];
    }
    if (message.ellipticCurves) {
      obj.ellipticCurves = message.ellipticCurves.map((e) => browser_TLSFingerprint_EllipticCurveToJSON(e));
    } else {
      obj.ellipticCurves = [];
    }
    if (message.ellipticCurvePointFormats) {
      obj.ellipticCurvePointFormats = message.ellipticCurvePointFormats.map((e) =>
        browser_TLSFingerprint_EllipticCurvePointFormatToJSON(e)
      );
    } else {
      obj.ellipticCurvePointFormats = [];
    }
    if (message.extensionData) {
      obj.extensionData = message.extensionData.map((e) =>
        e ? Browser_TLSFingerprint_ExtensionData.toJSON(e) : undefined
      );
    } else {
      obj.extensionData = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_TLSFingerprint>, I>>(base?: I): Browser_TLSFingerprint {
    return Browser_TLSFingerprint.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_TLSFingerprint>, I>>(object: I): Browser_TLSFingerprint {
    const message = createBaseBrowser_TLSFingerprint();
    message.version = object.version ?? 0;
    message.cipherSuites = object.cipherSuites?.map((e) => e) || [];
    message.extensions = object.extensions?.map((e) => e) || [];
    message.ellipticCurves = object.ellipticCurves?.map((e) => e) || [];
    message.ellipticCurvePointFormats = object.ellipticCurvePointFormats?.map((e) => e) || [];
    message.extensionData = object.extensionData?.map((e) => Browser_TLSFingerprint_ExtensionData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBrowser_TLSFingerprint_ExtensionData(): Browser_TLSFingerprint_ExtensionData {
  return {
    extensionId: 0,
    signatureAlgorithms: undefined,
    applicationLayerProtocolNegotiation: undefined,
    compressCertificate: undefined,
    recordSizeLimit: undefined,
    supportedVersions: undefined,
    pskKeyExchangeModes: undefined,
    keyShareExtension: undefined,
    extensionApplicationsSettings: undefined,
    extensionEncryptedClientHello: undefined,
    extensionRenegotiationInfo: undefined,
  };
}

export const Browser_TLSFingerprint_ExtensionData = {
  encode(message: Browser_TLSFingerprint_ExtensionData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.extensionId !== undefined && message.extensionId !== 0) {
      writer.uint32(8).int32(message.extensionId);
    }
    if (message.signatureAlgorithms !== undefined) {
      Browser_TLSFingerprint_ExtensionData_SignatureAlgorithms.encode(
        message.signatureAlgorithms,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.applicationLayerProtocolNegotiation !== undefined) {
      Browser_TLSFingerprint_ExtensionData_ApplicationLayerProtocolNegotiation.encode(
        message.applicationLayerProtocolNegotiation,
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.compressCertificate !== undefined) {
      Browser_TLSFingerprint_ExtensionData_CompressCertificate.encode(
        message.compressCertificate,
        writer.uint32(218).fork(),
      ).ldelim();
    }
    if (message.recordSizeLimit !== undefined) {
      Browser_TLSFingerprint_ExtensionData_RecordSizeLimit.encode(message.recordSizeLimit, writer.uint32(226).fork())
        .ldelim();
    }
    if (message.supportedVersions !== undefined) {
      Browser_TLSFingerprint_ExtensionData_SupportedVersions.encode(
        message.supportedVersions,
        writer.uint32(346).fork(),
      ).ldelim();
    }
    if (message.pskKeyExchangeModes !== undefined) {
      Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes.encode(
        message.pskKeyExchangeModes,
        writer.uint32(362).fork(),
      ).ldelim();
    }
    if (message.keyShareExtension !== undefined) {
      Browser_TLSFingerprint_ExtensionData_KeyShareExtension.encode(
        message.keyShareExtension,
        writer.uint32(410).fork(),
      ).ldelim();
    }
    if (message.extensionApplicationsSettings !== undefined) {
      Browser_TLSFingerprint_ExtensionData_ExtensionApplicationsSettings.encode(
        message.extensionApplicationsSettings,
        writer.uint32(140106).fork(),
      ).ldelim();
    }
    if (message.extensionEncryptedClientHello !== undefined) {
      Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello.encode(
        message.extensionEncryptedClientHello,
        writer.uint32(520298).fork(),
      ).ldelim();
    }
    if (message.extensionRenegotiationInfo !== undefined) {
      Browser_TLSFingerprint_ExtensionData_ExtensionRenegotiationInfo.encode(
        message.extensionRenegotiationInfo,
        writer.uint32(522250).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_TLSFingerprint_ExtensionData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_TLSFingerprint_ExtensionData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.extensionId = reader.int32() as any;
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.signatureAlgorithms = Browser_TLSFingerprint_ExtensionData_SignatureAlgorithms.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.applicationLayerProtocolNegotiation =
            Browser_TLSFingerprint_ExtensionData_ApplicationLayerProtocolNegotiation.decode(reader, reader.uint32());
          continue;
        case 27:
          if (tag != 218) {
            break;
          }

          message.compressCertificate = Browser_TLSFingerprint_ExtensionData_CompressCertificate.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 28:
          if (tag != 226) {
            break;
          }

          message.recordSizeLimit = Browser_TLSFingerprint_ExtensionData_RecordSizeLimit.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 43:
          if (tag != 346) {
            break;
          }

          message.supportedVersions = Browser_TLSFingerprint_ExtensionData_SupportedVersions.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 45:
          if (tag != 362) {
            break;
          }

          message.pskKeyExchangeModes = Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 51:
          if (tag != 410) {
            break;
          }

          message.keyShareExtension = Browser_TLSFingerprint_ExtensionData_KeyShareExtension.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 17513:
          if (tag != 140106) {
            break;
          }

          message.extensionApplicationsSettings = Browser_TLSFingerprint_ExtensionData_ExtensionApplicationsSettings
            .decode(reader, reader.uint32());
          continue;
        case 65037:
          if (tag != 520298) {
            break;
          }

          message.extensionEncryptedClientHello = Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello
            .decode(reader, reader.uint32());
          continue;
        case 65281:
          if (tag != 522250) {
            break;
          }

          message.extensionRenegotiationInfo = Browser_TLSFingerprint_ExtensionData_ExtensionRenegotiationInfo.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_TLSFingerprint_ExtensionData {
    return {
      extensionId: isSet(object.extensionId) ? browser_TLSFingerprint_ExtensionFromJSON(object.extensionId) : 0,
      signatureAlgorithms: isSet(object.signatureAlgorithms)
        ? Browser_TLSFingerprint_ExtensionData_SignatureAlgorithms.fromJSON(object.signatureAlgorithms)
        : undefined,
      applicationLayerProtocolNegotiation: isSet(object.applicationLayerProtocolNegotiation)
        ? Browser_TLSFingerprint_ExtensionData_ApplicationLayerProtocolNegotiation.fromJSON(
          object.applicationLayerProtocolNegotiation,
        )
        : undefined,
      compressCertificate: isSet(object.compressCertificate)
        ? Browser_TLSFingerprint_ExtensionData_CompressCertificate.fromJSON(object.compressCertificate)
        : undefined,
      recordSizeLimit: isSet(object.recordSizeLimit)
        ? Browser_TLSFingerprint_ExtensionData_RecordSizeLimit.fromJSON(object.recordSizeLimit)
        : undefined,
      supportedVersions: isSet(object.supportedVersions)
        ? Browser_TLSFingerprint_ExtensionData_SupportedVersions.fromJSON(object.supportedVersions)
        : undefined,
      pskKeyExchangeModes: isSet(object.pskKeyExchangeModes)
        ? Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes.fromJSON(object.pskKeyExchangeModes)
        : undefined,
      keyShareExtension: isSet(object.keyShareExtension)
        ? Browser_TLSFingerprint_ExtensionData_KeyShareExtension.fromJSON(object.keyShareExtension)
        : undefined,
      extensionApplicationsSettings: isSet(object.extensionApplicationsSettings)
        ? Browser_TLSFingerprint_ExtensionData_ExtensionApplicationsSettings.fromJSON(
          object.extensionApplicationsSettings,
        )
        : undefined,
      extensionEncryptedClientHello: isSet(object.extensionEncryptedClientHello)
        ? Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello.fromJSON(
          object.extensionEncryptedClientHello,
        )
        : undefined,
      extensionRenegotiationInfo: isSet(object.extensionRenegotiationInfo)
        ? Browser_TLSFingerprint_ExtensionData_ExtensionRenegotiationInfo.fromJSON(object.extensionRenegotiationInfo)
        : undefined,
    };
  },

  toJSON(message: Browser_TLSFingerprint_ExtensionData): unknown {
    const obj: any = {};
    message.extensionId !== undefined &&
      (obj.extensionId = browser_TLSFingerprint_ExtensionToJSON(message.extensionId));
    message.signatureAlgorithms !== undefined && (obj.signatureAlgorithms = message.signatureAlgorithms
      ? Browser_TLSFingerprint_ExtensionData_SignatureAlgorithms.toJSON(message.signatureAlgorithms)
      : undefined);
    message.applicationLayerProtocolNegotiation !== undefined &&
      (obj.applicationLayerProtocolNegotiation = message.applicationLayerProtocolNegotiation
        ? Browser_TLSFingerprint_ExtensionData_ApplicationLayerProtocolNegotiation.toJSON(
          message.applicationLayerProtocolNegotiation,
        )
        : undefined);
    message.compressCertificate !== undefined && (obj.compressCertificate = message.compressCertificate
      ? Browser_TLSFingerprint_ExtensionData_CompressCertificate.toJSON(message.compressCertificate)
      : undefined);
    message.recordSizeLimit !== undefined && (obj.recordSizeLimit = message.recordSizeLimit
      ? Browser_TLSFingerprint_ExtensionData_RecordSizeLimit.toJSON(message.recordSizeLimit)
      : undefined);
    message.supportedVersions !== undefined && (obj.supportedVersions = message.supportedVersions
      ? Browser_TLSFingerprint_ExtensionData_SupportedVersions.toJSON(message.supportedVersions)
      : undefined);
    message.pskKeyExchangeModes !== undefined && (obj.pskKeyExchangeModes = message.pskKeyExchangeModes
      ? Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes.toJSON(message.pskKeyExchangeModes)
      : undefined);
    message.keyShareExtension !== undefined && (obj.keyShareExtension = message.keyShareExtension
      ? Browser_TLSFingerprint_ExtensionData_KeyShareExtension.toJSON(message.keyShareExtension)
      : undefined);
    message.extensionApplicationsSettings !== undefined &&
      (obj.extensionApplicationsSettings = message.extensionApplicationsSettings
        ? Browser_TLSFingerprint_ExtensionData_ExtensionApplicationsSettings.toJSON(
          message.extensionApplicationsSettings,
        )
        : undefined);
    message.extensionEncryptedClientHello !== undefined &&
      (obj.extensionEncryptedClientHello = message.extensionEncryptedClientHello
        ? Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello.toJSON(
          message.extensionEncryptedClientHello,
        )
        : undefined);
    message.extensionRenegotiationInfo !== undefined &&
      (obj.extensionRenegotiationInfo = message.extensionRenegotiationInfo
        ? Browser_TLSFingerprint_ExtensionData_ExtensionRenegotiationInfo.toJSON(message.extensionRenegotiationInfo)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_TLSFingerprint_ExtensionData>, I>>(
    base?: I,
  ): Browser_TLSFingerprint_ExtensionData {
    return Browser_TLSFingerprint_ExtensionData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_TLSFingerprint_ExtensionData>, I>>(
    object: I,
  ): Browser_TLSFingerprint_ExtensionData {
    const message = createBaseBrowser_TLSFingerprint_ExtensionData();
    message.extensionId = object.extensionId ?? 0;
    message.signatureAlgorithms = (object.signatureAlgorithms !== undefined && object.signatureAlgorithms !== null)
      ? Browser_TLSFingerprint_ExtensionData_SignatureAlgorithms.fromPartial(object.signatureAlgorithms)
      : undefined;
    message.applicationLayerProtocolNegotiation =
      (object.applicationLayerProtocolNegotiation !== undefined && object.applicationLayerProtocolNegotiation !== null)
        ? Browser_TLSFingerprint_ExtensionData_ApplicationLayerProtocolNegotiation.fromPartial(
          object.applicationLayerProtocolNegotiation,
        )
        : undefined;
    message.compressCertificate = (object.compressCertificate !== undefined && object.compressCertificate !== null)
      ? Browser_TLSFingerprint_ExtensionData_CompressCertificate.fromPartial(object.compressCertificate)
      : undefined;
    message.recordSizeLimit = (object.recordSizeLimit !== undefined && object.recordSizeLimit !== null)
      ? Browser_TLSFingerprint_ExtensionData_RecordSizeLimit.fromPartial(object.recordSizeLimit)
      : undefined;
    message.supportedVersions = (object.supportedVersions !== undefined && object.supportedVersions !== null)
      ? Browser_TLSFingerprint_ExtensionData_SupportedVersions.fromPartial(object.supportedVersions)
      : undefined;
    message.pskKeyExchangeModes = (object.pskKeyExchangeModes !== undefined && object.pskKeyExchangeModes !== null)
      ? Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes.fromPartial(object.pskKeyExchangeModes)
      : undefined;
    message.keyShareExtension = (object.keyShareExtension !== undefined && object.keyShareExtension !== null)
      ? Browser_TLSFingerprint_ExtensionData_KeyShareExtension.fromPartial(object.keyShareExtension)
      : undefined;
    message.extensionApplicationsSettings =
      (object.extensionApplicationsSettings !== undefined && object.extensionApplicationsSettings !== null)
        ? Browser_TLSFingerprint_ExtensionData_ExtensionApplicationsSettings.fromPartial(
          object.extensionApplicationsSettings,
        )
        : undefined;
    message.extensionEncryptedClientHello =
      (object.extensionEncryptedClientHello !== undefined && object.extensionEncryptedClientHello !== null)
        ? Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello.fromPartial(
          object.extensionEncryptedClientHello,
        )
        : undefined;
    message.extensionRenegotiationInfo =
      (object.extensionRenegotiationInfo !== undefined && object.extensionRenegotiationInfo !== null)
        ? Browser_TLSFingerprint_ExtensionData_ExtensionRenegotiationInfo.fromPartial(object.extensionRenegotiationInfo)
        : undefined;
    return message;
  },
};

function createBaseBrowser_TLSFingerprint_ExtensionData_SignatureAlgorithms(): Browser_TLSFingerprint_ExtensionData_SignatureAlgorithms {
  return { supportedSignatureAlgorithms: [] };
}

export const Browser_TLSFingerprint_ExtensionData_SignatureAlgorithms = {
  encode(
    message: Browser_TLSFingerprint_ExtensionData_SignatureAlgorithms,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.supportedSignatureAlgorithms !== undefined && message.supportedSignatureAlgorithms.length !== 0) {
      writer.uint32(10).fork();
      for (const v of message.supportedSignatureAlgorithms) {
        writer.int32(v);
      }
      writer.ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_TLSFingerprint_ExtensionData_SignatureAlgorithms {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_TLSFingerprint_ExtensionData_SignatureAlgorithms();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.supportedSignatureAlgorithms!.push(reader.int32() as any);
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.supportedSignatureAlgorithms!.push(reader.int32() as any);
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

  fromJSON(object: any): Browser_TLSFingerprint_ExtensionData_SignatureAlgorithms {
    return {
      supportedSignatureAlgorithms: Array.isArray(object?.supportedSignatureAlgorithms)
        ? object.supportedSignatureAlgorithms.map((e: any) => browser_TLSFingerprint_SignatureSchemeFromJSON(e))
        : [],
    };
  },

  toJSON(message: Browser_TLSFingerprint_ExtensionData_SignatureAlgorithms): unknown {
    const obj: any = {};
    if (message.supportedSignatureAlgorithms) {
      obj.supportedSignatureAlgorithms = message.supportedSignatureAlgorithms.map((e) =>
        browser_TLSFingerprint_SignatureSchemeToJSON(e)
      );
    } else {
      obj.supportedSignatureAlgorithms = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_TLSFingerprint_ExtensionData_SignatureAlgorithms>, I>>(
    base?: I,
  ): Browser_TLSFingerprint_ExtensionData_SignatureAlgorithms {
    return Browser_TLSFingerprint_ExtensionData_SignatureAlgorithms.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_TLSFingerprint_ExtensionData_SignatureAlgorithms>, I>>(
    object: I,
  ): Browser_TLSFingerprint_ExtensionData_SignatureAlgorithms {
    const message = createBaseBrowser_TLSFingerprint_ExtensionData_SignatureAlgorithms();
    message.supportedSignatureAlgorithms = object.supportedSignatureAlgorithms?.map((e) => e) || [];
    return message;
  },
};

function createBaseBrowser_TLSFingerprint_ExtensionData_ApplicationLayerProtocolNegotiation(): Browser_TLSFingerprint_ExtensionData_ApplicationLayerProtocolNegotiation {
  return { protocols: [] };
}

export const Browser_TLSFingerprint_ExtensionData_ApplicationLayerProtocolNegotiation = {
  encode(
    message: Browser_TLSFingerprint_ExtensionData_ApplicationLayerProtocolNegotiation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.protocols !== undefined && message.protocols.length !== 0) {
      for (const v of message.protocols) {
        writer.uint32(10).string(v!);
      }
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Browser_TLSFingerprint_ExtensionData_ApplicationLayerProtocolNegotiation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_TLSFingerprint_ExtensionData_ApplicationLayerProtocolNegotiation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.protocols!.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_TLSFingerprint_ExtensionData_ApplicationLayerProtocolNegotiation {
    return { protocols: Array.isArray(object?.protocols) ? object.protocols.map((e: any) => String(e)) : [] };
  },

  toJSON(message: Browser_TLSFingerprint_ExtensionData_ApplicationLayerProtocolNegotiation): unknown {
    const obj: any = {};
    if (message.protocols) {
      obj.protocols = message.protocols.map((e) => e);
    } else {
      obj.protocols = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_TLSFingerprint_ExtensionData_ApplicationLayerProtocolNegotiation>, I>>(
    base?: I,
  ): Browser_TLSFingerprint_ExtensionData_ApplicationLayerProtocolNegotiation {
    return Browser_TLSFingerprint_ExtensionData_ApplicationLayerProtocolNegotiation.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<Browser_TLSFingerprint_ExtensionData_ApplicationLayerProtocolNegotiation>, I>,
  >(object: I): Browser_TLSFingerprint_ExtensionData_ApplicationLayerProtocolNegotiation {
    const message = createBaseBrowser_TLSFingerprint_ExtensionData_ApplicationLayerProtocolNegotiation();
    message.protocols = object.protocols?.map((e) => e) || [];
    return message;
  },
};

function createBaseBrowser_TLSFingerprint_ExtensionData_RecordSizeLimit(): Browser_TLSFingerprint_ExtensionData_RecordSizeLimit {
  return { limit: 0 };
}

export const Browser_TLSFingerprint_ExtensionData_RecordSizeLimit = {
  encode(
    message: Browser_TLSFingerprint_ExtensionData_RecordSizeLimit,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.limit !== undefined && message.limit !== 0) {
      writer.uint32(8).uint32(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_TLSFingerprint_ExtensionData_RecordSizeLimit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_TLSFingerprint_ExtensionData_RecordSizeLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.limit = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_TLSFingerprint_ExtensionData_RecordSizeLimit {
    return { limit: isSet(object.limit) ? Number(object.limit) : 0 };
  },

  toJSON(message: Browser_TLSFingerprint_ExtensionData_RecordSizeLimit): unknown {
    const obj: any = {};
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_TLSFingerprint_ExtensionData_RecordSizeLimit>, I>>(
    base?: I,
  ): Browser_TLSFingerprint_ExtensionData_RecordSizeLimit {
    return Browser_TLSFingerprint_ExtensionData_RecordSizeLimit.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_TLSFingerprint_ExtensionData_RecordSizeLimit>, I>>(
    object: I,
  ): Browser_TLSFingerprint_ExtensionData_RecordSizeLimit {
    const message = createBaseBrowser_TLSFingerprint_ExtensionData_RecordSizeLimit();
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBaseBrowser_TLSFingerprint_ExtensionData_CompressCertificate(): Browser_TLSFingerprint_ExtensionData_CompressCertificate {
  return { algorithms: [] };
}

export const Browser_TLSFingerprint_ExtensionData_CompressCertificate = {
  encode(
    message: Browser_TLSFingerprint_ExtensionData_CompressCertificate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.algorithms !== undefined && message.algorithms.length !== 0) {
      writer.uint32(10).fork();
      for (const v of message.algorithms) {
        writer.int32(v);
      }
      writer.ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_TLSFingerprint_ExtensionData_CompressCertificate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_TLSFingerprint_ExtensionData_CompressCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.algorithms!.push(reader.int32() as any);
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.algorithms!.push(reader.int32() as any);
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

  fromJSON(object: any): Browser_TLSFingerprint_ExtensionData_CompressCertificate {
    return {
      algorithms: Array.isArray(object?.algorithms)
        ? object.algorithms.map((e: any) =>
          browser_TLSFingerprint_ExtensionData_CompressCertificate_CertificateCompressionFromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: Browser_TLSFingerprint_ExtensionData_CompressCertificate): unknown {
    const obj: any = {};
    if (message.algorithms) {
      obj.algorithms = message.algorithms.map((e) =>
        browser_TLSFingerprint_ExtensionData_CompressCertificate_CertificateCompressionToJSON(e)
      );
    } else {
      obj.algorithms = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_TLSFingerprint_ExtensionData_CompressCertificate>, I>>(
    base?: I,
  ): Browser_TLSFingerprint_ExtensionData_CompressCertificate {
    return Browser_TLSFingerprint_ExtensionData_CompressCertificate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_TLSFingerprint_ExtensionData_CompressCertificate>, I>>(
    object: I,
  ): Browser_TLSFingerprint_ExtensionData_CompressCertificate {
    const message = createBaseBrowser_TLSFingerprint_ExtensionData_CompressCertificate();
    message.algorithms = object.algorithms?.map((e) => e) || [];
    return message;
  },
};

function createBaseBrowser_TLSFingerprint_ExtensionData_SupportedVersions(): Browser_TLSFingerprint_ExtensionData_SupportedVersions {
  return { versions: [] };
}

export const Browser_TLSFingerprint_ExtensionData_SupportedVersions = {
  encode(
    message: Browser_TLSFingerprint_ExtensionData_SupportedVersions,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.versions !== undefined && message.versions.length !== 0) {
      writer.uint32(10).fork();
      for (const v of message.versions) {
        writer.int32(v);
      }
      writer.ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_TLSFingerprint_ExtensionData_SupportedVersions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_TLSFingerprint_ExtensionData_SupportedVersions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.versions!.push(reader.int32() as any);
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.versions!.push(reader.int32() as any);
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

  fromJSON(object: any): Browser_TLSFingerprint_ExtensionData_SupportedVersions {
    return {
      versions: Array.isArray(object?.versions)
        ? object.versions.map((e: any) => browser_TLSFingerprint_ProtocolVersionFromJSON(e))
        : [],
    };
  },

  toJSON(message: Browser_TLSFingerprint_ExtensionData_SupportedVersions): unknown {
    const obj: any = {};
    if (message.versions) {
      obj.versions = message.versions.map((e) => browser_TLSFingerprint_ProtocolVersionToJSON(e));
    } else {
      obj.versions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_TLSFingerprint_ExtensionData_SupportedVersions>, I>>(
    base?: I,
  ): Browser_TLSFingerprint_ExtensionData_SupportedVersions {
    return Browser_TLSFingerprint_ExtensionData_SupportedVersions.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_TLSFingerprint_ExtensionData_SupportedVersions>, I>>(
    object: I,
  ): Browser_TLSFingerprint_ExtensionData_SupportedVersions {
    const message = createBaseBrowser_TLSFingerprint_ExtensionData_SupportedVersions();
    message.versions = object.versions?.map((e) => e) || [];
    return message;
  },
};

function createBaseBrowser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes(): Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes {
  return { modes: [] };
}

export const Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes = {
  encode(
    message: Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.modes !== undefined && message.modes.length !== 0) {
      writer.uint32(10).fork();
      for (const v of message.modes) {
        writer.int32(v);
      }
      writer.ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.modes!.push(reader.int32() as any);
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.modes!.push(reader.int32() as any);
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

  fromJSON(object: any): Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes {
    return {
      modes: Array.isArray(object?.modes)
        ? object.modes.map((e: any) => browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes_ModeFromJSON(e))
        : [],
    };
  },

  toJSON(message: Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes): unknown {
    const obj: any = {};
    if (message.modes) {
      obj.modes = message.modes.map((e) => browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes_ModeToJSON(e));
    } else {
      obj.modes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes>, I>>(
    base?: I,
  ): Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes {
    return Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes>, I>>(
    object: I,
  ): Browser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes {
    const message = createBaseBrowser_TLSFingerprint_ExtensionData_PSKKeyExchangeModes();
    message.modes = object.modes?.map((e) => e) || [];
    return message;
  },
};

function createBaseBrowser_TLSFingerprint_ExtensionData_KeyShareExtension(): Browser_TLSFingerprint_ExtensionData_KeyShareExtension {
  return { keyShares: [] };
}

export const Browser_TLSFingerprint_ExtensionData_KeyShareExtension = {
  encode(
    message: Browser_TLSFingerprint_ExtensionData_KeyShareExtension,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.keyShares !== undefined && message.keyShares.length !== 0) {
      for (const v of message.keyShares) {
        Browser_TLSFingerprint_ExtensionData_KeyShareExtension_KeyShare.encode(v!, writer.uint32(10).fork()).ldelim();
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_TLSFingerprint_ExtensionData_KeyShareExtension {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_TLSFingerprint_ExtensionData_KeyShareExtension();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.keyShares!.push(
            Browser_TLSFingerprint_ExtensionData_KeyShareExtension_KeyShare.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_TLSFingerprint_ExtensionData_KeyShareExtension {
    return {
      keyShares: Array.isArray(object?.keyShares)
        ? object.keyShares.map((e: any) => Browser_TLSFingerprint_ExtensionData_KeyShareExtension_KeyShare.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Browser_TLSFingerprint_ExtensionData_KeyShareExtension): unknown {
    const obj: any = {};
    if (message.keyShares) {
      obj.keyShares = message.keyShares.map((e) =>
        e ? Browser_TLSFingerprint_ExtensionData_KeyShareExtension_KeyShare.toJSON(e) : undefined
      );
    } else {
      obj.keyShares = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_TLSFingerprint_ExtensionData_KeyShareExtension>, I>>(
    base?: I,
  ): Browser_TLSFingerprint_ExtensionData_KeyShareExtension {
    return Browser_TLSFingerprint_ExtensionData_KeyShareExtension.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_TLSFingerprint_ExtensionData_KeyShareExtension>, I>>(
    object: I,
  ): Browser_TLSFingerprint_ExtensionData_KeyShareExtension {
    const message = createBaseBrowser_TLSFingerprint_ExtensionData_KeyShareExtension();
    message.keyShares =
      object.keyShares?.map((e) => Browser_TLSFingerprint_ExtensionData_KeyShareExtension_KeyShare.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseBrowser_TLSFingerprint_ExtensionData_KeyShareExtension_KeyShare(): Browser_TLSFingerprint_ExtensionData_KeyShareExtension_KeyShare {
  return { group: 0, data: new Uint8Array() };
}

export const Browser_TLSFingerprint_ExtensionData_KeyShareExtension_KeyShare = {
  encode(
    message: Browser_TLSFingerprint_ExtensionData_KeyShareExtension_KeyShare,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.group !== undefined && message.group !== 0) {
      writer.uint32(8).int32(message.group);
    }
    if (message.data !== undefined && message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Browser_TLSFingerprint_ExtensionData_KeyShareExtension_KeyShare {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_TLSFingerprint_ExtensionData_KeyShareExtension_KeyShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.group = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.data = reader.bytes();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_TLSFingerprint_ExtensionData_KeyShareExtension_KeyShare {
    return {
      group: isSet(object.group) ? browser_TLSFingerprint_EllipticCurveFromJSON(object.group) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
    };
  },

  toJSON(message: Browser_TLSFingerprint_ExtensionData_KeyShareExtension_KeyShare): unknown {
    const obj: any = {};
    message.group !== undefined && (obj.group = browser_TLSFingerprint_EllipticCurveToJSON(message.group));
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_TLSFingerprint_ExtensionData_KeyShareExtension_KeyShare>, I>>(
    base?: I,
  ): Browser_TLSFingerprint_ExtensionData_KeyShareExtension_KeyShare {
    return Browser_TLSFingerprint_ExtensionData_KeyShareExtension_KeyShare.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_TLSFingerprint_ExtensionData_KeyShareExtension_KeyShare>, I>>(
    object: I,
  ): Browser_TLSFingerprint_ExtensionData_KeyShareExtension_KeyShare {
    const message = createBaseBrowser_TLSFingerprint_ExtensionData_KeyShareExtension_KeyShare();
    message.group = object.group ?? 0;
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

function createBaseBrowser_TLSFingerprint_ExtensionData_ExtensionApplicationsSettings(): Browser_TLSFingerprint_ExtensionData_ExtensionApplicationsSettings {
  return { protocols: [] };
}

export const Browser_TLSFingerprint_ExtensionData_ExtensionApplicationsSettings = {
  encode(
    message: Browser_TLSFingerprint_ExtensionData_ExtensionApplicationsSettings,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.protocols !== undefined && message.protocols.length !== 0) {
      for (const v of message.protocols) {
        writer.uint32(10).string(v!);
      }
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Browser_TLSFingerprint_ExtensionData_ExtensionApplicationsSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_TLSFingerprint_ExtensionData_ExtensionApplicationsSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.protocols!.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_TLSFingerprint_ExtensionData_ExtensionApplicationsSettings {
    return { protocols: Array.isArray(object?.protocols) ? object.protocols.map((e: any) => String(e)) : [] };
  },

  toJSON(message: Browser_TLSFingerprint_ExtensionData_ExtensionApplicationsSettings): unknown {
    const obj: any = {};
    if (message.protocols) {
      obj.protocols = message.protocols.map((e) => e);
    } else {
      obj.protocols = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_TLSFingerprint_ExtensionData_ExtensionApplicationsSettings>, I>>(
    base?: I,
  ): Browser_TLSFingerprint_ExtensionData_ExtensionApplicationsSettings {
    return Browser_TLSFingerprint_ExtensionData_ExtensionApplicationsSettings.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_TLSFingerprint_ExtensionData_ExtensionApplicationsSettings>, I>>(
    object: I,
  ): Browser_TLSFingerprint_ExtensionData_ExtensionApplicationsSettings {
    const message = createBaseBrowser_TLSFingerprint_ExtensionData_ExtensionApplicationsSettings();
    message.protocols = object.protocols?.map((e) => e) || [];
    return message;
  },
};

function createBaseBrowser_TLSFingerprint_ExtensionData_ExtensionRenegotiationInfo(): Browser_TLSFingerprint_ExtensionData_ExtensionRenegotiationInfo {
  return { renegotiationSupport: 0 };
}

export const Browser_TLSFingerprint_ExtensionData_ExtensionRenegotiationInfo = {
  encode(
    message: Browser_TLSFingerprint_ExtensionData_ExtensionRenegotiationInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.renegotiationSupport !== undefined && message.renegotiationSupport !== 0) {
      writer.uint32(8).int32(message.renegotiationSupport);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Browser_TLSFingerprint_ExtensionData_ExtensionRenegotiationInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_TLSFingerprint_ExtensionData_ExtensionRenegotiationInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.renegotiationSupport = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_TLSFingerprint_ExtensionData_ExtensionRenegotiationInfo {
    return {
      renegotiationSupport: isSet(object.renegotiationSupport)
        ? browser_TLSFingerprint_RenegotiationSupportFromJSON(object.renegotiationSupport)
        : 0,
    };
  },

  toJSON(message: Browser_TLSFingerprint_ExtensionData_ExtensionRenegotiationInfo): unknown {
    const obj: any = {};
    message.renegotiationSupport !== undefined &&
      (obj.renegotiationSupport = browser_TLSFingerprint_RenegotiationSupportToJSON(message.renegotiationSupport));
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_TLSFingerprint_ExtensionData_ExtensionRenegotiationInfo>, I>>(
    base?: I,
  ): Browser_TLSFingerprint_ExtensionData_ExtensionRenegotiationInfo {
    return Browser_TLSFingerprint_ExtensionData_ExtensionRenegotiationInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_TLSFingerprint_ExtensionData_ExtensionRenegotiationInfo>, I>>(
    object: I,
  ): Browser_TLSFingerprint_ExtensionData_ExtensionRenegotiationInfo {
    const message = createBaseBrowser_TLSFingerprint_ExtensionData_ExtensionRenegotiationInfo();
    message.renegotiationSupport = object.renegotiationSupport ?? 0;
    return message;
  },
};

function createBaseBrowser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello(): Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello {
  return { candidateCipherSuites: [], candidatePayloadLens: [] };
}

export const Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello = {
  encode(
    message: Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.candidateCipherSuites !== undefined && message.candidateCipherSuites.length !== 0) {
      for (const v of message.candidateCipherSuites) {
        Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKESymmetricCipherSuite.encode(
          v!,
          writer.uint32(10).fork(),
        ).ldelim();
      }
    }
    if (message.candidatePayloadLens !== undefined && message.candidatePayloadLens.length !== 0) {
      writer.uint32(18).fork();
      for (const v of message.candidatePayloadLens) {
        writer.uint32(v);
      }
      writer.ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.candidateCipherSuites!.push(
            Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKESymmetricCipherSuite.decode(
              reader,
              reader.uint32(),
            ),
          );
          continue;
        case 2:
          if (tag == 16) {
            message.candidatePayloadLens!.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.candidatePayloadLens!.push(reader.uint32());
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

  fromJSON(object: any): Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello {
    return {
      candidateCipherSuites: Array.isArray(object?.candidateCipherSuites)
        ? object.candidateCipherSuites.map((e: any) =>
          Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKESymmetricCipherSuite.fromJSON(e)
        )
        : [],
      candidatePayloadLens: Array.isArray(object?.candidatePayloadLens)
        ? object.candidatePayloadLens.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello): unknown {
    const obj: any = {};
    if (message.candidateCipherSuites) {
      obj.candidateCipherSuites = message.candidateCipherSuites.map((e) => e
        ? Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKESymmetricCipherSuite.toJSON(e)
        : undefined
      );
    } else {
      obj.candidateCipherSuites = [];
    }
    if (message.candidatePayloadLens) {
      obj.candidatePayloadLens = message.candidatePayloadLens.map((e) => Math.round(e));
    } else {
      obj.candidatePayloadLens = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello>, I>>(
    base?: I,
  ): Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello {
    return Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello>, I>>(
    object: I,
  ): Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello {
    const message = createBaseBrowser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello();
    message.candidateCipherSuites =
      object.candidateCipherSuites?.map((e) =>
        Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKESymmetricCipherSuite.fromPartial(e)
      ) || [];
    message.candidatePayloadLens = object.candidatePayloadLens?.map((e) => e) || [];
    return message;
  },
};

function createBaseBrowser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKESymmetricCipherSuite(): Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKESymmetricCipherSuite {
  return { kdfId: 0, aeadId: 0 };
}

export const Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKESymmetricCipherSuite = {
  encode(
    message: Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKESymmetricCipherSuite,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.kdfId !== undefined && message.kdfId !== 0) {
      writer.uint32(8).int32(message.kdfId);
    }
    if (message.aeadId !== undefined && message.aeadId !== 0) {
      writer.uint32(16).int32(message.aeadId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKESymmetricCipherSuite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseBrowser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKESymmetricCipherSuite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.kdfId = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.aeadId = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKESymmetricCipherSuite {
    return {
      kdfId: isSet(object.kdfId)
        ? browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HKDFFromJSON(object.kdfId)
        : 0,
      aeadId: isSet(object.aeadId)
        ? browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKEAEADFromJSON(object.aeadId)
        : 0,
    };
  },

  toJSON(
    message: Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKESymmetricCipherSuite,
  ): unknown {
    const obj: any = {};
    message.kdfId !== undefined &&
      (obj.kdfId = browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HKDFToJSON(message.kdfId));
    message.aeadId !== undefined &&
      (obj.aeadId = browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKEAEADToJSON(message.aeadId));
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKESymmetricCipherSuite>,
      I
    >,
  >(base?: I): Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKESymmetricCipherSuite {
    return Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKESymmetricCipherSuite.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKESymmetricCipherSuite>,
      I
    >,
  >(object: I): Browser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKESymmetricCipherSuite {
    const message =
      createBaseBrowser_TLSFingerprint_ExtensionData_ExtensionEncryptedClientHello_HPKESymmetricCipherSuite();
    message.kdfId = object.kdfId ?? 0;
    message.aeadId = object.aeadId ?? 0;
    return message;
  },
};

function createBaseBrowser_HTTPFingerprint(): Browser_HTTPFingerprint {
  return {
    headerOrder: [],
    pseudoHeaderOrder: [],
    settingsFrame: undefined,
    windowUpdateIncrement: 0,
    priorityFrames: [],
    headerFramePriority: undefined,
  };
}

export const Browser_HTTPFingerprint = {
  encode(message: Browser_HTTPFingerprint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.headerOrder !== undefined && message.headerOrder.length !== 0) {
      for (const v of message.headerOrder) {
        writer.uint32(10).string(v!);
      }
    }
    if (message.pseudoHeaderOrder !== undefined && message.pseudoHeaderOrder.length !== 0) {
      for (const v of message.pseudoHeaderOrder) {
        writer.uint32(18).string(v!);
      }
    }
    if (message.settingsFrame !== undefined) {
      Browser_HTTPFingerprint_SettingsFrameOpts.encode(message.settingsFrame, writer.uint32(26).fork()).ldelim();
    }
    if (message.windowUpdateIncrement !== undefined && message.windowUpdateIncrement !== 0) {
      writer.uint32(32).int64(message.windowUpdateIncrement);
    }
    if (message.priorityFrames !== undefined && message.priorityFrames.length !== 0) {
      for (const v of message.priorityFrames) {
        Browser_HTTPFingerprint_PriorityFrameOpts.encode(v!, writer.uint32(42).fork()).ldelim();
      }
    }
    if (message.headerFramePriority !== undefined) {
      Browser_HTTPFingerprint_PriorityFrameOpts.encode(message.headerFramePriority, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_HTTPFingerprint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_HTTPFingerprint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.headerOrder!.push(reader.string());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.pseudoHeaderOrder!.push(reader.string());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.settingsFrame = Browser_HTTPFingerprint_SettingsFrameOpts.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.windowUpdateIncrement = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.priorityFrames!.push(Browser_HTTPFingerprint_PriorityFrameOpts.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.headerFramePriority = Browser_HTTPFingerprint_PriorityFrameOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_HTTPFingerprint {
    return {
      headerOrder: Array.isArray(object?.headerOrder) ? object.headerOrder.map((e: any) => String(e)) : [],
      pseudoHeaderOrder: Array.isArray(object?.pseudoHeaderOrder)
        ? object.pseudoHeaderOrder.map((e: any) => String(e))
        : [],
      settingsFrame: isSet(object.settingsFrame)
        ? Browser_HTTPFingerprint_SettingsFrameOpts.fromJSON(object.settingsFrame)
        : undefined,
      windowUpdateIncrement: isSet(object.windowUpdateIncrement) ? Number(object.windowUpdateIncrement) : 0,
      priorityFrames: Array.isArray(object?.priorityFrames)
        ? object.priorityFrames.map((e: any) => Browser_HTTPFingerprint_PriorityFrameOpts.fromJSON(e))
        : [],
      headerFramePriority: isSet(object.headerFramePriority)
        ? Browser_HTTPFingerprint_PriorityFrameOpts.fromJSON(object.headerFramePriority)
        : undefined,
    };
  },

  toJSON(message: Browser_HTTPFingerprint): unknown {
    const obj: any = {};
    if (message.headerOrder) {
      obj.headerOrder = message.headerOrder.map((e) => e);
    } else {
      obj.headerOrder = [];
    }
    if (message.pseudoHeaderOrder) {
      obj.pseudoHeaderOrder = message.pseudoHeaderOrder.map((e) => e);
    } else {
      obj.pseudoHeaderOrder = [];
    }
    message.settingsFrame !== undefined && (obj.settingsFrame = message.settingsFrame
      ? Browser_HTTPFingerprint_SettingsFrameOpts.toJSON(message.settingsFrame)
      : undefined);
    message.windowUpdateIncrement !== undefined &&
      (obj.windowUpdateIncrement = Math.round(message.windowUpdateIncrement));
    if (message.priorityFrames) {
      obj.priorityFrames = message.priorityFrames.map((e) =>
        e ? Browser_HTTPFingerprint_PriorityFrameOpts.toJSON(e) : undefined
      );
    } else {
      obj.priorityFrames = [];
    }
    message.headerFramePriority !== undefined && (obj.headerFramePriority = message.headerFramePriority
      ? Browser_HTTPFingerprint_PriorityFrameOpts.toJSON(message.headerFramePriority)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_HTTPFingerprint>, I>>(base?: I): Browser_HTTPFingerprint {
    return Browser_HTTPFingerprint.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_HTTPFingerprint>, I>>(object: I): Browser_HTTPFingerprint {
    const message = createBaseBrowser_HTTPFingerprint();
    message.headerOrder = object.headerOrder?.map((e) => e) || [];
    message.pseudoHeaderOrder = object.pseudoHeaderOrder?.map((e) => e) || [];
    message.settingsFrame = (object.settingsFrame !== undefined && object.settingsFrame !== null)
      ? Browser_HTTPFingerprint_SettingsFrameOpts.fromPartial(object.settingsFrame)
      : undefined;
    message.windowUpdateIncrement = object.windowUpdateIncrement ?? 0;
    message.priorityFrames =
      object.priorityFrames?.map((e) => Browser_HTTPFingerprint_PriorityFrameOpts.fromPartial(e)) || [];
    message.headerFramePriority = (object.headerFramePriority !== undefined && object.headerFramePriority !== null)
      ? Browser_HTTPFingerprint_PriorityFrameOpts.fromPartial(object.headerFramePriority)
      : undefined;
    return message;
  },
};

function createBaseBrowser_HTTPFingerprint_PriorityFrameOpts(): Browser_HTTPFingerprint_PriorityFrameOpts {
  return { streamId: 0, streamDep: 0, exclusive: false, weight: 0 };
}

export const Browser_HTTPFingerprint_PriorityFrameOpts = {
  encode(message: Browser_HTTPFingerprint_PriorityFrameOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.streamId !== undefined && message.streamId !== 0) {
      writer.uint32(8).int64(message.streamId);
    }
    if (message.streamDep !== undefined && message.streamDep !== 0) {
      writer.uint32(16).int64(message.streamDep);
    }
    if (message.exclusive === true) {
      writer.uint32(24).bool(message.exclusive);
    }
    if (message.weight !== undefined && message.weight !== 0) {
      writer.uint32(32).int32(message.weight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_HTTPFingerprint_PriorityFrameOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_HTTPFingerprint_PriorityFrameOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.streamId = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.streamDep = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.exclusive = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.weight = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_HTTPFingerprint_PriorityFrameOpts {
    return {
      streamId: isSet(object.streamId) ? Number(object.streamId) : 0,
      streamDep: isSet(object.streamDep) ? Number(object.streamDep) : 0,
      exclusive: isSet(object.exclusive) ? Boolean(object.exclusive) : false,
      weight: isSet(object.weight) ? Number(object.weight) : 0,
    };
  },

  toJSON(message: Browser_HTTPFingerprint_PriorityFrameOpts): unknown {
    const obj: any = {};
    message.streamId !== undefined && (obj.streamId = Math.round(message.streamId));
    message.streamDep !== undefined && (obj.streamDep = Math.round(message.streamDep));
    message.exclusive !== undefined && (obj.exclusive = message.exclusive);
    message.weight !== undefined && (obj.weight = Math.round(message.weight));
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_HTTPFingerprint_PriorityFrameOpts>, I>>(
    base?: I,
  ): Browser_HTTPFingerprint_PriorityFrameOpts {
    return Browser_HTTPFingerprint_PriorityFrameOpts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_HTTPFingerprint_PriorityFrameOpts>, I>>(
    object: I,
  ): Browser_HTTPFingerprint_PriorityFrameOpts {
    const message = createBaseBrowser_HTTPFingerprint_PriorityFrameOpts();
    message.streamId = object.streamId ?? 0;
    message.streamDep = object.streamDep ?? 0;
    message.exclusive = object.exclusive ?? false;
    message.weight = object.weight ?? 0;
    return message;
  },
};

function createBaseBrowser_HTTPFingerprint_SettingsFrameOpts(): Browser_HTTPFingerprint_SettingsFrameOpts {
  return {
    headerTableSize: 0,
    enablePush: 0,
    maxConcurrentStreams: 0,
    initialWindowSize: 0,
    maxFrameSize: 0,
    maxHeaderListSize: 0,
  };
}

export const Browser_HTTPFingerprint_SettingsFrameOpts = {
  encode(message: Browser_HTTPFingerprint_SettingsFrameOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.headerTableSize !== undefined && message.headerTableSize !== 0) {
      writer.uint32(8).int64(message.headerTableSize);
    }
    if (message.enablePush !== undefined && message.enablePush !== 0) {
      writer.uint32(16).int64(message.enablePush);
    }
    if (message.maxConcurrentStreams !== undefined && message.maxConcurrentStreams !== 0) {
      writer.uint32(24).int64(message.maxConcurrentStreams);
    }
    if (message.initialWindowSize !== undefined && message.initialWindowSize !== 0) {
      writer.uint32(32).int64(message.initialWindowSize);
    }
    if (message.maxFrameSize !== undefined && message.maxFrameSize !== 0) {
      writer.uint32(40).int64(message.maxFrameSize);
    }
    if (message.maxHeaderListSize !== undefined && message.maxHeaderListSize !== 0) {
      writer.uint32(48).int64(message.maxHeaderListSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_HTTPFingerprint_SettingsFrameOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_HTTPFingerprint_SettingsFrameOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.headerTableSize = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.enablePush = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.maxConcurrentStreams = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.initialWindowSize = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.maxFrameSize = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.maxHeaderListSize = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_HTTPFingerprint_SettingsFrameOpts {
    return {
      headerTableSize: isSet(object.headerTableSize) ? Number(object.headerTableSize) : 0,
      enablePush: isSet(object.enablePush) ? Number(object.enablePush) : 0,
      maxConcurrentStreams: isSet(object.maxConcurrentStreams) ? Number(object.maxConcurrentStreams) : 0,
      initialWindowSize: isSet(object.initialWindowSize) ? Number(object.initialWindowSize) : 0,
      maxFrameSize: isSet(object.maxFrameSize) ? Number(object.maxFrameSize) : 0,
      maxHeaderListSize: isSet(object.maxHeaderListSize) ? Number(object.maxHeaderListSize) : 0,
    };
  },

  toJSON(message: Browser_HTTPFingerprint_SettingsFrameOpts): unknown {
    const obj: any = {};
    message.headerTableSize !== undefined && (obj.headerTableSize = Math.round(message.headerTableSize));
    message.enablePush !== undefined && (obj.enablePush = Math.round(message.enablePush));
    message.maxConcurrentStreams !== undefined && (obj.maxConcurrentStreams = Math.round(message.maxConcurrentStreams));
    message.initialWindowSize !== undefined && (obj.initialWindowSize = Math.round(message.initialWindowSize));
    message.maxFrameSize !== undefined && (obj.maxFrameSize = Math.round(message.maxFrameSize));
    message.maxHeaderListSize !== undefined && (obj.maxHeaderListSize = Math.round(message.maxHeaderListSize));
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_HTTPFingerprint_SettingsFrameOpts>, I>>(
    base?: I,
  ): Browser_HTTPFingerprint_SettingsFrameOpts {
    return Browser_HTTPFingerprint_SettingsFrameOpts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_HTTPFingerprint_SettingsFrameOpts>, I>>(
    object: I,
  ): Browser_HTTPFingerprint_SettingsFrameOpts {
    const message = createBaseBrowser_HTTPFingerprint_SettingsFrameOpts();
    message.headerTableSize = object.headerTableSize ?? 0;
    message.enablePush = object.enablePush ?? 0;
    message.maxConcurrentStreams = object.maxConcurrentStreams ?? 0;
    message.initialWindowSize = object.initialWindowSize ?? 0;
    message.maxFrameSize = object.maxFrameSize ?? 0;
    message.maxHeaderListSize = object.maxHeaderListSize ?? 0;
    return message;
  },
};

function createBaseBrowser_GLCapability(): Browser_GLCapability {
  return { boolValue: [], intValue: [], floatValue: [], stringValue: [], enumValue: 0, enumName: "" };
}

export const Browser_GLCapability = {
  encode(message: Browser_GLCapability, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.boolValue !== undefined && message.boolValue.length !== 0) {
      writer.uint32(10).fork();
      for (const v of message.boolValue) {
        writer.bool(v);
      }
      writer.ldelim();
    }
    if (message.intValue !== undefined && message.intValue.length !== 0) {
      writer.uint32(18).fork();
      for (const v of message.intValue) {
        writer.int64(v);
      }
      writer.ldelim();
    }
    if (message.floatValue !== undefined && message.floatValue.length !== 0) {
      writer.uint32(26).fork();
      for (const v of message.floatValue) {
        writer.double(v);
      }
      writer.ldelim();
    }
    if (message.stringValue !== undefined && message.stringValue.length !== 0) {
      for (const v of message.stringValue) {
        writer.uint32(34).string(v!);
      }
    }
    if (message.enumValue !== undefined && message.enumValue !== 0) {
      writer.uint32(80).int64(message.enumValue);
    }
    if (message.enumName !== undefined && message.enumName !== "") {
      writer.uint32(90).string(message.enumName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_GLCapability {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_GLCapability();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.boolValue!.push(reader.bool());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.boolValue!.push(reader.bool());
            }

            continue;
          }

          break;
        case 2:
          if (tag == 16) {
            message.intValue!.push(longToNumber(reader.int64() as Long));
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.intValue!.push(longToNumber(reader.int64() as Long));
            }

            continue;
          }

          break;
        case 3:
          if (tag == 25) {
            message.floatValue!.push(reader.double());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.floatValue!.push(reader.double());
            }

            continue;
          }

          break;
        case 4:
          if (tag != 34) {
            break;
          }

          message.stringValue!.push(reader.string());
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.enumValue = longToNumber(reader.int64() as Long);
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.enumName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_GLCapability {
    return {
      boolValue: Array.isArray(object?.boolValue) ? object.boolValue.map((e: any) => Boolean(e)) : [],
      intValue: Array.isArray(object?.intValue) ? object.intValue.map((e: any) => Number(e)) : [],
      floatValue: Array.isArray(object?.floatValue) ? object.floatValue.map((e: any) => Number(e)) : [],
      stringValue: Array.isArray(object?.stringValue) ? object.stringValue.map((e: any) => String(e)) : [],
      enumValue: isSet(object.enumValue) ? Number(object.enumValue) : 0,
      enumName: isSet(object.enumName) ? String(object.enumName) : "",
    };
  },

  toJSON(message: Browser_GLCapability): unknown {
    const obj: any = {};
    if (message.boolValue) {
      obj.boolValue = message.boolValue.map((e) => e);
    } else {
      obj.boolValue = [];
    }
    if (message.intValue) {
      obj.intValue = message.intValue.map((e) => Math.round(e));
    } else {
      obj.intValue = [];
    }
    if (message.floatValue) {
      obj.floatValue = message.floatValue.map((e) => e);
    } else {
      obj.floatValue = [];
    }
    if (message.stringValue) {
      obj.stringValue = message.stringValue.map((e) => e);
    } else {
      obj.stringValue = [];
    }
    message.enumValue !== undefined && (obj.enumValue = Math.round(message.enumValue));
    message.enumName !== undefined && (obj.enumName = message.enumName);
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_GLCapability>, I>>(base?: I): Browser_GLCapability {
    return Browser_GLCapability.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_GLCapability>, I>>(object: I): Browser_GLCapability {
    const message = createBaseBrowser_GLCapability();
    message.boolValue = object.boolValue?.map((e) => e) || [];
    message.intValue = object.intValue?.map((e) => e) || [];
    message.floatValue = object.floatValue?.map((e) => e) || [];
    message.stringValue = object.stringValue?.map((e) => e) || [];
    message.enumValue = object.enumValue ?? 0;
    message.enumName = object.enumName ?? "";
    return message;
  },
};

function createBaseBrowser_BrowserCollection(): Browser_BrowserCollection {
  return { id: 0, hash: "", listData: [], mapData: {}, glCapabilities: {} };
}

export const Browser_BrowserCollection = {
  encode(message: Browser_BrowserCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined && message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.hash !== undefined && message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    if (message.listData !== undefined && message.listData.length !== 0) {
      for (const v of message.listData) {
        writer.uint32(26).string(v!);
      }
    }
    Object.entries(message.mapData || {}).forEach(([key, value]) => {
      Browser_BrowserCollection_MapDataEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    Object.entries(message.glCapabilities || {}).forEach(([key, value]) => {
      Browser_BrowserCollection_GlCapabilitiesEntry.encode({ key: key as any, value }, writer.uint32(42).fork())
        .ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_BrowserCollection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_BrowserCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.id = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.hash = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.listData!.push(reader.string());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          const entry4 = Browser_BrowserCollection_MapDataEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.mapData![entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          const entry5 = Browser_BrowserCollection_GlCapabilitiesEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.glCapabilities![entry5.key] = entry5.value;
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

  fromJSON(object: any): Browser_BrowserCollection {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      hash: isSet(object.hash) ? String(object.hash) : "",
      listData: Array.isArray(object?.listData) ? object.listData.map((e: any) => String(e)) : [],
      mapData: isObject(object.mapData)
        ? Object.entries(object.mapData).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      glCapabilities: isObject(object.glCapabilities)
        ? Object.entries(object.glCapabilities).reduce<{ [key: string]: Browser_GLCapability }>((acc, [key, value]) => {
          acc[key] = Browser_GLCapability.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Browser_BrowserCollection): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.hash !== undefined && (obj.hash = message.hash);
    if (message.listData) {
      obj.listData = message.listData.map((e) => e);
    } else {
      obj.listData = [];
    }
    obj.mapData = {};
    if (message.mapData) {
      Object.entries(message.mapData).forEach(([k, v]) => {
        obj.mapData[k] = v;
      });
    }
    obj.glCapabilities = {};
    if (message.glCapabilities) {
      Object.entries(message.glCapabilities).forEach(([k, v]) => {
        obj.glCapabilities[k] = Browser_GLCapability.toJSON(v);
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_BrowserCollection>, I>>(base?: I): Browser_BrowserCollection {
    return Browser_BrowserCollection.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_BrowserCollection>, I>>(object: I): Browser_BrowserCollection {
    const message = createBaseBrowser_BrowserCollection();
    message.id = object.id ?? 0;
    message.hash = object.hash ?? "";
    message.listData = object.listData?.map((e) => e) || [];
    message.mapData = Object.entries(object.mapData ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.glCapabilities = Object.entries(object.glCapabilities ?? {}).reduce<
      { [key: string]: Browser_GLCapability }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Browser_GLCapability.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseBrowser_BrowserCollection_MapDataEntry(): Browser_BrowserCollection_MapDataEntry {
  return { key: "", value: "" };
}

export const Browser_BrowserCollection_MapDataEntry = {
  encode(message: Browser_BrowserCollection_MapDataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_BrowserCollection_MapDataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_BrowserCollection_MapDataEntry();
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

  fromJSON(object: any): Browser_BrowserCollection_MapDataEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: Browser_BrowserCollection_MapDataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_BrowserCollection_MapDataEntry>, I>>(
    base?: I,
  ): Browser_BrowserCollection_MapDataEntry {
    return Browser_BrowserCollection_MapDataEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_BrowserCollection_MapDataEntry>, I>>(
    object: I,
  ): Browser_BrowserCollection_MapDataEntry {
    const message = createBaseBrowser_BrowserCollection_MapDataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseBrowser_BrowserCollection_GlCapabilitiesEntry(): Browser_BrowserCollection_GlCapabilitiesEntry {
  return { key: "", value: undefined };
}

export const Browser_BrowserCollection_GlCapabilitiesEntry = {
  encode(message: Browser_BrowserCollection_GlCapabilitiesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Browser_GLCapability.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_BrowserCollection_GlCapabilitiesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_BrowserCollection_GlCapabilitiesEntry();
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

          message.value = Browser_GLCapability.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_BrowserCollection_GlCapabilitiesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Browser_GLCapability.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Browser_BrowserCollection_GlCapabilitiesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Browser_GLCapability.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_BrowserCollection_GlCapabilitiesEntry>, I>>(
    base?: I,
  ): Browser_BrowserCollection_GlCapabilitiesEntry {
    return Browser_BrowserCollection_GlCapabilitiesEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_BrowserCollection_GlCapabilitiesEntry>, I>>(
    object: I,
  ): Browser_BrowserCollection_GlCapabilitiesEntry {
    const message = createBaseBrowser_BrowserCollection_GlCapabilitiesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? Browser_GLCapability.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseBrowser_BrowserScreen(): Browser_BrowserScreen {
  return {
    availWidth: 0,
    availHeight: 0,
    width: 0,
    height: 0,
    colorDepth: 0,
    pixelDepth: 0,
    availLeft: 0,
    availTop: 0,
    isExtended: false,
    orientation: undefined,
  };
}

export const Browser_BrowserScreen = {
  encode(message: Browser_BrowserScreen, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.availWidth !== undefined && message.availWidth !== 0) {
      writer.uint32(8).int32(message.availWidth);
    }
    if (message.availHeight !== undefined && message.availHeight !== 0) {
      writer.uint32(16).int32(message.availHeight);
    }
    if (message.width !== undefined && message.width !== 0) {
      writer.uint32(24).int32(message.width);
    }
    if (message.height !== undefined && message.height !== 0) {
      writer.uint32(32).int32(message.height);
    }
    if (message.colorDepth !== undefined && message.colorDepth !== 0) {
      writer.uint32(40).int32(message.colorDepth);
    }
    if (message.pixelDepth !== undefined && message.pixelDepth !== 0) {
      writer.uint32(48).int32(message.pixelDepth);
    }
    if (message.availLeft !== undefined && message.availLeft !== 0) {
      writer.uint32(56).int32(message.availLeft);
    }
    if (message.availTop !== undefined && message.availTop !== 0) {
      writer.uint32(64).int32(message.availTop);
    }
    if (message.isExtended === true) {
      writer.uint32(72).bool(message.isExtended);
    }
    if (message.orientation !== undefined) {
      Browser_BrowserScreen_Orientation.encode(message.orientation, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_BrowserScreen {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_BrowserScreen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.availWidth = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.availHeight = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.width = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.height = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.colorDepth = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.pixelDepth = reader.int32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.availLeft = reader.int32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.availTop = reader.int32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.isExtended = reader.bool();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.orientation = Browser_BrowserScreen_Orientation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_BrowserScreen {
    return {
      availWidth: isSet(object.availWidth) ? Number(object.availWidth) : 0,
      availHeight: isSet(object.availHeight) ? Number(object.availHeight) : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      colorDepth: isSet(object.colorDepth) ? Number(object.colorDepth) : 0,
      pixelDepth: isSet(object.pixelDepth) ? Number(object.pixelDepth) : 0,
      availLeft: isSet(object.availLeft) ? Number(object.availLeft) : 0,
      availTop: isSet(object.availTop) ? Number(object.availTop) : 0,
      isExtended: isSet(object.isExtended) ? Boolean(object.isExtended) : false,
      orientation: isSet(object.orientation)
        ? Browser_BrowserScreen_Orientation.fromJSON(object.orientation)
        : undefined,
    };
  },

  toJSON(message: Browser_BrowserScreen): unknown {
    const obj: any = {};
    message.availWidth !== undefined && (obj.availWidth = Math.round(message.availWidth));
    message.availHeight !== undefined && (obj.availHeight = Math.round(message.availHeight));
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.colorDepth !== undefined && (obj.colorDepth = Math.round(message.colorDepth));
    message.pixelDepth !== undefined && (obj.pixelDepth = Math.round(message.pixelDepth));
    message.availLeft !== undefined && (obj.availLeft = Math.round(message.availLeft));
    message.availTop !== undefined && (obj.availTop = Math.round(message.availTop));
    message.isExtended !== undefined && (obj.isExtended = message.isExtended);
    message.orientation !== undefined &&
      (obj.orientation = message.orientation
        ? Browser_BrowserScreen_Orientation.toJSON(message.orientation)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_BrowserScreen>, I>>(base?: I): Browser_BrowserScreen {
    return Browser_BrowserScreen.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_BrowserScreen>, I>>(object: I): Browser_BrowserScreen {
    const message = createBaseBrowser_BrowserScreen();
    message.availWidth = object.availWidth ?? 0;
    message.availHeight = object.availHeight ?? 0;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.colorDepth = object.colorDepth ?? 0;
    message.pixelDepth = object.pixelDepth ?? 0;
    message.availLeft = object.availLeft ?? 0;
    message.availTop = object.availTop ?? 0;
    message.isExtended = object.isExtended ?? false;
    message.orientation = (object.orientation !== undefined && object.orientation !== null)
      ? Browser_BrowserScreen_Orientation.fromPartial(object.orientation)
      : undefined;
    return message;
  },
};

function createBaseBrowser_BrowserScreen_Orientation(): Browser_BrowserScreen_Orientation {
  return { angle: 0, type: "" };
}

export const Browser_BrowserScreen_Orientation = {
  encode(message: Browser_BrowserScreen_Orientation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.angle !== undefined && message.angle !== 0) {
      writer.uint32(8).int32(message.angle);
    }
    if (message.type !== undefined && message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_BrowserScreen_Orientation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_BrowserScreen_Orientation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.angle = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_BrowserScreen_Orientation {
    return {
      angle: isSet(object.angle) ? Number(object.angle) : 0,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: Browser_BrowserScreen_Orientation): unknown {
    const obj: any = {};
    message.angle !== undefined && (obj.angle = Math.round(message.angle));
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_BrowserScreen_Orientation>, I>>(
    base?: I,
  ): Browser_BrowserScreen_Orientation {
    return Browser_BrowserScreen_Orientation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_BrowserScreen_Orientation>, I>>(
    object: I,
  ): Browser_BrowserScreen_Orientation {
    const message = createBaseBrowser_BrowserScreen_Orientation();
    message.angle = object.angle ?? 0;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseBrowser_WebGPU(): Browser_WebGPU {
  return {
    features: undefined,
    limits: {},
    isFallbackAdapter: false,
    vendor: "",
    architecture: "",
    device: "",
    description: "",
  };
}

export const Browser_WebGPU = {
  encode(message: Browser_WebGPU, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.features !== undefined) {
      Browser_WebGPU_Features.encode(message.features, writer.uint32(10).fork()).ldelim();
    }
    Object.entries(message.limits || {}).forEach(([key, value]) => {
      Browser_WebGPU_LimitsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    if (message.isFallbackAdapter === true) {
      writer.uint32(24).bool(message.isFallbackAdapter);
    }
    if (message.vendor !== undefined && message.vendor !== "") {
      writer.uint32(34).string(message.vendor);
    }
    if (message.architecture !== undefined && message.architecture !== "") {
      writer.uint32(42).string(message.architecture);
    }
    if (message.device !== undefined && message.device !== "") {
      writer.uint32(50).string(message.device);
    }
    if (message.description !== undefined && message.description !== "") {
      writer.uint32(58).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_WebGPU {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_WebGPU();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.features = Browser_WebGPU_Features.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          const entry2 = Browser_WebGPU_LimitsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.limits![entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.isFallbackAdapter = reader.bool();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.vendor = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.architecture = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.device = reader.string();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_WebGPU {
    return {
      features: isSet(object.features) ? Browser_WebGPU_Features.fromJSON(object.features) : undefined,
      limits: isObject(object.limits)
        ? Object.entries(object.limits).reduce<{ [key: string]: number }>((acc, [key, value]) => {
          acc[key] = Number(value);
          return acc;
        }, {})
        : {},
      isFallbackAdapter: isSet(object.isFallbackAdapter) ? Boolean(object.isFallbackAdapter) : false,
      vendor: isSet(object.vendor) ? String(object.vendor) : "",
      architecture: isSet(object.architecture) ? String(object.architecture) : "",
      device: isSet(object.device) ? String(object.device) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: Browser_WebGPU): unknown {
    const obj: any = {};
    message.features !== undefined &&
      (obj.features = message.features ? Browser_WebGPU_Features.toJSON(message.features) : undefined);
    obj.limits = {};
    if (message.limits) {
      Object.entries(message.limits).forEach(([k, v]) => {
        obj.limits[k] = Math.round(v);
      });
    }
    message.isFallbackAdapter !== undefined && (obj.isFallbackAdapter = message.isFallbackAdapter);
    message.vendor !== undefined && (obj.vendor = message.vendor);
    message.architecture !== undefined && (obj.architecture = message.architecture);
    message.device !== undefined && (obj.device = message.device);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_WebGPU>, I>>(base?: I): Browser_WebGPU {
    return Browser_WebGPU.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_WebGPU>, I>>(object: I): Browser_WebGPU {
    const message = createBaseBrowser_WebGPU();
    message.features = (object.features !== undefined && object.features !== null)
      ? Browser_WebGPU_Features.fromPartial(object.features)
      : undefined;
    message.limits = Object.entries(object.limits ?? {}).reduce<{ [key: string]: number }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Number(value);
      }
      return acc;
    }, {});
    message.isFallbackAdapter = object.isFallbackAdapter ?? false;
    message.vendor = object.vendor ?? "";
    message.architecture = object.architecture ?? "";
    message.device = object.device ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseBrowser_WebGPU_Features(): Browser_WebGPU_Features {
  return { size: 0 };
}

export const Browser_WebGPU_Features = {
  encode(message: Browser_WebGPU_Features, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.size !== undefined && message.size !== 0) {
      writer.uint32(8).int64(message.size);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_WebGPU_Features {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_WebGPU_Features();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.size = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_WebGPU_Features {
    return { size: isSet(object.size) ? Number(object.size) : 0 };
  },

  toJSON(message: Browser_WebGPU_Features): unknown {
    const obj: any = {};
    message.size !== undefined && (obj.size = Math.round(message.size));
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_WebGPU_Features>, I>>(base?: I): Browser_WebGPU_Features {
    return Browser_WebGPU_Features.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_WebGPU_Features>, I>>(object: I): Browser_WebGPU_Features {
    const message = createBaseBrowser_WebGPU_Features();
    message.size = object.size ?? 0;
    return message;
  },
};

function createBaseBrowser_WebGPU_LimitsEntry(): Browser_WebGPU_LimitsEntry {
  return { key: "", value: 0 };
}

export const Browser_WebGPU_LimitsEntry = {
  encode(message: Browser_WebGPU_LimitsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_WebGPU_LimitsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_WebGPU_LimitsEntry();
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
          if (tag != 16) {
            break;
          }

          message.value = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_WebGPU_LimitsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: Browser_WebGPU_LimitsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_WebGPU_LimitsEntry>, I>>(base?: I): Browser_WebGPU_LimitsEntry {
    return Browser_WebGPU_LimitsEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_WebGPU_LimitsEntry>, I>>(object: I): Browser_WebGPU_LimitsEntry {
    const message = createBaseBrowser_WebGPU_LimitsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseBrowser_SpeechSynthesis(): Browser_SpeechSynthesis {
  return { voiceURI: "", name: "", lang: "", localService: false, default: false };
}

export const Browser_SpeechSynthesis = {
  encode(message: Browser_SpeechSynthesis, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voiceURI !== undefined && message.voiceURI !== "") {
      writer.uint32(10).string(message.voiceURI);
    }
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.lang !== undefined && message.lang !== "") {
      writer.uint32(26).string(message.lang);
    }
    if (message.localService === true) {
      writer.uint32(32).bool(message.localService);
    }
    if (message.default === true) {
      writer.uint32(40).bool(message.default);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_SpeechSynthesis {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_SpeechSynthesis();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.voiceURI = reader.string();
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

          message.lang = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.localService = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.default = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_SpeechSynthesis {
    return {
      voiceURI: isSet(object.voiceURI) ? String(object.voiceURI) : "",
      name: isSet(object.name) ? String(object.name) : "",
      lang: isSet(object.lang) ? String(object.lang) : "",
      localService: isSet(object.localService) ? Boolean(object.localService) : false,
      default: isSet(object.default) ? Boolean(object.default) : false,
    };
  },

  toJSON(message: Browser_SpeechSynthesis): unknown {
    const obj: any = {};
    message.voiceURI !== undefined && (obj.voiceURI = message.voiceURI);
    message.name !== undefined && (obj.name = message.name);
    message.lang !== undefined && (obj.lang = message.lang);
    message.localService !== undefined && (obj.localService = message.localService);
    message.default !== undefined && (obj.default = message.default);
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_SpeechSynthesis>, I>>(base?: I): Browser_SpeechSynthesis {
    return Browser_SpeechSynthesis.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_SpeechSynthesis>, I>>(object: I): Browser_SpeechSynthesis {
    const message = createBaseBrowser_SpeechSynthesis();
    message.voiceURI = object.voiceURI ?? "";
    message.name = object.name ?? "";
    message.lang = object.lang ?? "";
    message.localService = object.localService ?? false;
    message.default = object.default ?? false;
    return message;
  },
};

function createBaseBrowser_Plugin(): Browser_Plugin {
  return { name: "", fileName: "", description: "", supportedMIMETypes: {} };
}

export const Browser_Plugin = {
  encode(message: Browser_Plugin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.fileName !== undefined && message.fileName !== "") {
      writer.uint32(18).string(message.fileName);
    }
    if (message.description !== undefined && message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.supportedMIMETypes || {}).forEach(([key, value]) => {
      Browser_Plugin_SupportedMIMETypesEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_Plugin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_Plugin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.fileName = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          const entry4 = Browser_Plugin_SupportedMIMETypesEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.supportedMIMETypes![entry4.key] = entry4.value;
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

  fromJSON(object: any): Browser_Plugin {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      fileName: isSet(object.fileName) ? String(object.fileName) : "",
      description: isSet(object.description) ? String(object.description) : "",
      supportedMIMETypes: isObject(object.supportedMIMETypes)
        ? Object.entries(object.supportedMIMETypes).reduce<{ [key: string]: Browser_Plugin_MIMEType }>(
          (acc, [key, value]) => {
            acc[key] = Browser_Plugin_MIMEType.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
    };
  },

  toJSON(message: Browser_Plugin): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.fileName !== undefined && (obj.fileName = message.fileName);
    message.description !== undefined && (obj.description = message.description);
    obj.supportedMIMETypes = {};
    if (message.supportedMIMETypes) {
      Object.entries(message.supportedMIMETypes).forEach(([k, v]) => {
        obj.supportedMIMETypes[k] = Browser_Plugin_MIMEType.toJSON(v);
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_Plugin>, I>>(base?: I): Browser_Plugin {
    return Browser_Plugin.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_Plugin>, I>>(object: I): Browser_Plugin {
    const message = createBaseBrowser_Plugin();
    message.name = object.name ?? "";
    message.fileName = object.fileName ?? "";
    message.description = object.description ?? "";
    message.supportedMIMETypes = Object.entries(object.supportedMIMETypes ?? {}).reduce<
      { [key: string]: Browser_Plugin_MIMEType }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Browser_Plugin_MIMEType.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseBrowser_Plugin_MIMEType(): Browser_Plugin_MIMEType {
  return { type: "", suffixes: "", description: "" };
}

export const Browser_Plugin_MIMEType = {
  encode(message: Browser_Plugin_MIMEType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== undefined && message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.suffixes !== undefined && message.suffixes !== "") {
      writer.uint32(18).string(message.suffixes);
    }
    if (message.description !== undefined && message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_Plugin_MIMEType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_Plugin_MIMEType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.suffixes = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_Plugin_MIMEType {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      suffixes: isSet(object.suffixes) ? String(object.suffixes) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: Browser_Plugin_MIMEType): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.suffixes !== undefined && (obj.suffixes = message.suffixes);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_Plugin_MIMEType>, I>>(base?: I): Browser_Plugin_MIMEType {
    return Browser_Plugin_MIMEType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_Plugin_MIMEType>, I>>(object: I): Browser_Plugin_MIMEType {
    const message = createBaseBrowser_Plugin_MIMEType();
    message.type = object.type ?? "";
    message.suffixes = object.suffixes ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseBrowser_Plugin_SupportedMIMETypesEntry(): Browser_Plugin_SupportedMIMETypesEntry {
  return { key: "", value: undefined };
}

export const Browser_Plugin_SupportedMIMETypesEntry = {
  encode(message: Browser_Plugin_SupportedMIMETypesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Browser_Plugin_MIMEType.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_Plugin_SupportedMIMETypesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_Plugin_SupportedMIMETypesEntry();
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

          message.value = Browser_Plugin_MIMEType.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_Plugin_SupportedMIMETypesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Browser_Plugin_MIMEType.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Browser_Plugin_SupportedMIMETypesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Browser_Plugin_MIMEType.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_Plugin_SupportedMIMETypesEntry>, I>>(
    base?: I,
  ): Browser_Plugin_SupportedMIMETypesEntry {
    return Browser_Plugin_SupportedMIMETypesEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_Plugin_SupportedMIMETypesEntry>, I>>(
    object: I,
  ): Browser_Plugin_SupportedMIMETypesEntry {
    const message = createBaseBrowser_Plugin_SupportedMIMETypesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? Browser_Plugin_MIMEType.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseBrowser_HighEntropyValues(): Browser_HighEntropyValues {
  return {
    architecture: "",
    bitness: "",
    mobile: false,
    model: "",
    platform: "",
    platformVersion: "",
    usFullVersion: "",
    brands: [],
    fullVersionList: [],
  };
}

export const Browser_HighEntropyValues = {
  encode(message: Browser_HighEntropyValues, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.architecture !== undefined && message.architecture !== "") {
      writer.uint32(10).string(message.architecture);
    }
    if (message.bitness !== undefined && message.bitness !== "") {
      writer.uint32(18).string(message.bitness);
    }
    if (message.mobile === true) {
      writer.uint32(24).bool(message.mobile);
    }
    if (message.model !== undefined && message.model !== "") {
      writer.uint32(34).string(message.model);
    }
    if (message.platform !== undefined && message.platform !== "") {
      writer.uint32(42).string(message.platform);
    }
    if (message.platformVersion !== undefined && message.platformVersion !== "") {
      writer.uint32(50).string(message.platformVersion);
    }
    if (message.usFullVersion !== undefined && message.usFullVersion !== "") {
      writer.uint32(58).string(message.usFullVersion);
    }
    if (message.brands !== undefined && message.brands.length !== 0) {
      for (const v of message.brands) {
        Browser_HighEntropyValues_Brand.encode(v!, writer.uint32(66).fork()).ldelim();
      }
    }
    if (message.fullVersionList !== undefined && message.fullVersionList.length !== 0) {
      for (const v of message.fullVersionList) {
        Browser_HighEntropyValues_Brand.encode(v!, writer.uint32(74).fork()).ldelim();
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_HighEntropyValues {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_HighEntropyValues();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.architecture = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.bitness = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.mobile = reader.bool();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.model = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.platform = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.platformVersion = reader.string();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.usFullVersion = reader.string();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.brands!.push(Browser_HighEntropyValues_Brand.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.fullVersionList!.push(Browser_HighEntropyValues_Brand.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_HighEntropyValues {
    return {
      architecture: isSet(object.architecture) ? String(object.architecture) : "",
      bitness: isSet(object.bitness) ? String(object.bitness) : "",
      mobile: isSet(object.mobile) ? Boolean(object.mobile) : false,
      model: isSet(object.model) ? String(object.model) : "",
      platform: isSet(object.platform) ? String(object.platform) : "",
      platformVersion: isSet(object.platformVersion) ? String(object.platformVersion) : "",
      usFullVersion: isSet(object.usFullVersion) ? String(object.usFullVersion) : "",
      brands: Array.isArray(object?.brands)
        ? object.brands.map((e: any) => Browser_HighEntropyValues_Brand.fromJSON(e))
        : [],
      fullVersionList: Array.isArray(object?.fullVersionList)
        ? object.fullVersionList.map((e: any) => Browser_HighEntropyValues_Brand.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Browser_HighEntropyValues): unknown {
    const obj: any = {};
    message.architecture !== undefined && (obj.architecture = message.architecture);
    message.bitness !== undefined && (obj.bitness = message.bitness);
    message.mobile !== undefined && (obj.mobile = message.mobile);
    message.model !== undefined && (obj.model = message.model);
    message.platform !== undefined && (obj.platform = message.platform);
    message.platformVersion !== undefined && (obj.platformVersion = message.platformVersion);
    message.usFullVersion !== undefined && (obj.usFullVersion = message.usFullVersion);
    if (message.brands) {
      obj.brands = message.brands.map((e) => e ? Browser_HighEntropyValues_Brand.toJSON(e) : undefined);
    } else {
      obj.brands = [];
    }
    if (message.fullVersionList) {
      obj.fullVersionList = message.fullVersionList.map((e) =>
        e ? Browser_HighEntropyValues_Brand.toJSON(e) : undefined
      );
    } else {
      obj.fullVersionList = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_HighEntropyValues>, I>>(base?: I): Browser_HighEntropyValues {
    return Browser_HighEntropyValues.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_HighEntropyValues>, I>>(object: I): Browser_HighEntropyValues {
    const message = createBaseBrowser_HighEntropyValues();
    message.architecture = object.architecture ?? "";
    message.bitness = object.bitness ?? "";
    message.mobile = object.mobile ?? false;
    message.model = object.model ?? "";
    message.platform = object.platform ?? "";
    message.platformVersion = object.platformVersion ?? "";
    message.usFullVersion = object.usFullVersion ?? "";
    message.brands = object.brands?.map((e) => Browser_HighEntropyValues_Brand.fromPartial(e)) || [];
    message.fullVersionList = object.fullVersionList?.map((e) => Browser_HighEntropyValues_Brand.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBrowser_HighEntropyValues_Brand(): Browser_HighEntropyValues_Brand {
  return { brand: "", version: "" };
}

export const Browser_HighEntropyValues_Brand = {
  encode(message: Browser_HighEntropyValues_Brand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.brand !== undefined && message.brand !== "") {
      writer.uint32(10).string(message.brand);
    }
    if (message.version !== undefined && message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_HighEntropyValues_Brand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_HighEntropyValues_Brand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.brand = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.version = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_HighEntropyValues_Brand {
    return {
      brand: isSet(object.brand) ? String(object.brand) : "",
      version: isSet(object.version) ? String(object.version) : "",
    };
  },

  toJSON(message: Browser_HighEntropyValues_Brand): unknown {
    const obj: any = {};
    message.brand !== undefined && (obj.brand = message.brand);
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_HighEntropyValues_Brand>, I>>(base?: I): Browser_HighEntropyValues_Brand {
    return Browser_HighEntropyValues_Brand.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_HighEntropyValues_Brand>, I>>(
    object: I,
  ): Browser_HighEntropyValues_Brand {
    const message = createBaseBrowser_HighEntropyValues_Brand();
    message.brand = object.brand ?? "";
    message.version = object.version ?? "";
    return message;
  },
};

function createBaseBrowser_WebRTC(): Browser_WebRTC {
  return { video: undefined, audio: undefined };
}

export const Browser_WebRTC = {
  encode(message: Browser_WebRTC, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.video !== undefined) {
      Browser_WebRTC_CodecInformation.encode(message.video, writer.uint32(10).fork()).ldelim();
    }
    if (message.audio !== undefined) {
      Browser_WebRTC_CodecInformation.encode(message.audio, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_WebRTC {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_WebRTC();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.video = Browser_WebRTC_CodecInformation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.audio = Browser_WebRTC_CodecInformation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_WebRTC {
    return {
      video: isSet(object.video) ? Browser_WebRTC_CodecInformation.fromJSON(object.video) : undefined,
      audio: isSet(object.audio) ? Browser_WebRTC_CodecInformation.fromJSON(object.audio) : undefined,
    };
  },

  toJSON(message: Browser_WebRTC): unknown {
    const obj: any = {};
    message.video !== undefined &&
      (obj.video = message.video ? Browser_WebRTC_CodecInformation.toJSON(message.video) : undefined);
    message.audio !== undefined &&
      (obj.audio = message.audio ? Browser_WebRTC_CodecInformation.toJSON(message.audio) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_WebRTC>, I>>(base?: I): Browser_WebRTC {
    return Browser_WebRTC.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_WebRTC>, I>>(object: I): Browser_WebRTC {
    const message = createBaseBrowser_WebRTC();
    message.video = (object.video !== undefined && object.video !== null)
      ? Browser_WebRTC_CodecInformation.fromPartial(object.video)
      : undefined;
    message.audio = (object.audio !== undefined && object.audio !== null)
      ? Browser_WebRTC_CodecInformation.fromPartial(object.audio)
      : undefined;
    return message;
  },
};

function createBaseBrowser_WebRTC_Codec(): Browser_WebRTC_Codec {
  return { channels: 0, clockRate: 0, mimeType: "", sdpFmtLine: "" };
}

export const Browser_WebRTC_Codec = {
  encode(message: Browser_WebRTC_Codec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channels !== undefined && message.channels !== 0) {
      writer.uint32(8).int32(message.channels);
    }
    if (message.clockRate !== undefined && message.clockRate !== 0) {
      writer.uint32(16).int64(message.clockRate);
    }
    if (message.mimeType !== undefined && message.mimeType !== "") {
      writer.uint32(26).string(message.mimeType);
    }
    if (message.sdpFmtLine !== undefined && message.sdpFmtLine !== "") {
      writer.uint32(34).string(message.sdpFmtLine);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_WebRTC_Codec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_WebRTC_Codec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.channels = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.clockRate = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.mimeType = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.sdpFmtLine = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_WebRTC_Codec {
    return {
      channels: isSet(object.channels) ? Number(object.channels) : 0,
      clockRate: isSet(object.clockRate) ? Number(object.clockRate) : 0,
      mimeType: isSet(object.mimeType) ? String(object.mimeType) : "",
      sdpFmtLine: isSet(object.sdpFmtLine) ? String(object.sdpFmtLine) : "",
    };
  },

  toJSON(message: Browser_WebRTC_Codec): unknown {
    const obj: any = {};
    message.channels !== undefined && (obj.channels = Math.round(message.channels));
    message.clockRate !== undefined && (obj.clockRate = Math.round(message.clockRate));
    message.mimeType !== undefined && (obj.mimeType = message.mimeType);
    message.sdpFmtLine !== undefined && (obj.sdpFmtLine = message.sdpFmtLine);
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_WebRTC_Codec>, I>>(base?: I): Browser_WebRTC_Codec {
    return Browser_WebRTC_Codec.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_WebRTC_Codec>, I>>(object: I): Browser_WebRTC_Codec {
    const message = createBaseBrowser_WebRTC_Codec();
    message.channels = object.channels ?? 0;
    message.clockRate = object.clockRate ?? 0;
    message.mimeType = object.mimeType ?? "";
    message.sdpFmtLine = object.sdpFmtLine ?? "";
    return message;
  },
};

function createBaseBrowser_WebRTC_HeaderExtension(): Browser_WebRTC_HeaderExtension {
  return { direction: "", uri: "" };
}

export const Browser_WebRTC_HeaderExtension = {
  encode(message: Browser_WebRTC_HeaderExtension, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.direction !== undefined && message.direction !== "") {
      writer.uint32(10).string(message.direction);
    }
    if (message.uri !== undefined && message.uri !== "") {
      writer.uint32(18).string(message.uri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_WebRTC_HeaderExtension {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_WebRTC_HeaderExtension();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.direction = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.uri = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_WebRTC_HeaderExtension {
    return {
      direction: isSet(object.direction) ? String(object.direction) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
    };
  },

  toJSON(message: Browser_WebRTC_HeaderExtension): unknown {
    const obj: any = {};
    message.direction !== undefined && (obj.direction = message.direction);
    message.uri !== undefined && (obj.uri = message.uri);
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_WebRTC_HeaderExtension>, I>>(base?: I): Browser_WebRTC_HeaderExtension {
    return Browser_WebRTC_HeaderExtension.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_WebRTC_HeaderExtension>, I>>(
    object: I,
  ): Browser_WebRTC_HeaderExtension {
    const message = createBaseBrowser_WebRTC_HeaderExtension();
    message.direction = object.direction ?? "";
    message.uri = object.uri ?? "";
    return message;
  },
};

function createBaseBrowser_WebRTC_CodecInformation(): Browser_WebRTC_CodecInformation {
  return { codecs: [], headerExtensions: [] };
}

export const Browser_WebRTC_CodecInformation = {
  encode(message: Browser_WebRTC_CodecInformation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codecs !== undefined && message.codecs.length !== 0) {
      for (const v of message.codecs) {
        Browser_WebRTC_Codec.encode(v!, writer.uint32(10).fork()).ldelim();
      }
    }
    if (message.headerExtensions !== undefined && message.headerExtensions.length !== 0) {
      for (const v of message.headerExtensions) {
        Browser_WebRTC_HeaderExtension.encode(v!, writer.uint32(18).fork()).ldelim();
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Browser_WebRTC_CodecInformation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowser_WebRTC_CodecInformation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.codecs!.push(Browser_WebRTC_Codec.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.headerExtensions!.push(Browser_WebRTC_HeaderExtension.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Browser_WebRTC_CodecInformation {
    return {
      codecs: Array.isArray(object?.codecs) ? object.codecs.map((e: any) => Browser_WebRTC_Codec.fromJSON(e)) : [],
      headerExtensions: Array.isArray(object?.headerExtensions)
        ? object.headerExtensions.map((e: any) => Browser_WebRTC_HeaderExtension.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Browser_WebRTC_CodecInformation): unknown {
    const obj: any = {};
    if (message.codecs) {
      obj.codecs = message.codecs.map((e) => e ? Browser_WebRTC_Codec.toJSON(e) : undefined);
    } else {
      obj.codecs = [];
    }
    if (message.headerExtensions) {
      obj.headerExtensions = message.headerExtensions.map((e) =>
        e ? Browser_WebRTC_HeaderExtension.toJSON(e) : undefined
      );
    } else {
      obj.headerExtensions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Browser_WebRTC_CodecInformation>, I>>(base?: I): Browser_WebRTC_CodecInformation {
    return Browser_WebRTC_CodecInformation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Browser_WebRTC_CodecInformation>, I>>(
    object: I,
  ): Browser_WebRTC_CodecInformation {
    const message = createBaseBrowser_WebRTC_CodecInformation();
    message.codecs = object.codecs?.map((e) => Browser_WebRTC_Codec.fromPartial(e)) || [];
    message.headerExtensions = object.headerExtensions?.map((e) => Browser_WebRTC_HeaderExtension.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGPSLocation(): GPSLocation {
  return { longitude: 0, latitude: 0, altitude: 0, provider: 0 };
}

export const GPSLocation = {
  encode(message: GPSLocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.longitude !== undefined && message.longitude !== 0) {
      writer.uint32(9).double(message.longitude);
    }
    if (message.latitude !== undefined && message.latitude !== 0) {
      writer.uint32(17).double(message.latitude);
    }
    if (message.altitude !== undefined && message.altitude !== 0) {
      writer.uint32(25).double(message.altitude);
    }
    if (message.provider !== undefined && message.provider !== 0) {
      writer.uint32(32).int32(message.provider);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GPSLocation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

          message.provider = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GPSLocation {
    return {
      longitude: isSet(object.longitude) ? Number(object.longitude) : 0,
      latitude: isSet(object.latitude) ? Number(object.latitude) : 0,
      altitude: isSet(object.altitude) ? Number(object.altitude) : 0,
      provider: isSet(object.provider) ? gPSLocation_LocationProviderFromJSON(object.provider) : 0,
    };
  },

  toJSON(message: GPSLocation): unknown {
    const obj: any = {};
    message.longitude !== undefined && (obj.longitude = message.longitude);
    message.latitude !== undefined && (obj.latitude = message.latitude);
    message.altitude !== undefined && (obj.altitude = message.altitude);
    message.provider !== undefined && (obj.provider = gPSLocation_LocationProviderToJSON(message.provider));
    return obj;
  },

  create<I extends Exact<DeepPartial<GPSLocation>, I>>(base?: I): GPSLocation {
    return GPSLocation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GPSLocation>, I>>(object: I): GPSLocation {
    const message = createBaseGPSLocation();
    message.longitude = object.longitude ?? 0;
    message.latitude = object.latitude ?? 0;
    message.altitude = object.altitude ?? 0;
    message.provider = object.provider ?? 0;
    return message;
  },
};

function createBaseLocale(): Locale {
  return { language: "", countryISO: "" };
}

export const Locale = {
  encode(message: Locale, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.language !== undefined && message.language !== "") {
      writer.uint32(10).string(message.language);
    }
    if (message.countryISO !== undefined && message.countryISO !== "") {
      writer.uint32(18).string(message.countryISO);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Locale {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): Locale {
    return {
      language: isSet(object.language) ? String(object.language) : "",
      countryISO: isSet(object.countryISO) ? String(object.countryISO) : "",
    };
  },

  toJSON(message: Locale): unknown {
    const obj: any = {};
    message.language !== undefined && (obj.language = message.language);
    message.countryISO !== undefined && (obj.countryISO = message.countryISO);
    return obj;
  },

  create<I extends Exact<DeepPartial<Locale>, I>>(base?: I): Locale {
    return Locale.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Locale>, I>>(object: I): Locale {
    const message = createBaseLocale();
    message.language = object.language ?? "";
    message.countryISO = object.countryISO ?? "";
    return message;
  },
};

function createBaseSIMCard(): SIMCard {
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

export const SIMCard = {
  encode(message: SIMCard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.phoneNumber !== undefined && message.phoneNumber !== "") {
      writer.uint32(10).string(message.phoneNumber);
    }
    if (message.MCC !== undefined && message.MCC !== "") {
      writer.uint32(18).string(message.MCC);
    }
    if (message.MNC !== undefined && message.MNC !== "") {
      writer.uint32(26).string(message.MNC);
    }
    if (message.carrier !== undefined && message.carrier !== "") {
      writer.uint32(34).string(message.carrier);
    }
    if (message.countryISO !== undefined && message.countryISO !== "") {
      writer.uint32(42).string(message.countryISO);
    }
    if (message.countryCode !== undefined && message.countryCode !== "") {
      writer.uint32(50).string(message.countryCode);
    }
    if (message.imei !== undefined) {
      SIMCard_IMEI.encode(message.imei, writer.uint32(58).fork()).ldelim();
    }
    if (message.meid !== undefined) {
      SIMCard_MEID.encode(message.meid, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SIMCard {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

          message.imei = SIMCard_IMEI.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.meid = SIMCard_MEID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SIMCard {
    return {
      phoneNumber: isSet(object.phoneNumber) ? String(object.phoneNumber) : "",
      MCC: isSet(object.MCC) ? String(object.MCC) : "",
      MNC: isSet(object.MNC) ? String(object.MNC) : "",
      carrier: isSet(object.carrier) ? String(object.carrier) : "",
      countryISO: isSet(object.countryISO) ? String(object.countryISO) : "",
      countryCode: isSet(object.countryCode) ? String(object.countryCode) : "",
      imei: isSet(object.imei) ? SIMCard_IMEI.fromJSON(object.imei) : undefined,
      meid: isSet(object.meid) ? SIMCard_MEID.fromJSON(object.meid) : undefined,
    };
  },

  toJSON(message: SIMCard): unknown {
    const obj: any = {};
    message.phoneNumber !== undefined && (obj.phoneNumber = message.phoneNumber);
    message.MCC !== undefined && (obj.MCC = message.MCC);
    message.MNC !== undefined && (obj.MNC = message.MNC);
    message.carrier !== undefined && (obj.carrier = message.carrier);
    message.countryISO !== undefined && (obj.countryISO = message.countryISO);
    message.countryCode !== undefined && (obj.countryCode = message.countryCode);
    message.imei !== undefined && (obj.imei = message.imei ? SIMCard_IMEI.toJSON(message.imei) : undefined);
    message.meid !== undefined && (obj.meid = message.meid ? SIMCard_MEID.toJSON(message.meid) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<SIMCard>, I>>(base?: I): SIMCard {
    return SIMCard.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SIMCard>, I>>(object: I): SIMCard {
    const message = createBaseSIMCard();
    message.phoneNumber = object.phoneNumber ?? "";
    message.MCC = object.MCC ?? "";
    message.MNC = object.MNC ?? "";
    message.carrier = object.carrier ?? "";
    message.countryISO = object.countryISO ?? "";
    message.countryCode = object.countryCode ?? "";
    message.imei = (object.imei !== undefined && object.imei !== null)
      ? SIMCard_IMEI.fromPartial(object.imei)
      : undefined;
    message.meid = (object.meid !== undefined && object.meid !== null)
      ? SIMCard_MEID.fromPartial(object.meid)
      : undefined;
    return message;
  },
};

function createBaseSIMCard_IMEI(): SIMCard_IMEI {
  return { TAC: "", imei: "" };
}

export const SIMCard_IMEI = {
  encode(message: SIMCard_IMEI, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.TAC !== undefined && message.TAC !== "") {
      writer.uint32(10).string(message.TAC);
    }
    if (message.imei !== undefined && message.imei !== "") {
      writer.uint32(18).string(message.imei);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SIMCard_IMEI {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): SIMCard_IMEI {
    return { TAC: isSet(object.TAC) ? String(object.TAC) : "", imei: isSet(object.imei) ? String(object.imei) : "" };
  },

  toJSON(message: SIMCard_IMEI): unknown {
    const obj: any = {};
    message.TAC !== undefined && (obj.TAC = message.TAC);
    message.imei !== undefined && (obj.imei = message.imei);
    return obj;
  },

  create<I extends Exact<DeepPartial<SIMCard_IMEI>, I>>(base?: I): SIMCard_IMEI {
    return SIMCard_IMEI.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SIMCard_IMEI>, I>>(object: I): SIMCard_IMEI {
    const message = createBaseSIMCard_IMEI();
    message.TAC = object.TAC ?? "";
    message.imei = object.imei ?? "";
    return message;
  },
};

function createBaseSIMCard_MEID(): SIMCard_MEID {
  return { RegionCode: "", ManufacturerCode: "", meid: "" };
}

export const SIMCard_MEID = {
  encode(message: SIMCard_MEID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.RegionCode !== undefined && message.RegionCode !== "") {
      writer.uint32(10).string(message.RegionCode);
    }
    if (message.ManufacturerCode !== undefined && message.ManufacturerCode !== "") {
      writer.uint32(18).string(message.ManufacturerCode);
    }
    if (message.meid !== undefined && message.meid !== "") {
      writer.uint32(26).string(message.meid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SIMCard_MEID {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): SIMCard_MEID {
    return {
      RegionCode: isSet(object.RegionCode) ? String(object.RegionCode) : "",
      ManufacturerCode: isSet(object.ManufacturerCode) ? String(object.ManufacturerCode) : "",
      meid: isSet(object.meid) ? String(object.meid) : "",
    };
  },

  toJSON(message: SIMCard_MEID): unknown {
    const obj: any = {};
    message.RegionCode !== undefined && (obj.RegionCode = message.RegionCode);
    message.ManufacturerCode !== undefined && (obj.ManufacturerCode = message.ManufacturerCode);
    message.meid !== undefined && (obj.meid = message.meid);
    return obj;
  },

  create<I extends Exact<DeepPartial<SIMCard_MEID>, I>>(base?: I): SIMCard_MEID {
    return SIMCard_MEID.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SIMCard_MEID>, I>>(object: I): SIMCard_MEID {
    const message = createBaseSIMCard_MEID();
    message.RegionCode = object.RegionCode ?? "";
    message.ManufacturerCode = object.ManufacturerCode ?? "";
    message.meid = object.meid ?? "";
    return message;
  },
};

function createBaseMAC(): MAC {
  return { OUI: "", address: "" };
}

export const MAC = {
  encode(message: MAC, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.OUI !== undefined && message.OUI !== "") {
      writer.uint32(10).string(message.OUI);
    }
    if (message.address !== undefined && message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MAC {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): MAC {
    return {
      OUI: isSet(object.OUI) ? String(object.OUI) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: MAC): unknown {
    const obj: any = {};
    message.OUI !== undefined && (obj.OUI = message.OUI);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create<I extends Exact<DeepPartial<MAC>, I>>(base?: I): MAC {
    return MAC.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MAC>, I>>(object: I): MAC {
    const message = createBaseMAC();
    message.OUI = object.OUI ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseTimezone(): Timezone {
  return { name: "" };
}

export const Timezone = {
  encode(message: Timezone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Timezone {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): Timezone {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: Timezone): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<Timezone>, I>>(base?: I): Timezone {
    return Timezone.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Timezone>, I>>(object: I): Timezone {
    const message = createBaseTimezone();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseScreenData(): ScreenData {
  return { density: 0, resolutionHorizontal: 0, resolutionVertical: 0 };
}

export const ScreenData = {
  encode(message: ScreenData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.density !== undefined && message.density !== 0) {
      writer.uint32(8).int32(message.density);
    }
    if (message.resolutionHorizontal !== undefined && message.resolutionHorizontal !== 0) {
      writer.uint32(16).int32(message.resolutionHorizontal);
    }
    if (message.resolutionVertical !== undefined && message.resolutionVertical !== 0) {
      writer.uint32(24).int32(message.resolutionVertical);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScreenData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): ScreenData {
    return {
      density: isSet(object.density) ? Number(object.density) : 0,
      resolutionHorizontal: isSet(object.resolutionHorizontal) ? Number(object.resolutionHorizontal) : 0,
      resolutionVertical: isSet(object.resolutionVertical) ? Number(object.resolutionVertical) : 0,
    };
  },

  toJSON(message: ScreenData): unknown {
    const obj: any = {};
    message.density !== undefined && (obj.density = Math.round(message.density));
    message.resolutionHorizontal !== undefined && (obj.resolutionHorizontal = Math.round(message.resolutionHorizontal));
    message.resolutionVertical !== undefined && (obj.resolutionVertical = Math.round(message.resolutionVertical));
    return obj;
  },

  create<I extends Exact<DeepPartial<ScreenData>, I>>(base?: I): ScreenData {
    return ScreenData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScreenData>, I>>(object: I): ScreenData {
    const message = createBaseScreenData();
    message.density = object.density ?? 0;
    message.resolutionHorizontal = object.resolutionHorizontal ?? 0;
    message.resolutionVertical = object.resolutionVertical ?? 0;
    return message;
  },
};

function createBaseCPUData(): CPUData {
  return { arch: 0, archName: "", model: "", brand: "", board: "", abiList: [] };
}

export const CPUData = {
  encode(message: CPUData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.arch !== undefined && message.arch !== 0) {
      writer.uint32(8).int32(message.arch);
    }
    if (message.archName !== undefined && message.archName !== "") {
      writer.uint32(18).string(message.archName);
    }
    if (message.model !== undefined && message.model !== "") {
      writer.uint32(26).string(message.model);
    }
    if (message.brand !== undefined && message.brand !== "") {
      writer.uint32(34).string(message.brand);
    }
    if (message.board !== undefined && message.board !== "") {
      writer.uint32(42).string(message.board);
    }
    if (message.abiList !== undefined && message.abiList.length !== 0) {
      for (const v of message.abiList) {
        writer.uint32(50).string(v!);
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPUData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPUData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.arch = reader.int32() as any;
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

          message.abiList!.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPUData {
    return {
      arch: isSet(object.arch) ? cPUData_ArchitectureFromJSON(object.arch) : 0,
      archName: isSet(object.archName) ? String(object.archName) : "",
      model: isSet(object.model) ? String(object.model) : "",
      brand: isSet(object.brand) ? String(object.brand) : "",
      board: isSet(object.board) ? String(object.board) : "",
      abiList: Array.isArray(object?.abiList) ? object.abiList.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CPUData): unknown {
    const obj: any = {};
    message.arch !== undefined && (obj.arch = cPUData_ArchitectureToJSON(message.arch));
    message.archName !== undefined && (obj.archName = message.archName);
    message.model !== undefined && (obj.model = message.model);
    message.brand !== undefined && (obj.brand = message.brand);
    message.board !== undefined && (obj.board = message.board);
    if (message.abiList) {
      obj.abiList = message.abiList.map((e) => e);
    } else {
      obj.abiList = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPUData>, I>>(base?: I): CPUData {
    return CPUData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPUData>, I>>(object: I): CPUData {
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

function createBaseAndroidDevice(): AndroidDevice {
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

export const AndroidDevice = {
  encode(message: AndroidDevice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      AndroidDevice_ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.version !== undefined && message.version !== 0) {
      writer.uint32(16).int32(message.version);
    }
    if (message.build !== undefined) {
      AndroidDevice_BuildData.encode(message.build, writer.uint32(26).fork()).ldelim();
    }
    if (message.software !== undefined) {
      AndroidDevice_DeviceSoftware.encode(message.software, writer.uint32(34).fork()).ldelim();
    }
    if (message.screen !== undefined) {
      ScreenData.encode(message.screen, writer.uint32(42).fork()).ldelim();
    }
    if (message.cpu !== undefined) {
      CPUData.encode(message.cpu, writer.uint32(50).fork()).ldelim();
    }
    if (message.locale !== undefined) {
      Locale.encode(message.locale, writer.uint32(58).fork()).ldelim();
    }
    if (message.location !== undefined) {
      GPSLocation.encode(message.location, writer.uint32(66).fork()).ldelim();
    }
    if (message.timezone !== undefined) {
      Timezone.encode(message.timezone, writer.uint32(74).fork()).ldelim();
    }
    if (message.macAddress !== undefined) {
      MAC.encode(message.macAddress, writer.uint32(82).fork()).ldelim();
    }
    if (message.simSlots !== undefined && message.simSlots.length !== 0) {
      for (const v of message.simSlots) {
        SIMCard.encode(v!, writer.uint32(90).fork()).ldelim();
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AndroidDevice {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAndroidDevice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = AndroidDevice_ID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.version = reader.int32() as any;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.build = AndroidDevice_BuildData.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.software = AndroidDevice_DeviceSoftware.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.screen = ScreenData.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.cpu = CPUData.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.locale = Locale.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.location = GPSLocation.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.timezone = Timezone.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.macAddress = MAC.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.simSlots!.push(SIMCard.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AndroidDevice {
    return {
      id: isSet(object.id) ? AndroidDevice_ID.fromJSON(object.id) : undefined,
      version: isSet(object.version) ? androidDevice_VersionFromJSON(object.version) : 0,
      build: isSet(object.build) ? AndroidDevice_BuildData.fromJSON(object.build) : undefined,
      software: isSet(object.software) ? AndroidDevice_DeviceSoftware.fromJSON(object.software) : undefined,
      screen: isSet(object.screen) ? ScreenData.fromJSON(object.screen) : undefined,
      cpu: isSet(object.cpu) ? CPUData.fromJSON(object.cpu) : undefined,
      locale: isSet(object.locale) ? Locale.fromJSON(object.locale) : undefined,
      location: isSet(object.location) ? GPSLocation.fromJSON(object.location) : undefined,
      timezone: isSet(object.timezone) ? Timezone.fromJSON(object.timezone) : undefined,
      macAddress: isSet(object.macAddress) ? MAC.fromJSON(object.macAddress) : undefined,
      simSlots: Array.isArray(object?.simSlots) ? object.simSlots.map((e: any) => SIMCard.fromJSON(e)) : [],
    };
  },

  toJSON(message: AndroidDevice): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? AndroidDevice_ID.toJSON(message.id) : undefined);
    message.version !== undefined && (obj.version = androidDevice_VersionToJSON(message.version));
    message.build !== undefined &&
      (obj.build = message.build ? AndroidDevice_BuildData.toJSON(message.build) : undefined);
    message.software !== undefined &&
      (obj.software = message.software ? AndroidDevice_DeviceSoftware.toJSON(message.software) : undefined);
    message.screen !== undefined && (obj.screen = message.screen ? ScreenData.toJSON(message.screen) : undefined);
    message.cpu !== undefined && (obj.cpu = message.cpu ? CPUData.toJSON(message.cpu) : undefined);
    message.locale !== undefined && (obj.locale = message.locale ? Locale.toJSON(message.locale) : undefined);
    message.location !== undefined &&
      (obj.location = message.location ? GPSLocation.toJSON(message.location) : undefined);
    message.timezone !== undefined && (obj.timezone = message.timezone ? Timezone.toJSON(message.timezone) : undefined);
    message.macAddress !== undefined &&
      (obj.macAddress = message.macAddress ? MAC.toJSON(message.macAddress) : undefined);
    if (message.simSlots) {
      obj.simSlots = message.simSlots.map((e) => e ? SIMCard.toJSON(e) : undefined);
    } else {
      obj.simSlots = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AndroidDevice>, I>>(base?: I): AndroidDevice {
    return AndroidDevice.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AndroidDevice>, I>>(object: I): AndroidDevice {
    const message = createBaseAndroidDevice();
    message.id = (object.id !== undefined && object.id !== null) ? AndroidDevice_ID.fromPartial(object.id) : undefined;
    message.version = object.version ?? 0;
    message.build = (object.build !== undefined && object.build !== null)
      ? AndroidDevice_BuildData.fromPartial(object.build)
      : undefined;
    message.software = (object.software !== undefined && object.software !== null)
      ? AndroidDevice_DeviceSoftware.fromPartial(object.software)
      : undefined;
    message.screen = (object.screen !== undefined && object.screen !== null)
      ? ScreenData.fromPartial(object.screen)
      : undefined;
    message.cpu = (object.cpu !== undefined && object.cpu !== null) ? CPUData.fromPartial(object.cpu) : undefined;
    message.locale = (object.locale !== undefined && object.locale !== null)
      ? Locale.fromPartial(object.locale)
      : undefined;
    message.location = (object.location !== undefined && object.location !== null)
      ? GPSLocation.fromPartial(object.location)
      : undefined;
    message.timezone = (object.timezone !== undefined && object.timezone !== null)
      ? Timezone.fromPartial(object.timezone)
      : undefined;
    message.macAddress = (object.macAddress !== undefined && object.macAddress !== null)
      ? MAC.fromPartial(object.macAddress)
      : undefined;
    message.simSlots = object.simSlots?.map((e) => SIMCard.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAndroidDevice_ID(): AndroidDevice_ID {
  return { id: 0 };
}

export const AndroidDevice_ID = {
  encode(message: AndroidDevice_ID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined && message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AndroidDevice_ID {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAndroidDevice_ID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AndroidDevice_ID {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: AndroidDevice_ID): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  create<I extends Exact<DeepPartial<AndroidDevice_ID>, I>>(base?: I): AndroidDevice_ID {
    return AndroidDevice_ID.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AndroidDevice_ID>, I>>(object: I): AndroidDevice_ID {
    const message = createBaseAndroidDevice_ID();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseAndroidDevice_BuildData(): AndroidDevice_BuildData {
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

export const AndroidDevice_BuildData = {
  encode(message: AndroidDevice_BuildData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.board !== undefined && message.board !== "") {
      writer.uint32(10).string(message.board);
    }
    if (message.bootloader !== undefined && message.bootloader !== "") {
      writer.uint32(18).string(message.bootloader);
    }
    if (message.brand !== undefined && message.brand !== "") {
      writer.uint32(26).string(message.brand);
    }
    if (message.device !== undefined && message.device !== "") {
      writer.uint32(34).string(message.device);
    }
    if (message.display !== undefined && message.display !== "") {
      writer.uint32(42).string(message.display);
    }
    if (message.fingerprint !== undefined && message.fingerprint !== "") {
      writer.uint32(50).string(message.fingerprint);
    }
    if (message.hardware !== undefined && message.hardware !== "") {
      writer.uint32(58).string(message.hardware);
    }
    if (message.id !== undefined && message.id !== "") {
      writer.uint32(66).string(message.id);
    }
    if (message.manufacturer !== undefined && message.manufacturer !== "") {
      writer.uint32(74).string(message.manufacturer);
    }
    if (message.model !== undefined && message.model !== "") {
      writer.uint32(82).string(message.model);
    }
    if (message.odmSku !== undefined && message.odmSku !== "") {
      writer.uint32(90).string(message.odmSku);
    }
    if (message.product !== undefined && message.product !== "") {
      writer.uint32(98).string(message.product);
    }
    if (message.sku !== undefined && message.sku !== "") {
      writer.uint32(106).string(message.sku);
    }
    if (message.socManufacturer !== undefined && message.socManufacturer !== "") {
      writer.uint32(114).string(message.socManufacturer);
    }
    if (message.socModel !== undefined && message.socModel !== "") {
      writer.uint32(122).string(message.socModel);
    }
    if (message.tags !== undefined && message.tags !== "") {
      writer.uint32(130).string(message.tags);
    }
    if (message.type !== undefined && message.type !== "") {
      writer.uint32(138).string(message.type);
    }
    if (message.incrementalVersion !== undefined && message.incrementalVersion !== "") {
      writer.uint32(146).string(message.incrementalVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AndroidDevice_BuildData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): AndroidDevice_BuildData {
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

  toJSON(message: AndroidDevice_BuildData): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<AndroidDevice_BuildData>, I>>(base?: I): AndroidDevice_BuildData {
    return AndroidDevice_BuildData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AndroidDevice_BuildData>, I>>(object: I): AndroidDevice_BuildData {
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

function createBaseAndroidDevice_DeviceSoftware(): AndroidDevice_DeviceSoftware {
  return { softwareMetaData: {}, appMetaData: {} };
}

export const AndroidDevice_DeviceSoftware = {
  encode(message: AndroidDevice_DeviceSoftware, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.softwareMetaData || {}).forEach(([key, value]) => {
      AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry.encode({ key: key as any, value }, writer.uint32(10).fork())
        .ldelim();
    });
    Object.entries(message.appMetaData || {}).forEach(([key, value]) => {
      AndroidDevice_DeviceSoftware_AppMetaDataEntry.encode({ key: key as any, value }, writer.uint32(18).fork())
        .ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AndroidDevice_DeviceSoftware {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAndroidDevice_DeviceSoftware();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          const entry1 = AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.softwareMetaData![entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          const entry2 = AndroidDevice_DeviceSoftware_AppMetaDataEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.appMetaData![entry2.key] = entry2.value;
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

  fromJSON(object: any): AndroidDevice_DeviceSoftware {
    return {
      softwareMetaData: isObject(object.softwareMetaData)
        ? Object.entries(object.softwareMetaData).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      appMetaData: isObject(object.appMetaData)
        ? Object.entries(object.appMetaData).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: AndroidDevice_DeviceSoftware): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<AndroidDevice_DeviceSoftware>, I>>(base?: I): AndroidDevice_DeviceSoftware {
    return AndroidDevice_DeviceSoftware.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AndroidDevice_DeviceSoftware>, I>>(object: I): AndroidDevice_DeviceSoftware {
    const message = createBaseAndroidDevice_DeviceSoftware();
    message.softwareMetaData = Object.entries(object.softwareMetaData ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      },
      {},
    );
    message.appMetaData = Object.entries(object.appMetaData ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseAndroidDevice_DeviceSoftware_SoftwareMetaDataEntry(): AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry {
  return { key: "", value: "" };
}

export const AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry = {
  encode(
    message: AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry>, I>>(
    base?: I,
  ): AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry {
    return AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry>, I>>(
    object: I,
  ): AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry {
    const message = createBaseAndroidDevice_DeviceSoftware_SoftwareMetaDataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseAndroidDevice_DeviceSoftware_AppMetaDataEntry(): AndroidDevice_DeviceSoftware_AppMetaDataEntry {
  return { key: "", value: "" };
}

export const AndroidDevice_DeviceSoftware_AppMetaDataEntry = {
  encode(message: AndroidDevice_DeviceSoftware_AppMetaDataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AndroidDevice_DeviceSoftware_AppMetaDataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): AndroidDevice_DeviceSoftware_AppMetaDataEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: AndroidDevice_DeviceSoftware_AppMetaDataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<AndroidDevice_DeviceSoftware_AppMetaDataEntry>, I>>(
    base?: I,
  ): AndroidDevice_DeviceSoftware_AppMetaDataEntry {
    return AndroidDevice_DeviceSoftware_AppMetaDataEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AndroidDevice_DeviceSoftware_AppMetaDataEntry>, I>>(
    object: I,
  ): AndroidDevice_DeviceSoftware_AppMetaDataEntry {
    const message = createBaseAndroidDevice_DeviceSoftware_AppMetaDataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
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

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
