import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "device_utils";
export interface Browser {
    version: string;
    name: string;
    userAgent: string;
    brandHeader: string;
    tlsFingerprint: Browser_TLSFingerprint | undefined;
}
export interface Browser_TLSFingerprint {
    version: Browser_TLSFingerprint_ProtocolVersion;
    cipherSuites: Browser_TLSFingerprint_CipherSuite[];
    extensions: Browser_TLSFingerprint_Extensions[];
    ellipticCurves: Browser_TLSFingerprint_EllipticCurve[];
    ellipticCurvePointFormats: Browser_TLSFingerprint_EllipticCurvePointFormat[];
}
/**
 * - RFC 5246 (TLS 1.2): https://tools.ietf.org/html/rfc5246
 * - RFC 6101 (SSL 3.0): https://tools.ietf.org/html/rfc6101
 * https://github.com/openssl/openssl/blob/c04e78f0c69201226430fed14c291c281da47f2d/include/openssl/prov_ssl.h
 */
export declare enum Browser_TLSFingerprint_ProtocolVersion {
    UNKNOWN = 0,
    SSL3 = 768,
    TLS1 = 769,
    TLS1_1 = 770,
    TLS1_2 = 771,
    TLS1_3 = 772,
    DTLS1 = 65279,
    DTLS1_2 = 65277,
    DTLS1_BAD = 256,
    UNRECOGNIZED = -1
}
export declare function browser_TLSFingerprint_ProtocolVersionFromJSON(object: any): Browser_TLSFingerprint_ProtocolVersion;
export declare function browser_TLSFingerprint_ProtocolVersionToJSON(object: Browser_TLSFingerprint_ProtocolVersion): string;
/** - TLS cipher-suites: https://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml#tls-parameters-4 */
export declare enum Browser_TLSFingerprint_CipherSuite {
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
    UNRECOGNIZED = -1
}
export declare function browser_TLSFingerprint_CipherSuiteFromJSON(object: any): Browser_TLSFingerprint_CipherSuite;
export declare function browser_TLSFingerprint_CipherSuiteToJSON(object: Browser_TLSFingerprint_CipherSuite): string;
/** - TLS extensions: https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml */
export declare enum Browser_TLSFingerprint_Extensions {
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
    EXTENSION_RENEGOTIATION_INFO = 65281,
    UNRECOGNIZED = -1
}
export declare function browser_TLSFingerprint_ExtensionsFromJSON(object: any): Browser_TLSFingerprint_Extensions;
export declare function browser_TLSFingerprint_ExtensionsToJSON(object: Browser_TLSFingerprint_Extensions): string;
/** - Elliptic curves: https://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml#tls-parameters-8 */
export declare enum Browser_TLSFingerprint_EllipticCurve {
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
    ARBITRARY_EXPLICIT_PRIME_CURVES = 65281,
    ARBITRARY_EXPLICIT_CHAR2_CURVES = 65282,
    UNRECOGNIZED = -1
}
export declare function browser_TLSFingerprint_EllipticCurveFromJSON(object: any): Browser_TLSFingerprint_EllipticCurve;
export declare function browser_TLSFingerprint_EllipticCurveToJSON(object: Browser_TLSFingerprint_EllipticCurve): string;
/** https://www.rfc-editor.org/rfc/rfc4492#section-5.1.2 */
export declare enum Browser_TLSFingerprint_EllipticCurvePointFormat {
    UNCOMPRESSED = 0,
    ANSI_X962_COMPRESSED_PRIME = 1,
    ANSI_X962_COMPRESSED_CHAR2 = 2,
    UNRECOGNIZED = -1
}
export declare function browser_TLSFingerprint_EllipticCurvePointFormatFromJSON(object: any): Browser_TLSFingerprint_EllipticCurvePointFormat;
export declare function browser_TLSFingerprint_EllipticCurvePointFormatToJSON(object: Browser_TLSFingerprint_EllipticCurvePointFormat): string;
/** Potentially common for more than just Android */
export interface GPSLocation {
    longitude: number;
    latitude: number;
    altitude: number;
    provider: GPSLocation_LocationProvider;
}
export declare enum GPSLocation_LocationProvider {
    /** LocationProvider_NONE - Treat as random */
    LocationProvider_NONE = 0,
    GPS = 1,
    NETWORK = 2,
    PASSIVE = 3,
    UNRECOGNIZED = -1
}
export declare function gPSLocation_LocationProviderFromJSON(object: any): GPSLocation_LocationProvider;
export declare function gPSLocation_LocationProviderToJSON(object: GPSLocation_LocationProvider): string;
export interface Locale {
    language: string;
    countryISO: string;
}
export interface SIMCard {
    /** With or without country code? */
    phoneNumber: string;
    /** Provider and country information */
    MCC: string;
    MNC: string;
    carrier: string;
    countryISO: string;
    countryCode: string;
    imei: SIMCard_IMEI | undefined;
    meid: SIMCard_MEID | undefined;
}
export interface SIMCard_IMEI {
    TAC: string;
    /**
     * src: https://en.wikipedia.org/wiki/International_Mobile_Equipment_Identity
     * AA	-	BB	BB	BB	-	CC	CC	CC	D
     * Where AA and BB = TAC, CC = serial (randomized) and D = Luhn validation
     */
    imei: string;
}
export interface SIMCard_MEID {
    RegionCode: string;
    ManufacturerCode: string;
    /**
     * src: https://en.wikipedia.org/wiki/Mobile_equipment_identifier
     * R R	X	X	X	X	X	X	Z	Z	Z	Z	Z	Z	C
     * Where R = region, X = manufacturer, Z = serial (randomized) and C = Luhn validation
     */
    meid: string;
}
export interface MAC {
    OUI: string;
    address: string;
}
export interface Timezone {
    /** IANA standard */
    name: string;
}
export interface ScreenData {
    /** in DPI */
    density: number;
    /** in pixels */
    resolutionHorizontal: number;
    /** in pixels */
    resolutionVertical: number;
}
export interface CPUData {
    arch: CPUData_Architecture;
    archName: string;
    model: string;
    brand: string;
    board: string;
    abiList: string[];
}
export declare enum CPUData_Architecture {
    UNKNOWN = 0,
    ARM = 1,
    ARM64 = 2,
    MIPS = 3,
    MIPSEL = 4,
    PPC = 5,
    PPC64 = 6,
    X32 = 7,
    X64 = 8,
    UNRECOGNIZED = -1
}
export declare function cPUData_ArchitectureFromJSON(object: any): CPUData_Architecture;
export declare function cPUData_ArchitectureToJSON(object: CPUData_Architecture): string;
/** Android device */
export interface AndroidDevice {
    id: AndroidDevice_ID | undefined;
    version: AndroidDevice_Version;
    build: AndroidDevice_BuildData | undefined;
    software: AndroidDevice_DeviceSoftware | undefined;
    /** Everything below this can technically be abstracted to unified device */
    screen: ScreenData | undefined;
    cpu: CPUData | undefined;
    locale: Locale | undefined;
    location: GPSLocation | undefined;
    timezone: Timezone | undefined;
    macAddress: MAC | undefined;
    /** Dual SIM compatibility */
    simSlots: SIMCard[];
}
/**
 * Src: https://apilevels.com/
 * BuildNumber defaults: https://source.android.com/docs/setup/about/build-numbers#source-code-tags-and-builds
 */
