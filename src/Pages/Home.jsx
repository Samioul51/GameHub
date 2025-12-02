import React, { use } from 'react';
import Banner from '../Components/Banner';
import PopularGames from '../Components/PopularGames';
import Newsletter from '../Components/Newsletter';
import { motion, useScroll } from 'motion/react';
import Events from '../Components/Events';
import Partners from '../Components/Partners';

const dataPromise = fetch('/data.json').then(res => res.json());
const eventsPromise = fetch('/events.json').then(res => res.json());

const Home = () => {
    const games = use(dataPromise);
    const events = use(eventsPromise);
    const { scrollYProgress } = useScroll();
    // console.log(apps);
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
            <div className='w-full bg-[#f5f5f5]'>
                <title>{`GameHub | Home`}</title>
                <Banner />
                <PopularGames games={games} />
                <Events events={events} />
                <Partners/>
                <Newsletter />
            </div>
        </>
    );

};

export default Home;