import React, { useState } from 'react'
import { View,Image,Text, TouchableOpacity,ScrollView } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
const plusImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAN0lEQVRIiWNgGFHgPxSQooeJVo4ZtWDUgiFkASOMQWoGImgwIyMjAwMdfEASGC0qRi0YtWCkAgDXKRQUa9rr/gAAAABJRU5ErkJggg=="
const HighLights = () =>{
    const [plus,setPlus] = useState(false);
    return(
        <View>
            <Text style={{color:"white",paddingHorizontal:14}}>Keep your favorite stories on your profile</Text>
            
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
             
                <TouchableOpacity  style={{height:94,justifyContent:"center",paddingHorizontal:13}}>
                    <View style={{height:60,borderWidth:0.5,borderRadius:50,borderColor:"white",width:60,alignItems:"center",justifyContent:"center"}}>
                        <Image source={{uri: "https://picsum.photos/200/200"}} style={{height:55,width:55,borderWidth:2,borderRadius:50}} />
                    </View>
                    <Text style={{fontSize:12,textAlign:"center",marginTop:2,color:"white"}}>{("Aaditya".length >=9)?"Aaditya".slice(0,9)+"...":"Aaditya"}</Text>
                    
               </TouchableOpacity>
                <TouchableOpacity  style={{height:94,justifyContent:"center",paddingHorizontal:13}}>
                    <View style={{height:60,borderWidth:0.5,borderRadius:50,borderColor:"white",width:60,alignItems:"center",justifyContent:"center"}}>
                        <Image source={{uri: plusImage}} style={{height:55,width:55,borderWidth:2,borderRadius:50}} />
                    </View>
                    <Text style={{fontSize:12,textAlign:"center",marginTop:2,color:"white"}}>{("Aaditya".length >=9)?"Aaditya".slice(0,9)+"...":"Aaditya"}</Text>
                    
               </TouchableOpacity>
                
            </ScrollView>
            
            
            
        </View>
    )
}
export default HighLights;