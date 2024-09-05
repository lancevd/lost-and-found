"use client";

import React, { useState } from "react";
import Editor from "@/components/post/Editor";

const Page = () => {
  const [title, setTitle] = useState("");
  const [bannerImage, setBannerImage] = useState(null);
  const [body, setBody] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBannerImageChange = (e) => {
    setBannerImage(e.target.files[0]);
  };

  const handleBodyChange = (content) => {
    console.log("Editor content:", content);
    setBody(content);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the state values to debug
    console.log("Title:", title);
    console.log("Banner Image:", bannerImage);
    console.log("Body:", body);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("bannerImage", bannerImage);
    formData.append("body", body);

    // Log form data to console
    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });

    // Example API call (adjust the URL and method as needed)
    /*
    fetch("/api/posts", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setTitle("");
        setBannerImage(null);
        setBody("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    */
  };

  return (
    <main className="contain p-2 md:p-4">
      <h2 className="text-center">Create Post</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          Title<span className="text-red-600">*</span>{" "}
        </label>{" "}
        <br />
        <input
          onChange={handleTitleChange}
          value={title}
          id="title"
          name="title"
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
          name="bannerImage"
          id="bannerImage"
          onChange={handleBannerImageChange}
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
        <Editor onChange={handleBodyChange} />
        <br />
        <br />
        <button
          type="submit"
          className="bg-[#543EE0] text-white py-2 px-4 rounded-md"
        >
          Post
        </button>
      </form>
    </main>
  );
};

export default Page;
