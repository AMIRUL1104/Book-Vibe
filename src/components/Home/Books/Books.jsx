import React from "react";
import Book from "./Book";
function Books({ data }) {
  return (
    <section className=" max-w-360 my-28 mx-auto space-y-5 ">
      <h2 className=" text-4xl text-center font-bold ">Books</h2>

      <div className=" flex flex-col items-center justify-center md:grid  md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-300 mx-auto ">
        {data.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
}

export default Books;
