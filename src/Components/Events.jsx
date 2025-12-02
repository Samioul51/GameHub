import React from 'react';
import Event from './Event';

const Events = ({ events }) => {
    const sorted = events.sort((a, b) => new Date(a.date) - new Date(b.date));

    return (
        <div className='w-full max-w-[1440px] flex flex-col items-center my-[50px] mx-auto'>
            <p className='text-center text-[32px] font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent mb-[10px]'>GAMING EVENTS</p>
            <div className='w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[20px] justify-center'>
                {
                    sorted.map((event) => <Event event={event} />)
                }
            </div>
        </div>
    );
};

export default Events;