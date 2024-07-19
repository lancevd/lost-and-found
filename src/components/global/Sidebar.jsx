"use client";
import Link from "next/link";
import React, { useState } from "react";
import { TbSearch, TbUserCircle, TbX } from "react-icons/tb";
import { ImMenu } from "react-icons/im";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="lg:flex lg:flex-row">
      <div className="lg:hidden flex items-center justify-between p-4 border-b bg-white">
        <div className="text-2xl font-bold">
          <Link href="/">My Blog</Link>
        </div>
        <button onClick={() => setShowMenu(!showMenu)} className="text-2xl">
          {showMenu ? <TbX /> : <ImMenu />}
        </button>
      </div>
      <aside
        className={`fixed lg:static top-0 left-0 w-64 h-full bg-white shadow-lg lg:shadow-none z-50 transform ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-200 ease-in-out`}
      >
        <div className="p-4 border-b flex items-center justify-between lg:hidden">
          <div className="text-2xl font-bold">
            <Link href="/">My Blog</Link>
          </div>
          <button onClick={() => setShowMenu(false)} className="text-2xl">
            <TbX />
          </button>
        </div>
        <nav className="p-4">
          <ul className="flex flex-col gap-4">
            <li className="my-2">
              <Link onClick={() => setShowMenu(false)} href="/">
                Home
              </Link>
            </li>
            <li className="my-2">
              <Link onClick={() => setShowMenu(false)} href="/about">
                About
              </Link>
            </li>
            <li className="my-2">
              <Link onClick={() => setShowMenu(false)} href="/blog">
                Blog
              </Link>
            </li>
            <li className="my-2">
              <Link onClick={() => setShowMenu(false)} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="bg-gray-100 flex items-center gap-3 rounded-lg p-2 mt-4">
            <TbSearch />
            <input
              type="text"
              className="bg-transparent outline-none"
              placeholder="Search..."
            />
          </div>
        </nav>
        <div className="p-4 border-t flex items-center justify-between lg:justify-start lg:gap-4">
          <Link href="/profile" className="text-2xl">
            <TbUserCircle />
          </Link>
        </div>
      </aside>
      <main className="lg:ml-64 p-4 w-full">
        {/* Your main content here */}
      </main>
    </div>
  );
};

export default Sidebar;
