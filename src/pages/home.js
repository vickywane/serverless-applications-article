import React, { useReducer, useEffect, useState, useCallback } from "react";
import { IoMdEye, IoMdPerson } from "react-icons/io";
import { useDropzone } from "react-dropzone";

import Profile from "./profile";
import Header from "../components/header";
import Footer from "../components/footer";
import { UserReducer, userState } from "../state/index";
import "../styles/home.css";
import CreateCollection from "./create-collection";

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
  {
    id: 3,
    name: "Kangaroo",
  },
];

const users = ["Victory"];

const Home = () => {
  const [state, dispatch] = useReducer(UserReducer, userState);
  const [isWatching, beginWatching] = useState(false);
  const [Image, setImage] = useState(null);

  useEffect(() => {
    if (isWatching) {
      setTimeout(() => {
        beginWatching(false);
      }, 2000);
    }
  }, [isWatching]);

  useEffect(() => {
    dispatch({
      type: "FETCH-APP-DATA",
    });
  }, []);

  const onDrop = useCallback(([file]) => {
    setImage(file);
  }, []);

  const {
    getRootProps,
    isDragActive,
    isDragAccept,
    getInputProps,
    isDragReject,
  } = useDropzone({
    onDrop,
  });

  return (
    <div>
      <Header />
      <div>
        <Profile dispatch={dispatch} />

        <div>
          {users.map((user) => (
            <div className="home-body">
              <div className="collection-header">
                <div style={{ display: "flex" }}>
                  <span style={{ margin: "0 .5rem" }}>
                    <IoMdPerson style={{ fontSize: "1.4rem" }} />
                  </span>

                  <h3 style={{ margin: "0" }} className="collection-name">
                    {`${user}'s`} Collections
                  </h3>
                </div>

                <button
                  {...getRootProps({
                    getRootProps,
                    isDragActive,
                    isDragAccept,
                    getInputProps,
                    isDragReject,
                  })}
                  style={{ margin: ".5rem 0" }}
                  onClick={() => {
                    dispatch({
                      type: "FETCH-DATA",
                    });
                  }}
                  className="watch"
                >
                  <div style={{ margin: ".0  .5rem" }}>
                    <input {...getInputProps()} />
                    <IoMdEye style={{ fontSize: "1.4rem" }} />
                  </div>
                  Add Image
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
                        }}
                      >
                        <h4> {name} </h4>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
