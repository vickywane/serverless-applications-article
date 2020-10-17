import React, { useReducer, useEffect, useState } from "react";
import { IoMdEye } from "react-icons/io";

import Header from "../components/header";
import Footer from "../components/footer";
import { UserReducer, userState } from "../state/index";
import "../styles/home.css";

const Data = [
  {
    id: 1,
    name: "Kangaroo",
  },
  {
    id: 2,
    name: "Kangaroo",
  },
  {
    id: 3,
    name: "Kangaroo",
  },
];

const Home = () => {
  const [state, dispatch] = useReducer(UserReducer, userState);
  const [isWatching, beginWatching] = useState(false);
  const [activeView, setActiveView] = useState("All Collections");

  useEffect(() => {
 
  }, []);

  if (isWatching) {
    setTimeout(() => {
      beginWatching(false);
    }, 2000);
  }

  return (
    <div>
      <Header />
      <div>
        {isWatching && (
          <div className="alert-ctn">
            <div className="alert">
              <p style={{ textAlign: "center" }} className="text">
                You have started watching USER's collection.
              </p>
            </div>
          </div>
        )}

        <div style-={{ display: "flex", flexDirection : "row" ,  justifyContent: "space-between" }}>
          <div>
            <h3 className="title"> {activeView} </h3>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="switch">
              <button
                onClick={() => setActiveView("My Collections")}
                className="switch-btn"
                style={{
                  background: activeView === "My Collections" && "blue",
                }}
              >
                My Collections
              </button>

              <button
                onClick={() => setActiveView("All Collections")}
                style={{
                  background: activeView === "All Collections" && "blue",
                }}
                className="switch-btn"
              >
                All Collections
              </button>
            </div>
          </div>
        </div>

        <div className="home-body">
          <div className="collection-header">
            <h3 className="collection-name"> Victory's Collections </h3>

            <button onClick={() => beginWatching(true)} className="watch">
              <div style={{ margin: ".0  .5rem" }}>
                <IoMdEye style={{ fontSize: "1.4rem" }} />{" "}
              </div>{" "}
              Watch Collection
            </button>
          </div>

          <ul className="list">
            {Data.map(({ id, name }) => {
              return (
                <li key={id} className="item">
                  <div
                    className="background-card-image"
                    style={{
                      backgroundImage: `url(../assets/images/${id}.jpg)`,
                      height: "200px",
                      width: "200px",
                      objectFit: "cover",
                    }}
                  >
                    <h4> {name} </h4>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
