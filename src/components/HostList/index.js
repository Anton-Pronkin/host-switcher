import React from "react";
import HostArea from "../HostArea";
import style from "./index.css";

export default function HostList({ hosts, onHostChanged }) {
    return (
        <div className={style.hostList}>
            {hosts.map(host => <HostArea host={host} key={host.id} onHostChanged={onHostChanged}/>)}
        </div>
    );
}
