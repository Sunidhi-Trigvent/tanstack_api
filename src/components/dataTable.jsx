import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import useFetchRQ from "../api/fetchRQ"; // Import the data-fetching hook
import { Button, TextField } from "@mui/material";
import { useQueryClient } from "react-query"; // Import react-query hooks
import useDeleteRQ from "../api/deleteRQ"; // Updated import
import useCrud from "../hooks/useCrud";

// Main DataTable component
export default function DataTable() {
  const { posts = [], deletePosts } = useCrud(); // Use the custom data-fetching hook to get data
  const [newTitle, setNewTitle] = React.useState(""); // State for new title
  const [newBody, setNewBody] = React.useState(""); // State for new body

  // Define columns separately
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
    {
      field: "actions",
      headerName: "Actions",
      width: 800,
      renderCell: (params) => (
        <React.Fragment>
          {/* The ID of the current row */}
          <Button
            onClick={() => deletePosts(params.id)} // Call delete mutation
            variant="contained"
            color="error"
            size="small"
            style={{ marginRight: 16 }}
          >
            Delete(M)
          </Button>
          {/* Input fields for title and body */}
          <TextField
            label="Add Title"
            variant="outlined"
            onChange={(e) => setNewTitle(e.target.value)}
            style={{ marginRight: 10 }}
          />
          <TextField
            label="Add Body"
            variant="outlined"
            onChange={(e) => setNewBody(e.target.value)}
            style={{ marginRight: 10 }}
          />
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginRight: 10 }}
          >
            Add
          </Button>
          <Button variant="contained" color="secondary" size="small">
            Update
          </Button>
        </React.Fragment>
      ),
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <>
      {/* Data Table */}
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={posts || []} // Pass the fetched data to the DataGrid
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </>
  );
}
