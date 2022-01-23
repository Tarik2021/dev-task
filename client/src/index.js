import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";

import "./index.css";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || "http://localhost:4400";

ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   document.getElementById("root")
);
