import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";

import "./App.css";
import About from "./about/About";
import Home from "./home/Home";
import Resume from "./resume/Resume";
import Sidenav from "./sidenav/Sidenav";

const drawerWidth = 240;
function App() {
  return (
    <Box className="main-box" sx={{ display: "flex", height: "100%" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>Alex Roberts</Toolbar>
      </AppBar>

      <Sidenav />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Box>
  );
}

function Layout() {
  return (
    <div className="main-content">
      <Toolbar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Outlet />
      </Box>
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
