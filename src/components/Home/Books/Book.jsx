import star from "../../../assets/star.png";

function Book({ book }) {
  return (
    <div
      id={book.bookId}
      className="card hover:shadow-lg shadow-slate-700 transition duration-150 px-10 shadow-sm border border-slate-500 py-6 "
    >
      <figure className="px-16 py-8 max-w-96 h-64 bg-slate-800  mx-auto flex items-center justify-center">
        <img
          src={book.image}
          alt="Book"
          className="rounded-xl max-w-full max-h-full object-contain  "
        />
      </figure>

      {/* {/* <div className="hover-3d px-22 py-8 max-w-96 h-64 bg-slate-800 mx-auto "> */}
      {/* content */}

      {/* <figure className="max-w-100 rounded-2xl hover:border-hidden">
          <img src={book.image} alt="3D card" />
        </figure> */}

      {/* 8 empty divs needed for the 3D effect */}

      {/* <div></div>

        <div></div>

        <div></div>

        <div></div>

        <div></div>

        <div></div>

        <div></div>

        <div></div>
      </div> */}

      <div className="card-body items-start text-left space-y-4">
        {/* tags  */}
        <div className=" space-x-4">
          {book.tags.map((tag, i) => (
            <span
              key={i}
              className=" bg-green-500/10 text-green-500 rounded-2xl py-1 px-3"
            >
              {tag}
            </span>
          ))}
        </div>

        <div>
          {/* book name  */}
          {/* <h3 className=" font-bold text-2xl text-white">{book.bookName}</h3> */}
          <h3 className="font-bold text-2xl text-white line-clamp-1">
            {book.bookName}
          </h3>
          <p className=" font-medium text-base text-[#ddd] ">{book.author}</p>
        </div>

        <hr className="border-t-1.5 w-full border-dashed border-slate-600 " />

        <div className=" flex items-center justify-between w-full">
          <p className=" font-medium text-base text-[#ddd] ">{book.category}</p>

          <div className=" flex items-center justify-center gap-2">
            <span className="font-medium text-base text-[#ddd] ">
              {book.rating}
            </span>
            <img className=" text-white" src={star} alt="rating star" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
