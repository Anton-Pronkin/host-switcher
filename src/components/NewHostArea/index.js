import React, { useState } from "react";
import NewHostAreaButton from "../NewHostAreaButton";
import NewHostAreaPanel from "../NewHostAreaPanel";

export default function NewHostArea({ onHostChanged }) {
    const [shown, setShown] = useState(false);

    if (shown) {
        return <NewHostAreaPanel onHostAdded={onHostAdded} />;
    }

    return <NewHostAreaButton onClick={() => setShown(true)} />;

    function onHostAdded() {
        setShown(false);
        onHostChanged?.();
    }
}
