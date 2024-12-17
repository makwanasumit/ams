"use client"
import { getLocalStorage } from '@/app/utils/LocalStorage'
import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userdata, setUserData] = useState(null)


    useEffect(() => {
      const {employees, admin} = getLocalStorage()
      setUserData({employees, admin})
    }, [])
    


  return (
    <div>
        <AuthContext.Provider value={userdata} >
        {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider