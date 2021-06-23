export function ifEnter(callBack) {
    return ifKey(event => event.key === "Enter", callBack);
}

export function ifEscape(callBack) {
    return ifKey(event => event.key === "Escape", event => {
        event.preventDefault();
        callBack?.();
    });
}

function ifKey(condition, callBack) {
    const result = event => {
        invokeCallback(event, condition, callBack, null);
    };

    result.else = elseCallBack => event => {
        invokeCallback(event, condition, callBack, elseCallBack);
    };

    return result;
}

function invokeCallback(event, condition, callBack, elseCallBack) {
    if (condition(event)) {
        callBack?.(event);
    }
    else {
        elseCallBack?.(event);
    }
}

export function setLeftAsTab(event) {
    setKeyAsTab(event, "ArrowLeft", focusPrev);
}

export function setRightAsTab(event) {
    setKeyAsTab(event, "ArrowRight", focusNext);
}

export function setUpAsTab(event) {
    setKeyAsTab(event, "ArrowUp", focusPrev);
}

export function setDownAsTab(event) {
    setKeyAsTab(event, "ArrowDown", focusNext);
}

function setKeyAsTab(event, key, focusHandler) {
    if (event.key === key) {
        focusHandler(event.target);
    }
}

export function focusNext(element) {
    const elements = getTabbableElements();
    for (let i = 0; i < elements.length - 1; i++) {
        if (elements[i] == element) {
            elements[i + 1].focus();
        }
    }
}

export function focusPrev(element) {
    const elements = getTabbableElements();
    for (let i = 1; i < elements.length; i++) {
        if (elements[i] == element) {
            elements[i - 1].focus();
        }
    }
}

function getTabbableElements() {
    return document.querySelectorAll("[tabindex]");
}
