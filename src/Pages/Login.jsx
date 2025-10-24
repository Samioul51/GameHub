import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaGoogle } from "react-icons/fa";
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const { signIn } = use(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password).then((res) => {
            const user = res.user;
            toast("Logged In Successfully!");
            navigate(`${location.state?location.state:"/"}`);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast(errorCode,errorMessage);
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
                                <label className="email">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" required />
                                <label className="password">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" required />
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