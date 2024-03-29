import { createContext, useContext, useState } from "react";

const Context = createContext(null)

export function contexter () {
    return useContext(Context)
    
}

 export function ContextProvider ({children}){
    const [loggedIn,setLoggedIn]=useState(false)
    const [email,setEmail]=useState("")
    const [token,setToken]=useState("")
    const [orderId,setOrderId]=useState("")
    const [profilePic,setProfilePic]=useState()
    const [orders,setOrders]=useState([])
    const userContext={
      token,
      setToken,
      email,
      setEmail,
      profilePic,
      setProfilePic,
      loggedIn,
      setLoggedIn,
      orders,
      setOrders,
      orderId,
      setOrderId
    }
    return(
    <Context.Provider value={userContext}>
        {children}
    </Context.Provider>
    )
    
}
