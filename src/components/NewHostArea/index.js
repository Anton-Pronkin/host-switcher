import React, { useState } from "react";
import HandlerManager from "../../utils/HandlerManager";

export default function NewHostArea({updateHosts}) {
    const [shown, setShown] = useState(false);
    const [name, setName] = useState("");
    const [value, setValue] = useState("");

    if (!shown) {
        return <button onClick={() => setShown(true)}>Add new host</button>
    }

    return (
        <div>
            <div>Name:</div><input type="text" onChange={changeName} />
            <div>Value:</div><input type="text" onChange={changeValue} />
            <button onClick={addHostClick}>Add new host</button>
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
        setShown(false);
        await updateHosts();
    }
}
