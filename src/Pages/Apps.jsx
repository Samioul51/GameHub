import React from 'react';
import { useLoaderData } from 'react-router';
import Game from '../Components/Game';
import { motion, useScroll } from 'motion/react';

const Apps = () => {
    const games = useLoaderData();
    const { scrollYProgress } = useScroll();
    // console.log(games);
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
            <div className='w-full bg-[#f5f5f5] py-[80px]'>
                <title>{`GameHub | Games`}</title>
                <div className='w-full max-w-[1440px] flex flex-col items-center my-[20px] mx-auto'>
                    <p className='text-center text-[32px] font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent mb-[10px]'>ALL GAMES</p>
                    <div className='w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[20px] justify-center'>
                        {
                            games.map((game) => <Game game={game} />)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Apps;