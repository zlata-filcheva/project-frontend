import { createBrowserRouter } from "react-router-dom";
import { PATH_NAMES } from "./routes.ts";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SignUpPage from "../../pages/SignUpPage/SignUpPage.tsx";
import HomePage from "../../pages/HomePage/HomePage";

export const router = createBrowserRouter([
  {
    path: PATH_NAMES.homePage,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        element: <LoginPage />,
        path: PATH_NAMES.loginPage,
      },
      {
        element: <SignUpPage />,
        path: PATH_NAMES.signUpPage,
      },
    ],
  },
]);
