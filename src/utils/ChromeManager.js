import "chrome-extension-async";

export default class ChromeManager {
    static async getCurrentTab() {
        const options = {
            currentWindow: true,
            active: true
        };

        const tabs = await chrome.tabs.query(options);
        return tabs[0];
    }

    static async createTab(url) {
        return await chrome.tabs.create({ url });
    }

    static async loadFromStorage(key, defaultValue) {
        return await chrome.storage.local.get({
            [key]: defaultValue
        });
    }

    static async saveToStorage(key, value) {
        return await chrome.storage.local.set({
            [key]: value
        });
    }
}
