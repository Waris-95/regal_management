"use client";

"use client"

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { Menu } from "lucide-react";
import { setIsSidebarCollapsed } from "@/app/state";

const Sidebar = () => {

  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed);

    const toggleSidebar = () => {
      dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
    }

    const sidebarClassNames = `fixed flex flex-col ${
      isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
    } bg-white transition-all duration-500 overflow-hidden h-full shadow-md z-40`

  return (
    <div className={sidebarClassNames}>
      {/*  logo */}
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>logo</div>
        <h1 className="font-extrabold text-2xl">SARTORIAL STOCK</h1>
      <button className="md:hiddenpx-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100" aria-label="Toggle sidebar" onClick={toggleSidebar}>
        <span className="sr-only">Toggle sidebar</span>
        <Menu className="w-4 h-4" />
      </button>
      </div>

    {/*  links */}
    <div className="flex-grow mt-8">

    </div>

    {/*  footer */}
    <div>
      <p className="text-center text-xs text-gray-500">&copy; 2024 Abdul Waris</p>
    </div>
    </div>
  )
}
export default Sidebar
