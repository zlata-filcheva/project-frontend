import { useEffect } from "react";

export const usePageTitle = (newTitle: string) => {
  useEffect(() => {
    document.title = newTitle;
  }, [newTitle]);
};
