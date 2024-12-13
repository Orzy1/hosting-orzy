"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { signOut, useSession } from 'next-auth/react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    // session object created for authenticated users
    const { data: session } = useSession();
    // console.log(session);


    const navItems = [
        {
            label: "Home",
            link: '/'
        },
        {
            label: "About Us",
            link: '/about'
        },
        {
            label: "Contact",
            link: '/contact'
        },
        {
            label: "Locations",
            link: '/locations'
        },
    ]

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <main className='bg-gray-800 text-white p-3 flex items-center justify-between sticky top-0 z-50'>
            <Image
                src={'/logo.png'}
                alt='logo'
                width={500}
                height={500}
                className='w-10 h-10 rounded-full z-50'
            />

            <div className={`flex items-center gap-10 max-lg:flex-col max-lg:h-dvh max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:justify-center max-lg:w-full max-lg:bg-gray-800 transition-all ${!navOpen ? "max-lg:translate-x-full" : ""}`}>
                {
                    navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className='text-lg hover:bg-transparent/30 p-2 rounded-md duration-150'
                            onClick={()=> setNavOpen(false)}
                        >
                            {item.label}</Link>
                    ))
                }
            </div>

            <div>
                {
                    // alternate display for signed in users
                    session ?
                        <div>
                            <Avatar
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                className="hover:cursor-pointer"
                            >
                                <AvatarImage src={session?.user?.image} alt={session?.user?.name.slice(0, 2)} />
                                <AvatarFallback>{session?.user?.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Link href={'/profile'}>Profile</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link href={'/shop'}>Shop</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link href={'/post-product'}>Sell a Product</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <button onClick={() => { signOut({ callbackUrl: "/auth/signin" }) }}>Log Out</button>
                                </MenuItem>
                            </Menu>
                        </div>
                        :
                        <Link href={'/auth/signin'} className='text-lg hover:bg-transparent/30 p-2 rounded-md duration-150 flex items-center gap-3'>
                            <FaRegUser />
                            Sign In
                        </Link>
                }

            </div>

            <button onClick={() => { setNavOpen(!navOpen) }} className='text-3xl lg:hidden z-50'>
                {
                    navOpen ? <IoMdClose /> : <IoMenuOutline />
                }
            </button>
        </main>
    )
}

export default Navbar