import React, { use } from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/logo.png';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logout } = use(AuthContext);

    const handleOpenModal=()=>document.getElementById("my_modal_5").showModal();
    const handleCloseModal=()=>document.getElementById("my_modal_5").close();
    // console.log(user);
    const handleLogout = () => {
        logout().then(() => {
            toast("Logged Out Successfully!");
            handleCloseModal();
        }).catch((error) => {
            toast(error);
            handleCloseModal();
        });
    };
    return (
        <div>
            <nav
                className="inter w-full bg-[#FFFFFF] flex flex-col items-center h-auto gap-[20px] sm:justify-center py-[10px]  lg:py-0 lg:justify-between  lg:flex-row lg:h-[91px] lg:px-[50px] top-0">
                <div className='flex gap-[4px] justify-center items-center cursor-pointer'>
                    <NavLink to="/">
                        <img src={logo} className="w-full h-[40px]" />
                        <p className='font-bold text-[16px] bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>GameHub</p>
                    </NavLink>
                </div>
                <ul className="w-full max-w-[70%] flex flex-col justify-center items-center gap-[10px] lg:flex-row lg:gap-[32px] lg:justify-end">
                    <NavLink to="/" className={({ isActive }) => `
                    relative text-[16px] cursor-pointer font-medium ${isActive ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:bg-linear-to-r after:from-[#632EE3] after:to-[#9F62F2]" : "text-black"}
                `}>
                        Home
                    </NavLink>

                    <NavLink to="/apps" className={({ isActive }) => `
                    relative text-[16px] cursor-pointer font-medium ${isActive ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:bg-linear-to-r after:from-[#632EE3] after:to-[#9F62F2]" : "text-black"}
                `}>
                        Games
                    </NavLink>
                    {
                        user ? (
                            <>
                                <NavLink to="/profile"><img src={user.photoURL} className="w-[40px] h-[40px] rounded-[50%]" /></NavLink>
                                <NavLink onClick={handleOpenModal} className="flex gap-[10px] w-full max-w-[145px] h-[43px] justify-center items-center bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-[4px] cursor-pointer text-white">Logout</NavLink>
                            </>
                        ) : (
                            <>
                                <NavLink to="/login" className="flex gap-[10px] w-full max-w-[145px] h-[43px] justify-center items-center bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-[4px] cursor-pointer text-white">Login</NavLink>
                                <NavLink to="/register" className="flex gap-[10px] w-full max-w-[145px] h-[43px] justify-center items-center bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-[4px] cursor-pointer text-white">Register</NavLink>
                            </>
                        )
                    }

                </ul>

            </nav>

            {/* Modal for logout */}

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <p className="py-4">Are you sure you want to logout?</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button onClick={handleLogout} className="btn">Yes</button>
                            <button onClick={handleCloseModal} className="btn">No</button>
                        
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Navbar;