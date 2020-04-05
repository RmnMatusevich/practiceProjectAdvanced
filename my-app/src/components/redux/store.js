import { createStore } from "redux";
import rootReducer from "./rootReduser";

const store = createStore(rootReducer);

export default store;
