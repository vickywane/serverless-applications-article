import React from "react";
import { Router } from "@reach/router";

import CreateAccount from "./pages/create-account";
import Home from "./pages/home";

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <CreateAccount path="/create-account" />
    </Router>
  );
};

export default App;
