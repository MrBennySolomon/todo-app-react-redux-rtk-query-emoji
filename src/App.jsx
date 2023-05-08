import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home.page";
import CreatePage from "./pages/CreateToDO.page";
import DeletePage from "./pages/DeleteToDo.page";

import "./App.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/add-todo",
        element: <CreatePage />,
    },
    {
        path: "/delete-todo",
        element: <DeletePage />,
    },
]);

function App() {
    return (
        <div className="app">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
