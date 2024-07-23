'use client';

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
          className="text-2xl p-2 border rounded-md font-medium w-full"
          placeholder="Article Title"
          required
        />
        <br />
        <br />
        <label>
          Category<span className="text-red-600">*</span>
        </label>
        <br />
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 rounded-md w-full border"
        >
          <option value="news">News</option>
          <option value="programming">Programming</option>
          <option value="trading">Trading</option>
          <option value="others">Others</option>
        </select>
        <br />
        <br />
        
        <label>
          Banner Image<span className="text-red-600">*</span>
        </label>
        <br />
        <input
          type="file"
          className="p-2 rounded-md border w-full"
          accept=".jpg,.png"
          required
        />
        <br />
        <br />
        <label>
          Body<span className="text-red-600">*</span>
        </label>
        <br />
        <textarea
          className="rounded-md border w-full min-h-[15rem] p-2"
          required
        ></textarea>
        {/* <ReactMarkdown > # Hello, *world*! </ReactMarkdown> */}
        <br />
        <br />
        <button
          className="bg-[#543EE0] text-white py-2 px-4 rounded-md"
        >
          Post
        </button>
      </form>
    </main>
  );
}

export default page