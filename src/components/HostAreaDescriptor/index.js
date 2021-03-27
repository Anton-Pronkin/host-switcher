import React from "react";
import { HandlerManager } from "../../utils/GlobalContext";
import style from "./index.css";

export default function HostAreaDescriptor({ host, onEditClick, onDeleteClick }) {
    return (
        <div className={style.hostAreaDescriptor}>
            <div className={style.hostAreaDescriptor_host} onClick={switchHost}>
                <div className={style.hostAreaDescriptor_name}>{host.name}</div>
                <div className={style.hostAreaDescriptor_value}>{host.value}</div>
            </div>
            <div onClick={onEditClick} className={`${style.hostAreaDescriptor_button} ${style.hostAreaDescriptor_button__edit}`}></div>
            <div onClick={onDeleteClick} className={`${style.hostAreaDescriptor_button} ${style.hostAreaDescriptor_button__delete}`}></div>
        </div>
    );

    async function switchHost() {
        await HandlerManager.switchHost(host);
    }
}
