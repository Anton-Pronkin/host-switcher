import Url from "url-parse";

export default class BaseHandlerManager {
    constructor({ storage }) {
        this.storage = storage;
    }

    async switchHost(host) {
        let switchingUrl = new Url(host.value, host.value);
        let currentUrl = await this.getCurrentUrl();

        let targetUrl = new Url(currentUrl);
        if (switchingUrl.protocol) {
            targetUrl.set('host', switchingUrl.host);
            targetUrl.set('protocol', switchingUrl.protocol);
        }
        else {
            targetUrl.set('host', host.value);
        }

        return await this.doSwitchHost(targetUrl.toString());
    }

    async createBookmarklet({ title, host }) {
        const url = this.getBookmarkletUrl(host);
        this.createBookmark({ title, url });
    }

    getBookmarkletUrl(host) {
        if (host.indexOf("://") > -1) {
            return `javascript:void(window.open("${host}"+location.pathname+location.search));`;
        }

        return`javascript:void(window.open(location.protocol+"//${host}"+location.pathname+location.search));`;
    }

    async addHost({ name, value }) {
        return await this.storage.addHost({ name, value });
    }

    async updateHost(host) {
        return await this.storage.updateHost(host);
    }

    async deleteHost(hostId) {
        return await this.storage.deleteHost(hostId);
    }

    async getCurrentUrl() {
        throw new Error("The getCurrentUrl must be implemented in a specific handler manager.");
    }

    async doSwitchHost(newUrl) {
        throw new Error("The getCurrentUrl must be implemented in a specific handler manager.");
    }

    async createBookmark({ name, url }) {
        throw new Error("The createBookmark must be implemented in a specific handler manager.");
    }
}
