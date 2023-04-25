import {Browser, Browser_TLSFingerprint_ProtocolVersion} from "../device_utils";
import {formatTLSFingerprint} from "../utils_browser";

test('Play with browser object', () => {
    const browser: Browser = {
        brandHeader: "\"Chromium\";v=\"112\", \"Brave\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
        name: "brave",
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
        },
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
        version: "1.50.114"
    };
    console.log(Browser.toJSON(browser));
    const browserBytes: Uint8Array = Browser.encode(browser).finish();
    console.log(Buffer.from(browserBytes).toString('base64')); // This can now be decoded in any other language!
    const expectedResult =  '771,4865-4866-4867-49195-49199-49196-49200-52393-52392-49171-49172-156-157-47-53,27-16-35-11-17513-43-13-5-23-0-18-51-10-65281-45-21,29-23-24,0';
    const fmtResult = formatTLSFingerprint(browser.tlsFingerprint, true);
    console.log(fmtResult);
    expect(fmtResult).toBe(expectedResult);
})