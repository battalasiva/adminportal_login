import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./screens/Routes";

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
