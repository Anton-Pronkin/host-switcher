import React from "react";
import style from "./index.css";

export default function NewHostAreaButton({onClick}) {
    return (
        <div className={style.newHostAreaButton}>
            <div onClick={onClick} className={style.newHostAreaButton_button}>Add new host</div>
        </div>
    );
}
