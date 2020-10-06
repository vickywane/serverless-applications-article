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
  const [isWatching, beginWatching] = useState(true);

  useEffect(() => {
    dispatch({
      type: "CREATE_USER",
    });
  }, []);

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

        <h3 className="title"> All Collections </h3>

        <div className="home-body">
          <div className="collection-header">
            <h3 className="collection-name"> Victory's Collections </h3>

            <button className="watch">
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
