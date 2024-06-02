import { useAuth0 } from "@auth0/auth0-react";
import { Link, useLocation } from "react-router-dom";
import AuthButton from "@/app/components/Navbar/AuthButton.tsx";
import { NAVBAR_PAGES } from "@/app/components/Navbar/constants.ts";
import { NAVBAR_STYLES } from "@/app/components/Navbar/styles.ts";
import LogoSvg from "../../../../public/logo-no-background.svg";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  const { pathname } = useLocation();

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className={"flex gap-2"}>
          <img src={LogoSvg} className="h-16" alt="New Reddit" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            New Reddit
          </span>
        </div>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <AuthButton />

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-menu"
            aria-expanded="false"
            popovertarget="navbar-menu"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between sticky w-full md:flex md:w-auto md:order-1"
          id="navbar-menu"
          popover={"auto"}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {NAVBAR_PAGES.map(({ name, to, hasAuthentication }) => {
              const isHighlighted = to === pathname;
              const linkColor = isHighlighted
                ? NAVBAR_STYLES.link.highlighted
                : NAVBAR_STYLES.link.ordinary;

              if (hasAuthentication && !isAuthenticated) {
                return null;
              }

              return (
                <li key={name}>
                  <Link to={to} className={linkColor}>
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
