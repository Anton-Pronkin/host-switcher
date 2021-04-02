import React, { useEffect, useRef } from "react";
import style from "./index.css";

export default function ErrorMessage(props) {
    const messageRef = useRef(null);

    const classNames = getClassNames();
    processRef(classNames);

    return (
        <div className={classNames} ref={messageRef}>{props.message.text}</div>
    );
 
    function getClassNames() {
        if (props.message.text) {
            return `${style.errorMessage} ${style.errorMessage_animation}`;
        }

        return `${style.errorMessage} ${style.errorMessage_hidden}`;
    }

    function processRef(classNames) {
        if (props.message.text) {
            setTimeout(() => messageRef.current.className = style.errorMessage, 200);
        }

        if (messageRef.current) {
            messageRef.current.className = classNames;
        }
    }
}
