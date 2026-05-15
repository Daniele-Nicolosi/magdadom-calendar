/* main.jsx 
   Entry point of the React application. It renders the
   App component into the root DOM element. */

/* StrictMode is a wrapper component that helps identify
   potential problems in the application by activating 
   additional checks and warnings for its descendants. */
import { StrictMode } from "react";

/* createRoot is a method from the React DOM library
   that creates a root for rendering the React
   application. It takes a DOM element as an argument 
   and returns a root object that can be used to render
   the application. */
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

/* The createRoot method is called with the DOM element that has the id "root".
   getElementById is a method that retrieves the DOM element with the specified id. */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App /> 
  </StrictMode>
);