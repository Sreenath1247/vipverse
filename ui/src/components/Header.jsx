import React, { useState } from "react";
import { Input, InputAdornment, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import useGameStore from "../store/useStore";
import SmallNavBar from "./SmallNavBar";

const Header = () => {
  const { searchGames, getGameList, searchAllGames, getAllGames, setLoading } =
    useGameStore();
  const [searchValue, setSearchValue] = useState("");
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);

  const handleSearch = async (event) => {
    const value = event.target.value.toLowerCase();
    setSearchValue(value);
    if (value) {
      if (window.location.href.includes("/playedgames")) {
        try {
          setLoading(true);
          await searchGames(value);
          setLoading(false);
        } catch (error) {
          console.error("Error searching games:", error);
          setLoading(false);
        }
      }
      if (window.location.href.includes("/library")) {
        if (value.length >= 3) {
          try {
            setLoading(true);
            await searchAllGames(value);
            setLoading(false);
          } catch (error) {
            console.error("Error searching games:", error);
            setLoading(false);
          }
        }
      }
    } else {
      if (window.location.href.includes("/playedgames")) {
        try {
          setLoading(true);
          await getGameList();
          setLoading(false);
        } catch (error) {
          console.error("Error fetching played games:", error);
          setLoading(false);
        }
      }
      if (window.location.href.includes("/library")) {
        try {
          setLoading(true);
          await getAllGames();
          setLoading(false);
        } catch (error) {
          console.error("Error fetching all games:", error);
          setLoading(false);
        }
      }
    }
  };

  const clearSearch = async () => {
    setSearchValue("");
    if (window.location.href.includes("/playedgames")) {
      await getGameList();
    }
    if (window.location.href.includes("/library")) {
      await getAllGames();
    }
  };

  const toggleNavBar = () => {
    setIsNavBarVisible((prev) => !prev);
  };

  const closeNavBar = () => {
    setIsNavBarVisible(false);
  };

  console.log();

  return (
    <div className="relative">
      <div className="flex flex-row items-center lg:h-28 md:h-15 h-15 xl:px-13 lg:px-10 lg:py-7 sm:px-8 sm:py-5 px-3 justify-between space-x-5">
        <div className="flex flex-col">
          <NavLink
            to="/"
            className="text-white font-black text-lg text-center tracking-[0.4em]"
          >
            VIPVERSE
          </NavLink>
        </div>
        <div className="flex flex-col bg-slate-800 w-full lg:w-full sm:w-2/6 lg:h-11 sm:h-10 rounded-full">
          <Input
            id="search-input"
            placeholder="Search"
            disableUnderline
            value={searchValue}
            onChange={handleSearch}
            sx={{
              width: "100%",
              color: "#fff",
              padding: "7px",
              fontSize: "14px",
              "&:hover": {
                color: "#fff",
                backgroundColor: "#334155",
                outline: "none",
                borderRadius: "9999px",
              },
              "&:focus-within": {
                color: "#fff",
                backgroundColor: "#334155",
                outline: "none",
                borderRadius: "9999px",
              },
            }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon className="text-white" fontSize="small" />
              </InputAdornment>
            }
            endAdornment={
              searchValue && (
                <InputAdornment position="end">
                  <IconButton onClick={clearSearch} size="small">
                    <CloseIcon className="text-white" fontSize="small" />
                  </IconButton>
                </InputAdornment>
              )
            }
          />
        </div>
        <div className="flex flex-row space-x-2">
          <NavLink
            to="/library"
            className={({ isActive }) =>
              isActive
                ? "lg:block hidden text-md text-white font-bold transition duration-500"
                : "lg:block hidden text-md text-gray-500 hover:text-white hover:cursor-pointer transition duration-500 font-bold"
            }
          >
            Library
          </NavLink>
          <div className="md:block lg:hidden">
            <IconButton sx={{ padding: 0 }} onClick={toggleNavBar}>
              <MenuIcon className="text-gray-500 hover:text-white hover:cursor-pointer transition duration-500" />
            </IconButton>
          </div>
        </div>
      </div>
      {isNavBarVisible && <SmallNavBar closeNavBar={closeNavBar} />}
    </div>
  );
};

export default Header;
