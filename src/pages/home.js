import React, { useReducer, useEffect, useState } from "react";
import { IoMdEye, IoMdPerson } from "react-icons/io";

import Header from "../components/header";
import Footer from "../components/footer";
import { UserReducer, userState } from "../state/index";
import "../styles/home.css";
import CreateCollection from "./create-collection";
import { Modal } from "react-bootstrap";

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

const users = ["Victory", "David"];

const Home = () => {
  const [state, dispatch] = useReducer(UserReducer, userState);
  const [ModalVisibility, setModalVisibility] = useState(false);
  const [isWatching, beginWatching] = useState(false);
  const [watchedUser, setWatchedUser] = useState("");
  const [activeView, setActiveView] = useState("All Collections");

  useEffect(() => {
    if (isWatching) {
      setTimeout(() => {
        beginWatching(false);
      }, 2000);
    }
  }, [isWatching]);

  return (
    <div>
      <Header />
      <div>
        {isWatching && (
          <div className="alert-ctn">
            <div className="alert">
              <p style={{ textAlign: "center" }} className="text">
                You have started watching {`${watchedUser}'s`} collection.
              </p>
            </div>
          </div>
        )}

        <Modal
          show={state.isCreatingCollection}
          onHide={() => setModalVisibility(false)}
          size="lg"
        >
          <CreateCollection closeModal={() => setModalVisibility(false)} />
        </Modal>

        <div
          style-={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
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

        <div>
          {users.map((user) => (
            <div className="home-body">
              <div className="collection-header">
                <div style={{ display: "flex" }}>
                  <span style={{ margin: "0 .5rem" }}>
                    <IoMdPerson style={{ fontSize: "1.4rem" }} />{" "}
                  </span>

                  <h3 style={{ margin: "0" }} className="collection-name">
                    {" "}
                    {`${user}'s`} Collections{" "}
                  </h3>
                </div>

                <button
                  style={{ margin: ".5rem 0" }}
                  onClick={() => {
                    setWatchedUser(user);
                    beginWatching(true);
                    dispatch({
                      type: "WATCH-COLLECTION",
                      collectionId: "",
                      userId: "",
                    });
                  }}
                  className="watch"
                >
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
      <Footer />
    </div>
  );
};

export default Home;
