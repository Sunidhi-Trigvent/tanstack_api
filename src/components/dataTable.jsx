import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import useFetchRQ from '../api/fetchRQ'; // Import the data-fetching hook

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "company", headerName: "Company", width: 130 },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 90,
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  const data = useFetchRQ(); // Use the custom data-fetching hook to get data

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data} // Pass the fetched data to the DataGrid
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
