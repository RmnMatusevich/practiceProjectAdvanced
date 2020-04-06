import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReduser";

function logger({ getState }) {
  return (next) => (action) => {
    let val = next(action);
    console.log(action);
    return val;
  };
}

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
