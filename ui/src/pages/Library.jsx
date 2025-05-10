import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Library = () => {
  return (
    <div className="lg:px-0 md:px-25 sm:px-12 px-5 mb-5 text-white">
      <p className="text-white lg:text-5xl text-3xl font-extrabold tracking-[0.1em] mb-5 lg:text-left sm:text-center text-center">
        My Library
      </p>
      <div className="bg-slate-950 w-full h-full flex lg:justify-normal justify-center">
        <nav className="flex sticky items-center justify-between">
          <ul className="flex">
            <li>
              <NavLink
                to="currentlyplaying"
                className={({ isActive }) =>
                  isActive
                    ? "text-md text-white font-bold transition duration-500"
                    : "text-md text-gray-500 hover:text-white hover:cursor-pointer transition duration-500 font-bold sm:block hidden"
                }
              >
                CURRENTLY PLAYING
              </NavLink>
            </li>
            <div className="flex flex-1 px-5 sm:block hidden">
              <div className="h-full min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"></div>
            </div>
            <li>
              <NavLink
                to="completed"
                className={({ isActive }) =>
                  isActive
                    ? "text-md text-white font-bold transition duration-500"
                    : "text-md text-gray-500 hover:text-white hover:cursor-pointer transition duration-500 font-bold sm:block hidden"
                }
              >
                COMPLETED
              </NavLink>
            </li>
            <div className="flex flex-1 px-5 sm:block hidden">
              <div className="h-full min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"></div>
            </div>
            <li>
              <NavLink
                to="played"
                className={({ isActive }) =>
                  isActive
                    ? "text-md text-white font-bold transition duration-500"
                    : "text-md text-gray-500 hover:text-white hover:cursor-pointer transition duration-500 font-bold sm:block hidden"
                }
              >
                PLAYED
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
