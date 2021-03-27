import React, { useState } from "react";
import NewHostAreaButton from "../NewHostAreaButton";
import EditHostArea from "../EditHostArea";

export default function NewHostArea({ onHostChanged }) {
    const [isEditing, setIsEditing] = useState(false);

    if (isEditing) {
        return <EditHostArea onHostChanged={changeHost} onCancel={endEditing}/>;
    }

    return <NewHostAreaButton onClick={beginEditing} />;

    function changeHost() {
        endEditing();
        onHostChanged?.();
    }

    function beginEditing() {
        setIsEditing(true);
    }

    function endEditing() {
        setIsEditing(false);
    }
}
