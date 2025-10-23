import React from 'react';

const Register = () => {
    return (
        <div className='w-full bg-[#f5f5f5]'>
            <div className="hero bg-base-200 min-h-screen w-full max-w-[500px] mx-auto">
                <div className="w-full hero-content flex-col">
                    <p className='text-center text-[32px] font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent mb-[10px]'>REGISTER</p>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="w-full card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <button className="btn btn-neutral mt-4 border-none bg-linear-to-r from-[#632EE3] to-[#9F62F2]">Login</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;