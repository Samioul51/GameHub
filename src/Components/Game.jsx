import React from 'react';
import { Link } from 'react-router';
import { FaStar } from "react-icons/fa";
import { motion } from 'motion/react';

const Game = ({ game }) => {
    const { id, title, coverPhoto, category, ratings } = game;
    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
        >
            <Link to={`/gamedetails/${id}`} className='w-full max-w-[317px] flex flex-col p-[16px] box-border bg-white inter rounded-[8px] shadow-lg mx-auto'>
                <img src={coverPhoto} className='w-full max-w-[285px] h-[285px] rounded-[8px] mb-[16px] border border-gray-500' />
                <p className='text-[16px] font-medium text-[#001931] mb-[16px]'>{title}</p>
                <div className='w-full max-w-full h-[31px] flex gap-[10px] justify-between items-center'>
                    <p className='font-medium text-[#00D390] bg-[#F1F5E8] p-1 box-border rounded-[4px]'>{category}</p>
                    <div className='flex gap-1 items-center'><FaStar className='text-[#FF8811]' /><p className='font-medium text-[#FF8811]'>{ratings}</p></div>
                </div>
            </Link>
        </motion.div>
    );
};

export default Game;