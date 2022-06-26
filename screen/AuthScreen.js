import React,{useEffect, useState} from "react";
import Navigation from "./Navigation";
import auth from "@react-native-firebase/auth"
import LoginScreen from "./LoginScreen";
const AuthScreen = () => {
   
    const [isLogged,setIsLogged] = useState(null);

    const handleUser = user => user ? setIsLogged(user) : setIsLogged(null)
    useEffect(() => {
        auth().onAuthStateChanged((user) => handleUser(user))
    },[])
    return(
        <>
        {isLogged ? <Navigation/> : <LoginScreen/>}
        </>
    )
}
export default AuthScreen