"use client";

import { useState } from "react";

const page = () => {
  const [edit, setEdit] = useState(false);

  return (
    <section class="relative">
      <h1 class="text-center sm:text-3xl text-2xl font-medium title-font mt-6 text-gray-900 dark:text-white">
        {/* Profile */}
      </h1>
      <div class="container px-5 py-6 mx-auto">
        <div className="flex justify-center">
          <div class="text-center w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              class="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>
        <h2 className="text-center">FirstName LastName</h2>
        <div class="flex flex-col text-center w-full mb-12">
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify.
          </p>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="fname" class="leading-7 text-sm">
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="firstName"
                  class={` ${
                    edit ? "bg-gray-100" : "bg-gray-300"
                  } w-full  dark:bg-gray-700 dark:text-gray-200  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                  disabled={!edit}
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="lname" class="leading-7 text-sm">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lname"
                  name="lastName"
                  class={`${
                    edit ? "bg-gray-100" : "bg-gray-300"
                  } w-full bg-gray-100 dark:bg-gray-700 dark:text-gray-200  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                  disabled={!edit}
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="mn" class="leading-7 text-sm">
                  Matric No.
                </label>
                <input
                  type="text"
                  id="mn"
                  name="matricNumber"
                  class={`${
                    edit ? "bg-gray-100" : "bg-gray-300"
                  } w-full bg-gray-100 dark:bg-gray-700 dark:text-gray-200  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                  disabled={!edit}
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class={`${
                    edit ? "bg-gray-100" : "bg-gray-300"
                  } w-full bg-gray-100 dark:bg-gray-700 dark:text-gray-200  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                  disabled={!edit}
                />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  class={`${
                    edit ? "bg-gray-100" : "bg-gray-300"
                  } w-full bg-gray-100 dark:bg-gray-700 dark:text-gray-200 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
                  disabled={!edit}
                ></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <button
                type="button"
                onClick={() => setEdit(true)}
                class={`${
                  edit ? "hidden" : "block"
                } flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg`}
              >
                Edit Profile
              </button>
              <button
                type="button"
                onClick={() => setEdit(false)}
                class={` ${
                  edit ? "block" : "hidden"
                } flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg`}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
