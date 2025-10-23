import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaGoogle } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.init';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth(app);

    const handleLogin=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            alert("User Logged In Successfully");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

    }
    

    return (
        <div className='w-full bg-[#f5f5f5]'>
            <div className="hero bg-base-200 min-h-screen w-full max-w-[500px] mx-auto">
                <div className="w-full hero-content flex-col">
                    <p className='text-center text-[32px] font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent mb-[10px]'>LOGIN</p>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="w-full card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <div className='w-full max-w-[320px] flex justify-between'>
                                    <Link className="link link-hover">Forgot password?</Link>
                                    <Link to="/register" className="link link-hover">Register</Link>
                                </div>
                                <button type="submit" className="btn btn-neutral mt-4 border-none bg-linear-to-r from-[#632EE3] to-[#9F62F2]">Login</button>
                                <Link className="btn btn-neutral mt-4 border-none bg-linear-to-r from-[#632EE3] to-[#9F62F2]"><FaGoogle /> Continue with Google</Link>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;