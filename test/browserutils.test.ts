import {
    generateBrandHeader,
    getLatestChromium,
    randomBrowserVersionByName
} from "../src";

test('Get latest Chromium', async () => {
    const browser = randomBrowserVersionByName("chrome");
    if (!browser) {
        return
    }

    const latestChrome = await getLatestChromium(0);
    browser.userAgent = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${latestChrome.getUAVersion()} Safari/537.36`
    browser.brandHeader = generateBrandHeader("Google Chrome", latestChrome.getMajorVersion())

    console.log(browser.userAgent)
    console.log(browser.brandHeader)
})