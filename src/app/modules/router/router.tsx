import { createBrowserRouter } from "react-router-dom";
import { PATH_NAMES } from "./routes.ts";
import PageLayout from "../../components/PageLayout/PageLayout.tsx";
import CategoriesPage from "../../pages/CategoriesPage/CategoriesPage.tsx";
import TagsPage from "@/app/pages/TagsPage/TagsPage.tsx";
import PostsPage from "@/app/pages/PostsPage/PostsPage.tsx";
import NewPostPage from "@/app/pages/NewPostPage/NewPostPage.tsx";
import EditPostPage from "@/app/pages/EditPostPage/EditPostPage.tsx";
import PostPage from "@/app/pages/PostPage/PostPage.tsx";
import AuthenticationRouter from "@/app/modules/authentication/AuthenticationRouter.tsx";

export const router = createBrowserRouter([
  {
    path: PATH_NAMES.callback,
    element: <AuthenticationRouter />,
  },
  {
    path: PATH_NAMES.homePage,
    element: <PageLayout />,
    children: [
      {
        path: PATH_NAMES.postsPage,
        element: <PostsPage />,
        index: true,
      },
      {
        path: PATH_NAMES.categoriesPage,
        element: <CategoriesPage />,
      },
      {
        path: PATH_NAMES.tagsPage,
        element: <TagsPage />,
      },
      {
        path: PATH_NAMES.newPostPage,
        element: <NewPostPage />,
      },
      {
        path: PATH_NAMES.editPostPage,
        element: <EditPostPage />,
      },
      {
        path: PATH_NAMES.postPage,
        element: <PostPage />,
      },
    ],
  },
]);
