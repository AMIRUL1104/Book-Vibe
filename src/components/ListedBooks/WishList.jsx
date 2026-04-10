import { useContext } from "react";
import { WishListContext } from "../WishListContext";
import { useNavigate } from "react-router";
function WishList() {
  const { wishBooks, setWishBooks } = useContext(WishListContext);
  const navigate = useNavigate();

  const handleBookDetails = (e) => {
    const id = e.currentTarget.id;

    navigate(`/book-details/${id}`);
  };
  return (
    <>
      {wishBooks.length === 0 ? (
        <div className="flex justify-center items-center min-h-50 px-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-gray-600">
            Your wishlist is empty!
          </h2>
        </div>
      ) : (
        <div className="p-3 sm:p-4 md:p-6 max-w-6xl mx-auto">
          {wishBooks.map((book) => (
            <div
              key={book.bookId}
              className="flex flex-col lg:flex-row bg-base-100 shadow-lg mb-5 border border-gray-200 rounded-xl overflow-hidden"
            >
              {/* Image Section */}
              <figure className="w-full lg:w-56 h-48 sm:h-56 md:h-64 bg-gray-100 flex items-center justify-center p-3">
                <img
                  src={book.image}
                  alt={book.bookName}
                  className="h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </figure>

              {/* Content Section */}
              <div className="p-4 sm:p-5 flex flex-col grow gap-3">
                {/* Title */}
                <div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-100 leading-snug">
                    {book.bookName}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-400 font-medium">
                    By: {book.author}
                  </p>
                </div>

                {/* Tags + Year */}
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                  <span className="font-semibold">Tag:</span>
                  {book.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-green-50 text-green-600 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                  <span className="text-gray-500 flex items-center gap-1 w-full sm:w-auto sm:ml-3">
                    📅 Publish : {book.yearOfPublishing}
                  </span>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs sm:text-sm text-gray-500 border-b border-dashed border-gray-300 pb-2">
                  <span>Category: {book.category}</span>
                  <span>Rating: {book.rating}</span>
                  <span>Publisher: {book.publisher}</span>
                  <span>Pages: {book.totalPages}</span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-2">
                  <button
                    id={book.bookId}
                    onClick={handleBookDetails}
                    className="btn btn-sm sm:btn-md btn-primary w-full sm:w-auto rounded-full capitalize"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() =>
                      setWishBooks(
                        wishBooks.filter((_, id) => id !== book.bookId),
                      )
                    }
                    className="btn btn-sm sm:btn-md btn-secondary w-full sm:w-auto rounded-full capitalize"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default WishList;
