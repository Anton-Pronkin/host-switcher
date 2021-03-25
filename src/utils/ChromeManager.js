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
    
    static async updateUrl(tabId, url) {
        return await chrome.tabs.update(tabId, { url });
    }
}
