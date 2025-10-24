import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut,signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';

export const AuthContext=createContext();

const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);

    // register
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    };

    // login
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    // logout
    const logout=()=>{
      return signOut(auth);
    };

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
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
    };
    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;