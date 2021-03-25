import React from "react";
import ReactDOM from "react-dom";
import Store from "./utils/Store"
import Popup from "./components/Popup";

const hosts = Store.getHosts();
ReactDOM.render(<Popup hosts={hosts} />, document.querySelector("#root"));
