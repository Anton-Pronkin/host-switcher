import React from "react";
import HostList from "../HostList";

export default function Popup({ data, onSwitch }) {
    return (
        <div>
            <HostList hosts={data.hosts} onSwitch={onSwitch} />
        </div>
    );
}
