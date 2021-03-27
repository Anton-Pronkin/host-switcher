import BaseHandlerManager from "./BaseHandlerManager";

export default class PageHandlerManager extends BaseHandlerManager {
    constructor(props) {
        super(props);
    }

    async getCurrentUrl() {
        return location.href;
    }

    async doSwitchHost(newUrl) {
        window.open(newUrl, '_blank');
    }
}
