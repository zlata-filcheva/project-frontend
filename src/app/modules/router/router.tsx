import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage.tsx";
import { PATH_NAMES } from "./routes.ts";

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
