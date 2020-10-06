import React from "react";
import "../styles/components.css";

const Header = () => {
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
          <h3> Imagery </h3>
        </li>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <li>
            <button> Logout </button>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
