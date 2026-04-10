import { useLoaderData } from "react-router";
import { useContext } from "react";
import { WishListContext } from "../WishListContext";

// reacrt tostify
import { toast } from "react-toastify";

function BookDetails() {
  const { wishBooks, setWishBooks } = useContext(WishListContext);
  const data = useLoaderData();

  const handleAddWishlist = async (e) => {
    const id = e.target.id;

    const checkExist = wishBooks.find(
      (book) => parseInt(book.bookId) === parseInt(id),
    );
    if (checkExist) {
      toast.error();
      toast.error("Book already in wishlist", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    const response = await fetch("/public/data/booksData.json");
    const booksdata = await response.json();

    const wishBook = booksdata.find(
      (book) => parseInt(book.bookId) === parseInt(id),
    );
    if (wishBook) {
      const updatedWishBooks = [...wishBooks, wishBook];
      setWishBooks(updatedWishBooks);
      toast.success("Book added to wishlist", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <section className="max-w-360 mx-auto mb-5  flex max-lg:flex-col items-center justify-evenly max-sm:gap-7">
      {/* left side  */}

      <div className="hover-3d">
        {/* content */}
        <figure className="max-w-100 max-sm:mx-4 rounded-2xl ">
          <img src={data.image} alt="3D  image" />
        </figure>
        {/* 8 empty divs needed for the 3D effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* right side  */}

      <div className=" px-2.5 max-w-2xl flex flex-col gap-4 items-center lg:items-start ">
        <h2 className=" text-white  max-sm:text-center   text-4xl  font-bold  capitalize  ">
          {data.bookName}
        </h2>

        {/* author */}
        <p className="text-gray-400 text-lg">By : {data.author}</p>

        {/* category */}
        <p className="text-gray-400 text-lg">Category: {data.category}</p>

        {/* description */}
        <p className="text-gray-300 text-base">
          <span className=" font-semibold text-xl">Review :</span> {data.review}
        </p>

        {/* tag */}
        <div className="flex flex-wrap gap-2 mt-4">
          <span className=" font-semibold text-xl">Tags :</span>
          {data.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* a small table with 4 row for some book information */}
        <table className="table-auto w-full mt-6 text-left text-gray-300">
          <tbody>
            <tr>
              <td className="py-2">Publisher:</td>
              <td className="py-2">{data.publisher}</td>
            </tr>
            <tr>
              <td className="py-2">Publication Date:</td>
              <td className="py-2">{data.yearOfPublishing}</td>
            </tr>
            <tr>
              <td className="py-2">Pages:</td>
              <td className="py-2">{data.totalPages}</td>
            </tr>
            <tr>
              <td className="py-2">Rating:</td>
              <td className="py-2">{data.rating}</td>
            </tr>
          </tbody>
        </table>

        {/* action buttons */}
        <div className=" sm:mt-6 py-2 ">
          <button className="btn btn-soft capitalize hover:scale-105 transition duration-150">
            Read
          </button>

          {/* wishlist button */}
          <button
            id={data.bookId}
            onClick={handleAddWishlist}
            className="btn btn-primary capitalize ml-4 hover:scale-105 transition duration-150"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </section>
  );
}

export default BookDetails;
