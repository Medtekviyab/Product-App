import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <header className="container max-w-7xl mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <Link
          href="/"
          className="flex title-font font-medium justify-center align-middle items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-0 text-4xl font-extrabold gradient-text">
            QUOT BOT
          </span>
        </Link>

        <div className="flex space-x-4">
          <button
            type="button"
            class="inline-flex justify-center items-center py-2 px-4 text-base font-medium text-center text-gray-900 shadow-lg rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            style={{
              boxShadow: '0 0 5px 1px black' 
            }}>
            Sign In
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
