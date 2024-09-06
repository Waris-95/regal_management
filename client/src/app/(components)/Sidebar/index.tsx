"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { LucideIcon, Menu } from "lucide-react";
import { setIsSidebarCollapsed } from "@/app/state";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Archive,
  CircleDollarSign,
  Clipboard,
  Layout,
  SlidersHorizontal,
  User,
} from "lucide-react";
import Image from "next/image";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SideBarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center ${
          isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
        } hover:text-blue-500 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-300 gap-3 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg ${
          isActive ? "bg-blue-500 text-white shadow-lg" : ""
        }`}
      >
        <Icon
          className={`w-6 h-6 !text-gray-700 transition-transform duration-300 ease-in-out transform ${
            isActive ? "text-white" : ""
          } group-hover:scale-110`}
        />
        <span
          className={`${
            isCollapsed ? "hidden" : "block"
          } font-medium text-gray-700 transition-transform duration-500 ease-in-out transform ${
            isActive ? "text-white" : "group-hover:translate-x-1"
          }`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const sidebarClassNames = `fixed flex flex-col ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-gradient-to-b from-white to-gray-100 transition-all duration-700 ease-in-out overflow-hidden h-full shadow-lg z-40`;

  return (
    <div className={sidebarClassNames}>
      {/* Logo */}
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
          isSidebarCollapsed ? "px-5" : "px-8"
        }`}
      >
        <div className="transform transition-transform duration-500 hover:rotate-12">
          <Image
            src="https://icon-library.com/images/inventory-icon-png/inventory-icon-png-11.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>
        <h1
          className={`${
            isSidebarCollapsed ? "hidden" : "block"
          } font-extrabold text-2xl text-gray-800 transition-opacity duration-500 ease-in-out`}
        >
          STOCKR
        </h1>

        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100 transition-transform duration-500 transform hover:rotate-180"
          aria-label="Toggle sidebar"
          onClick={toggleSidebar}
        >
          <span className="sr-only">Toggle sidebar</span>
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* Links */}
      <div className="flex-grow mt-8 space-y-2">
        <SideBarLink
          href="/dashboard"
          icon={Layout}
          label="Dashboard"
          isCollapsed={isSidebarCollapsed}
        />
        <SideBarLink
          href="/inventory"
          icon={Archive}
          label="Stock"
          isCollapsed={isSidebarCollapsed}
        />
        <SideBarLink
          href="/products"
          icon={Clipboard}
          label="Products"
          isCollapsed={isSidebarCollapsed}
        />
        <SideBarLink
          href="/users"
          icon={User}
          label="Users"
          isCollapsed={isSidebarCollapsed}
        />
        <SideBarLink
          href="/settings"
          icon={SlidersHorizontal}
          label="Setting"
          isCollapsed={isSidebarCollapsed}
        />
        <SideBarLink
          href="/expenses"
          icon={CircleDollarSign}
          label="Expenses"
          isCollapsed={isSidebarCollapsed}
        />
      </div>

      {/* Footer */}
      <div
        className={`${
          isSidebarCollapsed ? "hidden" : "block"
        } mb-10 text-center transition-opacity duration-500 ease-in-out`}
      >
        <p className="text-xs text-gray-500 hover:text-gray-700 transition-all duration-300">
          &copy; 2024 Abdul Waris
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
