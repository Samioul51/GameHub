import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Game from '../Components/Game';
import { motion, useScroll } from 'motion/react';
import { IoIosArrowDropdown } from "react-icons/io";

const Apps = () => {
    const apps = useLoaderData();
    const games = [...apps].sort((a, b) => a.title.localeCompare(b.title));

    const categories = ["All", "Social Deduction", "Battle Royale", "Racing", "FPS", "Puzzle", "Strategy", "Battle Royale", "RPG", "MOBA", "Sandbox", "Adventure", "Fighting", "Arcade"];

    const [category, setCategory] = useState("All");
    const [searchTitle, setSearchTitle] = useState("");

    const filteredGames = games.filter(g => {
        const matchCategory = category === "All" ? true : g.category === category;
        const matchTitle = g.title.toLowerCase().includes(searchTitle.toLowerCase());
        return matchCategory && matchTitle;
    });

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
                    <div className='w-full max-w-full p-[16px] box-border flex justify-between items-center'>
                        <div className="dropdown dropdown-start">
                            <div tabIndex={0} role="button" className="btn m-1">{category} <IoIosArrowDropdown /></div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                {
                                    categories.map(c => <li key={c}><a onClick={() => setCategory(c)}>{c}</a></li>)
                                }
                            </ul>
                        </div>
                        <input type="text" placeholder="Search by Title" className="input input-accent" onChange={(e) => setSearchTitle(e.target.value)} />
                    </div>
                    {
                        filteredGames.length > 0 ?
                            <div className='w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[20px] justify-center'>
                                {
                                    filteredGames.map((game) => <Game game={game} />)
                                }
                            </div>
                            :
                            <p className='w-full max-w-full text-2xl text-center font-bold text-black'>NO GAME FOUND!</p>
                    }

                </div>
            </div>
        </>
    );
};

export default Apps;