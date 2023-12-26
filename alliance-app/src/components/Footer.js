import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="w-full p-8 mt-10 bg-gray-900 md:flex md:items-center md:justify-between dark:bg-gray-900 dark:border-gray-700">
        <span class="text-3xl ml-24 text-white lg:text-center dark:text-white">
         QUOT BOT
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-md font-medium text-white dark:text-white sm:mt-0">
          <li>
            <a href="#" class=" flex hover:underline mr-20">
              Contact us : quotbotsupport@gmail.com
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
