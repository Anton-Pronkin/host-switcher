import React, { useState } from "react";
import HostList from "../HostList";
import NewHostArea from "../NewHostArea";
import { useConstructor } from "../../utils/Hooks";
import { Storage } from "../../utils/GlobalContext";

export default function Popup() {
    useConstructor(async () => await updateHosts());

    const [hosts, setHosts] = useState([]);
    
    return (
        <div>
            <HostList hosts={hosts} />
            <NewHostArea onHostChanged={updateHosts} />
        </div>
    );

    async function updateHosts() {
        const hosts = await Storage.getHosts();
        setHosts(hosts);
    }
}
