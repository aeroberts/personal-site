import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./Sidenav.css";

interface RouteInfo {
  path: string;
  routeName: string;
}

const ROUTES: RouteInfo[] = [
  { path: "/", routeName: "Home" },
  { path: "/about", routeName: "About" },
  { path: "/resume", routeName: "Resume" },
  { path: "/nothing-here", routeName: "Nothing" },
];

const drawerWidth = 240;

function Sidenav() {
  let location = useLocation();
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />

      <List>
        {ROUTES.map(({ path, routeName }) => (
          <ListItem key={path} disablePadding>
            <ListItemButton
              selected={location.pathname === path}
              component={Link}
              to={path}
            >
              <ListItemText primary={routeName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidenav;
