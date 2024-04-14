import { usePageTitle } from "../../utils/usePageTitle/usePageTitle.ts";
import "./styles.css";
import { Link } from "react-router-dom";
import { PATH_NAMES } from "../../modules/router/routes.ts";
import React from "react";

const LoginPage = () => {
  usePageTitle("Login page");

  //const { data, isLoading } = usePhotoQuery();

  const handleLoginClick = () => {
    //handleLogin
  };

  return (
    <>
      <div className="input-container">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
      </div>

      <div className="input-container">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
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
