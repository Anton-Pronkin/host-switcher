import React, { useState } from "react";
import HostList from "../HostList";
import FooterArea from "../FooterArea";
import { useConstructor } from "../../utils/Hooks";
import { Storage } from "../../utils/GlobalContext";
import "@fontsource/titillium-web";
import style from "./index.css";

export default function Popup() {
    useConstructor(async () => await updateHosts());

    const [hosts, setHosts] = useState([]);
    
    return (
        <div className={style.popup}>
            <HostList hosts={hosts} onHostChanged={updateHosts} />
            <FooterArea onHostChanged={updateHosts} />
        </div>
    );

    async function updateHosts() {
        const hosts = await Storage.getHosts();
        setHosts(hosts);
    }
}
