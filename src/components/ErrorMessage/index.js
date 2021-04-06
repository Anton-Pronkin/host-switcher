import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import style from "./index.css";

export default function ErrorMessage(props) {
    const messageRef = useRef(null);
    if (props.message.text) {
        setTimeout(() => messageRef.current.className = style.errorMessage, 200);
    }

    const classes = classNames(style.errorMessage, props.message.text ? style.errorMessage_animation : style.errorMessage_hidden);
    useEffect(() => messageRef.current.className = classes);
    
    return (
        <div ref={messageRef}>{props.message.text}</div>
    );
}
