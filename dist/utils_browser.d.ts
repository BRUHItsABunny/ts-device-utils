import { Browser, Browser_TLSFingerprint } from "./device_utils";
export declare function formatTLSFingerprint(fingerprint: Browser_TLSFingerprint | undefined, strict?: boolean): string;
export declare function getBrowserHeaders(browser: Browser, productOverride?: string, platform?: string, isMobile?: boolean): {
    [key: string]: string | string[];
};
export declare function setSecFetchHeaders(headers: {
    [key: string]: string | string[];
}, site?: string, mode?: string, dest?: string): {
    [key: string]: string | string[];
};
