import * as React from "react";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";

export default function VerticalTabs({ setIsNavBarVisible }) {
  return (
    <Box
      className="h-screen bg-slate-950 flex flex-col"
      sx={{ flexGrow: 1, display: "flex" }}
    >
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={() => setIsNavBarVisible(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-md text-white font-bold transition duration-500"
                  : "text-md text-gray-500 hover:text-white hover:cursor-pointer transition duration-500 font-bold"
              }
            >
              HOME
            </NavLink>
          </li>
          <li className="mt-5">
            <NavLink
              to="/library"
              onClick={() => setIsNavBarVisible(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-md text-white font-bold transition duration-500"
                  : "text-md text-gray-500 hover:text-white hover:cursor-pointer transition duration-500 font-bold"
              }
            >
              LIBRARY
            </NavLink>
          </li>
          <li className="mt-5">
            <NavLink
              to="/upcoming"
              onClick={() => setIsNavBarVisible(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-md text-white font-bold transition duration-500"
                  : "text-md text-gray-500 hover:text-white hover:cursor-pointer transition duration-500 font-bold"
              }
            >
              UPCOMING
            </NavLink>
          </li>
          <li className="mt-5">
            <NavLink
              to="/playlists"
              onClick={() => setIsNavBarVisible(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-md text-white font-bold transition duration-500"
                  : "text-md text-gray-500 hover:text-white hover:cursor-pointer transition duration-500 font-bold"
              }
            >
              PLAYLISTS
            </NavLink>
          </li>
          <li className="mt-5">
            <NavLink
              to="/about"
              onClick={() => setIsNavBarVisible(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-md text-white font-bold transition duration-500"
                  : "text-md text-gray-500 hover:text-white hover:cursor-pointer transition duration-500 font-bold"
              }
            >
              ABOUT
            </NavLink>
          </li>
        </ul>
      </nav>
    </Box>
  );
}
