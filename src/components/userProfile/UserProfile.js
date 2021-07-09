import React from "react";
import { useHistory, useParams } from "react-router";
import { useSelector } from "react-redux";
import { Image } from "antd";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "../../actions/usersActions";
import { Button, Typography } from "@material-ui/core";
import "./userProfile.css";
import { blue } from "@material-ui/core/colors";
import GistItem from "../GistItems";

const UserProfile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const { id } = useParams();
  const data = useSelector((state) => state.users);

  const selectedUser = data?.users?.find((item) => {
    return item.id === parseInt(id);
  });
  const history = useHistory();
  if (selectedUser === undefined) {
    history.push("/home");
  }

  const userFiles = Object.keys(selectedUser.files).map((item) => {
    return selectedUser.files[item];
  });

  return (
    <div className="profile-container">
      <div>
        <div className="image-container">
          <Image
            className="image"
            preview={false}
            width={200}
            height={200}
            src={selectedUser.avatar_url}
          />
          <br />
        </div>
        <Typography align="center" variant="h6">
          {selectedUser.name}
        </Typography>
        <div>
          <Button href="https://www.github.com" target="_blank" style={{ color: blue[700] }}>View GitHub Profile</Button>
        </div>
      </div>

      <div className="detail-container">
        {userFiles.map((element, index) => {
          return (
            <GistItem
              key={element.id}
              file={element}
              userName={selectedUser.name}
              userAvatar={selectedUser.avatar_url}
              id={selectedUser.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UserProfile;
