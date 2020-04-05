import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setAuthorised,
  setPassword,
  setUsername,
} from "./redux/actions/loginActions";

function Login() {
  const dispatch = useDispatch();
  const authorised = useSelector((state) => state.login.loginAuthorised);
  const username = useSelector((state) => state.login.loginUsername);
  const password = useSelector((state) => state.login.loginPassword);

  const click = (event) => {
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
          onChange={(event) => dispatch(setUsername(event.target.value))}
        ></input>
        <label className="login-form__label">PASSWORD</label>
        <input
          id="password"
          type="password"
          onChange={(event) => dispatch(setPassword(event.target.value))}
        ></input>
        <button id="login-submit">LogIn</button>
      </form>
    </section>
  );
}

export default Login;
