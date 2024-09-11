import { useGetDashboardMetricsQuery } from "../../state/api";
import { TrendingDown, TrendingUp } from "lucide-react";
import numeral from "numeral";
import React from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CardPurchaseSummary = () => {
  const { data, isLoading } = useGetDashboardMetricsQuery();
  const purchaseData = data?.purchaseSummary || [];

  // Calculate the changePercentage manually
  const calculateChangePercentage = (current:number, previous:number) => {
    if (previous === 0) return 0; // Prevent division by zero
    return ((current - previous) / previous) * 100;
  };

  // Get the last data point
  const lastDataPoint = purchaseData[purchaseData.length - 1] || null;

  // Get the previous data point
  const previousDataPoint =
    purchaseData.length > 1 ? purchaseData[purchaseData.length - 2] : null;

  // Calculate change percentage
  const adjustedChangePercentage = lastDataPoint && previousDataPoint
    ? calculateChangePercentage(
        lastDataPoint.totalPurchased,
        previousDataPoint.totalPurchased
      )
    : 0;

  return (
    <div className="flex flex-col justify-between row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-gradient-to-br from-white via-blue-50 to-gray-100 shadow-lg rounded-2xl transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
      {isLoading ? (
        <div className="m-5 animate-pulse">Loading...</div>
      ) : (
        <>
          {/* HEADER */}
          <div>
            <h2 className="text-lg font-semibold mb-2 px-7 pt-5 transition-colors duration-500 ease-in-out hover:text-blue-600">
              Purchase Summary
            </h2>
            <hr />
          </div>

          {/* BODY */}
          <div>
            {/* BODY HEADER */}
            <div className="mb-4 mt-7 px-7">
              <p className="text-xs text-gray-400">Purchased</p>
              <div className="flex items-center">
                <p className="text-2xl font-bold">
                  {lastDataPoint
                    ? numeral(lastDataPoint.totalPurchased).format("$0.00a")
                    : "0"}
                </p>
                {lastDataPoint && (
                  <p
                    className={`text-sm flex ml-3 ${
                      adjustedChangePercentage >= 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {adjustedChangePercentage >= 0 ? (
                      <TrendingUp className="w-5 h-5 mr-1" />
                    ) : (
                      <TrendingDown className="w-5 h-5 mr-1" />
                    )}
                    {Math.abs(parseFloat(adjustedChangePercentage.toFixed(2)))}%
                  </p>
                )}
              </div>
            </div>
            {/* CHART */}
            <ResponsiveContainer width="100%" height={200} className="p-2">
              <AreaChart
                data={purchaseData}
                margin={{ top: 0, right: 0, left: -50, bottom: 45 }}
              >
                <XAxis dataKey="date" tick={false} axisLine={false} />
                <YAxis tickLine={false} tick={false} axisLine={false} />
                <Tooltip
                  formatter={(value: number) => [
                    `$${value.toLocaleString("en")}`,
                  ]}
                  labelFormatter={(label) => {
                    const date = new Date(label);
                    return date.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    });
                  }}
                />
                <Area
                  type="linear"
                  dataKey="totalPurchased"
                  stroke="#8884d8"
                  fill="#8884d8"
                  dot={true}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default CardPurchaseSummary;
