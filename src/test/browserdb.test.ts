import {Browser} from "../device_utils";
import {randomBrowser} from "../database_browser";
import {getBrowserHeaders} from "../utils_browser";

test('Play with browser object', () => {
    const browser: Browser = randomBrowser()
    console.log(Browser.toJSON(browser));
    console.log(getBrowserHeaders(browser, undefined, "Android", true));
})