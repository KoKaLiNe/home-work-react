import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import { events } from "./moсks";

ReactDOM.render(<App events={events}/>, document.querySelector('#root'))
