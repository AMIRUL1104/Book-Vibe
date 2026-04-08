import { NavLink } from "react-router";
function Header() {
  return (
    <header className="max-w-360 mx-auto mb-5 sticky top-0 z-10">
      <div className="navbar bg-base-100 shadow-sm flex items-center justify-evenly">
        <div className="navbar-start">
          <div className="dropdown sm:hidden ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 font-medium rounded-2xl border border-green-500 px-2 py-1"
                    : "text-green-500"
                }
              >
                Home
              </NavLink>
              <NavLink to={"/listed-books"}>Listed Books</NavLink>
              <NavLink to={"/pages-to-read"}>Pages to Read</NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden sm:block">
          <nav>
            <ul
              tabIndex="-1"
              className=" flex items-center justify-center gap-4"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "btn btn-soft" : "btn btn-ghost"
                }
              >
                Home
              </NavLink>
              <NavLink
                to={"/listed-books"}
                className={({ isActive }) =>
                  isActive ? "btn btn-soft" : "btn btn-ghost"
                }
              >
                Listed Books
              </NavLink>
              <NavLink
                to={"/pages-to-read"}
                className={({ isActive }) =>
                  isActive ? "btn btn-soft" : "btn btn-ghost"
                }
              >
                Pages to Read
              </NavLink>
            </ul>
          </nav>
        </div>
        <div className="navbar-end space-x-2.5">
          <button className="btn btn-soft capitalize ">sing in</button>
          <button className="btn btn-soft capitalize ">sing up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
