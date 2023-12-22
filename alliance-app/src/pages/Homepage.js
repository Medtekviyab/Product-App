import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="py-8 px-4 mx-auto max-w-screen-xl justify-content: flex-start lg:py-16">
        <section class="bg-white dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div class="flex flex-col justify-center">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-gray">
                Welcome to the{" "}
                <span style={{ color: "#0C81F7" }}>Quotation Bot.</span>
              </h1>
              <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                Quotation AI bots curate wisdom from a myriad of sources,
                offering tailored inspiration at your fingertips with just a
                simple prompt. They harness AI to distill vast knowledge into
                profound, relevant quotes.
              </p>
              <form className="max-w-md mx-full flex items-center">
                <div className="relative w-full">
                  <div className="flex items-center pl-3.5 pointer-events-none absolute inset-y-0 left-0">
                    <svg
                      className="w-4 h-4 text-gray-900 dark:text-gray-900"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="default-email"
                    className="block w-full p-4 pl-10 text-sm text-black border border-gray-600 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-900 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your email here..."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2 bg-black border border-black hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-black dark:border-black dark:placeholder-black dark:focus:ring-white-800"
                  >
                    Get Started
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>

      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      <div className="text mt-10">
        <p
          className="text-base lg:text-4xl font-bold text-center"
          style={{ color: "#0C81F7" }}
        >
          The features Makes the difference
        </p>
      </div>

      <div class="flex justify-center mt-10">
        <a
          href="#"
          class="block sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-4 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0C81F7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-microscope"
          >
            <path d="M6 18h8" />
            <path d="M3 22h18" />
            <path d="M14 22a7 7 0 1 0 0-14h-1" />
            <path d="M9 14h2" />
            <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
            <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
          </svg>
          <h5 class="mb-2 mt-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  text-left">
            MICRO
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400  text-left">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>

        <a
          href="#"
          class="block sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0C81F7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-bot"
          >
            <path d="M12 8V4H8" />
            <rect width="16" height="12" x="4" y="8" rx="2" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
          </svg>
          <h5 class="mb-2 mt-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  text-left">
            ROBOT
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400  text-left">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>

        <a
          href="#"
          class="block sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0C81F7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-activity-square"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M17 12h-2l-2 5-2-10-2 5H7" />
          </svg>

          <h5 class="mb-2 mt-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  text-left">
            ACTIVITY
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400  text-left">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>

        <a
          href="#"
          class="block sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0C81F7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-file-text"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" x2="8" y1="13" y2="13" />
            <line x1="16" x2="8" y1="17" y2="17" />
            <line x1="10" x2="8" y1="9" y2="9" />
          </svg>
          <h5 class="mb-2 mt-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  text-left">
            FILE
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400  text-left">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
      </div>
    </>
  );
};

export default Homepage;
