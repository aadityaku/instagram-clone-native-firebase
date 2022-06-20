import React from "react";
import { Pressable, SafeAreaView, View,Image,Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import LoginHeader from "./LoginHeader";

const LoginButton = ({navigation}) =>{
    return(
    <>
        <LoginHeader/>
       <View style={{justifyContent:"center",alignItems:"center",paddingVertical:1,flex:1}}>
        <View style={{width:"100%",alignItems:"center",justifyContent:"center"}}>
            <Image style={{height:52.5,width:"50%"}} source={{uri:"https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"}}/>
        </View>
        <View style={{paddingVertical:65}}>
        <TouchableOpacity onPress={() => navigation.navigate("singupform")} style={{backgroundColor:"#0095f6",width:320,borderRadius:4,height:50,justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:"white",textAlign:"center",fontWeight:"600"}}>Create new account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("loginform")} style={{width:320,borderRadius:4,height:50,marginTop:5,justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:"#0095f6",textAlign:"center",fontWeight:"bold"}}>Login</Text>
        </TouchableOpacity>
        
        </View>
       </View>
       </>
     
    )
}

export default LoginButton;