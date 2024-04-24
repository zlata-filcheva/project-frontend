import { createBrowserRouter } from "react-router-dom";
import { PATH_NAMES } from "./routes.ts";
import HomePage from "../../pages/HomePage/HomePage.tsx";

export const router = createBrowserRouter([
  {
    path: PATH_NAMES.homePage,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
    ],
  },
]);
