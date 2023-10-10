import React from "react";

import { useState, useEffect } from "react";

import { LoginCont } from "../styles/containers";
import { LoginField, Button } from "../styles/inputs";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserName(e.target[0].value)
    setPassword(e.target[1].value)
  }

  useEffect(() => {}, [userName]);
  return (
    <>
      {userName ? (
        <div>Welcome {userName}</div>
      ) : (
        <LoginCont onSubmit={(e) => handleSubmit(e)}>
          <div>Login</div>
          <LoginField placeholder="Username" name="userName" />
          <LoginField placeholder="Password" name="password" type="password" />
          <Button type="submit">Login</Button>
        </LoginCont>
      )}
    </>
  );
};

export default Login;
