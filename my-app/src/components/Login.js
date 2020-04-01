import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import store from "../index";

const ACTION_CHANGE_AUTHORISED = "ACTION_CHANGE_AUTHORISED";
const ACTION_CHANGE_USERNAME = "ACTION_CHANGE_USERNAME";
const ACTION_CHANGE_PASSWORD = "ACTION_CHANGE_PASSWORD";

function setUsername(username) {
  console.log(store.getState());
  return {
    type: ACTION_CHANGE_USERNAME,
    username
  };
}

function setPassword(password) {
  return {
    type: ACTION_CHANGE_PASSWORD,
    password
  };
}

function setAuthorised(auth) {
  return {
    type: ACTION_CHANGE_AUTHORISED,
    auth
  };
}

function Login() {
  const dispatch = useDispatch();
  const authorised = useSelector(state => state.loginAuthorised);
  const username = useSelector(state => state.loginUsername);
  const password = useSelector(state => state.loginPassword);

  const click = event => {
    event.preventDefault();
    if (username === "admin" && password === "1234") {
      dispatch(setAuthorised(true));
    }
  };
  if (authorised) {
    return <Redirect to="./Projects" />;
  } else {
  }

  return (
    <section className="login" onSubmit={click}>
      <form id="login-form">
        <label className="login-form__label">USERNAME</label>
        <input
          id="username"
          onChange={event => dispatch(setUsername(event.target.value))}
        ></input>
        <label className="login-form__label">PASSWORD</label>
        <input
          id="password"
          type="password"
          onChange={event => dispatch(setPassword(event.target.value))}
        ></input>
        <button id="login-submit">LogIn</button>
      </form>
    </section>
  );
}

export default Login;
