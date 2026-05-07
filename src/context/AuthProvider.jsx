import { createContext, useEffect, useState } from 'react'
import { getLocalStorage, initializeStorage, saveEmployeesToStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        initializeStorage()
        const {employees} = getLocalStorage()
        setUserData(employees)
    }, [])

    useEffect(() => {
      if (userData) {
        saveEmployeesToStorage(userData)
      }
    }, [userData])

  return (
    <AuthContext.Provider value={[userData,setUserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
