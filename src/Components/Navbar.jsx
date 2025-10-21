import React from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <div>
            <nav
                className="inter w-full bg-[#FFFFFF] flex flex-col items-center h-auto gap-[20px] sm:justify-center py-[10px]  lg:py-0 lg:justify-between  lg:flex-row lg:h-[91px] lg:px-[50px] top-0">
                <div className='flex gap-[4px] justify-center items-center cursor-pointer'>
                    <NavLink to="/">
                        <img src={logo} className="w-full h-[40px]" />
                        <p className='font-bold text-[16px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>GameHub</p>
                    </NavLink>
                </div>
                <ul className="w-full max-w-[70%] flex flex-col justify-center items-center gap-[10px] lg:flex-row lg:gap-[32px] lg:justify-end">
                    <NavLink to="/" className={({ isActive }) => `
                    relative text-[16px] cursor-pointer font-medium ${isActive ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2]" : "text-black"}
                `}>
                        Home
                    </NavLink>

                    <NavLink to="/apps" className={({ isActive }) => `
                    relative text-[16px] cursor-pointer font-medium ${isActive ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent after:content-[''] after:absolute after:left-0 after:bottom-[0px] after:w-full after:h-[1px] after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2]" : "text-black"}
                `}>
                        Apps
                    </NavLink>

                    <NavLink to="/installation" className={({ isActive }) => `
                    relative text-[16px] cursor-pointer font-medium ${isActive ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent after:content-[''] after:absolute after:left-0 after:bottom-[0px] after:w-full after:h-[1px] after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2]" : "text-black"}
                `}>
                        Installations
                    </NavLink>
                    <NavLink to="/login" className="flex gap-[10px] w-full max-w-[145px] h-[43px] justify-center items-center bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-[4px] cursor-pointer">Login</NavLink>
                    <NavLink to="/register" className="flex gap-[10px] w-full max-w-[145px] h-[43px] justify-center items-center bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-[4px] cursor-pointer">Register</NavLink>
                </ul>

            </nav>
        </div>
    );
};

export default Navbar;