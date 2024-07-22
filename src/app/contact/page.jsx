import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineEmail, MdOutlineWhatsapp } from "react-icons/md";


const page = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="lg:mb-0 mb-10">
            <div className="group w-full h-full">
              <div className="relative h-full">
                <img
                  src="https://pagedone.io/asset/uploads/1696488602.png"
                  alt="ContactUs tailwind section"
                  className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700"
                />
                <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                  Contact us
                </h1>
                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                  <div className="bg-white dark:bg-slate-400 rounded-lg p-6 block">
                    <a href="javascript:;" className="flex items-center mb-6">
                      <MdOutlineWhatsapp className="text-[#4F46E5] text-2xl" />
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        470-601-1911
                      </h5>
                    </a>
                    <a href="javascript:;" className="flex items-center mb-6">
                      <MdOutlineEmail className="text-[#4F46E5] text-2xl" />
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        1234@gmail.com
                      </h5>
                    </a>
                    <a href="javascript:;" className="flex items-center">
                      <HiOutlineLocationMarker className="text-[#4F46E5] text-3xl" />
                      <h5 className="text-black text-base font-normal leading-6 ml-5 text-wrap">
                        University of Ilorin
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-gray-100 dark:bg-gray-700 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <h2 className="text-indigo-800 dark:text-white font-manrope text-4xl font-semibold leading-10 mb-11">
              Send Us A Message
            </h2>
            <input
              type="text"
              className="w-full h-12 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Name"
              required
            />
            <input
              type="text"
              className="w-full h-12 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Email"
              required
            />
            <input
              type="text"
              className="w-full h-12 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Phone"
              required
            />
            <br />
            <textarea
              type="text"
              className="w-full placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none pl-4 mb-10"
              rows={5}
              placeholder="Message"
              required
            />
            <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default page;
