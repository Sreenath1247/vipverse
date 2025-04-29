import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { Autocomplete, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    const [inputValue, setInputValue] = useState('');
  return (
    <div className='flex w-full h-full'>
        <div className='flex flex-col items-center justify-center h-full w-20 w-60'>
            <img src={logo} alt="VIPverse Logo" className="w-25 h-25 p-5 rounded-full" />
            <div className='flex flex-col items-center h-full w-full'>
              <button className='bg-blue-500 text-white p-2 rounded'>Home</button>
              <button className='bg-blue-500 text-white p-2 rounded'>About</button>
              <button className='bg-blue-500 text-white p-2 rounded'>Contact</button>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center h-full w-20 w-60 bg-slate-500 rounded-full mt-5 outline-none' tabIndex={0}>
        <Autocomplete
            disablePortal
            freeSolo
            id="search-bar"
            options={['Option 1', 'Option 2', 'Option 3']} // Replace with your options
            renderInput={(params) => (
                <TextField
                {...params}
                placeholder="Search..."
                variant="outlined"
                InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                    ),
                    className: 'rounded-full', // Tailwind class for rounded edges
                }}
                />
            )}
            className="w-full outline-none" // Tailwind class for width
    />
        </div>
    </div>
  )
}

export default Header