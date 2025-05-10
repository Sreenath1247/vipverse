import React, { useRef, useEffect } from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";

const SmallNavBar = ({ closeNavBar }) => {
  const navbarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      closeNavBar(); // Close the navbar if clicked outside
    }
  };

  const mediaQueryList = window.matchMedia("(max-width: 1024px)");

  mediaQueryList.addEventListener("change", (event) => {
    if (!event.matches) {
      closeNavBar();
    }
  });

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="absolute top-16 right-4 bg-slate-900 text-white shadow-lg z-50 rounded-lg lg:hidden"
      style={{ width: "200px" }}
      ref={navbarRef}
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
              to="/allgames"
              onClick={closeNavBar}
              className={({ isActive }) =>
                isActive
                  ? "text-md text-white font-bold transition duration-500"
                  : "text-md text-gray-500 hover:text-white hover:cursor-pointer transition duration-500 font-bold"
              }
            >
              ALL GAMES
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/library"
              onClick={closeNavBar}
              className={({ isActive }) =>
                isActive
                  ? "text-md text-white font-bold transition duration-500"
                  : "text-md text-gray-500 hover:text-white hover:cursor-pointer transition duration-500 font-bold"
              }
            >
              LIBRARY
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
              to="/playlists"
              onClick={closeNavBar}
              className={({ isActive }) =>
                isActive
                  ? "text-md text-white font-bold transition duration-500"
                  : "text-md text-gray-500 hover:text-white hover:cursor-pointer transition duration-500 font-bold"
              }
            >
              PLAYLISTS
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/about"
              onClick={closeNavBar}
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
      </div>
    </div>
  );
};

export default SmallNavBar;
