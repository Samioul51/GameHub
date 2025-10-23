import React, { use } from 'react';
import Banner from '../Components/Banner';
import PopularGames from '../Components/PopularGames';
import Newsletter from '../Components/Newsletter';

const dataPromise=fetch('data.json').then(res=>res.json());

const Home = () => {
    const games=use(dataPromise);
    // console.log(apps);
    return (
        <div className='w-full bg-[#f5f5f5]'>
           <Banner/>
           <PopularGames games={games}/>
           <Newsletter/>
        </div>
    );
};

export default Home;