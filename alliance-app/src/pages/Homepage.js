import React from "react";

const Homepage = () => {
  return (
    <div>
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-gray">
            Welcome to the <span style={{ color: '#0C81F7' }}>Quotation Bot</span>
          </h1>

          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Quotation AI bots curate wisdom from a myriad of sources, offering
            tailored inspiration at your fingertips with just a simple prompt.
            They harness AI to distill vast knowledge into profound, relevant
            quotes.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Lets Go
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
    </div>
  );
};

export default Homepage;
