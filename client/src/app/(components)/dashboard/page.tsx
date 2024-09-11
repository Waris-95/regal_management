"use client"

import { CheckCircle, Package, Tag, TrendingDown, TrendingUp } from "lucide-react"
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

      {/* CUSTOMER & EXPENSES */}
      <StatCard
        title="Customer & Expenses"
        primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
        dateRange="22 - 29 September 2024"
        details={[
          {title: "Customer Growth", amount: "200.00", changePercentage: 131, IconComponent: TrendingUp },
          {title: "Expenses", amount: "20.00", changePercentage: -19, IconComponent: TrendingDown }
        ]}
      />

      {/* PENDING ORDERS & DUE AMOUNTS */}
     <StatCard
        title="Pending Orders & Due Amounts"
        primaryIcon={<CheckCircle className="text-blue-600 w-6 h-6" />}
        dateRange="22 - 29 September 2024"
        details={[
          {title: "Pending Orders", amount: "150.00", changePercentage: 11, IconComponent: TrendingUp },
          {title: "Due Amounts", amount: "220.00", changePercentage: -9, IconComponent: TrendingDown }
        ]}
      />

      {/* CLEARANCES & DISCOUNTS */}
      <StatCard
        title="Clearances & Discounts"
        primaryIcon={<Tag className="text-blue-600 w-6 h-6" />}
        dateRange="22 - 29 September 2024"
        details={[
          {title: "Discounts", amount: "780.00", changePercentage: 98, IconComponent: TrendingUp },
          {title: "Discounts", amount: "290.00", changePercentage: 2, IconComponent: TrendingUp }
        ]}
      />
    </div>
  )
}

export default Dashboard
