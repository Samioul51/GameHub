import React, { use, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { motion,useScroll } from 'motion/react';


const UpdateProfile = () => {
    const { user, updateUser, setUser } = use(AuthContext);
    const [options, setOptions] = useState("");
    const navigate = useNavigate();


    const { scrollYProgress } = useScroll();

    const handleUpdate = (e) => {
        e.preventDefault();
        // console.log(user);
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;

        const updatedData = {};
        if (name)
            updatedData.displayName = name;
        if (photo)
            updatedData.photoURL = photo;

        if (!name && !photo) {
            setOptions("Fill at least one field to update.");
            return;
        }
        else
            setOptions("");

        updateUser(updatedData).then(() => {
            setUser({ ...user, displayName: name || user.displayName, photoURL: photo || user.photoURL });
            toast("Profile updated successfully!")
            navigate("/");
        }).catch((error) => {
            toast("Failed to update profile: ", error.message);
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
                <title>{`GameHub | Update Profile`}</title>
                <div className='w-full max-w-[1440px] flex flex-col items-center py-[50px] mx-auto'>
                    <p className='text-center text-[32px] font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent mb-[10px]'>UPDATE PROFILE</p>
                    <div className="w-full max-w-[500px] h-auto bg-white p-[100px] box-border rounded-[10px]">
                        <form onSubmit={handleUpdate} className="w-full">
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input name="name" type="text" className="input" placeholder="Name" />
                                <label className="label">Photo URL</label>
                                <input name="photo" type="URL" className="input" placeholder="Photo URL" />
                                {
                                    options && <p className='text-xs text-red-500'>{options}</p>
                                }
                                <button type="submit" className="mx-auto border-0 mt-4 w-full max-w-[145px] h-[43px] justify-center items-center bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-[4px] cursor-pointer text-white ">Update Information</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateProfile;