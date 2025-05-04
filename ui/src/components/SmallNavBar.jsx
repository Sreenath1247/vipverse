import React from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";

const SmallNavBar = ({ closeNavBar }) => {
  return (
    <div
      className="absolute top-16 right-4 bg-slate-900 text-white shadow-lg z-50 rounded-lg"
      style={{ width: "200px" }}
    >
      <div className="flex flex-col p-4">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            onClick={closeNavBar}
            className={({ isActive }) =>
              isActive
                ? "text-md text-white font-bold transition duration-500"
                : "text-md text-gray-500 hover:text-white hover:cursor-pointer transition duration-500 font-bold"
            }
          >
            HOME
          </NavLink>
          <IconButton onClick={closeNavBar} size="small">
            <CloseIcon className="text-white" />
          </IconButton>
        </div>
        <ul className="flex flex-col space-y-4 mt-3">
          <li className="">
            <NavLink
              to="/playedgames"
              onClick={closeNavBar}
              className={({ isActive }) =>
                isActive
                  ? "text-md text-white font-bold transition duration-500"
                  : "text-md text-gray-500 hover:text-white hover:cursor-pointer transition duration-500 font-bold"
              }
            >
              PLAYED GAMES
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/upcoming"
              onClick={closeNavBar}
              className={({ isActive }) =>
                isActive
                  ? "text-md text-white font-bold transition duration-500"
                  : "text-md text-gray-500 hover:text-white hover:cursor-pointer transition duration-500 font-bold"
              }
            >
              UPCOMING
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/walkthroughs"
              onClick={closeNavBar}
              className={({ isActive }) =>
                isActive
                  ? "text-md text-white font-bold transition duration-500"
                  : "text-md text-gray-500 hover:text-white hover:cursor-pointer transition duration-500 font-bold"
              }
            >
              WALKTHROUGHS
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SmallNavBar;
