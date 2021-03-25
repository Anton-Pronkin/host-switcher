import ChromeManager from "./ChromeManager";
import Url from "url-parse";

export default class HandlerManager {
    static async switchHost(host) {
        const currentTab = await ChromeManager.getCurrentTab();

        let url = new Url(currentTab.url);
        url.set('host', host.value);

        return await ChromeManager.updateUrl(currentTab.id, url.href);
    }
}
