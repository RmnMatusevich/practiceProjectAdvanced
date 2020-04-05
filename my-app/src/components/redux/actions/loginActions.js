import {
  ACTION_CHANGE_AUTHORISED,
  ACTION_CHANGE_PASSWORD,
  ACTION_CHANGE_USERNAME,
} from "../globalVariables";

function setUsername(username) {
  return {
    type: ACTION_CHANGE_USERNAME,
    username,
  };
}

function setPassword(password) {
  return {
    type: ACTION_CHANGE_PASSWORD,
    password,
  };
}

function setAuthorised(auth) {
  return {
    type: ACTION_CHANGE_AUTHORISED,
    auth,
  };
}

export { setUsername, setPassword, setAuthorised };
