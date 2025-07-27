import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext=createContext(null);

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);


    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)

    }


    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log('user in state',currentUser);
            setUser(currentUser)
        })
        return ()=>unSubscribe()
    },[])

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        return signOut(auth)
    }



    const authInfo={
        user,
        createUser,
        logOut,
        signIn,
    }



    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;