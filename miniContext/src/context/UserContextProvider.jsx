import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
            {/* The Provider component is used to pass the context value to its children. Any component inside the Provider can access the context value. */}
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider