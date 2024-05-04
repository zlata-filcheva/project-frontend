import { createBrowserRouter } from "react-router-dom";
import { PATH_NAMES } from "./routes.ts";
import PostsPage from "../../pages/PostsPage/PostsPage.tsx";

export const router = createBrowserRouter([
  {
    path: PATH_NAMES.homePage,
    children: [
      {
        element: <PostsPage />,
        index: true,
      },
    ],
  },
]);
