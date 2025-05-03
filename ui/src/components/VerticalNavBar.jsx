import * as React from "react";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";

export default function VerticalTabs() {
  return (
    <Box
      className="h-screen bg-slate-950 mt-2 ml-10 flex flex-col items-left w-60"
      sx={{ flexGrow: 1, display: "flex" }}
    >
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-sm text-white font-bold transition duration-500"
                  : "text-sm text-gray-500 hover:text-white hover:cursor-pointer transition duration-500 font-bold"
              }
            >
              HOME
            </NavLink>
          </li>
          <li className="mt-3">
            <NavLink
              to="/playedgames"
              className={({ isActive }) =>
                isActive
                  ? "text-sm text-white font-bold transition duration-500"
                  : "text-sm text-gray-500 hover:text-white hover:cursor-pointer transition duration-500 font-bold"
              }
            >
              PLAYED GAMES
            </NavLink>
          </li>
          <li className="mt-3">
            <NavLink
              to="/upcoming"
              className={({ isActive }) =>
                isActive
                  ? "text-sm text-white font-bold transition duration-500"
                  : "text-sm text-gray-500 hover:text-white hover:cursor-pointer transition duration-500 font-bold"
              }
            >
              UPCOMING GAMES
            </NavLink>
          </li>
          <li className="mt-3">
            <NavLink
              to="/walkthroughs"
              className={({ isActive }) =>
                isActive
                  ? "text-sm text-white font-bold transition duration-500"
                  : "text-sm text-gray-500 hover:text-white hover:cursor-pointer transition duration-500 font-bold"
              }
            >
              WALKTHROUGHS
            </NavLink>
          </li>
        </ul>
      </nav>
    </Box>
  );
}
