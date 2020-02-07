
import React from "react";
import ReactDOM from "react-dom";

import {App} from "./components/app.jsx";

const placesCount = 132;

ReactDOM.render(
    <App places={placesCount} />,
    document.getElementById(`root`)
);
