import React, { use } from 'react';
import Banner from './Banner';
import PopularGames from './PopularGames';

const dataPromise=fetch('data.json').then(res=>res.json());

const Home = () => {
    const apps=use(dataPromise);
    // console.log(apps);
    return (
        <div className='w-full bg-[#f5f5f5]'>
           <Banner/>
           <PopularGames apps={apps}/>
        </div>
    );
};

export default Home;