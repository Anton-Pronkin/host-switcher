import React from "react";
import ReactDOM from "react-dom";
import Popup from "./components/Popup";

const data = {};
function switchHost(host) {};

ReactDOM.render(<Popup data={data} onSwitch={switchHost} />, document.querySelector("#root"));
