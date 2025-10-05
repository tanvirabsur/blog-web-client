import {
    createUserWithEmailAndPassword,
    onAuthStateChanged, signInWithEmailAndPassword,
    updateProfile
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';
const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (updateUserInfo) => {
        return updateProfile(auth.currentUser, updateUserInfo)

    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const Logout = () => {
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
        unsubscribe()
    }, [])

    const contextData = {
        user,
        loading,
        setUser,
        setLoading,
        createUser,
        updateUser,
        Logout,
        login
    }
    return (
        <AuthContext value={contextData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;