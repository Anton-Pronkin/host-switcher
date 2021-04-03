import React from "react";
import { setUpAsTab } from "../../utils/EventHelper";
import Button from "../Button";
import style from "./index.css";

export default function NewHostAreaButton({onClick}) {
    return (
        <div className={style.newHostAreaButton} >
            <Button onClick={onClick} className={style.newHostAreaButton_element} onKeyDown={setUpAsTab}>Add new host</Button>
        </div>
    );
}
