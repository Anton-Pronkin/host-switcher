import BaseHandlerManager from "./BaseHandlerManager";
import ChromeManager from "../ChromeManager";

export default class ChromeHandlerManager extends BaseHandlerManager {
    constructor(props) {
        super(props);
    }

    async getCurrentUrl() {
        return await ChromeManager.getCurrentTab();
    }

    async doSwitchHost(newUrl) {
        return await ChromeManager.createTab(newUrl);
    }
}
