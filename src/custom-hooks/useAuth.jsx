import  { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase.config'
import { useState } from 'react'
const useAuth = () => {
    const [currentUser,setCurrentuser] = useState({})

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
        if(user){
            setCurrentuser(user)
        } else{
            setCurrentuser(null)
        }
    })
    })
  return {
    currentUser,
  }
}

export default useAuth
