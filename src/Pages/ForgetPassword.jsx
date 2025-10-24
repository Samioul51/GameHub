import React, { use, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router';
import { motion,useScroll } from 'motion/react';

const ForgetPassword = () => {
    const { forgotPassword } = use(AuthContext);
    const location = useLocation();

    const { scrollYProgress } = useScroll();

    const initialEmail = location.state?.email || "";

    const [email, setEmail] = useState(initialEmail);

    const handleResetPassword = (e) => {
        e.preventDefault();
        // console.log(email);
        if (!email) {
            toast("Please enter your email!");
            return;
        }

        forgotPassword(email).then((res) => {
            toast("Password reset email sent! Redirecting to Gmail...");
            setTimeout(() => {
                window.location.href = "https://mail.google.com"
            }, 1500);
        }).catch((error) => {
            const errorMessage = error.message;
            toast(errorMessage);
        });
    };

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
                <title>{`GameHub | Reset Password`}</title>
                <div className='w-full max-w-[1440px] flex flex-col items-center py-[50px] mx-auto'>
                    <p className='text-center text-[32px] font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent mb-[10px]'>RESET YOUR PASSWORD</p>
                    <div className="w-full max-w-[500px] h-auto bg-white p-[100px] box-border rounded-[10px]">
                        <form onSubmit={handleResetPassword} className="w-full">
                            <fieldset className="fieldset">
                                <label className="label">Enter your email</label>
                                <input name="email" type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                <button type="submit" className="mx-auto border-0 mt-4 w-full max-w-[145px] h-[43px] justify-center items-center bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-[4px] cursor-pointer text-white ">RESET PASSWORD</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgetPassword;