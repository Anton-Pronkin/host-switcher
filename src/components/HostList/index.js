import React from "react";
import HostArea from "../HostArea";

export default function HostList({ hosts, onHostChanged }) {
    return (
        <div>
            {hosts.map(host => <HostArea host={host} key={host.id} onHostChanged={onHostChanged}/>)}
        </div>
    );
}
