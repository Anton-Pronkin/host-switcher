import React, { useState } from "react";
import { HandlerManager } from "../../utils/GlobalContext";
import Button from "../Button";
import style from "./index.css";

export default function EditHostArea({ host, onHostChanged, onCancel }) {
    const [name, setName] = useState(host ? host.name : "");
    const [value, setValue] = useState(host ? host.value : "");

    return (
        <div className={style.editHostArea}>
            <div className={style.editHostArea_fieldset}>
                <label for="name">Name:</label>
                <input type="text" id="name" className={style.editHostArea_input} onChange={changeName} defaultValue={name} />

                <label for="value">Value:</label>
                <input type="text" id="value" className={style.editHostArea_input} onChange={changeValue} defaultValue={value} />
            </div>
            <div className={style.editHostArea_buttonsArea}>
                <Button onClick={saveHost}>Save host</Button>
                <Button onClick={onCancel}>Cancel</Button>
            </div>
        </div>
    );

    function changeName(event) {
        setName(event.target.value);
    }

    function changeValue(event) {
        setValue(event.target.value);
    }

    async function saveHost() {
        if (host) {
            await HandlerManager.updateHost({ id: host.id, name, value });
        }
        else {
            await HandlerManager.addHost({ name, value });
        }

        onHostChanged?.();
    }
}
