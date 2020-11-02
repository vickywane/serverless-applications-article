import React, { useState , useReducer } from "react";
import { Link } from "@reach/router";
import "../styles/components.css";
import {
  UserReducer,
  userState,
} from "../state/";
import { FiLogOut } from "react-icons/fi";

const center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Header = (props) => {
  const [state, dispatch] = useReducer(UserReducer, userState);

  return (
    <nav className="header-body">
      <ul
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <li>
          <Link to="/">
            <h3> Imagery </h3>
          </Link>
        </li>

        <div style={{ display: "flex" }}>
       
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <li>
              <button
                onClick={() => {
                  dispatch({
                    type: "LOGOUT",
                  });
                }}
                style={{ ...center }}
              >
                <span style={{ margin: "0 .5rem" }}>
                  <FiLogOut style={{ fontSize: "1.2rem" }} />
                </span>

                <p style={{ paddingBottom: "3px" }}>Logout</p>
              </button>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
