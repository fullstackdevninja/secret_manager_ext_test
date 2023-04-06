import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const Popup = () => {
  return <App />;
};

createRoot(document.getElementById("react-target")).render(<Popup />);
