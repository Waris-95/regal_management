"use client"

import { Package, TrendingDown, TrendingUp } from "lucide-react"
import CardExpenseSummary from "./cardExpenseSummary"
import CardPopularProducts from "./cardPopularProducts"
import CardPurchaseSummary from "./cardPurchaseSummary"
import CardSalesSummary from "./cardSalesSummary"
import StatCard from "./statCard"

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <StatCard
        title="Customer & Expenses"
        primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
        dateRange="22 - 29 September 2024"
        details={[
          {title: "Customer Growth", amount: "200.00", changePercentage: 131, IconComponent: TrendingUp },
          {title: "Expenses", amount: "20.00", changePercentage: -19, IconComponent: TrendingDown }
        ]}
      />
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
    </div>
  )
}

export default Dashboard
