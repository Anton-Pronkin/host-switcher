import BaseGlobalContext from "./BaseGlobalContext";
import PageStorage from "../storages/PageStorage";
import PageHandlerManager from "../handlerManagers/PageHandlerManager";

export default class PagelobalContext extends BaseGlobalContext {
    createStorage() {
        return new PageStorage();
    }

    createHandlerManager(storage) {
        return new PageHandlerManager({ storage });
    }
}
