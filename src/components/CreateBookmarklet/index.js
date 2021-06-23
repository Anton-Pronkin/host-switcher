import React, { useState } from "react";
import { HandlerManager } from "../../utils/GlobalContext";
import { ifEnter, ifEscape, setLeftAsTab, setRightAsTab } from "../../utils/EventHelper";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";
import style from "./index.css";

export default function createBookmarklet({ onBookmarkletCreated, onCancel }) {
    const [title, setTitle] = useState("");
    const [host, setHost] = useState("");
    const [message, setMessage] = useState({});

    return (
        <div className={style.createBookmarklet} onKeyDown={ifEscape(onCancel)}>
            <ErrorMessage message={message} />
            <div className={style.createBookmarklet_fieldset}>
                <label htmlFor="title">Title:</label>
                <input type="text" 
                       id="title" 
                       className={style.createBookmarklet_input} 
                       maxLength={128} 
                       autoFocus
                       onChange={changeTitle} 
                       onKeyDown={ifEnter(createBookmarklet)}/>

                <label htmlFor="host">Target host:</label>
                <input type="text" 
                       id="host" 
                       className={style.createBookmarklet_input} 
                       defaultValue={host} 
                       maxLength={1024} 
                       onChange={changeHost}
                       onKeyDown={ifEnter(createBookmarklet)} />
            </div>
            <div className={style.createBookmarklet_buttonsArea}>
                <Button onClick={createBookmarklet} onKeyDown={setRightAsTab}>Create bookmarklet</Button>
                <Button onClick={onCancel} onKeyDown={setLeftAsTab}>Cancel</Button>
            </div>
        </div>
    );

    function changeTitle(event) {
        setTitle(event.target.value);
        clearMessage();
    }

    function changeHost(event) {
        setHost(event.target.value);
        clearMessage();
    }

    async function createBookmarklet() {
        if (!validate()) {
            return;
        }

        await HandlerManager.createBookmarklet({ title, host });
        onBookmarkletCreated?.();
    }

    function validate() {
        if (!title.length) {
            updateMessage("Please, enter a non-empty bookmarklet title.");
            return false;
        }

        if (!host.length) {
            updateMessage("Please, enter a non-empty target host.");
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
