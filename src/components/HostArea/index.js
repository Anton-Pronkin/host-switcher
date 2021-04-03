import React, { useState, useRef } from "react";
import { HandlerManager } from "../../utils/GlobalContext";
import HostAreaDescriptor from "../HostAreaDescriptor";
import EditHostArea from "../EditHostArea";
import DeleteHostArea from "../DeleteHostArea";
import style from "./index.css";
import { focusFirst, focusNext, focusPrev } from "../../utils/EventHelper";

export default function HostArea({ host, onHostChanged }) {
    const modes = {
        normal: 0,
        editing: 1,
        deleting: 2
    }

    const [mode, setMode] = useState(modes.normal);
    const ref = useRef();

    return (
        <div className={style.hostArea} tabIndex={0} onKeyDown={downKey} ref={ref}>
            {renderContent()}
        </div>
    );

    function renderContent() {
        switch (mode) {
            case modes.normal:
                return <HostAreaDescriptor host={host} onEditClick={beginEditing} onDeleteClick={beginDeleting} onSwitch={swtchHost} />;

            case modes.editing:
                return <EditHostArea host={host} onHostChanged={endEditing} onCancel={resetMode} />;

            case modes.deleting:
                return <DeleteHostArea host={host} onDelete={onHostChanged} onCancel={resetMode} />;
        }
    }

    function resetMode() {
        setMode(modes.normal);
        ref.current?.focus();
    }

    function beginEditing() {
        setMode(modes.editing);
    }

    function endEditing() {
        resetMode();
        onHostChanged?.();
    }

    function beginDeleting() {
        setMode(modes.deleting);
    }

    async function swtchHost() {
        await HandlerManager.switchHost(host);
    }

    async function downKey(event) {
        if (mode != modes.normal) {
            return;
        }

        const handlers = {
            "Enter": async () => await swtchHost(),
            "Delete": async () => beginDeleting(),
            " ": async () => beginEditing(),
            "ArrowDown": async () => focusNext(event.target),
            "ArrowUp": async () => focusPrev(event.target),
        };

        const handler = handlers[event.key];
        if (handler) {
            event.preventDefault();
            await handler();
        }
    }
}
