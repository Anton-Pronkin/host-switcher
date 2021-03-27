import ChromeStorage from "./storages/ChromeStorage";
import PageStorage from "./storages/PageStorage";

// Available storages:
// - Chrome storage (using in the popup)
// - Page storage (using in a separate page)

// Set chrome storage if we have access (open page in the popup)
// Else set page storage to be able to use data on a separate page.
export default Storage = chrome.storage ? new ChromeStorage() : new PageStorage();
