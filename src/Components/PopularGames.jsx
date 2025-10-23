import React from 'react';
import Game from './Game';

const PopularGames = ({games}) => {
    const sorted=games.sort((a,b)=>b.ratings-a.ratings);
    // console.log(sorted);
    return (
        <div className='w-full max-w-[1440px] flex flex-col items-center my-[50px] mx-auto'>
            <p className='text-center text-[32px] font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent mb-[10px]'>POPULAR GAMES</p>
            <div className='w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[20px] justify-center'>
                {
                    sorted.slice(0,8).map((game)=><Game game={game}/>)
                }
            </div>
        </div>
    );
};

export default PopularGames;