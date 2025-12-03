import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut,signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';

export const AuthContext=createContext();

const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    
    // register
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };

    // login
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    // google login

    const signInWithGoogle= async ()=>{
        setLoading(true);
        try{
            return await signInWithPopup(auth,googleProvider);
        }
        catch(error){
            if(error.code==="auth/popup-closed-by-user"){
                setLoading(false);
                return null;
            }
            setLoading(false);
            throw error;
        }
    }

    // Reset Password

    const forgotPassword=(email)=>{
        setLoading(true);
        return sendPasswordResetEmail(auth,email);
    }

    // update user info

    const updateUser=(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData);
    }

    // logout
    const logout=()=>{
      return signOut(auth);
    };

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    },[]);

    const authData={
        user,
        setUser,
        createUser,
        logout,
        signIn,
        loading,
        setLoading,
        updateUser,
        signInWithGoogle,
        forgotPassword
    };
    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;