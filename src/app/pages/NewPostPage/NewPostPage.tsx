import { usePageTitle } from "@/app/utils/usePageTitle.ts";
import PostForm from "@/app/components/PostForm/PostForm.tsx";

const NewPostPage = () => {
  usePageTitle("New post page");

  return <PostForm />;
};

export default NewPostPage;
