import Link from "next/link";
import React from "react";

const PostCard = () => {
  return (
    <div className="sm:w-1/2 mb-10 px-4">
      <div className="rounded-lg h-64 overflow-hidden">
        <Link href="/post/details" className="w-full h-full">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src="https://dummyimage.com/1201x501"
          />
        </Link>
      </div>
      <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
        Buy YouTube Videos
      </h2>
      <p className="leading-relaxed text-base">
        Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole
        brunch, slow-carb neutra irony.
      </p>
      <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
        Button
      </button>
    </div>
  );
};

export default PostCard;
