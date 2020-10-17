import React from "react";
import { Router } from "@reach/router";

import CreateAccount from "./pages/create-account";
import Login from "./pages/login";
import Home from "./pages/home";

const App = () => {
  return (
    <Router>
      <Home path="/home" />
      <CreateAccount path="/create-account" />
      <Login path="/login" />
    </Router>
  );
};

export default App;
