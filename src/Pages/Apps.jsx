import React from 'react';
import { useLoaderData } from 'react-router';
import Game from '../Components/Game';

const Apps = () => {
    const games = useLoaderData();
    // console.log(games);
    return (
        <div className='w-full bg-[#f5f5f5] py-[80px]'>
            <div className='w-full max-w-[1440px] flex flex-col items-center my-[20px] mx-auto'>
                <p className='text-center text-[32px] font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent mb-[10px]'>ALL GAMES</p>
                <div className='w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[20px] justify-center'>
                    {
                        games.map((game) => <Game game={game} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Apps;