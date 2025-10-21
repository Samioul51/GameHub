import React from 'react';
import logo from '../assets/logo.png'
import x from '../assets/x.png';
import linkedin from '../assets/linkedin.png';
import fb from '../assets/fb.png';
import mail from '../assets/mail.png';

const Footer = () => {
    return (
        <div>
            <footer
                className="w-full bg-black flex flex-col h-auto items-center bottom-0">
                <div className="w-full max-w-[1440px] flex flex-col h-auto items-center gap-[50px] lg:flex-row lg:justify-between lg:gap-0 lg:items-start py-[80px] box-border ">
                    <div>
                        <img src={logo} className="w-full h-[40px]" />
                        <p className='font-bold text-[16px] bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>GameHub</p>
                    </div>
                    <ul className="flex flex-col gap-[16px]">
                        <li className="text-[20px] font-medium text-white">Company</li>
                        <li className="text-[#A1A1AA] cursor-pointer">About Us</li>
                        <li className="text-[#A1A1AA] cursor-pointer">Our Mission</li>
                        <li className="text-[#A1A1AA] cursor-pointer">Contact Sales</li>
                    </ul>

                    <ul className="flex flex-col gap-[16px]">
                        <li className="text-[20px] font-medium text-white">Services</li>
                        <li className="text-[#A1A1AA] cursor-pointer">Products & Services</li>
                        <li className="text-[#A1A1AA] cursor-pointer">Customer Stories</li>
                        <li className="text-[#A1A1AA] cursor-pointer">Download Apps</li>
                    </ul>

                    <ul className="flex flex-col gap-[16px]">
                        <li className="text-[20px] font-medium text-white">Information</li>
                        <li className="text-[#A1A1AA] cursor-pointer">Privacy Policy</li>
                        <li className="text-[#A1A1AA] cursor-pointer">Terms & Conditions</li>
                        <li className="text-[#A1A1AA] cursor-pointer">Join Us</li>
                    </ul>

                    <ul className="flex flex-col h-auto gap-[16px]">
                        <li className="text-[20px] font-medium text-white">Social Links</li>
                        <li className="text-[#A1A1AA] cursor-pointer flex items-center gap-[8px]"><img src={x} className="w-[20px] h-[20px]" /> <span className="text-[#A1A1AA]">X</span></li>
                        <li className="text-[#A1A1AA] cursor-pointer flex items-center gap-[8px]"><img src={linkedin} className="w-[20px] h-[20px]" /> <span className="text-[#A1A1AA] items-center gap-[4px]">LinkedIn</span></li>
                        <li className="text-[#A1A1AA] cursor-pointer flex items-center gap-[8px]"><img src={fb} className="w-[20px] h-[20px]" /> <span className="text-[#A1A1AA]">Facebook</span></li>
                        <li className="text-[#A1A1AA] cursor-pointer flex items-center gap-[8px]"><img src={mail} className="w-[20px] h-[20px]" /> <span className="text-[#A1A1AA]">support@gamehub.com</span></li>
                    </ul>
                </div>

                <div className="w-full max-w-[1440px] h-px bg-[#E5E7EB] mb-[30px]"></div>

                <p className="text-center text-[#FAFAFA] mb-[30px]">Copyright &copy; 2025. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Footer;