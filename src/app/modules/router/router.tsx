import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage.tsx";
import { PATH_NAMES } from "./routes.ts";
import LoginPage from "../../pages/LoginPage/LoginPage";

export const router = createBrowserRouter([
  {
    path: PATH_NAMES.homePage,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {element: <LoginPage />, path:PATH_NAMES.loginPage}
    ],
  },
]);
