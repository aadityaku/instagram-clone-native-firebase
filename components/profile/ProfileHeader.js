import React from 'react'
import {View,Text, TouchableOpacity} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Octicons from "react-native-vector-icons/Octicons"
import Feather from "react-native-vector-icons/Feather"
const ProfileHeader = ({navigation}) => {
  return (
     <View style={{flexDirection:"row",backgroundColor:"black",paddingHorizontal:16,padding:10,alignItems:"center",justifyContent:"space-between"}}>
        <TouchableOpacity style={{flexDirection:"row"}}>
            <Text style={{fontWeight:"600",color:"white",fontSize:22}}>Aditya kumar</Text>
            <MaterialIcons style={{marginTop:5}} name='expand-more'  size={25} color="white" />
        </TouchableOpacity>
        <View style={{flexDirection:"row",justifyContent:"space-between",width:80}} >
            <TouchableOpacity onPress={() => navigation.navigate("newpost")}>
                 <Feather name='plus-square' size={27} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:6}}>
                <Octicons name='three-bars' size={27} color="white" />
                 
            </TouchableOpacity>
            
        </View>
     </View>
  )
}

export default ProfileHeader