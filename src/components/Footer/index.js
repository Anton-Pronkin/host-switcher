import React from "react";
import { setLeftAsTab, setRightAsTab, setUpAsTab } from "../../utils/EventHelper";
import Button from "../Button";
import style from "./index.css";

export default function Footer({onCreateHost, onCreateBookmarklet}) {
    return (
        <div className={style.footer} >
            <Button onClick={onCreateBookmarklet} className={style.footer_button} onKeyDown={setTabForLeftButton}>Create a bookmarklet</Button>
            <Button onClick={onCreateHost} className={style.footer_button} onKeyDown={setLeftAsTab}>Add a new host</Button>
        </div>
    );

    function setTabForLeftButton(event) {
        setUpAsTab(event);
        setRightAsTab(event);
    }
}
