import BaseStorage from "./BaseStorage";

export default class PageStorage extends BaseStorage {
    async load(key, defaultValue) {
        try {
            const jsonValue = window.localStorage.getItem(key);
            if (!jsonValue) {
                return defaultValue;
            }

            return JSON.parse(jsonValue);
        }
        catch {
            return defaultValue;
        }
    }

    async save(key, value) {
        var jsonValue = JSON.stringify(value);
        window.localStorage.setItem(key, jsonValue);
    }
}
