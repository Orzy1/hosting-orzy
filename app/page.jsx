"use client";
import React, { useState } from 'react';
import { FaCaretDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSession } from 'next-auth/react';

const page = () => {
  const { data: session } = useSession()

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <main className="min-h-[90vh] w-full bg-[url('/asset14.png')] bg-cover bg-center">
      <div className='h-[90vh] w-full bg-black/40'>
        <div className='flex px-[7rem] py-[4rem] max-lg:p-5 justify-between items-center max-lg:flex-col max-lg:gap-5'>
          {/*  */}
          <div className='max-lg:w-full'>
            <blockquote
              className='bg-gray-800 text-white flex items-center gap-2 py-2 px-5 rounded-lg cursor-pointer text-lg max-lg:w-full max-lg:justify-between'
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <p>All Category</p>
              <FaCaretDown />
            </blockquote>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Men's Clothing</MenuItem>
              <MenuItem onClick={handleClose}>Women's Clothing</MenuItem>
              <MenuItem onClick={handleClose}>Electronics</MenuItem>
            </Menu>
          </div>
          {/*  */}

          <aside className='flex items-center w-1/2 max-lg:w-full'>
            <input type="text" className='w-full p-2 rounded-l-md outline-none' />
            <button className='bg-blue-500 p-2 rounded-r-md'>
              <IoIosSearch className='text-2xl text-white' />
            </button>
          </aside>

          <blockquote className='bg-gray-800 text-white flex items-center gap-2 py-2 px-5 rounded-lg cursor-pointer text-lg max-lg:w-full max-lg:justify-between'>
            <p>English</p>
            <FaCaretDown />
          </blockquote>

        </div>

        <div className='w-1/2 mx-auto flex flex-col gap-8 max-lg:w-full'>
          <h1 className='text-4xl text-white font-bold text-center italic'>Early Mart</h1>
          <p className='text-3xl font-semibold text-white text-center'>Shop for your all time favourites. Buy and sell from the comfort of your home.</p>
          <a href={ session ? "/shop" : "/auth/signin" } className='bg-red-500 text-white font-semibold w-fit mx-auto rounded-md px-5 py-3 text-2xl hover:bg-white hover:text-red-500 hover:scale-105 duration-300'>
            Shop Now
          </a>
        </div>
      </div>
    </main>
  )
}

export default page