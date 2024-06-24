import {Browser} from "../src";
import {randomBrowser} from "../src";
import {getBrowserHeaders} from "../src";

test('Play with browser object', () => {
    const browser: Browser = randomBrowser()
    console.log(Browser.toJSON(browser));
    console.log(typeof Browser.toJSON(browser));
    console.log(getBrowserHeaders(browser, undefined, "Android", true));
})