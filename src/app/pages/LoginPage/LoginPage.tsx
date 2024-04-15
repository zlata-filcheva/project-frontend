import { usePageTitle } from "../../utils/usePageTitle/usePageTitle.ts";
import "./styles.css";
import { Link } from "react-router-dom";
import { PATH_NAMES } from "../../modules/router/routes.ts";
import React, { useState } from "react";
import { useUserQuery } from "../../api/photo/queryHooks";

const LoginPage = () => {
  usePageTitle("Login page");

  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  const { data, isLoading } = useUserQuery(email, password);

  const handleLoginClick = () => {
    console.log(data);
  };

  return (
    <>
      <div className="input-container">
        <label htmlFor="username">Email:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPasword(e.target.value)}
        />
      </div>

      <div className="input-container">
        <button type={"button"} onClick={handleLoginClick}>
          Login
        </button>

        <Link to={`../${PATH_NAMES.signUpPage}`}>Sign up</Link>
      </div>
    </>
  );
};

export default LoginPage;
