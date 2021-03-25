import React from "react";
import HostList from "../HostList";

export default function Popup({ hosts }) {
    return (
        <div>
            <HostList hosts={hosts} />
        </div>
    );
}
