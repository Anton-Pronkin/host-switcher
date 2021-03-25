import React from "react";
import HandlerManager from "../../utils/HandlerManager";

export default function HostList({ host }) {
    return (
        <div>
            <div>Name: {host.name}</div>
            <div>Value: {host.value}</div>
            <button onClick={async () => await HandlerManager.switchHost(host)}>Update host</button>
        </div>
    );
}
