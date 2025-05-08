import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Library = () => {
  return (
    <div className="lg:px-0 md:px-25 sm:px-12 px-5 mb-5 text-white">
      <p className="text-white lg:text-5xl text-3xl font-extrabold tracking-[0.1em] mb-5 lg:text-left sm:text-center text-center">
        My Library
      </p>
      <div className="bg-slate-950 w-full h-full">
        <nav className="flex sticky items-center justify-between">
          <ul className="flex">
            <li>
              <NavLink
                to="/library/completed"
                className={({ isActive }) =>
                  isActive
                    ? "text-md text-white font-bold transition duration-500"
                    : "text-md text-gray-500 hover:text-white hover:cursor-pointer transition duration-500 font-bold"
                }
              >
                COMPLETED
              </NavLink>
            </li>
            <li className="ml-3">
              <NavLink
                to="/library/currentlyplaying"
                className={({ isActive }) =>
                  isActive
                    ? "text-md text-white font-bold transition duration-500"
                    : "text-md text-gray-500 hover:text-white hover:cursor-pointer transition duration-500 font-bold"
                }
              >
                CURRENTLY PLAYING
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Library;
