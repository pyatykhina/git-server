describe("Settings form", () => {

    it("should render", async function() {
        const browser = this.browser;

        await browser.url("/settings");

        const form = await browser.$(".form");

        await form.waitForExist();
        await browser.assertView("plain", ".wrapper", {
            ignoreElements: [
                ".textfield__input"
            ]
        });
    })

}) 

// ./node_modules/.bin/hermione gui src/pages/Settings/Settings.hermione.js \ > --retry 2
