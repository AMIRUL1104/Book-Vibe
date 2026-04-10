import { useState } from "react";
import { useLoaderData } from "react-router";
import Chart from "./Chart";
// import { use } from "react";

function PagesToRead() {
  const data = useLoaderData();
  // const books = use(data);
  const [books, setBooks] = useState(() => {
    return [...data].sort((a, b) => b.totalPages - a.totalPages);
  });

  const handleBiggestPage = () => {
    const sortedBooks = [...books].sort((a, b) => b.totalPages - a.totalPages);
    setBooks(sortedBooks);
  };
  console.log(books);

  const handleSmallestPage = () => {
    const sortedBooks = [...books].sort((a, b) => a.totalPages - b.totalPages);
    setBooks(sortedBooks);
  };

  return (
    <section className="max-w-360 mx-auto mb-5  flex max-lg:flex-col items-center justify-evenly max-sm:gap-7">
      <div className="w-full">
        {/* listed books label */}
        <div className="w-full px-2.5 flex items-center justify-between mb-5">
          <h2 className="text-2xl font-semibold text-center">
            See Books By Stats
          </h2>
        </div>

        {/* name of each tab group should be unique */}
        <div className="tabs tabs-lift px-2.5">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Biggest 5 books"
            defaultChecked
            onClick={handleBiggestPage}
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <Chart books={books} />
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Smallest 5 books"
            onClick={handleSmallestPage}
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <Chart books={books} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PagesToRead;
