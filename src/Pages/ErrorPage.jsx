import React from 'react';
import Error from '../assets/Error.png';
import { Link } from 'react-router';
import { motion,useScroll } from 'motion/react';

const ErrorPage = () => {
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
            <div className='inter w-full h-auto bg-[#f5f5f5] flex flex-col justify-center items-center py-[80px]'>
                <title>{`GameHub | 404`}</title>
                <img src={Error} className='w-full max-w-[419.62px] h-auto mb-[54.6px]' />
                <p className='text-[36px] text-[#001931] font-semibold text-center mb-[8px]'>Oops, page not found!</p>
                <p className='text-[#627382] text-[20px] text-center mb-[16px]'>The page you are looking for is not available.</p>
                <Link to="/" className="flex gap-[10px] w-full max-w-[145px] h-[43px] justify-center items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-[4px] cursor-pointer text-white font-semibold mb-[80px]">Go to Home!</Link>
            </div>
        </>
    );
};

export default ErrorPage;