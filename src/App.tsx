import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';

import "./App.css";
import Sidenav from './sidenav/Sidenav';
import Box from "@mui/material/Box";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Drawer from "@mui/material/Drawer";
import AppBar from '@mui/material/AppBar';

import {Routes, Route, Outlet, Link, useLocation} from "react-router-dom";
import {Typography} from "@mui/material";

const drawerWidth = 240;
function App() {
    const location = useLocation();
  return (
    <Box className="main-box" sx={{display: 'flex', height: '100%'}}>
        <CssBaseline />
        <AppBar
            position="fixed"
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }} >
            <Toolbar>
                Alex Roberts
            </Toolbar>
        </AppBar>

        <Sidenav />
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Box>
  );
}

function Layout() {
  return (
    <div>
        <Toolbar />
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
            <Outlet />
        </Box>
    </div>
  );
}

function Home() {
  return (
    <Box>
      <h2>Home</h2>
    </Box>
  );
}

function About() {
  return (
    <Box>
      <h2>About</h2>
        <Typography>
            About content goes here
        </Typography>
    </Box>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
