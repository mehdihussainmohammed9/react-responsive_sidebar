import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
 

function App() {
  return (
    <Router>
      
      <Home />
    </Router>
  );
}

export default App;