export declare enum AndroidDevice_Version {
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
    UNRECOGNIZED = -1
}
export declare function androidDevice_VersionFromJSON(object: any): AndroidDevice_Version;
export declare function androidDevice_VersionToJSON(object: AndroidDevice_Version): string;
export interface AndroidDevice_ID {
    id: number;
}
/** https://developer.android.com/reference/android/os/Build */
export interface AndroidDevice_BuildData {
    board: string;
    bootloader: string;
    brand: string;
    device: string;
    display: string;
    fingerprint: string;
    hardware: string;
    id: string;
    manufacturer: string;
    model: string;
    odmSku: string;
    product: string;
    sku: string;
    socManufacturer: string;
    socModel: string;
    tags: string;
    type: string;
    incrementalVersion: string;
}
export interface AndroidDevice_DeviceSoftware {
    softwareMetaData: {
        [key: string]: string;
    };
    /** app package : version string */
    appMetaData: {
        [key: string]: string;
    };
}
export interface AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry {
    key: string;
    value: string;
}
export interface AndroidDevice_DeviceSoftware_AppMetaDataEntry {
    key: string;
    value: string;
}
export declare const Browser: {
    encode(message: Browser, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Browser;
    fromJSON(object: any): Browser;
    toJSON(message: Browser): unknown;
    create<I extends {
        version?: string | undefined;
        name?: string | undefined;
        userAgent?: string | undefined;
        brandHeader?: string | undefined;
        tlsFingerprint?: {
            version?: Browser_TLSFingerprint_ProtocolVersion | undefined;
            cipherSuites?: Browser_TLSFingerprint_CipherSuite[] | undefined;
            extensions?: Browser_TLSFingerprint_Extensions[] | undefined;
            ellipticCurves?: Browser_TLSFingerprint_EllipticCurve[] | undefined;
            ellipticCurvePointFormats?: Browser_TLSFingerprint_EllipticCurvePointFormat[] | undefined;
        } | undefined;
    } & {
        version?: string | undefined;
        name?: string | undefined;
        userAgent?: string | undefined;
        brandHeader?: string | undefined;
        tlsFingerprint?: ({
            version?: Browser_TLSFingerprint_ProtocolVersion | undefined;
            cipherSuites?: Browser_TLSFingerprint_CipherSuite[] | undefined;
            extensions?: Browser_TLSFingerprint_Extensions[] | undefined;
            ellipticCurves?: Browser_TLSFingerprint_EllipticCurve[] | undefined;
            ellipticCurvePointFormats?: Browser_TLSFingerprint_EllipticCurvePointFormat[] | undefined;
        } & {
            version?: Browser_TLSFingerprint_ProtocolVersion | undefined;
            cipherSuites?: (Browser_TLSFingerprint_CipherSuite[] & Browser_TLSFingerprint_CipherSuite[] & { [K in Exclude<keyof I["tlsFingerprint"]["cipherSuites"], keyof Browser_TLSFingerprint_CipherSuite[]>]: never; }) | undefined;
            extensions?: (Browser_TLSFingerprint_Extensions[] & Browser_TLSFingerprint_Extensions[] & { [K_1 in Exclude<keyof I["tlsFingerprint"]["extensions"], keyof Browser_TLSFingerprint_Extensions[]>]: never; }) | undefined;
            ellipticCurves?: (Browser_TLSFingerprint_EllipticCurve[] & Browser_TLSFingerprint_EllipticCurve[] & { [K_2 in Exclude<keyof I["tlsFingerprint"]["ellipticCurves"], keyof Browser_TLSFingerprint_EllipticCurve[]>]: never; }) | undefined;
            ellipticCurvePointFormats?: (Browser_TLSFingerprint_EllipticCurvePointFormat[] & Browser_TLSFingerprint_EllipticCurvePointFormat[] & { [K_3 in Exclude<keyof I["tlsFingerprint"]["ellipticCurvePointFormats"], keyof Browser_TLSFingerprint_EllipticCurvePointFormat[]>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["tlsFingerprint"], keyof Browser_TLSFingerprint>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof Browser>]: never; }>(base?: I | undefined): Browser;
    fromPartial<I_1 extends {
        version?: string | undefined;
        name?: string | undefined;
        userAgent?: string | undefined;
        brandHeader?: string | undefined;
        tlsFingerprint?: {
            version?: Browser_TLSFingerprint_ProtocolVersion | undefined;
            cipherSuites?: Browser_TLSFingerprint_CipherSuite[] | undefined;
            extensions?: Browser_TLSFingerprint_Extensions[] | undefined;
            ellipticCurves?: Browser_TLSFingerprint_EllipticCurve[] | undefined;
            ellipticCurvePointFormats?: Browser_TLSFingerprint_EllipticCurvePointFormat[] | undefined;
        } | undefined;
    } & {
        version?: string | undefined;
        name?: string | undefined;
        userAgent?: string | undefined;
        brandHeader?: string | undefined;
        tlsFingerprint?: ({
            version?: Browser_TLSFingerprint_ProtocolVersion | undefined;
            cipherSuites?: Browser_TLSFingerprint_CipherSuite[] | undefined;
            extensions?: Browser_TLSFingerprint_Extensions[] | undefined;
            ellipticCurves?: Browser_TLSFingerprint_EllipticCurve[] | undefined;
            ellipticCurvePointFormats?: Browser_TLSFingerprint_EllipticCurvePointFormat[] | undefined;
        } & {
            version?: Browser_TLSFingerprint_ProtocolVersion | undefined;
            cipherSuites?: (Browser_TLSFingerprint_CipherSuite[] & Browser_TLSFingerprint_CipherSuite[] & { [K_6 in Exclude<keyof I_1["tlsFingerprint"]["cipherSuites"], keyof Browser_TLSFingerprint_CipherSuite[]>]: never; }) | undefined;
            extensions?: (Browser_TLSFingerprint_Extensions[] & Browser_TLSFingerprint_Extensions[] & { [K_7 in Exclude<keyof I_1["tlsFingerprint"]["extensions"], keyof Browser_TLSFingerprint_Extensions[]>]: never; }) | undefined;
            ellipticCurves?: (Browser_TLSFingerprint_EllipticCurve[] & Browser_TLSFingerprint_EllipticCurve[] & { [K_8 in Exclude<keyof I_1["tlsFingerprint"]["ellipticCurves"], keyof Browser_TLSFingerprint_EllipticCurve[]>]: never; }) | undefined;
            ellipticCurvePointFormats?: (Browser_TLSFingerprint_EllipticCurvePointFormat[] & Browser_TLSFingerprint_EllipticCurvePointFormat[] & { [K_9 in Exclude<keyof I_1["tlsFingerprint"]["ellipticCurvePointFormats"], keyof Browser_TLSFingerprint_EllipticCurvePointFormat[]>]: never; }) | undefined;
        } & { [K_10 in Exclude<keyof I_1["tlsFingerprint"], keyof Browser_TLSFingerprint>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof Browser>]: never; }>(object: I_1): Browser;
};
export declare const Browser_TLSFingerprint: {
    encode(message: Browser_TLSFingerprint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Browser_TLSFingerprint;
    fromJSON(object: any): Browser_TLSFingerprint;
    toJSON(message: Browser_TLSFingerprint): unknown;
    create<I extends {
        version?: Browser_TLSFingerprint_ProtocolVersion | undefined;
        cipherSuites?: Browser_TLSFingerprint_CipherSuite[] | undefined;
        extensions?: Browser_TLSFingerprint_Extensions[] | undefined;
        ellipticCurves?: Browser_TLSFingerprint_EllipticCurve[] | undefined;
        ellipticCurvePointFormats?: Browser_TLSFingerprint_EllipticCurvePointFormat[] | undefined;
    } & {
        version?: Browser_TLSFingerprint_ProtocolVersion | undefined;
        cipherSuites?: (Browser_TLSFingerprint_CipherSuite[] & Browser_TLSFingerprint_CipherSuite[] & { [K in Exclude<keyof I["cipherSuites"], keyof Browser_TLSFingerprint_CipherSuite[]>]: never; }) | undefined;
        extensions?: (Browser_TLSFingerprint_Extensions[] & Browser_TLSFingerprint_Extensions[] & { [K_1 in Exclude<keyof I["extensions"], keyof Browser_TLSFingerprint_Extensions[]>]: never; }) | undefined;
        ellipticCurves?: (Browser_TLSFingerprint_EllipticCurve[] & Browser_TLSFingerprint_EllipticCurve[] & { [K_2 in Exclude<keyof I["ellipticCurves"], keyof Browser_TLSFingerprint_EllipticCurve[]>]: never; }) | undefined;
        ellipticCurvePointFormats?: (Browser_TLSFingerprint_EllipticCurvePointFormat[] & Browser_TLSFingerprint_EllipticCurvePointFormat[] & { [K_3 in Exclude<keyof I["ellipticCurvePointFormats"], keyof Browser_TLSFingerprint_EllipticCurvePointFormat[]>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof Browser_TLSFingerprint>]: never; }>(base?: I | undefined): Browser_TLSFingerprint;
    fromPartial<I_1 extends {
        version?: Browser_TLSFingerprint_ProtocolVersion | undefined;
        cipherSuites?: Browser_TLSFingerprint_CipherSuite[] | undefined;
        extensions?: Browser_TLSFingerprint_Extensions[] | undefined;
        ellipticCurves?: Browser_TLSFingerprint_EllipticCurve[] | undefined;
        ellipticCurvePointFormats?: Browser_TLSFingerprint_EllipticCurvePointFormat[] | undefined;
    } & {
        version?: Browser_TLSFingerprint_ProtocolVersion | undefined;
        cipherSuites?: (Browser_TLSFingerprint_CipherSuite[] & Browser_TLSFingerprint_CipherSuite[] & { [K_5 in Exclude<keyof I_1["cipherSuites"], keyof Browser_TLSFingerprint_CipherSuite[]>]: never; }) | undefined;
        extensions?: (Browser_TLSFingerprint_Extensions[] & Browser_TLSFingerprint_Extensions[] & { [K_6 in Exclude<keyof I_1["extensions"], keyof Browser_TLSFingerprint_Extensions[]>]: never; }) | undefined;
        ellipticCurves?: (Browser_TLSFingerprint_EllipticCurve[] & Browser_TLSFingerprint_EllipticCurve[] & { [K_7 in Exclude<keyof I_1["ellipticCurves"], keyof Browser_TLSFingerprint_EllipticCurve[]>]: never; }) | undefined;
        ellipticCurvePointFormats?: (Browser_TLSFingerprint_EllipticCurvePointFormat[] & Browser_TLSFingerprint_EllipticCurvePointFormat[] & { [K_8 in Exclude<keyof I_1["ellipticCurvePointFormats"], keyof Browser_TLSFingerprint_EllipticCurvePointFormat[]>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof Browser_TLSFingerprint>]: never; }>(object: I_1): Browser_TLSFingerprint;
};
export declare const GPSLocation: {
    encode(message: GPSLocation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GPSLocation;
    fromJSON(object: any): GPSLocation;
    toJSON(message: GPSLocation): unknown;
    create<I extends {
        longitude?: number | undefined;
        latitude?: number | undefined;
        altitude?: number | undefined;
        provider?: GPSLocation_LocationProvider | undefined;
    } & {
        longitude?: number | undefined;
        latitude?: number | undefined;
        altitude?: number | undefined;
        provider?: GPSLocation_LocationProvider | undefined;
    } & { [K in Exclude<keyof I, keyof GPSLocation>]: never; }>(base?: I | undefined): GPSLocation;
    fromPartial<I_1 extends {
        longitude?: number | undefined;
        latitude?: number | undefined;
        altitude?: number | undefined;
        provider?: GPSLocation_LocationProvider | undefined;
    } & {
        longitude?: number | undefined;
        latitude?: number | undefined;
        altitude?: number | undefined;
        provider?: GPSLocation_LocationProvider | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof GPSLocation>]: never; }>(object: I_1): GPSLocation;
};
export declare const Locale: {
    encode(message: Locale, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Locale;
    fromJSON(object: any): Locale;
    toJSON(message: Locale): unknown;
    create<I extends {
        language?: string | undefined;
        countryISO?: string | undefined;
    } & {
        language?: string | undefined;
        countryISO?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Locale>]: never; }>(base?: I | undefined): Locale;
    fromPartial<I_1 extends {
        language?: string | undefined;
        countryISO?: string | undefined;
    } & {
        language?: string | undefined;
        countryISO?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Locale>]: never; }>(object: I_1): Locale;
};
export declare const SIMCard: {
    encode(message: SIMCard, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SIMCard;
    fromJSON(object: any): SIMCard;
    toJSON(message: SIMCard): unknown;
    create<I extends {
        phoneNumber?: string | undefined;
        MCC?: string | undefined;
        MNC?: string | undefined;
        carrier?: string | undefined;
        countryISO?: string | undefined;
        countryCode?: string | undefined;
        imei?: {
            TAC?: string | undefined;
            imei?: string | undefined;
        } | undefined;
        meid?: {
            RegionCode?: string | undefined;
            ManufacturerCode?: string | undefined;
            meid?: string | undefined;
        } | undefined;
    } & {
        phoneNumber?: string | undefined;
        MCC?: string | undefined;
        MNC?: string | undefined;
        carrier?: string | undefined;
        countryISO?: string | undefined;
        countryCode?: string | undefined;
        imei?: ({
            TAC?: string | undefined;
            imei?: string | undefined;
        } & {
            TAC?: string | undefined;
            imei?: string | undefined;
        } & { [K in Exclude<keyof I["imei"], keyof SIMCard_IMEI>]: never; }) | undefined;
        meid?: ({
            RegionCode?: string | undefined;
            ManufacturerCode?: string | undefined;
            meid?: string | undefined;
        } & {
            RegionCode?: string | undefined;
            ManufacturerCode?: string | undefined;
            meid?: string | undefined;
        } & { [K_1 in Exclude<keyof I["meid"], keyof SIMCard_MEID>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof SIMCard>]: never; }>(base?: I | undefined): SIMCard;
    fromPartial<I_1 extends {
        phoneNumber?: string | undefined;
        MCC?: string | undefined;
        MNC?: string | undefined;
        carrier?: string | undefined;
        countryISO?: string | undefined;
        countryCode?: string | undefined;
        imei?: {
            TAC?: string | undefined;
            imei?: string | undefined;
        } | undefined;
        meid?: {
            RegionCode?: string | undefined;
            ManufacturerCode?: string | undefined;
            meid?: string | undefined;
        } | undefined;
    } & {
        phoneNumber?: string | undefined;
        MCC?: string | undefined;
        MNC?: string | undefined;
        carrier?: string | undefined;
        countryISO?: string | undefined;
        countryCode?: string | undefined;
        imei?: ({
            TAC?: string | undefined;
            imei?: string | undefined;
        } & {
            TAC?: string | undefined;
            imei?: string | undefined;
        } & { [K_3 in Exclude<keyof I_1["imei"], keyof SIMCard_IMEI>]: never; }) | undefined;
        meid?: ({
            RegionCode?: string | undefined;
            ManufacturerCode?: string | undefined;
            meid?: string | undefined;
        } & {
            RegionCode?: string | undefined;
            ManufacturerCode?: string | undefined;
            meid?: string | undefined;
        } & { [K_4 in Exclude<keyof I_1["meid"], keyof SIMCard_MEID>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof SIMCard>]: never; }>(object: I_1): SIMCard;
};
export declare const SIMCard_IMEI: {
    encode(message: SIMCard_IMEI, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SIMCard_IMEI;
    fromJSON(object: any): SIMCard_IMEI;
    toJSON(message: SIMCard_IMEI): unknown;
    create<I extends {
        TAC?: string | undefined;
        imei?: string | undefined;
    } & {
        TAC?: string | undefined;
        imei?: string | undefined;
    } & { [K in Exclude<keyof I, keyof SIMCard_IMEI>]: never; }>(base?: I | undefined): SIMCard_IMEI;
    fromPartial<I_1 extends {
        TAC?: string | undefined;
        imei?: string | undefined;
    } & {
        TAC?: string | undefined;
        imei?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SIMCard_IMEI>]: never; }>(object: I_1): SIMCard_IMEI;
};
export declare const SIMCard_MEID: {
    encode(message: SIMCard_MEID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SIMCard_MEID;
    fromJSON(object: any): SIMCard_MEID;
    toJSON(message: SIMCard_MEID): unknown;
    create<I extends {
        RegionCode?: string | undefined;
        ManufacturerCode?: string | undefined;
        meid?: string | undefined;
    } & {
        RegionCode?: string | undefined;
        ManufacturerCode?: string | undefined;
        meid?: string | undefined;
    } & { [K in Exclude<keyof I, keyof SIMCard_MEID>]: never; }>(base?: I | undefined): SIMCard_MEID;
    fromPartial<I_1 extends {
        RegionCode?: string | undefined;
        ManufacturerCode?: string | undefined;
        meid?: string | undefined;
    } & {
        RegionCode?: string | undefined;
        ManufacturerCode?: string | undefined;
        meid?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SIMCard_MEID>]: never; }>(object: I_1): SIMCard_MEID;
};
export declare const MAC: {
    encode(message: MAC, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MAC;
    fromJSON(object: any): MAC;
    toJSON(message: MAC): unknown;
    create<I extends {
        OUI?: string | undefined;
        address?: string | undefined;
    } & {
        OUI?: string | undefined;
        address?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MAC>]: never; }>(base?: I | undefined): MAC;
    fromPartial<I_1 extends {
        OUI?: string | undefined;
        address?: string | undefined;
    } & {
        OUI?: string | undefined;
        address?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MAC>]: never; }>(object: I_1): MAC;
};
export declare const Timezone: {
    encode(message: Timezone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Timezone;
    fromJSON(object: any): Timezone;
    toJSON(message: Timezone): unknown;
    create<I extends {
        name?: string | undefined;
    } & {
        name?: string | undefined;
    } & { [K in Exclude<keyof I, "name">]: never; }>(base?: I | undefined): Timezone;
    fromPartial<I_1 extends {
        name?: string | undefined;
    } & {
        name?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "name">]: never; }>(object: I_1): Timezone;
};
export declare const ScreenData: {
    encode(message: ScreenData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ScreenData;
    fromJSON(object: any): ScreenData;
    toJSON(message: ScreenData): unknown;
    create<I extends {
        density?: number | undefined;
        resolutionHorizontal?: number | undefined;
        resolutionVertical?: number | undefined;
    } & {
        density?: number | undefined;
        resolutionHorizontal?: number | undefined;
        resolutionVertical?: number | undefined;
    } & { [K in Exclude<keyof I, keyof ScreenData>]: never; }>(base?: I | undefined): ScreenData;
    fromPartial<I_1 extends {
        density?: number | undefined;
        resolutionHorizontal?: number | undefined;
        resolutionVertical?: number | undefined;
    } & {
        density?: number | undefined;
        resolutionHorizontal?: number | undefined;
        resolutionVertical?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof ScreenData>]: never; }>(object: I_1): ScreenData;
};
export declare const CPUData: {
    encode(message: CPUData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CPUData;
    fromJSON(object: any): CPUData;
    toJSON(message: CPUData): unknown;
    create<I extends {
        arch?: CPUData_Architecture | undefined;
        archName?: string | undefined;
        model?: string | undefined;
        brand?: string | undefined;
        board?: string | undefined;
        abiList?: string[] | undefined;
    } & {
        arch?: CPUData_Architecture | undefined;
        archName?: string | undefined;
        model?: string | undefined;
        brand?: string | undefined;
        board?: string | undefined;
        abiList?: (string[] & string[] & { [K in Exclude<keyof I["abiList"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof CPUData>]: never; }>(base?: I | undefined): CPUData;
    fromPartial<I_1 extends {
        arch?: CPUData_Architecture | undefined;
        archName?: string | undefined;
        model?: string | undefined;
        brand?: string | undefined;
        board?: string | undefined;
        abiList?: string[] | undefined;
    } & {
        arch?: CPUData_Architecture | undefined;
        archName?: string | undefined;
        model?: string | undefined;
        brand?: string | undefined;
        board?: string | undefined;
        abiList?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["abiList"], keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof CPUData>]: never; }>(object: I_1): CPUData;
};
export declare const AndroidDevice: {
    encode(message: AndroidDevice, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AndroidDevice;
    fromJSON(object: any): AndroidDevice;
    toJSON(message: AndroidDevice): unknown;
    create<I extends {
        id?: {
            id?: number | undefined;
        } | undefined;
        version?: AndroidDevice_Version | undefined;
        build?: {
            board?: string | undefined;
            bootloader?: string | undefined;
            brand?: string | undefined;
            device?: string | undefined;
            display?: string | undefined;
            fingerprint?: string | undefined;
            hardware?: string | undefined;
            id?: string | undefined;
            manufacturer?: string | undefined;
            model?: string | undefined;
            odmSku?: string | undefined;
            product?: string | undefined;
            sku?: string | undefined;
            socManufacturer?: string | undefined;
            socModel?: string | undefined;
            tags?: string | undefined;
            type?: string | undefined;
            incrementalVersion?: string | undefined;
        } | undefined;
        software?: {
            softwareMetaData?: {
                [x: string]: string | undefined;
            } | undefined;
            appMetaData?: {
                [x: string]: string | undefined;
            } | undefined;
        } | undefined;
        screen?: {
            density?: number | undefined;
            resolutionHorizontal?: number | undefined;
            resolutionVertical?: number | undefined;
        } | undefined;
        cpu?: {
            arch?: CPUData_Architecture | undefined;
            archName?: string | undefined;
            model?: string | undefined;
            brand?: string | undefined;
            board?: string | undefined;
            abiList?: string[] | undefined;
        } | undefined;
        locale?: {
            language?: string | undefined;
            countryISO?: string | undefined;
        } | undefined;
        location?: {
            longitude?: number | undefined;
            latitude?: number | undefined;
            altitude?: number | undefined;
            provider?: GPSLocation_LocationProvider | undefined;
        } | undefined;
        timezone?: {
            name?: string | undefined;
        } | undefined;
        macAddress?: {
            OUI?: string | undefined;
            address?: string | undefined;
        } | undefined;
        simSlots?: {
            phoneNumber?: string | undefined;
            MCC?: string | undefined;
            MNC?: string | undefined;
            carrier?: string | undefined;
            countryISO?: string | undefined;
            countryCode?: string | undefined;
            imei?: {
                TAC?: string | undefined;
                imei?: string | undefined;
            } | undefined;
            meid?: {
                RegionCode?: string | undefined;
                ManufacturerCode?: string | undefined;
                meid?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        id?: ({
            id?: number | undefined;
        } & {
            id?: number | undefined;
        } & { [K in Exclude<keyof I["id"], "id">]: never; }) | undefined;
        version?: AndroidDevice_Version | undefined;
        build?: ({
            board?: string | undefined;
            bootloader?: string | undefined;
            brand?: string | undefined;
            device?: string | undefined;
            display?: string | undefined;
            fingerprint?: string | undefined;
            hardware?: string | undefined;
            id?: string | undefined;
            manufacturer?: string | undefined;
            model?: string | undefined;
            odmSku?: string | undefined;
            product?: string | undefined;
            sku?: string | undefined;
            socManufacturer?: string | undefined;
            socModel?: string | undefined;
            tags?: string | undefined;
            type?: string | undefined;
            incrementalVersion?: string | undefined;
        } & {
            board?: string | undefined;
            bootloader?: string | undefined;
            brand?: string | undefined;
            device?: string | undefined;
            display?: string | undefined;
            fingerprint?: string | undefined;
            hardware?: string | undefined;
            id?: string | undefined;
            manufacturer?: string | undefined;
            model?: string | undefined;
            odmSku?: string | undefined;
            product?: string | undefined;
            sku?: string | undefined;
            socManufacturer?: string | undefined;
            socModel?: string | undefined;
            tags?: string | undefined;
            type?: string | undefined;
            incrementalVersion?: string | undefined;
        } & { [K_1 in Exclude<keyof I["build"], keyof AndroidDevice_BuildData>]: never; }) | undefined;
        software?: ({
            softwareMetaData?: {
                [x: string]: string | undefined;
            } | undefined;
            appMetaData?: {
                [x: string]: string | undefined;
            } | undefined;
        } & {
            softwareMetaData?: ({
                [x: string]: string | undefined;
            } & {
                [x: string]: string | undefined;
            } & { [K_2 in Exclude<keyof I["software"]["softwareMetaData"], string | number>]: never; }) | undefined;
            appMetaData?: ({
                [x: string]: string | undefined;
            } & {
                [x: string]: string | undefined;
            } & { [K_3 in Exclude<keyof I["software"]["appMetaData"], string | number>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["software"], keyof AndroidDevice_DeviceSoftware>]: never; }) | undefined;
        screen?: ({
            density?: number | undefined;
            resolutionHorizontal?: number | undefined;
            resolutionVertical?: number | undefined;
        } & {
            density?: number | undefined;
            resolutionHorizontal?: number | undefined;
            resolutionVertical?: number | undefined;
        } & { [K_5 in Exclude<keyof I["screen"], keyof ScreenData>]: never; }) | undefined;
        cpu?: ({
            arch?: CPUData_Architecture | undefined;
            archName?: string | undefined;
            model?: string | undefined;
            brand?: string | undefined;
            board?: string | undefined;
            abiList?: string[] | undefined;
        } & {
            arch?: CPUData_Architecture | undefined;
            archName?: string | undefined;
            model?: string | undefined;
            brand?: string | undefined;
            board?: string | undefined;
            abiList?: (string[] & string[] & { [K_6 in Exclude<keyof I["cpu"]["abiList"], keyof string[]>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I["cpu"], keyof CPUData>]: never; }) | undefined;
        locale?: ({
            language?: string | undefined;
            countryISO?: string | undefined;
        } & {
            language?: string | undefined;
            countryISO?: string | undefined;
        } & { [K_8 in Exclude<keyof I["locale"], keyof Locale>]: never; }) | undefined;
        location?: ({
            longitude?: number | undefined;
            latitude?: number | undefined;
            altitude?: number | undefined;
            provider?: GPSLocation_LocationProvider | undefined;
        } & {
            longitude?: number | undefined;
            latitude?: number | undefined;
            altitude?: number | undefined;
            provider?: GPSLocation_LocationProvider | undefined;
        } & { [K_9 in Exclude<keyof I["location"], keyof GPSLocation>]: never; }) | undefined;
        timezone?: ({
            name?: string | undefined;
        } & {
            name?: string | undefined;
        } & { [K_10 in Exclude<keyof I["timezone"], "name">]: never; }) | undefined;
        macAddress?: ({
            OUI?: string | undefined;
            address?: string | undefined;
        } & {
            OUI?: string | undefined;
            address?: string | undefined;
        } & { [K_11 in Exclude<keyof I["macAddress"], keyof MAC>]: never; }) | undefined;
        simSlots?: ({
            phoneNumber?: string | undefined;
            MCC?: string | undefined;
            MNC?: string | undefined;
            carrier?: string | undefined;
            countryISO?: string | undefined;
            countryCode?: string | undefined;
            imei?: {
                TAC?: string | undefined;
                imei?: string | undefined;
            } | undefined;
            meid?: {
                RegionCode?: string | undefined;
                ManufacturerCode?: string | undefined;
                meid?: string | undefined;
            } | undefined;
        }[] & ({
            phoneNumber?: string | undefined;
            MCC?: string | undefined;
            MNC?: string | undefined;
            carrier?: string | undefined;
            countryISO?: string | undefined;
            countryCode?: string | undefined;
            imei?: {
                TAC?: string | undefined;
                imei?: string | undefined;
            } | undefined;
            meid?: {
                RegionCode?: string | undefined;
                ManufacturerCode?: string | undefined;
                meid?: string | undefined;
            } | undefined;
        } & {
            phoneNumber?: string | undefined;
            MCC?: string | undefined;
            MNC?: string | undefined;
            carrier?: string | undefined;
            countryISO?: string | undefined;
            countryCode?: string | undefined;
            imei?: ({
                TAC?: string | undefined;
                imei?: string | undefined;
            } & {
                TAC?: string | undefined;
                imei?: string | undefined;
            } & { [K_12 in Exclude<keyof I["simSlots"][number]["imei"], keyof SIMCard_IMEI>]: never; }) | undefined;
            meid?: ({
                RegionCode?: string | undefined;
                ManufacturerCode?: string | undefined;
                meid?: string | undefined;
            } & {
                RegionCode?: string | undefined;
                ManufacturerCode?: string | undefined;
                meid?: string | undefined;
            } & { [K_13 in Exclude<keyof I["simSlots"][number]["meid"], keyof SIMCard_MEID>]: never; }) | undefined;
        } & { [K_14 in Exclude<keyof I["simSlots"][number], keyof SIMCard>]: never; })[] & { [K_15 in Exclude<keyof I["simSlots"], keyof {
            phoneNumber?: string | undefined;
            MCC?: string | undefined;
            MNC?: string | undefined;
            carrier?: string | undefined;
            countryISO?: string | undefined;
            countryCode?: string | undefined;
            imei?: {
                TAC?: string | undefined;
                imei?: string | undefined;
            } | undefined;
            meid?: {
                RegionCode?: string | undefined;
                ManufacturerCode?: string | undefined;
                meid?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_16 in Exclude<keyof I, keyof AndroidDevice>]: never; }>(base?: I | undefined): AndroidDevice;
    fromPartial<I_1 extends {
        id?: {
            id?: number | undefined;
        } | undefined;
        version?: AndroidDevice_Version | undefined;
        build?: {
            board?: string | undefined;
            bootloader?: string | undefined;
            brand?: string | undefined;
            device?: string | undefined;
            display?: string | undefined;
            fingerprint?: string | undefined;
            hardware?: string | undefined;
            id?: string | undefined;
            manufacturer?: string | undefined;
            model?: string | undefined;
            odmSku?: string | undefined;
            product?: string | undefined;
            sku?: string | undefined;
            socManufacturer?: string | undefined;
            socModel?: string | undefined;
            tags?: string | undefined;
            type?: string | undefined;
            incrementalVersion?: string | undefined;
        } | undefined;
        software?: {
            softwareMetaData?: {
                [x: string]: string | undefined;
            } | undefined;
            appMetaData?: {
                [x: string]: string | undefined;
            } | undefined;
        } | undefined;
        screen?: {
            density?: number | undefined;
            resolutionHorizontal?: number | undefined;
            resolutionVertical?: number | undefined;
        } | undefined;
        cpu?: {
            arch?: CPUData_Architecture | undefined;
            archName?: string | undefined;
            model?: string | undefined;
            brand?: string | undefined;
            board?: string | undefined;
            abiList?: string[] | undefined;
        } | undefined;
        locale?: {
            language?: string | undefined;
            countryISO?: string | undefined;
        } | undefined;
        location?: {
            longitude?: number | undefined;
            latitude?: number | undefined;
            altitude?: number | undefined;
            provider?: GPSLocation_LocationProvider | undefined;
        } | undefined;
        timezone?: {
            name?: string | undefined;
        } | undefined;
        macAddress?: {
            OUI?: string | undefined;
            address?: string | undefined;
        } | undefined;
        simSlots?: {
            phoneNumber?: string | undefined;
            MCC?: string | undefined;
            MNC?: string | undefined;
            carrier?: string | undefined;
            countryISO?: string | undefined;
            countryCode?: string | undefined;
            imei?: {
                TAC?: string | undefined;
                imei?: string | undefined;
            } | undefined;
            meid?: {
                RegionCode?: string | undefined;
                ManufacturerCode?: string | undefined;
                meid?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        id?: ({
            id?: number | undefined;
        } & {
            id?: number | undefined;
        } & { [K_17 in Exclude<keyof I_1["id"], "id">]: never; }) | undefined;
        version?: AndroidDevice_Version | undefined;
        build?: ({
            board?: string | undefined;
            bootloader?: string | undefined;
            brand?: string | undefined;
            device?: string | undefined;
            display?: string | undefined;
            fingerprint?: string | undefined;
            hardware?: string | undefined;
            id?: string | undefined;
            manufacturer?: string | undefined;
            model?: string | undefined;
            odmSku?: string | undefined;
            product?: string | undefined;
            sku?: string | undefined;
            socManufacturer?: string | undefined;
            socModel?: string | undefined;
            tags?: string | undefined;
            type?: string | undefined;
            incrementalVersion?: string | undefined;
        } & {
            board?: string | undefined;
            bootloader?: string | undefined;
            brand?: string | undefined;
            device?: string | undefined;
            display?: string | undefined;
            fingerprint?: string | undefined;
            hardware?: string | undefined;
            id?: string | undefined;
            manufacturer?: string | undefined;
            model?: string | undefined;
            odmSku?: string | undefined;
            product?: string | undefined;
            sku?: string | undefined;
            socManufacturer?: string | undefined;
            socModel?: string | undefined;
            tags?: string | undefined;
            type?: string | undefined;
            incrementalVersion?: string | undefined;
        } & { [K_18 in Exclude<keyof I_1["build"], keyof AndroidDevice_BuildData>]: never; }) | undefined;
        software?: ({
            softwareMetaData?: {
                [x: string]: string | undefined;
            } | undefined;
            appMetaData?: {
                [x: string]: string | undefined;
            } | undefined;
        } & {
            softwareMetaData?: ({
                [x: string]: string | undefined;
            } & {
                [x: string]: string | undefined;
            } & { [K_19 in Exclude<keyof I_1["software"]["softwareMetaData"], string | number>]: never; }) | undefined;
            appMetaData?: ({
                [x: string]: string | undefined;
            } & {
                [x: string]: string | undefined;
            } & { [K_20 in Exclude<keyof I_1["software"]["appMetaData"], string | number>]: never; }) | undefined;
        } & { [K_21 in Exclude<keyof I_1["software"], keyof AndroidDevice_DeviceSoftware>]: never; }) | undefined;
        screen?: ({
            density?: number | undefined;
            resolutionHorizontal?: number | undefined;
            resolutionVertical?: number | undefined;
        } & {
            density?: number | undefined;
            resolutionHorizontal?: number | undefined;
            resolutionVertical?: number | undefined;
        } & { [K_22 in Exclude<keyof I_1["screen"], keyof ScreenData>]: never; }) | undefined;
        cpu?: ({
            arch?: CPUData_Architecture | undefined;
            archName?: string | undefined;
            model?: string | undefined;
            brand?: string | undefined;
            board?: string | undefined;
            abiList?: string[] | undefined;
        } & {
            arch?: CPUData_Architecture | undefined;
            archName?: string | undefined;
            model?: string | undefined;
            brand?: string | undefined;
            board?: string | undefined;
            abiList?: (string[] & string[] & { [K_23 in Exclude<keyof I_1["cpu"]["abiList"], keyof string[]>]: never; }) | undefined;
        } & { [K_24 in Exclude<keyof I_1["cpu"], keyof CPUData>]: never; }) | undefined;
        locale?: ({
            language?: string | undefined;
            countryISO?: string | undefined;
        } & {
            language?: string | undefined;
            countryISO?: string | undefined;
        } & { [K_25 in Exclude<keyof I_1["locale"], keyof Locale>]: never; }) | undefined;
        location?: ({
            longitude?: number | undefined;
            latitude?: number | undefined;
            altitude?: number | undefined;
            provider?: GPSLocation_LocationProvider | undefined;
        } & {
            longitude?: number | undefined;
            latitude?: number | undefined;
            altitude?: number | undefined;
            provider?: GPSLocation_LocationProvider | undefined;
        } & { [K_26 in Exclude<keyof I_1["location"], keyof GPSLocation>]: never; }) | undefined;
        timezone?: ({
            name?: string | undefined;
        } & {
            name?: string | undefined;
        } & { [K_27 in Exclude<keyof I_1["timezone"], "name">]: never; }) | undefined;
        macAddress?: ({
            OUI?: string | undefined;
            address?: string | undefined;
        } & {
            OUI?: string | undefined;
            address?: string | undefined;
        } & { [K_28 in Exclude<keyof I_1["macAddress"], keyof MAC>]: never; }) | undefined;
        simSlots?: ({
            phoneNumber?: string | undefined;
            MCC?: string | undefined;
            MNC?: string | undefined;
            carrier?: string | undefined;
            countryISO?: string | undefined;
            countryCode?: string | undefined;
            imei?: {
                TAC?: string | undefined;
                imei?: string | undefined;
            } | undefined;
            meid?: {
                RegionCode?: string | undefined;
                ManufacturerCode?: string | undefined;
                meid?: string | undefined;
            } | undefined;
        }[] & ({
            phoneNumber?: string | undefined;
            MCC?: string | undefined;
            MNC?: string | undefined;
            carrier?: string | undefined;
            countryISO?: string | undefined;
            countryCode?: string | undefined;
            imei?: {
                TAC?: string | undefined;
                imei?: string | undefined;
            } | undefined;
            meid?: {
                RegionCode?: string | undefined;
                ManufacturerCode?: string | undefined;
                meid?: string | undefined;
            } | undefined;
        } & {
            phoneNumber?: string | undefined;
            MCC?: string | undefined;
            MNC?: string | undefined;
            carrier?: string | undefined;
            countryISO?: string | undefined;
            countryCode?: string | undefined;
            imei?: ({
                TAC?: string | undefined;
                imei?: string | undefined;
            } & {
                TAC?: string | undefined;
                imei?: string | undefined;
            } & { [K_29 in Exclude<keyof I_1["simSlots"][number]["imei"], keyof SIMCard_IMEI>]: never; }) | undefined;
            meid?: ({
                RegionCode?: string | undefined;
                ManufacturerCode?: string | undefined;
                meid?: string | undefined;
            } & {
                RegionCode?: string | undefined;
                ManufacturerCode?: string | undefined;
                meid?: string | undefined;
            } & { [K_30 in Exclude<keyof I_1["simSlots"][number]["meid"], keyof SIMCard_MEID>]: never; }) | undefined;
        } & { [K_31 in Exclude<keyof I_1["simSlots"][number], keyof SIMCard>]: never; })[] & { [K_32 in Exclude<keyof I_1["simSlots"], keyof {
            phoneNumber?: string | undefined;
            MCC?: string | undefined;
            MNC?: string | undefined;
            carrier?: string | undefined;
            countryISO?: string | undefined;
            countryCode?: string | undefined;
            imei?: {
                TAC?: string | undefined;
                imei?: string | undefined;
            } | undefined;
            meid?: {
                RegionCode?: string | undefined;
                ManufacturerCode?: string | undefined;
                meid?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_33 in Exclude<keyof I_1, keyof AndroidDevice>]: never; }>(object: I_1): AndroidDevice;
};
export declare const AndroidDevice_ID: {
    encode(message: AndroidDevice_ID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AndroidDevice_ID;
    fromJSON(object: any): AndroidDevice_ID;
    toJSON(message: AndroidDevice_ID): unknown;
    create<I extends {
        id?: number | undefined;
    } & {
        id?: number | undefined;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I | undefined): AndroidDevice_ID;
    fromPartial<I_1 extends {
        id?: number | undefined;
    } & {
        id?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): AndroidDevice_ID;
};
export declare const AndroidDevice_BuildData: {
    encode(message: AndroidDevice_BuildData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AndroidDevice_BuildData;
    fromJSON(object: any): AndroidDevice_BuildData;
    toJSON(message: AndroidDevice_BuildData): unknown;
    create<I extends {
        board?: string | undefined;
        bootloader?: string | undefined;
        brand?: string | undefined;
        device?: string | undefined;
        display?: string | undefined;
        fingerprint?: string | undefined;
        hardware?: string | undefined;
        id?: string | undefined;
        manufacturer?: string | undefined;
        model?: string | undefined;
        odmSku?: string | undefined;
        product?: string | undefined;
        sku?: string | undefined;
        socManufacturer?: string | undefined;
        socModel?: string | undefined;
        tags?: string | undefined;
        type?: string | undefined;
        incrementalVersion?: string | undefined;
    } & {
        board?: string | undefined;
        bootloader?: string | undefined;
        brand?: string | undefined;
        device?: string | undefined;
        display?: string | undefined;
        fingerprint?: string | undefined;
        hardware?: string | undefined;
        id?: string | undefined;
        manufacturer?: string | undefined;
        model?: string | undefined;
        odmSku?: string | undefined;
        product?: string | undefined;
        sku?: string | undefined;
        socManufacturer?: string | undefined;
        socModel?: string | undefined;
        tags?: string | undefined;
        type?: string | undefined;
        incrementalVersion?: string | undefined;
    } & { [K in Exclude<keyof I, keyof AndroidDevice_BuildData>]: never; }>(base?: I | undefined): AndroidDevice_BuildData;
    fromPartial<I_1 extends {
        board?: string | undefined;
        bootloader?: string | undefined;
        brand?: string | undefined;
        device?: string | undefined;
        display?: string | undefined;
        fingerprint?: string | undefined;
        hardware?: string | undefined;
        id?: string | undefined;
        manufacturer?: string | undefined;
        model?: string | undefined;
        odmSku?: string | undefined;
        product?: string | undefined;
        sku?: string | undefined;
        socManufacturer?: string | undefined;
        socModel?: string | undefined;
        tags?: string | undefined;
        type?: string | undefined;
        incrementalVersion?: string | undefined;
    } & {
        board?: string | undefined;
        bootloader?: string | undefined;
        brand?: string | undefined;
        device?: string | undefined;
        display?: string | undefined;
        fingerprint?: string | undefined;
        hardware?: string | undefined;
        id?: string | undefined;
        manufacturer?: string | undefined;
        model?: string | undefined;
        odmSku?: string | undefined;
        product?: string | undefined;
        sku?: string | undefined;
        socManufacturer?: string | undefined;
        socModel?: string | undefined;
        tags?: string | undefined;
        type?: string | undefined;
        incrementalVersion?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof AndroidDevice_BuildData>]: never; }>(object: I_1): AndroidDevice_BuildData;
};
export declare const AndroidDevice_DeviceSoftware: {
    encode(message: AndroidDevice_DeviceSoftware, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AndroidDevice_DeviceSoftware;
    fromJSON(object: any): AndroidDevice_DeviceSoftware;
    toJSON(message: AndroidDevice_DeviceSoftware): unknown;
    create<I extends {
        softwareMetaData?: {
            [x: string]: string | undefined;
        } | undefined;
        appMetaData?: {
            [x: string]: string | undefined;
        } | undefined;
    } & {
        softwareMetaData?: ({
            [x: string]: string | undefined;
        } & {
            [x: string]: string | undefined;
        } & { [K in Exclude<keyof I["softwareMetaData"], string | number>]: never; }) | undefined;
        appMetaData?: ({
            [x: string]: string | undefined;
        } & {
            [x: string]: string | undefined;
        } & { [K_1 in Exclude<keyof I["appMetaData"], string | number>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof AndroidDevice_DeviceSoftware>]: never; }>(base?: I | undefined): AndroidDevice_DeviceSoftware;
    fromPartial<I_1 extends {
        softwareMetaData?: {
            [x: string]: string | undefined;
        } | undefined;
        appMetaData?: {
            [x: string]: string | undefined;
        } | undefined;
    } & {
        softwareMetaData?: ({
            [x: string]: string | undefined;
        } & {
            [x: string]: string | undefined;
        } & { [K_3 in Exclude<keyof I_1["softwareMetaData"], string | number>]: never; }) | undefined;
        appMetaData?: ({
            [x: string]: string | undefined;
        } & {
            [x: string]: string | undefined;
        } & { [K_4 in Exclude<keyof I_1["appMetaData"], string | number>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof AndroidDevice_DeviceSoftware>]: never; }>(object: I_1): AndroidDevice_DeviceSoftware;
};
export declare const AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry: {
    encode(message: AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry;
    fromJSON(object: any): AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry;
    toJSON(message: AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry): unknown;
    create<I extends {
        key?: string | undefined;
        value?: string | undefined;
    } & {
        key?: string | undefined;
        value?: string | undefined;
    } & { [K in Exclude<keyof I, keyof AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry>]: never; }>(base?: I | undefined): AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry;
    fromPartial<I_1 extends {
        key?: string | undefined;
        value?: string | undefined;
    } & {
        key?: string | undefined;
        value?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry>]: never; }>(object: I_1): AndroidDevice_DeviceSoftware_SoftwareMetaDataEntry;
};
export declare const AndroidDevice_DeviceSoftware_AppMetaDataEntry: {
    encode(message: AndroidDevice_DeviceSoftware_AppMetaDataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AndroidDevice_DeviceSoftware_AppMetaDataEntry;
    fromJSON(object: any): AndroidDevice_DeviceSoftware_AppMetaDataEntry;
    toJSON(message: AndroidDevice_DeviceSoftware_AppMetaDataEntry): unknown;
    create<I extends {
        key?: string | undefined;
        value?: string | undefined;
    } & {
        key?: string | undefined;
        value?: string | undefined;
    } & { [K in Exclude<keyof I, keyof AndroidDevice_DeviceSoftware_AppMetaDataEntry>]: never; }>(base?: I | undefined): AndroidDevice_DeviceSoftware_AppMetaDataEntry;
    fromPartial<I_1 extends {
        key?: string | undefined;
        value?: string | undefined;
    } & {
        key?: string | undefined;
        value?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof AndroidDevice_DeviceSoftware_AppMetaDataEntry>]: never; }>(object: I_1): AndroidDevice_DeviceSoftware_AppMetaDataEntry;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
