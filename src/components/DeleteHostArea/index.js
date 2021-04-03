import React from "react";
import { ifEscape, setLeftAsTab, setRightAsTab } from "../../utils/EventHelper";
import { HandlerManager } from "../../utils/GlobalContext";
import Button from "../Button";
import style from "./index.css";

export default function DeleteHostArea({ host, onDelete, onCancel }) {
    return (
        <div className={style.deleteHostArea} onKeyDown={ifEscape(onCancel)}>
            <div className={style.deleteHostArea_title}>Do you want to delete host "{host.name}" (URL: {host.value})?</div>
            <div className={style.deleteHostArea_buttonsArea}>
                <Button onClick={deleteHost} className={style.deleteHostArea_button} autoFocus onKeyDown={setRightAsTab}>Delete</Button>
                <Button onClick={onCancel} className={style.deleteHostArea_button} onKeyDown={setLeftAsTab}>Cancel</Button>
            </div>
        </div>
    );

    async function deleteHost() {
        await HandlerManager.deleteHost(host.id);
        onDelete?.();
    }
}
