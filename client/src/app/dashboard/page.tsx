"use client"

import PopularProducts from "./PopularProducts"

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <PopularProducts/>
      <div className="row-span-3 xl:row-span-6 bg-gray-500"/>
      <div className="row-span-3 bg-gray-500"/>
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
    </div>
  )
}

export default Dashboard
