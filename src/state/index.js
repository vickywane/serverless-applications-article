import { createContext } from "react";
import { navigate } from "@reach/router";
import Axios from "axios";

const FIRESTORE_FUNCTION = process.env.REACT_APP_FIRESTORE_FUNCTION;

export const userState = {
  id: 0,
  name: "",
  isLoggedIn: false,
  isLoading: false,
  error: "",
};

export const ApplicationState = {
  users: [],
  isCreatingCollection: false,
};

export const UserReducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "CREATE_USER":
      const { userEmail, userPassword } = action;

      const data = {
        type: "CREATE-USER",
        email: userEmail,
        password: userPassword,
      };

      Axios.post(`${FIRESTORE_FUNCTION}`, data)
        .then((res) => {
          navigate("/home");
          return { ...state, isLoggedIn: true };
        })
        .catch((e) => console.log(`couldnt create user. error : ${e}`));

      break;

    case "LOGIN-USER":
      userState.isLoading = true;

      const { email, password } = action;
      return Axios.post(`${FIRESTORE_FUNCTION}`, {
        email,
        password,
        type: "LOGIN-USER",
      })
        .then((response) => {
          navigate("/home");
          return { ...state, userState: response, isLoggedIn: true };
        })
        .catch((e) => {
          console.log(e);
        });

    case "CREATE_ITEM":
      break;
    case "SUBSCRIBE_ABULM":
      break;
    case "FETCH_USERS":
      break;
    case "LOGOUT":
      navigate("/login");
      return { ...userState, isLoggedIn: false };

    default:
      break;
  }
};

export const ApplicationReducer = (state, action) => {
  switch (action) {
    case "CREATE-COLLECTION":
      return { ...ApplicationState, isCreatingCollection: true };

    case "SUBMIT-COLLECTION":
      break;
    case "WATCH-COLLECTION":
      break;
    default:
      break;
  }
};

export const UserContext = createContext(userState);
export const ApplicationContext = createContext(ApplicationState);
