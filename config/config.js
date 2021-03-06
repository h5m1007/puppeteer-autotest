const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
class Config {
    // 设置默认浏览器及使用的标签页面.
    static async getDefault() {
        const browser = await puppeteer.launch({
            // 指定chromium路径 若是自己下载的需要指定下载路径.
            // executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium',
            timeout: 15000, //最大超时间为15秒.
            ignoreHTTPSErrors: true,
            devtools: true,
            // true不会打开浏览器.
            headless: true
        });

        const page = await browser.newPage();


        // 设置测试机型.
        const testDevice = devices['iPhone 6'];

        await page.emulate(testDevice).then(() => {

        }, () => {
            console.log('为啥设置测试机型失败了!!!');
        });

        return {
            browser,
            page
        }
    }
};

module.exports = Config;