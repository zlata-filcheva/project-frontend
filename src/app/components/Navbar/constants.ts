import { PATH_NAMES } from "@/app/modules/router/routes.ts";

export const NAVBAR_PAGES = [
  {
    hasAuthentication: false,
    name: "Posts",
    to: PATH_NAMES.postsPage,
  },
  {
    hasAuthentication: true,
    name: "New post",
    to: PATH_NAMES.newPostPage,
  },
  {
    hasAuthentication: true,
    name: "Categories",
    to: PATH_NAMES.categoriesPage,
  },
  {
    hasAuthentication: true,
    name: "Tags",
    to: PATH_NAMES.tagsPage,
  },
];
