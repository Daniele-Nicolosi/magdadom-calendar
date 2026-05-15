/* App.jsx
   Main application component that sets up routing for the application.
   It uses React Router to define routes for the home page and individual house pages. */

/* BrowserRouter is a component that provides routing functionality to the application, allowing us to define different routes and navigate between them.
   Routes is a component that contains all the Route components, which define the individual routes for the application.
   Route is a component that defines a specific route, including the path and the component to render when that path is accessed. */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HousePage from "./pages/HousePage";

/* The App component is the main entry point of the application. It sets up the routing using BrowserRouter and defines the routes for the home page and house pages. */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/house/:houseId" element={<HousePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
