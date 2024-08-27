"use client";
import { Bell, Menu, Moon, Settings, Sun, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full mb-7 px-4 py-2 shadow-lg bg-white rounded-lg">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-6">
        <button
          className="p-3 bg-gray-200 rounded-full hover:bg-blue-200 transition-colors duration-300"
          onClick={() => console.log("Sidebar toggled")}
          aria-label="Toggle Sidebar"
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </button>

        <div className="relative">
          <input
            type="search"
            placeholder="Search for products"
            className="pl-10 pr-4 py-2 w-50 md:w-64 border-2 border-gray-300 bg-gray-50 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="text-gray-400" size={20} />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-6">
          <button
            className="focus:outline-none"
            onClick={() => {}}
            aria-label="Toggle Dark Mode"
          >
            {/* Dark mode toggle logic */}
            <Sun className="text-gray-600 hover:text-blue-500 transition-colors duration-300" size={24} />
          </button>

          <div className="relative">
            <Bell className="cursor-pointer text-gray-600 hover:text-blue-500 transition-colors duration-300" size={24} />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
              9+
            </span>
          </div>

          <hr className="w-px h-8 border-gray-300 mx-4" />

          <div className="flex items-center gap-3 cursor-pointer">
            <Image
              src="https://c.tenor.com/Cgqv0BKaWgEAAAAC/nft.gif"
              alt="Profile"
              width={50}
              height={50}
              className="rounded-full object-cover shadow-md"
            />
            <span className="font-semibold text-gray-700">Dully</span>
          </div>
        </div>

        <Link href="/settings">
          <Settings className="cursor-pointer text-gray-600 hover:text-blue-500 transition-colors duration-300" size={24} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
