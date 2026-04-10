import { useContext } from "react";
import { WishListContext } from "../WishListContext";

function WishList() {
  const { wishBooks } = useContext(WishListContext);
  console.log(wishBooks);
  //   return (
  //     <>
  //       {wishBooks.length === 0 ? (
  //         <div>
  //           <h2 className="text-2xl font-semibold text-center">
  //             Your wishlist is empty !
  //           </h2>
  //         </div>
  //       ) : (
  //         <div>
  //           {/*  add very small border every book card */}

  //           {/* add every books as a card with full width and add every book name ,author, cetagory and view details button */}
  //           {wishBooks.map((book) => (
  //             <div
  //               key={book.bookId}
  //               className="card card-side bg-base-100 shadow-xl mb-5 border border-gray-700 flex items-center justify-center px-5"
  //             >
  //               {/* image box should be on the left side of the card and should take a fix width and height also add background color ,padding */}
  //               <figure className="w-40 h-48 overflow-hidden bg-gray-200 flex items-center justify-center px-4 py-2">
  //                 <img
  //                   src={book.image}
  //                   alt="Book"
  //                   className="w-full h-full object-contain "
  //                 />
  //               </figure>
  //               {/* add a remove button near the view button . add rating beside the  category */}
  //               <div className="card-body">
  //                 <h2 className="card-title">{book.bookName}</h2>
  //                 <p>Author : {book.author}</p>
  //                 {/* keep the category and rating together side by side  */}
  //                 <div className=" flex gap-6 ">
  //                   <span>Category : {book.category}</span>
  //                   <span>Rating : {book.rating}</span>
  //                 </div>
  //                 <div className=" flex gap-6 mt-2">
  //                   <span>Publisher : {book.publisher}</span>
  //                   <span>Pages : {book.totalPages}</span>
  //                 </div>
  //                 {/* add a hr tag hare  */}
  //                 <hr className="border-t-1.5 w-full border-dashed border-slate-600 " />
  //                 {/* add tags and  year of publishing like as category and rating */}
  //                 <div className=" flex gap-6 mt-2">
  //                   <span>Year of Publishing : {book.yearOfPublishing}</span>
  //                   <div className="flex gap-2">
  //                     {book.tags.map((tag, i) => (
  //                       <>
  //                         <span className="font-semibold ">Tags : </span>
  //                         <span
  //                           key={i}
  //                           className="bg-blue-100 text-blue-800 text-xs font-semibold me-2 px-2.5 py-0.5 rounded"
  //                         >
  //                           {tag}
  //                         </span>
  //                       </>
  //                     ))}
  //                   </div>
  //                 </div>
  //                 <div className="card-actions justify-end">
  //                   <button className="btn btn-secondary">Remove</button>
  //                   <button className="btn btn-primary">View Details</button>
  //                 </div>
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       )}
  //     </>
  //   );

  //   return (
  //     <>
  //       {wishBooks.length === 0 ? (
  //         <div className="flex justify-center items-center min-h-[200px]">
  //           <h2 className="text-2xl font-semibold text-center text-gray-600">
  //             Your wishlist is empty!
  //           </h2>
  //         </div>
  //       ) : (
  //         <div className="p-2 md:p-4">
  //           {wishBooks.map((book) => (
  //             <div
  //               key={book.bookId}
  //               className="flex flex-col md:flex-row bg-base-100 shadow-xl mb-6 border border-gray-300 rounded-xl overflow-hidden"
  //             >
  //               {/* Image Section: মোবাইল স্ক্রিনে ফুল উইডথ, বড় স্ক্রিনে ফিক্সড উইডথ */}
  //               <figure className="w-full md:w-48 h-56 bg-gray-100 flex items-center justify-center p-4">
  //                 <img
  //                   src={book.image}
  //                   alt={book.bookName}
  //                   className="h-full object-contain hover:scale-105 transition-transform duration-300"
  //                 />
  //               </figure>

  //               {/* Content Section */}
  //               <div className="p-5 flex flex-col flex-grow gap-3">
  //                 <div>
  //                   <h2 className="text-xl md:text-2xl font-bold text-gray-800">
  //                     {book.bookName}
  //                   </h2>
  //                   <p className="text-gray-600 font-medium">
  //                     By : {book.author}
  //                   </p>
  //                 </div>

  //                 {/* Tags and Year */}
  //                 <div className="flex flex-wrap items-center gap-3 text-sm">
  //                   <span className="font-bold">Tag:</span>
  //                   {book.tags.map((tag, i) => (
  //                     <span
  //                       key={i}
  //                       className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-semibold"
  //                     >
  //                       #{tag}
  //                     </span>
  //                   ))}
  //                   <span className="text-gray-500 flex items-center gap-1 ml-0 md:ml-4">
  //                     📅 Year of Publishing: {book.yearOfPublishing}
  //                   </span>
  //                 </div>

  //                 {/* Stats: Category, Rating, Publisher, Pages */}
  //                 <div className="flex flex-wrap gap-4 text-sm text-gray-500 border-b border-dashed border-gray-300 pb-3">
  //                   <span>Category: {book.category}</span>
  //                   <span>Rating: {book.rating}</span>
  //                   <span>Publisher: {book.publisher}</span>
  //                   <span>Pages: {book.totalPages}</span>
  //                 </div>

  //                 {/* Buttons */}
  //                 <div className="flex flex-wrap gap-3 mt-2">
  //                   <button className="btn btn-sm md:btn-md btn-primary rounded-full capitalize">
  //                     View Details
  //                   </button>
  //                   <button className="btn btn-sm md:btn-md btn-secondary rounded-full capitalize">
  //                     Remove
  //                   </button>
  //                 </div>
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       )}
  //     </>
  //   );

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
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 leading-snug">
                    {book.bookName}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 font-medium">
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
                    📅 {book.yearOfPublishing}
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
                  <button className="btn btn-sm sm:btn-md btn-primary w-full sm:w-auto rounded-full capitalize">
                    View Details
                  </button>
                  <button className="btn btn-sm sm:btn-md btn-secondary w-full sm:w-auto rounded-full capitalize">
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
