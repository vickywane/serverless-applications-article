import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from 'react-dropzone'
import "../styles/home.css";

const Profile = ({ user, dispatch }) => {
  const [Image, setImage] = useState(null);

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

  useEffect(() => {
    if (Image) {
      dispatch({
        type: "UPLOAD-USER-IMAGE",
        file: Image,
        userId: user.id,
      });
    }
  }, [Image]);

  return (
    <div className="profile-container">
      <img
        alt="default user"
        style={{
          height: "170px",
          width: "170px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
        src={require("../assets/images/profile.jpeg")}
      />

      <div className="profile-details">
        <h2 style={{ margin: 0, color: "black", fontWeight: "normal" }}>
          Victory Nwani
        </h2>
        <h4 style={{ margin: "1rem", color: "black", fontWeight: "normal" }}>
          Vickywane@gmail.com
        </h4>
        <button
          {...getRootProps({
            getRootProps,
            isDragActive,
            isDragAccept,
            getInputProps,
            isDragReject,
          })}
        >
          <input {...getInputProps()} />
          Change Profile Image
        </button>
      </div>
    </div>
  );
};

export default Profile;
