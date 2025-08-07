import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./Routes/Router";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import NavigationProvider from "./providers/NavigationContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <NavigationProvider>
        <RouterProvider router={router} />
      </NavigationProvider>
    </AuthProvider>
  </StrictMode>
);
