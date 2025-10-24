import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import gameNotFound from '../assets/App-Error.png'
import { FaStar } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoMdDownload } from "react-icons/io";
import { motion,useScroll } from 'motion/react';

const GameDetails = () => {
    const { id } = useParams();
    const games = useLoaderData();
    const game = games.find(app => app.id === id);

    const { scrollYProgress } = useScroll();

    if (!game) {
        return (
            <div className="w-full h-auto bg-[#f5f5f5] flex flex-col justify-center items-center py-[80px]">
                <img src={gameNotFound} className='w-full max-w-[419.62px] h-auto mb-[54.6px]' />
                <p className="text-[36px] text-[#001931] font-semibold text-center mb-[8px]">OOPS!! GAME NOT FOUND</p>
                <p className="text-[#627382] text-[20px] text-center mb-[16px]">The Game you are requesting is not found on our system. Please try another game.</p>
                <Link to="/apps" className="flex gap-[10px] w-full max-w-[145px] h-[43px] justify-center items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-[4px] cursor-pointer text-white font-semibold mb-[80px]">Go to Games!</Link>
            </div>
        );
    }

    const { title, coverPhoto, category, downloadLink, description, ratings, developer } = game;

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
            <div className='inter w-full h-auto bg-[#f5f5f5]'>
                <title>{`GameHub | ${title}`}</title>
                <div className='w-full max-w-[1440px] mx-auto h-auto py-[80px] box-border'>
                    <div className='flex flex-col lg:flex-row gap-[40px] w-full max-w-[1440px] mb-[80px] px-[10px] box-border'>
                        <img src={coverPhoto} className='w-full max-w-[350px] h-auto mx-auto rounded-[10px] shadow-lg' />
                        <div className='flex flex-col w-full'>
                            <p className='font-bold text-[32px] text-[#001931] mb-[8] mx-auto lg:mx-0'>{title}</p>
                            <p className='font-bold text-[20px] text-[#627382] mb-[30px] mx-auto lg:mx-0'>Developed by <span className=' bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{developer}</span></p>
                            <hr className='bg-[#001931] mb-[30px]' />

                            <div className='flex flex-col gap-[24px] mb-[30px]'>
                                <div className='w-full max-w-full items-center flex gap-[8px] mx-auto lg:mx-0'>
                                    <IoMdDownload />
                                    <a href={downloadLink} className='font-bold text-[16px] text-[#001931] hover:text-red-400 transition duration-300 ease-in'>Download Link</a>
                                </div>

                                <div className='w-full max-w-full items-center flex gap-[8px] mx-auto lg:mx-0'>
                                    <FaStar />
                                    <p className='font-bold text-[16px] text-[#001931]'>Average Ratings: </p>
                                    <p className='font-extrabold text-[16px] text-[#001931]'>{ratings}</p>
                                </div>
                                <div className='w-full max-w-full items-center flex gap-[8px] mx-auto lg:mx-0'>
                                    <BiSolidCategoryAlt />
                                    <p className='font-bold text-[16px] text-[#001931]'>Category: </p>
                                    <p className='font-extrabold text-[16px] text-[#001931]'>{category}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='bg-[#001931] mb-[40px]' />
                    <div className='px-[10px] box-border'>
                        <p className='text-[24px] font-semibold text-[#001931] self-start mb-[24px]'>Description</p>
                        <p className='font-bold text-[20px] text-justify text-[#627382]'>{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GameDetails;