"use client";
import Link from "next/link";
import React, { useState } from "react";
import { TbSearch, TbUserCircle } from "react-icons/tb";
import { ImMenu } from "react-icons/im";
import { TbX } from "react-icons/tb";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full border-b dark:border-gray-600">
      <div className="contain flex justify-between items-center p-4">
        <div className="flex items-center">
          <div className="text-2xl font-bold">
            <Link href="/">Lost'n'Found</Link>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="bg-gray-100 dark:bg-gray-700 flex items-center gap-3 rounded-lg p-2">
            <TbSearch />
            <input
              type="text"
              className="bg-transparent outline-none"
              placeholder="Search..."
            />
          </div>
          <Link href="/profile" className="text-2xl">
            <TbUserCircle />
          </Link>
          <DarkModeToggle/>
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={() => setShowMenu(!showMenu)} className="text-2xl">
            {showMenu ? <TbX /> : <ImMenu />}
          </button>
        </div>
      </div>
      {showMenu && (
        <nav className="lg:hidden bg-white w-full border-t">
          <ul className="flex flex-col items-center p-4">
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
              <Link onClick={() => setShowMenu(false)} href="/how-it-works">
                How it Works
              </Link>
            </li>
            <li className="my-2">
              <Link onClick={() => setShowMenu(false)} href="/contact">
                Contact
              </Link>
            </li>
            <li className="my-2 w-full">
              <div className="bg-gray-100 flex items-center gap-3 rounded-lg p-2 w-full">
                <TbSearch />
                <input
                  type="text"
                  className="bg-transparent outline-none w-full"
                  placeholder="Search..."
                />
              </div>
            </li>
            <li className="my-2">
              <Link
                onClick={() => setShowMenu(false)}
                href="/profile"
                className="text-2xl"
              >
                <TbUserCircle />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
