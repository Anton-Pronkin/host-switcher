import React from "react";
import { HandlerManager } from "../../utils/GlobalContext";
import style from "./index.css";

export default function DeleteHostArea({ host, onDelete, onCancel }) {
    return (
        <div className={style.deleteHostArea}>
            <div className={style.deleteHostArea_title}>Do you want to delete host "{host.name}" (URL: {host.value})?</div>
            <div className={style.deleteHostArea_buttonsArea}>
                <div onClick={deleteHost} className={style.deleteHostArea_button}>Delete</div>
                <div onClick={onCancel} className={style.deleteHostArea_button}>Cancel</div>
            </div>
        </div>
    );

    async function deleteHost() {
        await HandlerManager.deleteHost(host.id);
        onDelete?.();
    }
}
