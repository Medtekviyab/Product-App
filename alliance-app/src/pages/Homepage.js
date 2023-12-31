import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

const Homepage = () => {
  return (
    <>
      <div className="py-8 px-4 mx-auto max-w-screen-xl justify-content: flex-start lg:py-16">
        <section class="bg-white">
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
                <div className="relative w-full shadow-lg rounded-lg">
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
            <div class="flex justify-end">
              <Image
                src="/Bot.svg"
                alt="product preview"
                width="500"
                height="500"
                class="max-w-md h-auto"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl -mt-60 sm:-top-80"
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

      <div
        className="text mt-0 mb-5 flex-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <p className="text-base lg:text-4xl font-bold">
          Our <span style={{ color: "#0C81F7" }}>promise</span> to you
        </p>
        <p className="text-base lg:text-1xl" style={{ maxWidth: "600px" }}>
          Trust us to handle your bookkeeping, finance, and accounting needs
          while you focus on growing your business.
        </p>
      </div>

      <div class="card_container">
        <div class="card">
          <div class="circle-background">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-truck"
            >
              <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
              <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
              <circle cx="7" cy="18" r="2" />
              <path d="M15 18H9" />
              <circle cx="17" cy="18" r="2" />
            </svg>
          </div>
          <h5> DELIVERY </h5>
          <p>
            {" "}
            Through its lens, the microscope unveils the extraordinary within
            the seemingly ordinary, magnifying the essence of life itself.
          </p>
        </div>
        <div class="card">
          <div class="circle-background">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-activity-square"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M17 12h-2l-2 5-2-10-2 5H7" />
            </svg>
          </div>
          <h5> ROBOT </h5>
          <p>
            {" "}
            Through its lens, the microscope unveils the extraordinary within
            the seemingly ordinary, magnifying the essence of life itself.
          </p>
        </div>
        <div class="card">
          <div class="circle-background">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
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
          </div>
          <h5> FILE </h5>
          <p>
            {" "}
            Through its lens, the microscope unveils the extraordinary within
            the seemingly ordinary, magnifying the essence of life itself.
          </p>
        </div>
      </div>

    </>
  );
};

export default Homepage;
