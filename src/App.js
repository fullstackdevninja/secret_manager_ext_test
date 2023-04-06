import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/popup.html" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
