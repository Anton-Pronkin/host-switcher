import ChromeManager from "../ChromeManager";
import BaseStorage from "./BaseStorage";

export default class ChromeStorage extends BaseStorage {
    async load(key, defaultValue) {
        const values = await ChromeManager.loadFromStorage(key, defaultValue);
        return values[key];
    }

    async save(key, value) {
        await ChromeManager.saveToStorage(key, value);
    }
}
