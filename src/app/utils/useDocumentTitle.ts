import { useEffect } from "react";

export const useDocumentTitle = (newTitle: string) => {
  useEffect(() => {
    document.title = newTitle;
  }, [newTitle]);
};
