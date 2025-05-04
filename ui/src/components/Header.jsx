import React, { useState } from "react";
import { Input, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import useGameStore from "../store/useStore";

const Header = () => {
  const { searchGames, getGameList } = useGameStore();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (event) => {
    const value = event.target.value.toLowerCase();
    setSearchValue(value);
    if (value) {
      await searchGames(value);
    } else {
      await getGameList();
    }
  };

  const clearSearch = async () => {
    setSearchValue("");
    await getGameList();
  };

  return (
    <div className="flex flex-row items-center lg:p-7 md:p-5 sm:p-5 justify-between">
      <div className="flex flex-col lg:h-full md:h-13 lg:w-60 md:w-40 lg:pl-0 md:pl-3 sm:pl-3">
        <p className="text-white font-black text-lg text-center tracking-[0.4em]">
          VIPVERSE
        </p>
      </div>
      <div className="flex flex-col lg:h-full md:h-8 sm:h-8 bg-slate-800 justify-center lg:items-center rounded-full lg:w-full">
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
              backgroundColor: "#334155", // Tailwind's bg-slate-400
              outline: "none",
              borderRadius: "9999px", // Tailwind's bg-slate-400
            },
            "&:focus-within": {
              color: "#fff",
              backgroundColor: "#334155", // Tailwind's bg-slate-400
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
      <div className="flex flex-row lg:h-full md:h-10 lg:px-4 lg:py-2 md:pb-5 justify-center lg:items-center">
        <button className="text-md text-gray-500 hover:text-white hover:cursor-pointer transition duration-500 font-bold">
          Library
        </button>
        <div className="md:block lg:hidden">
          <IconButton sx={{ padding: 0,paddingLeft: "8px", marginBottom: "3px" }}>
            <MenuIcon className="text-gray-500 hover:text-white hover:cursor-pointer transition duration-500" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
