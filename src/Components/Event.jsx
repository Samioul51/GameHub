import React from 'react';
import { Link } from 'react-router';

const Event = ({ event }) => {
    const { title, coverPhoto, location, website,  pricePass, date } = event;
    return (
        <div className='w-full max-w-[317px] flex flex-col p-[16px] box-border bg-white inter rounded-[8px] shadow-lg mx-auto'>
            <img src={coverPhoto} className='w-full max-w-[285px] h-[285px] rounded-[8px] mb-[16px] border border-gray-500' />
            <p className='text-[16px] font-medium text-[#001931] mb-[10px] p-1 box-border'>{title}</p>
            <div className='w-full max-w-full h-[31px] flex gap-[10px] justify-between items-center'>
                <p className='font-medium text-[#00D390] p-1 box-border rounded-[4px]'>{location}</p>
                <div className='flex gap-1 items-center'><p className='font-medium text-[#FF8811]'>{pricePass}</p></div>
            </div>
            <p className='font-medium text-black p-1 box-border rounded-[4px]'>Date: {date}</p>
            <Link to={website} className='w-full max-w-full bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-center text-white font-semibold rounded-[8px] py-[5px] mt-[10px] cursor-pointer'>EXPLORE</Link>
        </div>
    );
};

export default Event;