import React, { useState } from "react";
import style from "./index.css";

export default function HostAreaDescriptor({ host, onSwitch, onEditClick, onDeleteClick }) {
    const [isMousePressed, setIsMousePressed] = useState(false);

    const buttonClass = style.hostAreaDescriptor_button;

    return (
        <div className={style.hostAreaDescriptor} onMouseDown={downMouse} onMouseUp={upMouse} >
            <div className={style.hostAreaDescriptor_host}>
                <div className={style.hostAreaDescriptor_name}>{host.name}</div>
                <div className={style.hostAreaDescriptor_value}>{host.value}</div>
            </div>  
            <div onClick={onEditClick} className={`${buttonClass} ${style.hostAreaDescriptor_button__edit}`}></div>
            <div onClick={onDeleteClick} className={`${buttonClass} ${style.hostAreaDescriptor_button__delete}`}></div>
        </div>
    );

    function downMouse(event) {
        if (checkActiveArea(event.target)) {
            setIsMousePressed(true);
        }
    }

    async function upMouse(event) {
        if (isMousePressed) {
            setIsMousePressed(false);

            if (checkActiveArea(event.target)) {
                await onSwitch?.(host);
            }
        }
    }

    function checkActiveArea(element) {
        return !element.classList.contains(buttonClass);
    }
}
