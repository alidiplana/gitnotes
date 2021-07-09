import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10%",
    minWidth: 275,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const UserCard = (props) => {
  const classes = useStyles();
  const hash = <span className={classes.bullet}>#</span>;
  const forwardSlash = <span className={classes.bullet}>/</span>;
  let notebookNamelength = props.user.notebookName.map((element) => {
    return element.length;
  });
  var sum = notebookNamelength.reduce(function (a, b) {
    return a + b;
  }, 0);
  const length = props.user.name.length + sum;
  const history = useHistory();
  return (
    <React.Fragment>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            style={{ textAlign: "left" }}
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {forwardSlash} <br />
            {forwardSlash} Server.m <br />
            {forwardSlash} Loop <br />
            {forwardSlash} <br />
            {forwardSlash} Created by Fletcher Fowler on 8/19/12 <br />
            {forwardSlash} <br />
            {hash} import "Server.h" <br />
            {hash} import "Server.h" <br />
            {hash} import "Server.h" <br />
            {hash} import "Server.h" <br />
          </Typography>

          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar alt={props.user.name} src={props.user.avatar_url} />
            <Typography
              variant="body2"
              component="p"
              style={{ textAlign: "left", color: blue[700] }}
            >
              {" "}
              {props.user.name}
              {" / "}
            </Typography>
            <Typography
              style={{
                textAlign: "left",
                color: blue[700],
                fontWeight: "bold",
              }}
            >
              {length < 25 && <div>{props.user.notebookName}</div>}
              {length >= 25 && (
                <div>
                  {props.user.notebookName[0].slice(props.user.name.length, 25)}
                </div>
              )}
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button onClick={() => history.push("/profile/" + props.user.id)}>
            View profile
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default UserCard;
