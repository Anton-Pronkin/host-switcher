import React from "react";
import HostDescriptor from "../HostDescriptor";

export default function HostList({ hosts }) {
    return (
        <div>
            {hosts.map(host => <HostDescriptor host={host} key={host.id} />)}
        </div>
    );
}
