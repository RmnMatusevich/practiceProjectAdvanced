import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function Login() {
  const [authorised, setAuthorised] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const click = event => {
    event.preventDefault();
    if (username === "admin" && password === "1234") {
      setAuthorised(true);
    }
  };
  if (authorised) {
    return <Redirect to="./Projects" />;
  } else {
  }
  return (
    <section className="login">
      <form id="login-form" onSubmit={event => click(event)}>
        <input
          id="username"
          onChange={event => setUsername(event.target.value)}
        ></input>
        <input
          id="password"
          type="password"
          onChange={event => setPassword(event.target.value)}
        ></input>
        <button id="login-submit">LogIn</button>
      </form>
    </section>
  );
}

export default Login;
