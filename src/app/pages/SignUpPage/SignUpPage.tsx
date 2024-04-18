import { usePageTitle } from "../../utils/usePageTitle/usePageTitle.ts";
import "./styles.css";
import { Link } from "react-router-dom";
import { PATH_NAMES } from "../../modules/router/routes";
import React from "react";

const SignUpPage = () => {
  usePageTitle("Login page");

  //const { data, isLoading } = usePhotoQuery();

  //const [passwordError, setPasswordError] = React.useState<string | null>(null);

  const handlePasswordChange = (e: React.ChangeEvent) => {
    // const {
    //     target: { value },
    //  } = e;

    return null;

    // if (value < 8) {
    //    setPasswordError("Error");
    //  }
  };

  const handleSignUpClick = () => {};

  return (
    <>
      <div className="input-container">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
      </div>

      <div className="input-container">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handlePasswordChange}
        />
      </div>

      <div className="input-container">
        <label htmlFor="password">Repeat password:</label>
        <input type="password" id="password" name="password" />
      </div>

      <div className="input-container">
        <button type={"button"} onClick={handleSignUpClick}>
          Sign up
        </button>

        <Link to={`../${PATH_NAMES.loginPage}`}>Login</Link>
      </div>
    </>
  );
};

export default SignUpPage;
