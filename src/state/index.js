import { createContext } from "react";
import { navigate } from "@reach/router";
import Axios from "axios";

const FIRESTORE_FUNCTION = process.env.REACT_APP_FIRESTORE_FUNCTION;
const UPLOAD_ENDPOINT = process.env.REACT_APP_UPLOAD_FUNCTION;

export const userState = {
  user: null,
  isLoggedIn: true,
  isLoading: false,
  error: "",
};

export const ApplicationState = {
  users: [],
  isCreatingCollection: false,
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_USER":
      const { userEmail, userPassword } = action;

      const data = {
        type: "CREATE-USER",
        email: userEmail,
        password: userPassword,
      };

      Axios.post(FIRESTORE_FUNCTION, data)
        .then((res) => {
          navigate("/home");
          return { ...state, isLoggedIn: true };
        })
        .catch((e) => console.log(`couldnt create user. error : ${e}`));

      break;

    case "LOGIN-USER":
      userState.isLoading = true;

      const { email, password } = action;
      return Axios.post(FIRESTORE_FUNCTION, {
        email,
        password,
        type: "LOGIN-USER",
      })
        .then((response) => {
          navigate("/home");
          return { ...userState, isLoggedIn: true };
        })
        .catch((e) => {
          console.log(e);
        });

    case "UPLOAD-USER-IMAGE":
      const { file, userId } = action;

      return Axios.post(UPLOAD_ENDPOINT, { file, userId })
        .then(() => ({ ...state }))
        .catch((e) => console.log(e));

    case "FETCH-DATA":
      return { ...userState, isLoading: true };

    case "LOGOUT":
      navigate("/login");
      return { ...userState, isLoggedIn: false };

    default:
      return console.log(`${action.type} case not recognized`);
  }
};

export const UserContext = createContext(userState);
