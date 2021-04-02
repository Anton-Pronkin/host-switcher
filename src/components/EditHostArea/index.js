import React, { useState } from "react";
import { HandlerManager } from "../../utils/GlobalContext";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";
import style from "./index.css";

export default function EditHostArea({ host, onHostChanged, onCancel }) {
    const [name, setName] = useState(host ? host.name : "");
    const [value, setValue] = useState(host ? host.value : "");
    const [message, setMessage] = useState({});

    return (
        <div className={style.editHostArea}>
            <ErrorMessage message={message} />
            <div className={style.editHostArea_fieldset}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" className={style.editHostArea_input} onChange={changeName} defaultValue={name} maxLength={128} />

                <label htmlFor="value">Value:</label>
                <input type="text" id="value" className={style.editHostArea_input} onChange={changeValue} defaultValue={value} maxLength={1024} />
            </div>
            <div className={style.editHostArea_buttonsArea}>
                <Button onClick={saveHost}>Save host</Button>
                <Button onClick={onCancel}>Cancel</Button>
            </div>
        </div>
    );

    function changeName(event) {
        setName(event.target.value);
        clearMessage();
    }

    function changeValue(event) {
        setValue(event.target.value);
        clearMessage();
    }

    async function saveHost() {
        if (!validate()) {
            return;
        }

        if (host) {
            await HandlerManager.updateHost({ id: host.id, name, value });
        }
        else {
            await HandlerManager.addHost({ name, value });
        }

        onHostChanged?.();
    }

    function validate() {
        if (!name.length) {
            updateMessage("Please, enter a non-empty name.");
            return false;
        }

        if (!value.length) {
            updateMessage("Please, enter a non-empty value.");
            return false;
        }

        return true;
    }

    function clearMessage() {
        return setMessage({});
    }

    function updateMessage(text) {
        return setMessage({ text });
    }
}
