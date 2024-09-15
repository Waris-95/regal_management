"use client"
import { useGetUsersQuery } from "../state/api"
import Header from "../(components)/Header/index";
import { DataGrid, GridColDef } from "@mui/x-data-grid"

const columns: GridColDef[] = [
  { field: "userId", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
]



const Users = () => {
  const { data: users, isError, isLoading } = useGetUsersQuery();
  if (isLoading) {
    return <div className="py-4">Loading...</div>
  } 
  
  if (isError || !users) {
    <div className="text-center text-red-500 py-4">
      Failed to load products
    </div>
  }
  
  return (
    <div className="flex flex-col">
      <Header name="Users" />
      <DataGrid 
      rows={users}
      columns={columns}
      getRowId={(row) => row.userId}
      checkboxSelection
      className="!text-gray-700 bg-gradient-to-br from-transparent via-blue-200 to-black-100"
     />
    </div>
  )
}

export default Users
