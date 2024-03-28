const fetchPost = <T>(url: string, data: T) =>
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

export const fetchInstance = {
  post: fetchPost,
};
