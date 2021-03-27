export default class BaseGlobalContext {
    storage = null;
    handlerManager = null;

    getStorage() {
        if (this.storage) {
            return this.storage;
        }

        this.storage = this.createStorage();
        return this.storage;
    }

    getHandlerManager() {
        if (this.handlerManager) {
            return this.handlerManager;
        }

        this.handlerManager = this.createHandlerManager(this.getStorage());
        return this.handlerManager;
    }

    createStorage() {
        throw new Error("The createNewStorage method must be implemented in a specific state factory");
    }

    createHandlerManager(storage) {
        throw new Error("The createHandlerManager method must be implemented in a specific state factory");
    }
}
