import { createContext } from "react";

export const userState = {
  id: 0,
  name: "",
};

const ApplicationState = {
  users: [],
};

export const UserReducer = async (action, state) => {
  console.log(action.type);

  switch (action.type) {
    case "CREATE_USER":
      console.log(action);

      break;
    case "CREATE_ITEM":
      break;
    case "SUBSCRIBE_ABULM":
      break;
    case "FETCH_USERS":
      break;
    default:
      break;
  }
};

export const UserContext = createContext(userState);
