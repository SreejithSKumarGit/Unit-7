import React from "react";

export const AuthContext=React.createContext();

export function AuthContextProvider({children})
{
    const [user,setUser]=React.useState("");
    const [isLogin,setisLogin]=React.Children.useState(false);

    
    return (
        <AuthContext.Provider value={{user,setUser,isLogin,setisLogin}}>
            {children}
        </AuthContext.Provider>
    )
}