import { useEffect } from "react";
import CardWidget from "../CartWidget/CardWidget";
import { Link, NavLink } from "react-router-dom";


function NavBar({cartCount, title}) {
  useEffect(() => {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    return () => {
      menuToggle.removeEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    };
  }, []);

  return (
    <>
      <nav className="bg-white border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
  <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
    Lucho Store
  </span>
</Link>

          <div className="flex items-center">
            <button
              id="menu-toggle"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden">
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          <div className="w-full md:block md:w-auto hidden" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <NavLink
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  to="/category/camiseta"
                >
                  Camisetas
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  to="/category/pelota"
                >
                  Pelotas
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  to="/category/botines"
                >
                  Botines
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  to="/category/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                  <CardWidget />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;