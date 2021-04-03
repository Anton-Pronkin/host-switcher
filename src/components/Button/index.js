import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import { ifEnter } from "../../utils/EventHelper";
import style from "./index.css";

export default function Button(props) {
    const ref = useRef();
    if (props.autoFocus) {
        useEffect(() => ref.current?.focus());
    }

    const className = classNames(style.button, props.className);
    return (
        <div onClick={props.onClick} 
             onKeyDown={ifEnter(props.onClick).else(props.onKeyDown)} 
             className={className} 
             tabIndex={0}
             ref={ref}>{props.children}</div>
    );
}
