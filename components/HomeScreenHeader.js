import { View, Text,StyleSheet, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"
import auth from "@react-native-firebase/auth"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const image = require("../image/logo2.png")
const HomeScreenHeader = ({navigation}) => {
  const signOut = async () =>{
        try{
          await auth()
          .signOut()
          console.log("success full signout");
        }
        catch(error){
          console.log(error);
        }

  } 
  
  return(
    <View style={{alignItems:"center",flexDirection:"row",height:60, paddingHorizontal:13,backgroundColor:"black",justifyContent:"space-between"}}> 
        
           <TouchableOpacity onPress={signOut} style={{space:2,flexDirection:"row"}}>
              <Image source={image} style={{width:124,height:69,resizeMode:"contain"}} />
              <MaterialIcons style={{alignSelf:"center"}} name='expand-more'  size={25} color="white" />
           </TouchableOpacity>
      
        <View style={{flexDirection:"row",justifyContent:"space-between",width:80}} >
            <TouchableOpacity onPress={() => navigation.push("newpost")}>
                 <Feather name='plus-square' size={27} color="white" />
            </TouchableOpacity>
            <View style={{marginRight:6}}>
              <Feather name='send' size={27} color="white" />
                 <Text style={{position:'absolute',fontWeight:"700",color:'white',backgroundColor:'red',borderRadius:50,paddingHorizontal:4,paddingVertical:0,top:-15,right:-6}} >1</Text>
            </View>
            
        </View>
      
   </View>
  
  )
}

export default HomeScreenHeader;

const styles=StyleSheet.create({
       header:{
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"space-between",
          height:40,
           
       },
       image: {
        width:50,
        height:20,
        backgroundColor:"white",
        resizeMode:"contain"
      },

})