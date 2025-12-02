import React from 'react';
import supercell from '../assets/supercell.jpg';
import krafton from '../assets/Krafton_Logo.svg.png';
import riot from '../assets/riot.png';
import ea from '../assets/Electronic-Arts-Logo.png';
import twoK from '../assets/2k.png';
import Marquee from 'react-fast-marquee';

const Partners = () => {
    const devs = [supercell, krafton, riot, ea, twoK];
    return (
        <div className='w-full max-w-[1440px] flex flex-col items-center my-[50px] mx-auto'>
            <p className='text-center text-[32px] font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent mb-[10px]'>OUR PARTNERS</p>
            <Marquee
                speed={60}
                gradient={false}
                pauseOnHover={true}>
                {
                    devs.map((logo, index) =>
                        <div key={index} className="mx-8 flex items-center">
                            <img src={logo}
                                className="max-h-24 object-contain transition-transform duration-300 hover:scale-105" alt={`Partner ${index + 1}`} />
                        </div>
                    )
                }
            </Marquee>

        </div>
    );
};

export default Partners;