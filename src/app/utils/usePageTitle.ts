import { useEffect, useState } from "react";

export const usePageTitle = () => {
  const [title, setTitle] = useState(document.title);

  useEffect(() => {
    // Function to handle title change
    const handleTitleChange = () => {
      setTitle(document.title);
    };

    // Create a MutationObserver to watch for changes in document.title
    const observer = new MutationObserver(handleTitleChange);

    // Start observing the <title> element
    const titleElement = document.querySelector("title");
    if (titleElement) {
      observer.observe(titleElement, { childList: true });
    }

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return { title };
};
