"use client";

import Editor from "@/components/post/Editor";

const page = () => {
  return (
    <main className="contain p-2 md:p-4">
      <h2 className="text-center">Create Post</h2>
      <br />
      <form action="">
        <label>
          Title<span className="text-red-600">*</span>{" "}
        </label>{" "}
        <br />
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="text-2xl w-full h-12 placeholder-gray-400 shadow-sm bg-transparent font-normal leading-7 rounded-lg p-2 border border-gray-200 focus:outline-none"
          placeholder="A Black Backpack Found on Campus"
          required
        />
        <br />
        <br />
        <label>
          Banner Image<span className="text-red-600">*</span>
        </label>
        <br />
        <input
          type="file"
          className="p-2 rounded-md w-full h-12 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 border border-gray-200 focus:outline-none"
          accept=".jpg,.png"
          required
        />
        <br />
        <br />
        <label>
          Body<span className="text-red-600">*</span>
        </label>
        <br />
        <Editor />
        <br />
        <br />
        <button className="bg-[#543EE0] text-white py-2 px-4 rounded-md">
          Post
        </button>
      </form>
    </main>
  );
};

export default page;
