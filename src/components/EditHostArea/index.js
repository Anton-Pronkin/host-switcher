import React, { useState } from "react";
import { HandlerManager } from "../../utils/GlobalContext";
import style from "./index.css";

export default function EditHostArea({ host, onHostChanged, onCancel }) {
    const [name, setName] = useState(host ? host.name : "");
    const [value, setValue] = useState(host ? host.value : "");

    return (
        <div>
            <div>Name:</div><input type="text" onChange={changeName} defaultValue={name} />
            <div>Value:</div><input type="text" onChange={changeValue} defaultValue={value} />
            <button onClick={saveHost}>Save host</button>
            <button onClick={onCancel}>Cancel</button>
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
