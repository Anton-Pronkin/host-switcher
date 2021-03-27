import ChromeGlobalContext from "./contexts/ChromeGlobalContext";
import PageGlobalContext from "./contexts/PageGlobalContext";

export let Storage;
export let HandlerManager;

export function initializeGlobalContext() {
    const globalState = chrome.extension ? new ChromeGlobalContext() : new PageGlobalContext();

    Storage = globalState.getStorage();
    HandlerManager = globalState.getHandlerManager();
}
