import React from "react";
import {View,Text, ScrollView,Image} from "react-native";
import { Divider } from "@rneui/themed";
import peoplsData from "../data/peopls";
const Strories = () =>{
  return(
    <View style={{backgroundColor:"black"}}>
       <Divider/>
       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop:2}}>
             {
                peoplsData.map((value,index)=>(
                    <View key={index} style={{height:100,justifyContent:"center",paddingHorizontal:8}}>
                        <View style={{height:69,borderWidth:1.5,borderRadius:50,borderColor:"red",width:69,alignItems:"center",justifyContent:"center"}}>
                            <Image source={{uri:value.img}} style={{height:60,width:60,borderWidth:2,borderRadius:50}} />
                        </View>
                        <Text style={{fontSize:12,textAlign:"center",marginTop:2,color:"white"}}>{(value.name.length >=9)?value.name.slice(0,9)+"...":value.name}</Text>
                    </View>
                ))
             }
       </ScrollView>
       <Divider style={{marginTop:1}} />
    </View>
  )
}

export default Strories;