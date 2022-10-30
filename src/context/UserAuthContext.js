import { createContext, useContext, useState, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    // signInWithPopup
} from 'firebase/auth'
import { auth } from "../firebase.js";


import React from 'react'

const UserAuthContext = createContext();

export function UserAuthContextProvider({ children }) {

    const [user, setUser] = useState("")

    function Signup (email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function Login (email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function Logout(){
        return signOut(auth)
    }
    // function GoogleSignIn(){
    //     const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    //     return signInWithPopup(auth, googleAuthProvider)
    // }
    // const googleProvider = new firebase.auth.GoogleAuthProvider();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])
    
    return(
        <UserAuthContext.Provider value={{user, Signup, Login, Logout}}>
            {children}
        </UserAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(UserAuthContext)
}