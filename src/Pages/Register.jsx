import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { motion,useScroll } from 'motion/react';

const Register = () => {
    const { createUser, setUser, updateUser, signInWithGoogle } = use(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    
    const { scrollYProgress } = useScroll();
    // register with google

    const handleGoogleRegister = () => {
        signInWithGoogle().then((res) => {
            toast("Logged in with Google!");
            navigate(`${location.state ? location.state : "/"}`);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast(errorCode, errorMessage);
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        // console.log(name,email,photo,password);

        const { scrollYProgress } = useScroll();
        // password validation

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            setError("Password must be at least 6 characters. Include uppercase and lowercase letters.")
            return;
        }
        else
            setError("");

        createUser(email, password).then(res => {
            const user = res.user;
            updateUser({
                displayName: name,
                photoURL: photo
            }).then(() => {
                setUser({ ...user, displayName: name, photoURL: photo });
            }).catch((error) => {
                toast(error);
                setUser(user);
            });

            toast("Registered Successfully!");
            navigate("/");
        }).catch((error) => {
            const errorMessage = error.message;
            toast(errorMessage);
        });

    }
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
                <title>{`GameHub | Register`}</title>
                <div className="hero bg-base-200 min-h-screen w-full max-w-[500px] mx-auto">
                    <div className="w-full hero-content flex-col">
                        <p className='text-center text-[32px] font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent mb-[10px]'>REGISTER</p>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form onSubmit={handleRegister} className="w-full card-body">
                                <fieldset className="fieldset">
                                    <label className="name">Name</label>
                                    <input name="name" type="text" className="input" placeholder="Name" required />
                                    <label className="email">Email</label>
                                    <input name="email" type="email" className="input" placeholder="Email" required />

                                    <label className="photo">Photo URL</label>
                                    <input name="photo" type="url" className="input" placeholder="Photo URL" required />
                                    <label className="password">Password</label>
                                    <input name="password" type="password" className="input" placeholder="Password" required />
                                    {
                                        error && <p className='text-xs text-red-500'>{error}</p>
                                    }
                                    <div>
                                        <Link to="/login" className="link link-hover">Back to Login</Link>
                                    </div>
                                    <button type="submit" className="btn btn-neutral mt-4 border-none bg-linear-to-r from-[#632EE3] to-[#9F62F2]">Register</button>

                                </fieldset>
                            </form>
                            <button onClick={handleGoogleRegister} className="w-full max-w-[336px] mx-auto mb-[20px] btn btn-neutral border-none bg-linear-to-r from-[#632EE3] to-[#9F62F2]"><FaGoogle /> Continue with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;