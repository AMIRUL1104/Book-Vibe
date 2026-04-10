import WishList from "./WishList";

function ListedBooks() {
  return (
    <section className="max-w-360 mx-auto mb-5  flex max-lg:flex-col items-center justify-evenly max-sm:gap-7">
      <div className="w-full">
        {/* listed books label */}
        <div className="w-full px-2.5 flex items-center justify-between mb-5">
          <h2 className="text-2xl font-semibold text-center">Books</h2>

          <button
            className="btn"
            popoverTarget="popover-1"
            style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
          >
            sort by
          </button>

          <ul
            className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
            popover="auto"
            id="popover-1"
            style={
              { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
            }
          >
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of Pages</a>
            </li>
            <li>
              <a>Publisher Year</a>
            </li>
          </ul>
        </div>

        {/* name of each tab group should be unique */}
        <div className="tabs tabs-lift px-2.5">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Read"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <h2 className="text-3xl font-bold text-center ">
              No books to display
            </h2>
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="WishList"
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <WishList />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ListedBooks;
