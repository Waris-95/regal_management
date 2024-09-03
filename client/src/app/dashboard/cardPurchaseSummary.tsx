import { useGetDashboardMetricsQuery } from "../state/api";


const CardPurchaseSummary = () => {
  const { data, isLoading } = useGetDashboardMetricsQuery();
  const purchaseData = data?.purchaseSummary || [];

  return (
    <div className='flex flex-col justify-between row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-gray-500'>
      PurchaseSummary
    </div>
  )
}

export default CardPurchaseSummary
