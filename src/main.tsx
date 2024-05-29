import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./app/modules/router/router.tsx";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-w6rj2fk5hpkln802.eu.auth0.com"
      clientId="72ITWEhJ7FyOHoOJJwOyeqm6nJ305k7G"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "https://dev-w6rj2fk5hpkln802.eu.auth0.com/api/v2/",
        scope: "read:current_user profile",
      }}
    >
      <QueryClientProvider client={new QueryClient()}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Auth0Provider>
  </React.StrictMode>,
);
