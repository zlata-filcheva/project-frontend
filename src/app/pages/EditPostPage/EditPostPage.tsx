import { useDocumentTitle } from "@/app/utils/useDocumentTitle.ts";
import { useLocation } from "react-router-dom";
import PostForm from "@/app/components/PostForm/PostForm.tsx";

const EditPostPage = () => {
  useDocumentTitle("Edit post page");

  const {
    state: { data },
  } = useLocation();

  return <PostForm editPostData={data} />;
};

export default EditPostPage;
