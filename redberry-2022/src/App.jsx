import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Employee from "./components/employee/Employee";

const router = createBrowserRouter([
  { path: "/", element: <Welcome /> },
  { path: "/employee", element: <Employee /> },
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
