"use client"
import { useGetProductsQuery } from "../state/api"
import Header from "../(components)/Header/index";
import { DataGrid, GridColDef } from "@mui/x-data-grid"

const columns: GridColDef[] = [
  { field: "productId", headerName: "ID", width: 90 },
  { field: "name", headerName: "Product Name", width: 200 },
  {
    field: "price",
    headerName: "Price",
    width: 110,
    type: "number",
    valueGetter: (value, row) => `$${row.price}`,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 110,
    type: "number",
    valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
  },
  {
    field: "stockQuantity",
    headerName: "Stock Quantity",
    width: 150,
    type: "number",
  },
];

const Inventory = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();
  if (isLoading) {
    return <div className="py-4">Loading...</div>
  } 
  
  if (isError || !products) {
    <div className="text-center text-red-500 py-4">
      Failed to load products
    </div>
  }
  
  return (
    <div className="flex flex-col">
      <Header name="Stock" />
      <DataGrid 
      rows={products}
      columns={columns}
      getRowId={(row) => row.productId}
      checkboxSelection
      className="!text-gray-700 bg-gradient-to-br from-white via-blue-100 to-blue-100"
     />
    </div>
  )
}

export default Inventory
