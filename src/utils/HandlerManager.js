import ChromeManager from "./ChromeManager";
import Url from "url-parse";
import Storage from "./Storage";

export default class HandlerManager {
    static async switchHost(host) {
        const currentTab = await ChromeManager.getCurrentTab();

        let url = new Url(currentTab.url);
        url.set('host', host.value);

        return await ChromeManager.createTab(url.href);
    }

    static async addHost({ name, value }) {
        return await Storage.addHost({name, value});
    }
}
