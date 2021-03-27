import React from "react";
import ReactDOM from "react-dom";
import Popup from "./components/Popup";
import { initializeGlobalContext } from "./utils/GlobalContext";

initializeGlobalContext();
ReactDOM.render(<Popup />, document.querySelector("#root"));
