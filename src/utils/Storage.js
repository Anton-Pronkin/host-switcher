import ChromeStorage from "../storages/ChromeStorage";
import MemoryStorage from "../storages/MemoryStorage";

// Available storages:
// - Chrome storage (using in the popup)
// - Memory storage (using in a separate page)

const Storage = chrome.storage ? new ChromeStorage() : new MemoryStorage();

export default Storage;