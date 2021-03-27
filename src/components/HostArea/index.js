import React, { useState } from "react";
import HostAreaDescriptor from "../HostAreaDescriptor";
import EditHostArea from "../EditHostArea";
import DeleteHostArea from "../DeleteHostArea";

export default function HostArea({ host, onHostChanged }) {
    const modes = {
        normal: 0,
        editing: 1,
        deleting: 2
    }

    const [mode, setMode] = useState(modes.normal);

    switch (mode) {
        case modes.normal:
            return <HostAreaDescriptor host={host} onEditClick={beginEditing} onDeleteClick={beginDeleting}/>;

        case modes.editing:
            return <EditHostArea host={host} onHostChanged={endEditing} onCancel={resetMode} />;

        case modes.deleting:
            return <DeleteHostArea host={host} onDelete={onHostChanged} onCancel={resetMode} />
    }

    function resetMode() {
        setMode(modes.normal);
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
}
