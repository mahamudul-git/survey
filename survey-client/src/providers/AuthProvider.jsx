import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext=createContext(null);

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);


    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)

    }


    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            if(currentUser){
                setUser({
                    uid: currentUser.uid,
                    email: currentUser.email,
                    name: currentUser.displayName || "",
                    photoURL: currentUser.photoURL || "",
                });
            }else{
                setUser(null);
            }
        })
        return ()=>unSubscribe()
    },[])

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
      };

    const logOut=()=>{
        return signOut(auth)
    }



    const authInfo={
        user,
        createUser,
        logOut,
        signIn,
        signInWithGoogle,
    }



    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;