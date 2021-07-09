import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/Icon";
import { green } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  backgroundColor: {
    backgroundColor: green[400],
  },
}));

const Header = (props) => {
  const rememberMe = localStorage.getItem("token");
  const history = useHistory();
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      className={classes.backgroundColor}
    >
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          aria-label="menu"
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        {/* <img src={Logo} alt="logo" width="200" height="25" style={{backgroundColor: "white"}} /> */}
        <Typography variant="h3" className={classes.title}>
          <Button href="https://www.emumba.com/" color="inherit">
            e M u m b a
          </Button>
          {/* <a ></a> */}
        </Typography>

        {!rememberMe && (
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => history.push("/home")}
          >
            Login
          </Button>
        )}
        {rememberMe && (
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => {
              localStorage.removeItem("token");
              props.rememberHandler();
              return history.push("/auth");
            }}
          >
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
