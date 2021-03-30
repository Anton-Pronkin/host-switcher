import classNames from "classnames";
import React from "react";
import style from "./index.css";

export default function Button(props) {
    const className = classNames(style.button, props.className);

    return (
        <div onClick={props.onClick} className={className}>{props.children}</div>
    );
}
