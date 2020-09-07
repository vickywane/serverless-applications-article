import React, { useState, useCallback, useEffect } from "react";
import { useMutation, useLazyQuery } from "@apollo/react-hooks";
import { useDropzone } from "react-dropzone";

import "./App.css";
import { DELETE_ACCOUNT, CREATE_USER, GET_USER } from "./data";

function App() {
  // @apollo/react-hooks for making GraphQL mutations in functional components
  const [createAccount, { loading }] = useMutation(CREATE_USER);
  const [deleteUser] = useMutation(DELETE_ACCOUNT);

  const [getUser, { data, error }] = useLazyQuery(GET_USER);

  // state used to switch between a Guest and a user
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isCreatingAccount, beginCreatingAccount] = useState(false);

  // user data stored in state and passed to GraphQL
  const [userName, setuserName] = useState("");
  const [imgUri, setImgUri] = useState(null);

  // user's uploaded image kept in state and padded to GraphQL
  const [userImage, setUserImage] = useState(null);
  const [fileName, setFileName] = useState(null);

  // create user mutation function fired at the click of `createAccount` button
  const createAUser = () => {
    createAccount({
      variables: {
        username: userName,
        image: userImage,
      },
    })
      .then(() => {
        setLoggedIn(true);
        beginCreatingAccount(false);
        getUser();
      })
      .catch((e) => console.log(e));
  };

  // deleteAccount function which deletes the user's account in our Backend Service
  const deleteAnAccount = () => {
    deleteUser()
      .then(() => {
        // resets all stored state
        setUserImage(null);
        setFileName(null);
        setLoggedIn(false);
        setImgUri(null);
        setuserName("");
      })
      .catch((e) => console.log(e));
  };

  const onDrop = useCallback(([file]) => {
    setUserImage(file);
    setFileName(file.name);
  }, []);

  const {
    getRootProps,
    isDragActive,
    isDragAccept,
    getInputProps,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/jpeg , image/jpg, image.png",
  });

  // A react callback which happens after the dragged file has been dropped

  useEffect(() => {
    if (isLoggedIn && data !== undefined) {
      setImgUri(data.getUser[0].imageuri);
    }
  }, [data]);

  return (
    <div className="App" style={{ height: window.innerHeight - 35 }}>
      <div
        onClick={() => {
          if (!isLoggedIn) {
            beginCreatingAccount(!isCreatingAccount);
          } else if (isLoggedIn) {
            deleteAnAccount();
          }
        }}
        className="auth"
      >
        <p className="auth-text">
          {!isLoggedIn ? (!isCreatingAccount ? "Sign In" : "Cancel") : "Logout"}
        </p>
      </div>

      <div className="content">
        {!isCreatingAccount ? (
          <div>
            <img
              className="user-img"
              src={imgUri ? imgUri : require("./assets/groot.jpg")}
              alt="default user and user"
            />
            <h1>
              Hi There, i am
              {userName.length > 3 ? ` ${userName}` : ` Groot`}.
            </h1>
            <p>
              {!isLoggedIn
                ? "You can sign-in to become you!"
                : "You sign-out to become Groot!"}
            </p>
          </div>
        ) : (
          <div>
            <h1> {!loading ? "Create An Account" : "Creating Account ..."}</h1>
            <hr />
            <br />
            <form className="form">
              <div className="input-body">
                <label style={{ color: loading && "grey" }}> Username </label>
                <input
                  disabled={loading}
                  style={{ color: loading && "grey" }}
                  onChange={(e) => setuserName(e.target.value)}
                  placeholder="some nifty name"
                  required={true}
                  type="text"
                />

                <br />
                <br />

                {!userImage ? (
                  <div
                    className="circle-ctn"
                    {...getRootProps({
                      isDragActive,
                      isDragAccept,
                      isDragReject,
                    })}
                  >
                    <input {...getInputProps()} />
                    <div
                      className="box"
                      style={{
                        background: isDragActive && "#1b2733",
                      }}
                    >
                      <p
                        style={{ color: isDragReject && "red" }}
                        className="circle-text"
                      >
                        {!isDragActive
                          ? `Tap or Drag 'n' Drop Image  to Add Profile Picture`
                          : isDragReject
                          ? "Ooops upload images only"
                          : "Drop your image here to upload"}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="img-illustration">
                    <img
                      style={{ filter: loading && "grayscale(80%)" }}
                      className="img-icon"
                      src={require("./assets/image-icon.png")}
                      alt="image illustration"
                    />

                    <p
                      style={{ color: loading && "grey" }}
                      className="file-name"
                    >
                      {" "}
                      {fileName}{" "}
                    </p>
                  </div>
                )}

                <br />
                <br />

                {/* btn causes a page refresh thus losing state */}
                <button
                  style={{
                    background: userName.length < 3 && "transparent",
                    color: userName.length < 3 && "silver",
                  }}
                  className="create-acct-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    createAUser();
                  }}
                  disabled={userName.length < 3 || loading}
                >
                  {!loading ? "Create Account" : "Creating Account"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
