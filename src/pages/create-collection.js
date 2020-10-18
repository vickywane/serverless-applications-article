import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import "../styles/modal.css";

const CreateCollection = (props) => {
  const {} = props;
  const [collectionName, setCollectionName] = useState("");

    const handleSubmit = () => {
        
    }


  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h4> Create Collection </h4>
        </div>

        <div>
          <FiX style={{ fontSize: "1.3rem" }} />
        </div>
      </div>
      <hr />
      <div className="body">
        <div>
          <input
            type="text"
            placeholder="Your collection name"
            className="name"
            onChange={(e) => setCollectionName(e.target.value)}
          />


        </div>
      </div>

      <button> Create Collection </button>
    </div>
  );
};

export default CreateCollection;
