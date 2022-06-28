import React, { useState } from 'react'
import { View,Image,Text, TouchableOpacity} from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
import HighLights from './HighLights';

const ProfileImage = () => {
    const [stories,setStories] = useState(false);
  return (
    <View style={{backgroundColor:"black"}}>
    <View style={{flexDirection:"row",justifyContent:"space-between",padding:10,paddingHorizontal:16}}>
        <View style={{marginTop:2.5,flex:0.7}}>
        
            <Image source={{uri : "https://picsum.photos/200/200"}} style={{height:93,width:"68%",borderRadius:50}} />
            
        </View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"space-between"}}>
             <TouchableOpacity style={{alignItems:"center",justifyContent:"center"}}>
                <Text style={{fontWeight:"600",fontSize:16,color:"white"}}>5</Text>
                <Text style={{fontSize:14,color:"white"}}>Post</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{alignItems:"center",justifyContent:"center"}}>
                <Text style={{fontWeight:"600",fontSize:16,color:"white"}}>108</Text>
                <Text style={{fontSize:14,color:"white"}}>Followers</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{alignItems:"center",justifyContent:"center"}}>
                <Text style={{fontWeight:"600",fontSize:16,color:"white"}}>61</Text>
                <Text style={{fontSize:14,color:"white"}}>Following</Text>
             </TouchableOpacity>
        </View>
    </View>
    <View style={{paddingHorizontal:13}}>
        <Text style={{color:"white",fontWeight:"600"}}>Aaditya kumar</Text>
            <Text style={{color:"white"}}>Programmerkdnvlksdnsknsknksnksgkshgsjdgbkjsghkjshgksjdhgksjhgksjhgksjhgksjhg...
            <Text style={{color:"grey"}}>more</Text>
            </Text>

            
    </View>
    <View style={{alignItems:"center",justifyContent:"center",paddingHorizontal:12,paddingVertical:15}}>
        <TouchableOpacity style={{height:28.5,borderRadius:7,width:"100%",backgroundColor:"grey",justifyContent:"center"}}>
            <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Edit Profile</Text>
        </TouchableOpacity>
       
    </View>
    <TouchableOpacity onPress={() => setStories(!stories)} style={{alignItems:"center",justifyContent:"space-between",flexDirection:"row",paddingHorizontal:14,marginTop:2}}>
        <Text style={{color:"white",fontWeight:"600"}}>Story highlights</Text>
        {
            !stories && <Entypo name='chevron-small-down' size={20} style={{color:"white"}}/>
        }
        {
            stories && <Entypo name='chevron-small-up' size={20} style={{color:"white"}}/>
        }
    </TouchableOpacity>
    
       {
        stories &&  <HighLights/>
       }
       
   
</View>
  )
}

export default ProfileImage