import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebaseConfig.init";


export const AuthProviderContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogOut = () => {
        return signOut(auth)
    }
    const userUpdateProfile = (updateProfileInfo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updateProfileInfo)
    }
    const loginWithSocial = (providerName) => {
        setLoading(true)
        return signInWithPopup(auth, providerName)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = {
        createNewUser,
        loginUser,
        userLogOut,
        userUpdateProfile,
        user,
        setUser,
        loading,
        setLoading,
        loginWithSocial
    }
    return (
        <AuthProviderContext.Provider value={authInfo}>
            {children}
        </AuthProviderContext.Provider>
    );
};

export default AuthProvider;