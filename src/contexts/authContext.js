import {createContext, useEffect, useState} from "react";
import {useRouter} from "next/router";


const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [userData , setUserData] = useState({});
    const getUserData = async () => {
        let massage;
        await fetch(`${process.env.LOCAL_URL}/api/auth/userInfo`, {
            method: "GET",
        }).then(res => res.json()).then(data => massage = data)
        await setUserData(massage)
    }

    const signup = async (mobile,otp,password1,password2) => {
        let massage
        await fetch(`${process.env.LOCAL_URL}/api/auth/login`, {
            method: "POST",
            body: JSON.stringify({
                mobile: mobile,
                code: otp,
                password1 : password1,
                password2 : password2
            })
        }).then(res => res.json()).then(data => massage = data)
        getUserData()
        return massage
    }

    const signin = async (mobile,password1) => {
        let massage
        await fetch(`${process.env.LOCAL_URL}/api/auth/login`, {
            method: "POST",
            body: JSON.stringify({
                mobile: mobile,
                password1 : password1,
            })
        }).then(res => res.json()).then(data => massage = data)
        getUserData()
        return massage
    }

    //login
    const sendMobile = async (mobile) => {
       let returnedData;
        await fetch(`${process.env.LOCAL_URL}/api/auth/login`, {
            method: "POST",
            body: JSON.stringify({
                mobile: mobile
            })
        }).then(res => res.json()).then(data => returnedData = data)
        console.log(returnedData)
        return returnedData

    }
    //logOut
    const router = useRouter()
    const logOut = async () => {
        let massage
        await fetch(`${process.env.LOCAL_URL}/api/auth/logout`, {
            method: "POST",
        }).then(res => res.json()).then(data => massage = data)
        getUserData()
        router.push("/")
        return massage
    }
    //check if user logged in


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( ()=>{
         getUserData()
    },[])



    return (

        <AuthContext.Provider value={{signup,signin, sendMobile, logOut, userData, getUserData}}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthContext