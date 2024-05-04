import { createBrowserRouter } from "react-router-dom";
import { PATH_NAMES } from "./routes.ts";
import PostsPage from "../../pages/PostsPage/PostsPage.tsx";
import PageLayout from "../../components/PageLayout/PageLayout.tsx";
import CategoriesPage from "../../pages/CategoriesPage/CategoriesPage.tsx";

export const router = createBrowserRouter([
  {
    element: <PageLayout />,
    path: PATH_NAMES.homePage,
    children: [
      {
        element: <PostsPage />,
        index: true,
      },
      {
        path: PATH_NAMES.categoriesPage,
        element: <CategoriesPage />,
      },
    ],
  },
]);
