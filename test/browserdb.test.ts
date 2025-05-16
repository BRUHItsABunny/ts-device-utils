import {Browser, desktopChrome, generateBrandHeader, getLatestChromium, randomBrowserVersionByName} from "../src";
import {randomBrowser} from "../src";
import {getBrowserHeaders} from "../src";

test('Play with browser object', () => {
    const browser: Browser = randomBrowser()
    console.log(Browser.toJSON(browser));
    console.log(typeof Browser.toJSON(browser));
    console.log(getBrowserHeaders(browser, undefined, "Android", true));
})



test('Get latest desktop Chromium', async () => {
    const browser = await desktopChrome();
    if (!browser) {
        return
    }
    console.log(browser.userAgent)
    console.log(browser.brandHeader)
})