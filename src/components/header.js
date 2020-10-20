import React, { useReducer } from "react";
import { Link } from "@reach/router";
import "../styles/components.css";
import {
  UserReducer,
  userState,
  ApplicationReducer,
  ApplicationState,
} from "../state/";
import { FiLogOut, FiPlus } from "react-icons/fi";

const center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Header = (props) => {
  const [state, dispatch] = useReducer(UserReducer, userState);
  const [appState, dispatchApp] = useReducer(
    ApplicationReducer,
    ApplicationState
  );

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
              margin: "0 1rem",
            }}
          >
            <li>
              <button
                onClick={() => {
                  dispatchApp({
                    type: "CREATE-COLLECTION",
                  });
                }}
                style={{ ...center }}
              >
                <span style={{ margin: "0 .5rem" }}>
                  <FiPlus style={{ fontSize: "1.2rem" }} />
                </span>
                <p style={{ paddingBottom: "3px" }}> Create Collection </p>
              </button>
            </li>
          </div>

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
