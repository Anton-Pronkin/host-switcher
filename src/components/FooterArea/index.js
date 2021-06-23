import React, { useState } from "react";
import Footer from "../Footer";
import EditHostArea from "../EditHostArea";
import CreateBookmarklet from "../CreateBookmarklet";
import style from "./index.css";

export default function FooterArea({ onHostChanged }) {
    const Mode = {
        normal: 0,
        host: 1,
        bookmarklet: 2
    };

    const [mode, setMode] = useState(Mode.normal);

    switch (mode) {
        case Mode.normal:
            return <Footer onCreateHost={createHost} onCreateBookmarklet={createBookmarklet} />;

        case Mode.host:
            return <EditHostArea onHostChanged={changeHost} onCancel={resetMode} />;
        
        case Mode.bookmarklet:
            return <CreateBookmarklet onBookmarkletCreated={resetMode} onCancel={resetMode} />
    }

    function createHost() {
        setMode(Mode.host);
    }

    function createBookmarklet() {
        setMode(Mode.bookmarklet);
    }

    function changeHost() {
        onHostChanged?.();
        resetMode();
    }

    function resetMode() {
        setMode(Mode.normal);
    }    
}
