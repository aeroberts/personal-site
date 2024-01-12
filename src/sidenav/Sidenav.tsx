import React from "react";
import "./Sidenav.css";
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Drawer from "@mui/material/Drawer";

import {Link, useLocation} from "react-router-dom";
const drawerWidth = 240;

function Sidenav() {
  let location = useLocation();
  return (
      <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
      >
        <Toolbar />
        <Divider />

        <List>
          {[
            {path: '/', routeName: 'Home'},
            {path: '/about', routeName: 'About'},
            {path: '/resume', routeName: 'Resume'},
            {path: '/nothing-here', routeName: 'Nothing'}
          ].map(({path, routeName}) => (
              <ListItem key={path} disablePadding>
                <ListItemButton selected={location.pathname === path} component={Link} to={path}>
                  <ListItemText primary={routeName} />
                </ListItemButton>
              </ListItem>
          ))}
        </List>
      </Drawer>
  );
}

export default Sidenav;
