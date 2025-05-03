import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Input, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import useGameStore from "../store/useStore";

const Header = () => {

  const { searchGames,getGameList } = useGameStore();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (event) => {
    const value = event.target.value.toLowerCase();
    setSearchValue(value);
    if (value) {
      await searchGames(value);
    }
    else {
      await getGameList();
    }
  }

  const clearSearch = async () => {
    setSearchValue("");
    await getGameList();
  };

  return (
    <div className="flex w-full h-full mt-5 justify-center items-center flex-row">
      <div className="flex flex-col items-center h-full w-60">
        <img
          src={logo}
          alt="VIPverse Logo"
          className="w-25 h-25 p-5 rounded-full"
        />
      </div>
      <div className="flex flex-col h-full bg-slate-800 justify-center items-center rounded-full w-full">
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
              borderRadius: "9999px",// Tailwind's bg-slate-400
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
      <div className="flex px-4 py-2">
        <button className="px-4 py-2 text-sm text-gray-500 hover:text-white hover:cursor-pointer transition duration-500">Library</button>
      </div>
    </div>
  );
};

export default Header;
