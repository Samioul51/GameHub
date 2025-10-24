import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { motion,useScroll } from 'motion/react';

const MyProfile = () => {
    const { user } = use(AuthContext);
    // console.log(user);

    const { scrollYProgress } = useScroll();
    return (
        <>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#ff0088",
                    zIndex: 9999
                }}
            />
            <div className='w-full bg-[#f5f5f5]'>
                <title>{`GameHub | My Profile`}</title>
                <div className='w-full max-w-[1440px] flex flex-col items-center py-[50px] mx-auto'>
                    <p className='text-center text-[32px] font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent mb-[10px]'>MY PROFILE</p>
                    <div className="w-full max-w-[800px] h-auto bg-white p-[100px] box-border rounded-[10px]">
                        <div className="flex flex-col items-center justify-center gap-[20px] lg:flex-row lg:items-start">
                            <img
                                src={user.photoURL}
                                className="w-full max-w-[100px] h-auto rounded-lg shadow-2xl"
                            />
                            <div className='flex flex-col'>
                                <p className='py-3'><span className='font-bold'>Name: </span>{user.displayName}</p>
                                <p className='py-3'><span className='font-bold'>Email: </span>{user.email}</p>
                                <Link to="/updateprofile" className="flex gap-[10px] w-full max-w-[145px] h-[43px] justify-center items-center bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-[4px] cursor-pointer text-white mx-auto">Update</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProfile;