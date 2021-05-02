import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// APPBAR Imports
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import AnnouncementRoundedIcon from "@material-ui/icons/AnnouncementRounded";
import VpnKeyRoundedIcon from "@material-ui/icons/VpnKeyRounded";
import SupervisedUserCircleRoundedIcon from "@material-ui/icons/SupervisedUserCircleRounded";
import PeopleOutlineRoundedIcon from "@material-ui/icons/PeopleOutlineRounded";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import ListSubheader from "@material-ui/core/ListSubheader";
import PagesRoundedIcon from "@material-ui/icons/PagesRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsApplicationsRoundedIcon from "@material-ui/icons/SettingsApplicationsRounded";
import Button from "@material-ui/core/Button"
//CONTENTS
// import TableList from "../List/TableList"
import BtnModal from "../Modal/BtnModal"
import CloseIcon from '@material-ui/icons/Close';
import BasicTable from "../List/table"
import Form1 from "../anotherForm/from1"
import SimpleFade from "../../try"



// SOME JAVASCRIPT
const DrawerColor = "#212C32";
const DrawerFont = "#D8DBDC";
const drawerWidth = 270;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    height: 140,
    width: 100,
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  CloseButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: DrawerColor,
    color: DrawerFont,
    overflow: "hidden",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  
}));

// EXPORT CODE

function Appbar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [Open2, setOpen2] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick2 = () => {
    setOpen2(!Open2);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            className={classes.CloseButton}
          >
            <CloseIcon fontSize="inherit" style={{marginBottom:-30}}  />
          </IconButton>
      <Typography
        varient="h1"
        noWrap
        style={{ textAlign: "center", padding: 20, fontSize: 20 }}
      >
        Dashboard
      </Typography>
      <Divider />

      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            style={{ backgroundColor: "#192126" }}
          >
            ADMINISTRATION
          </ListSubheader>
        }
        className={(classes.root, classes.drawerColor)}
      >
        {/* Dashboard */}
        <ListItem button>
          <ListItemIcon>
            <DashboardRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        {/* USER */}
        <ListItem
          button
          onClick={handleClick}
          style={{ backgroundColor: "#1D272C" }}
        >
          <ListItemIcon>
            <PeopleOutlineRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Users,Roles" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          style={{ backgroundColor: "#2B3A41" }}
        >
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <PeopleOutlineRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <SupervisedUserCircleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Roles" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <VpnKeyRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Permissions" />
            </ListItem>
          </List>
        </Collapse>
        {/* NEWS */}
        <ListItem button onClick={handleClick2}>
          <ListItemIcon>
            <AnnouncementRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="News" />
          {Open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={Open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <AnnouncementRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Alert" />
            </ListItem>
          </List>
        </Collapse>
        {/* PAGES */}
        <ListItem button>
          <ListItemIcon>
            <PagesRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItem>
        {/* MENU */}
        <ListItem button>
          <ListItemIcon>
            <MenuRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Menu" />
        </ListItem>
        {/* ADVANCE */}
        <ListItem button>
          <ListItemIcon>
            <SettingsApplicationsRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Advanced" />
        </ListItem>
        {/* SUBHEADER */}
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          style={{ backgroundColor: "#192126", color: "#898E91" }}
        >
          USER
        </ListSubheader>
        {/* LOGOUT */}
        <ListItem button>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{ backgroundColor: "#212C32" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
         
          <Typography variant="h6" noWrap>
            Admin/User
          </Typography>
        </Toolbar>
      </AppBar>
      <nav
        className={classes.drawer}
        aria-label="mailbox folders"
        style={{ backgroundColor: "#212c32" }}
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* < BtnModal />
        <BasicTable/> */}
       
        {/* <TableDisplay/> */}
        <Form1/> 
         {/* <SimpleFade/> */}
       
      </main>
    </div>
  );
}

Appbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Appbar;
