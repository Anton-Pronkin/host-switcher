import React from "react";
import { HandlerManager } from "../../utils/GlobalContext";

export default function HostAreaDescriptor({ host, onEditClick }) {
    return (
        <div>
            <div>Name: {host.name}</div>
            <div>Value: {host.value}</div>
            <button onClick={switchHost}>Switch host</button>
            <button onClick={onEditClick}>Edit host</button>
        </div>
    );

    async function switchHost() {
        await HandlerManager.switchHost(host);
    }
}
