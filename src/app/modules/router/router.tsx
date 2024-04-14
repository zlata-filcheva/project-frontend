import { createBrowserRouter } from "react-router-dom";
import { PATH_NAMES } from "./routes.ts";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SignUpPage from "../../pages/SignUpPage/SignUpPage.tsx";

export const router = createBrowserRouter([
  {
    path: PATH_NAMES.homePage,
    children: [
      {
        element: <LoginPage />,
        index: true,
      },
      {
        element: <SignUpPage />,
        path: PATH_NAMES.signUpPage,
      },
    ],
  },
]);
