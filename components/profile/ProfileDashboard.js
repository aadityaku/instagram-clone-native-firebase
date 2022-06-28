import React from 'react'
import {View,Text, TouchableOpacity} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"
const ProfileDashboard = () => {
  return (
    <TouchableOpacity style={{flexDirection:"row",backgroundColor:"black",justifyContent:"space-between",alignItems:"center",paddingHorizontal:16,padding:10}}>
        <View>
            <Text style={{fontWeight:"600",fontSize:14,color:"white"}}>Professional Dashboard</Text>
            <Text style={{fontSize:12,color:"grey"}}>Tools and resources just for creators.</Text>
        </View>
        <View>
           <AntDesign name='right' size={18}/>
        </View>
    </TouchableOpacity>
  )
}

export default ProfileDashboard