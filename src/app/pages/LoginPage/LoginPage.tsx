import { usePageTitle } from "../../utils/usePageTitle/usePageTitle.ts";
import "./styles.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { PATH_NAMES } from "../../modules/router/routes.ts";
import React, { useState } from "react";
import { useUserQuery } from "../../api/user/queryHooks";
import { isEmpty } from "lodash";

const LoginPage = () => {
  usePageTitle("Login page");

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogging, setIsLogging] = useState(false);

  const { data: userData, isLoading } = useUserQuery({
    email,
    password,
    isLogging,
    setIsLogging,
  });

  const handleLoginClick = () => {
    setIsLogging(true);
  };

  if (isLoading && isLogging) {
    return "Logging is in process";
  }

  if (!isLoading && !isEmpty(userData)) {
    return <Navigate to={PATH_NAMES.homePage} state={{ userData }} />;
  }

  return (
    <>
      <div className="input-container">
        <label htmlFor="username">Email:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
