import React, { useState, useReducer } from "react";
import { Redirect, Router } from "@reach/router";

import { userState, UserReducer } from "./state/";
import CreateAccount from "./pages/create-account";
import Login from "./pages/login";
import Home from "./pages/home";

const App = () => {
  return (
    <Router>
      <Protected Component={Home} path="/home" default />
      <CreateAccount path="/create-account" />
      <Login path="/login" />
    </Router>
  );
};

const Protected = (props) => {
  const [state, dispatch] = useReducer(UserReducer, userState);

  const { Component, path } = props;

  return state.isLoggedIn ? (
    <Component path={path} />
  ) : (
    <Redirect to="/login" noThrow />
  );
};

export default App;
