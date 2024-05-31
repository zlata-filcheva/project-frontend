import { useDocumentTitle } from "@/app/utils/useDocumentTitle.ts";
import PostForm from "@/app/components/PostForm/PostForm.tsx";

const NewPostPage = () => {
  useDocumentTitle("New post page");

  return <PostForm />;
};

export default NewPostPage;
