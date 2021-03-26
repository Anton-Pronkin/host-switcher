import BaseStorage from "./BaseStorage";

export default class MemoryStorage extends BaseStorage {
    storage = new Map();

    async load(key, defaultValue) {
        return this.storage.has(key) ? this.storage.get(key) : defaultValue;
    }

    async save(key, value) {
        this.storage.set(key, value);
    }
}
