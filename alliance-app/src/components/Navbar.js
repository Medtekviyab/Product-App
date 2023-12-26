"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleSignInClick = () => {
    router.push("/Signin");
  };

  return (
    <div>
      <nav class="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex title-font font-medium justify-center align-middle items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-0 text-4xl font-extrabold gradient-text">
              QUOT BOT
            </span>
          </Link>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            class="gradient-text inline-flex justify-center items-center py-2 px-4 text-base font-medium text-center text-gray-900 shadow-lg rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            onClick={handleSignInClick}
            style={{
              boxShadow: "0 0 3px 0px #020202, 0 0 3px 0px #0c81f7",
            }}
          >
            Sign In
          </button>
           
          </div>
         
        </div>
      </nav>

      {/* <header className="container max-w-7xl mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
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
            class="gradient-text inline-flex justify-center items-center py-2 px-4 text-base font-medium text-center text-gray-900 shadow-lg rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            onClick={handleSignInClick}
            style={{
              boxShadow: "0 0 3px 0px #020202, 0 0 3px 0px #0c81f7",
            }}
          >
            Sign In
          </button>
        </div>
      </header> */}
    </div>
  );
};

export default Navbar;
