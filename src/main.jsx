import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// ========router=======
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./components/Home/Home.jsx";
import ListedBooks from "./components/ListedBooks/ListedBooks.jsx";
import PagesToRead from "./components/PagesToRead/PagesToRead.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        loader: () => fetch("/data/booksData.json"),
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
      {
        // path: "/book-details/:bookId",
        // loader: async ({ params }) => {
        //   // ১. params থেকে নির্দিষ্ট মানটি বের করে আনা
        //   const { bookId } = params;

        //   const res = await fetch("/public/data/booksData.json");
        //   const data = await res.json();

        //   // ২. params এর মান দিয়ে ডাটা ফিল্টার করা
        //   const book = data.find((b) => b.bookId === bookId);

        //   if (!book) {
        //     throw new Response("Book not found", { status: 404 });
        //   }

        //   return book; // ৩. অবশ্যই ডাটা রিটার্ন করতে হবে
        // },
        // ১. পাথটি ঠিক করুন (আপনার পছন্দমতো)
        path: "/book-details/:id",
        loader: async ({ params }) => {
          // ২. রাউটারে যে নাম দিয়েছেন (:id), এখানেও সেই নাম ব্যবহার করুন
          const { id } = params;

          const res = await fetch("/public/data/booksData.json");
          const data = await res.json();

          // ৩. ডাটা টাইপ চেক (JSON-এ id সাধারণত সংখ্যা বা স্ট্রিং হতে পারে)
          const book = data.find((b) => b.bookId == id);

          if (!book) {
            throw new Response("Book not found", { status: 404 });
          }
          return book;
        },
        element: (
          <Suspense fallback={<h4>loading...</h4>}>
            <BookDetails></BookDetails>
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
