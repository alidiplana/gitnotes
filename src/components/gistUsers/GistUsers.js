import React, { useEffect, useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FiGrid } from "react-icons/fi";
import "./GistUsers.css";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import UserGridView from "../UserGridView";
import UserListView from "../userListView/UserListView";
import { fetchUser } from "../../actions/usersActions";

const GistUsers = () => {
  const [viewType, setViewType] = useState("grid-view");
  const data = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

    const handleChange = (event, val) => {
      setViewType(val);
    };

  return (
    <div className="container">
      <ToggleButtonGroup
        value={viewType}
        exclusive
        onChange={handleChange}
        aria-label="text alignment"
      >
        <ToggleButton value="list-view">
          <FiGrid />
        </ToggleButton>
        <ToggleButton value="grid-view">
          <AiOutlineUnorderedList />
        </ToggleButton>
      </ToggleButtonGroup>
      {viewType === "grid-view" ? <UserListView users={data.users}/> : <UserGridView users={data.users}/>}
    </div>
  );
};

export default GistUsers;
