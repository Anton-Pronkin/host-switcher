import BaseGlobalContext from "./BaseGlobalContext";
import ChromeStorage from "../storages/ChromeStorage";
import ChromeHandlerManager from "../handlerManagers/ChromeHandlerManager";

export default class ChromeGlobalContext extends BaseGlobalContext {
    createStorage() {
        return new ChromeStorage();
    }

    createHandlerManager(storage) {
        return new ChromeHandlerManager({ storage });
    }
}
