import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import UserCard from "./UserGridCard";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10%",
    minWidth: 275,
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
    flex: "0 0 33.333333%",
    justifyContent: "space-between",
  },
}));

const UserGridView = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {props.users.map((element) => {
        return (
          <Grid key={element.node_id} container item xs={4} spacing={3}>
            <UserCard 
            user={element} />
          </Grid>
        );
      })}
    </div>
  );
};

export default UserGridView;
