import React from 'react';
import newsletter from '../assets/newsletter.jpg';

const Newsletter = () => {
    return (
        <div className='w-full max-w-[1440px] mx-auto my-[50px]'>
            <p className='text-center text-[32px] font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent mb-[10px]'>NEWSLETTER</p>
            <div className='w-full max-w-full h-auto flex flex-col items-center md:flex-row lg:flex-row bg-white rounded-[8px] shadow-lg py-[20px] box-border'>
                <img src={newsletter} className='w-full max-w-[50%] h-auto' />
                <div className='w-full max-w-[50%] gap-[20px] flex flex-col justify-center items-center'>
                    <p className='text-[24px] font-bold text-[#1b2954]'>Subscribe to Our Newsletter</p>
                    <div className="join">
                        <div>
                            <label className="input validator join-item">
                                <input type="email" placeholder="Email" required />
                            </label>
                            <div className="validator-hint hidden">Enter email address</div>
                        </div>
                        <button className="btn btn-neutral join-item border-none bg-linear-to-r from-[#632EE3] to-[#9F62F2] cursor-pointer text-white">SUBSCRIBE</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Newsletter;