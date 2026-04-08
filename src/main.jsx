import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// ========router=======
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./components/Home/Home.jsx";
import ListedBooks from "./components/ListedBooks/ListedBooks.jsx";
import PagesToRead from "./components/PagesToRead/PagesToRead.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        loader: () => fetch("/public/data/booksData.json"),
        Component: Home,
      },
      {
        path: "/listed-books",
        Component: ListedBooks,
      },
      {
        path: "/pages-to-read",
        Component: PagesToRead,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
