import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Employee from "./components/employee/Employee";
import LaptopSpecs from "./components/laptopSpecs/LaptopSpecs";
import ThankYouPage from "./components/thankYouPage/ThankYouPage";

const router = createBrowserRouter([
  { path: "/", element: <Welcome /> },
  { path: "/employee", element: <Employee /> },
  { path: "/laptopSpecs", element: <LaptopSpecs /> },
  { path: "/thankYou", element: <ThankYouPage /> },
]);

const App = () => {
  return (
    <main>
      <RouterProvider router={router}>
        <Welcome />
      </RouterProvider>
    </main>
  );
};

export default App;
