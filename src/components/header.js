import React,  { useReducer } from "react";
import { Link } from "@reach/router";
import "../styles/components.css";
import { UserReducer , userState } from '../state/'


const Header = (props) => {

  const [ state , dispatch ] = useReducer(UserReducer , userState)

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
          <Link to="/" >
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
                  dispatch({
                    type: "LOGOUT",
                  });
                }}
              >
                Create Collection
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
                >
                  Logout 
                </button>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
