import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./userListView.css";
import { useHistory } from "react-router-dom";

const columns = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "date", headerName: "Date", flex: 1 },
  { field: "time", headerName: "Time", flex: 1 },
  { field: "keyword", headerName: "Keyword", flex: 1 },
  { field: "notebookName", headerName: "Notebook Name", flex: 1 },
  { field: "starShare", headerName: " ", flex: 1 },
];

const UserListView = (props) => {
  const history = useHistory();
  return (
    <div className="list-view-container">
      <DataGrid
        rows={props.users}
        columns={columns}
        pageSize={14}
        onSelectionModelChange={(newSelection) => {
          return history.push("/profile/" + newSelection.selectionModel);
        }}
      />
    </div>
  );
};

export default UserListView;
