import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
const obj = {
  collage: [
    {
      src:
        "https://spring.io/images/projects/spring-boot-7f2e24fb962501672cc91ccd285ed2ba.svg",
      tittle: "Spring Boot",
      description:
        "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible."
    },
    {
      src:
        "https://spring.io/images/projects/spring-framework-640ad1b04f7efa89e0f0f7353e6b5e02.svg?v=2",
      tittle: "Spring Framework",
      description:
        "Provides core support for dependency injection, transaction management, web apps, data access, messaging and more."
    },
    {
      src:
        "https://spring.io/images/projects/spring-data-flow-9eb1733b76b6cd62cbdd9bc9a2b04e56.svg",
      tittle: "Spring Cloud Data Flow",
      description:
        "An orchestration service for composable data microservice applications on modern runtimes."
    },
    {
      src:
        "https://spring.io/images/projects/spring-cloud-81fe04ab129ab99da0e7c7115bb09920.svg",
      tittle: "Spring Cloud",
      description:
        "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices"
    },
    {
      src:
        "https://spring.io/images/projects/spring-data-79cc203ed8c54191215a60f9e5dc638f.svg",
      tittle: "Spring Data",
      description:
        "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond."
    },
    {
      src:
        "https://spring.io/images/projects/spring-integration-ed45c92142d821851bf6c771f4c556bb.svg?v=2",
      tittle: "Spring Integration",
      description:
        "Supports the well-known Enterprise Integration Patterns via lightweight messaging and declarative adapters"
    }
  ]
};
const initialState = {
  collageUserInput: "",
  collageImage: "",
  collageTittle: "",
  collageDescription: "",
  collageCollage: [...obj.collage],
  loginAuthorised: false,
  loginUsername: "",
  loginPassword: "",
  navigationVisibility: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTION_CHANGE_AUTHORISED":
      return { ...state, loginAuthorised: action.auth };
    case "ACTION_CHANGE_USERNAME":
      return { ...state, loginUsername: action.username };
    case "ACTION_CHANGE_PASSWORD":
      return { ...state, loginPassword: action.password };
    case "ACTION_CHANGE_USER_INPUT":
      return { ...state, collageUserInput: action.userInput };
    case "ACTION_CHANGE_IMAGE":
      return { ...state, collageImage: action.image };
    case "ACTION_CHANGE_TITTLE":
      return { ...state, collageTittle: action.tittle };
    case "ACTION_CHANGE_DESCRIPTION":
      return { ...state, collageDescription: action.description };
    case "ACTION_CHANGE_COLLAGE":
      return { ...state, collageCollage: action.collage };
    case "ACTION_CHANGE_NAVIGATION_VISIBILITY":
      return { ...state, navigationVisibility: action.visibility };
    default:
      return state;
  }
};
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

export default store;
