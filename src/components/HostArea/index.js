import React, { useState } from "react";
import HostAreaDescriptor from "../HostAreaDescriptor";
import EditHostArea from "../EditHostArea";

export default function HostArea({ host, onHostChanged }) {
    const [isEditing, setIsEditing] = useState(false);

    if (isEditing) {
        return <EditHostArea host={host} onHostChanged={endEditing} onCancel={() => setIsEditing(false)} />
    }

    return <HostAreaDescriptor host={host} onEditClick={beginEditing} />;

    function beginEditing() {
        setIsEditing(true);
    }

    function endEditing() {
        setIsEditing(false);
        onHostChanged?.();
    }
}
