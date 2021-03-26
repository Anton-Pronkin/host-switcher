import React, { useState } from "react";
import HandlerManager from "../../utils/HandlerManager";

export default function NewHostAreaPanel({ onHostAdded }) {
    const [name, setName] = useState("");
    const [value, setValue] = useState("");

    return (
        <div>
            <div>Name:</div><input type="text" onChange={changeName} />
            <div>Value:</div><input type="text" onChange={changeValue} />
            <button onClick={addHostClick}>Add host</button>
        </div>
    );

    function changeName(event) {
        setName(event.target.value);
    }

    function changeValue(event) {
        setValue(event.target.value);
    }

    async function addHostClick() {
        await HandlerManager.addHost({ name, value });
        onHostAdded?.();
    }
}
