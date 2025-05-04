import * as React from "react";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";

export default function VerticalTabs({ setIsNavBarVisible }) {
  return (
    <Box
      className="h-screen bg-slate-950 flex flex-col items-left"
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
              onClick={() => setIsNavBarVisible(false)}
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
              onClick={() => setIsNavBarVisible(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-sm text-white font-bold transition duration-500"
                  : "text-sm text-gray-500 hover:text-white hover:cursor-pointer transition duration-500 font-bold"
              }
            >
              UPCOMING
            </NavLink>
          </li>
          <li className="mt-3">
            <NavLink
              to="/walkthroughs"
              onClick={() => setIsNavBarVisible(false)}
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
