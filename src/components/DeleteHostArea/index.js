import React from "react";
import { HandlerManager } from "../../utils/GlobalContext";

export default function DeleteHostArea({ host, onDelete, onCancel }) {
    return (
        <div>
            <div>Do you want to delete host "{host.name}" (URL: {host.value})?</div>
            <button onClick={deleteHost}>Delete</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );

    async function deleteHost() {
        await HandlerManager.deleteHost(host.id);
        onDelete?.();
    }
}
