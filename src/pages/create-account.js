import React from "react";
import { Link } from "@reach/router";

import "../styles/auth.css";

const center = {
  display: "flex",
  justifyContent: "center",
};

const CreateAaccount = () => {
  return (
    <div className="body" style={{ height: window.innerHeight }}>
      <div className="card">
        <h2> Create Account </h2>
        <hr style={{ backgroundColor: "white", width: "100%" }} />

        <br />
        <br />
        <div style={{ ...center }}>
          <div className="input-container">
            <label> Email Address </label>
            <input placeholder="Email Address" required={true} type="email" />
          </div>
        </div>

        <br />

        <div style={{ ...center }}>
          <div className="input-container">
            <label> Password </label>
            <input
              placeholder="Your trusted password"
              type="password"
              required={true}
            />
          </div>
        </div>

        <br />
        <br />
        <div style={{ ...center }}>
          <button>Create Account</button>
        </div>
        <br />
        <br />
        <hr style={{ backgroundColor: "white", width: "100%" }} />

        <div style={{ ...center }}>
          <div className="options">
            <p> Don't have an account </p>

            <Link to="/login">
              <p
                style={{
                  color: "#fff",
                  padding: 0,
                  margin: 0,
                  textAlign: "center",
                }}
              >
                Login Here{" "}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAaccount;
