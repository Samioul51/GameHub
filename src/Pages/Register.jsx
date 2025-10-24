import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser,setUser,updateUser } = use(AuthContext);
    const navigate=useNavigate();
    const [error,setError]=useState("");
    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        // console.log(name,email,photo,password);

        // password validation

        const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if(!passwordRegex.test(password)){
            setError("Password must be at least 6 characters. Include uppercase and lowercase letters.")
            return;
        }
        else
            setError("");

        createUser(email, password).then(res => {
            const user = res.user;
            updateUser({
                displayName:name,
                photoURL:photo
            }).then(()=>{
                setUser({...user,displayName:name,photoURL:photo});
            }).catch((error)=>{
                toast(error);
                setUser(user);
            });
            
            toast("Registered Successfully!");
            navigate("/");
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast(errorMessage);
        });

    }
    return (
        <div className='w-full bg-[#f5f5f5]'>
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
                                <Link className="btn btn-neutral mt-4 border-none bg-linear-to-r from-[#632EE3] to-[#9F62F2]"><FaGoogle /> Continue with Google</Link>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;