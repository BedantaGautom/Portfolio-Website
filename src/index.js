import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { List } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <List>
    <App />
    </List>
  </React.StrictMode>,
  document.getElementById("root")
);
