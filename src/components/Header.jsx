import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { Input, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className='flex w-full h-full mt-15'>
        <div className='flex items-center justify-center h-full w-20 w-60'>
            <img src={logo} alt="VIPverse Logo" className="w-25 h-25 p-5 rounded-full" />
        </div>
        <div className="flex items-center justify-center h-full bg-slate-800 rounded-full mt-7">
            <Input
            id="search-input"
            placeholder='Search'
            disableUnderline
            sx={{
                color: "#fff",
                padding: "5px",
                fontSize: "14px",
                "&:focus-within": {
                  color: "#fff",
                  backgroundColor: "#334155", // Tailwind's bg-slate-400
                  outline: "none",
                  borderRadius: "9999px",
                },
              }}
            startAdornment={
             <InputAdornment position="start">
               <SearchIcon className='text-white' fontSize='small'/>
             </InputAdornment>
            }
           />
        </div>
        <p className='flex text-slate-400 ml-10 mt-9'>Played games</p>
        <p className='flex text-slate-400 ml-10 mt-9'>Upcoming</p>
        <p className='flex text-slate-400 ml-10 mt-9'>Walkthroughs</p>
    </div>
  )
}

export default Header