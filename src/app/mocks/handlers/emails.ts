import { http, HttpResponse } from "msw";

export const emailHandlers = [
  http.post(
    "emails/",
    // @ts-ignore
    async ({ request, params, cookies }) => {
      return new HttpResponse(request.body, {
        status: 200,
        statusText: "OK",
      });
    },
  ),
];
