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
}
