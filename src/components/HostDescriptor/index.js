import React from "react";

export default function HostList({ host, onSwitch }) {
    return (
        <div>
            <div>Name: {host.name}</div>
            <div>Value: {host.value}</div>
            <button onClick={() => onSwitch(host)}>Update host</button>
        </div>
    );
}
