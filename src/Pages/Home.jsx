import React, { use } from 'react';
import Banner from '../Components/Banner';
import PopularGames from '../Components/PopularGames';
import Newsletter from '../Components/Newsletter';
import { motion, useScroll } from 'motion/react';

const dataPromise = fetch('/data.json').then(res => res.json());

const Home = () => {
    const games = use(dataPromise);
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
                    zIndex:9999
                }}
            />
            <div className='w-full bg-[#f5f5f5]'>

                <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}>
                    <Banner />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}>
                    <PopularGames games={games} />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1 }}>
                    <Newsletter />
                </motion.div>
            </div>
        </>
    );

};

export default Home;