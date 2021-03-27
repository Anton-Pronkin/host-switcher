import React, { useState } from "react";
import NewHostAreaButton from "../NewHostAreaButton";
import EditHostArea from "../EditHostArea";

export default function NewHostArea({ onHostChanged }) {
    const [shown, setShown] = useState(false);

    if (shown) {
        return <EditHostArea onHostChanged={changeHost} onCancel={() => setShown(false)}/>;
    }

    return <NewHostAreaButton onClick={() => setShown(true)} />;

    function changeHost() {
        setShown(false);
        onHostChanged?.();
    }
}
