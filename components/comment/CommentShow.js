import React from 'react'
import { View,Text,Image,TouchableOpacity, SafeAreaView } from 'react-native'
import Icons from '../../data/Icons';
import {Divider} from "@rneui/themed";
const CommentAuth =({commentData})=>{
   return(
    <View style={{flexDirection:"row",backgroundColor:"black",marginBottom:7}}>
        <TouchableOpacity  style={{height:50,justifyContent:"center",paddingHorizontal:16}}>
                    <View style={{height:40,borderWidth:0.5,borderRadius:50,borderColor:"white",width:40,alignItems:"center",justifyContent:"center"}}>
                        <Image source={{uri: commentData.profileImg}} style={{height:43,width:43,borderWidth:2,borderRadius:50}} />
                    </View>    
        </TouchableOpacity>
        
        <View style={{alignItems:"center",justifyContent:"center",marginLeft:10}}>
           <Text style={{color:"white"}}>{commentData.caption}</Text>
        </View>
    </View>
   )
}
const CommentByUser = ({data})=>{
    return(
        <View style={{flexDirection:"row",backgroundColor:"black"}}>
        <TouchableOpacity  style={{height:50,justifyContent:"center",paddingHorizontal:16,flex:0.5}}>
                    <View style={{height:40,borderWidth:0.5,borderRadius:50,borderColor:"white",width:40,alignItems:"center",justifyContent:"center"}}>
                        <Image source={{uri: data.img}} style={{height:43,width:43,borderWidth:2,borderRadius:50}} />
                    </View>    
        </TouchableOpacity>
        
        <View style={{justifyContent:"center",flex:2.4}}>
           <Text style={{color:"white"}}>{data.comment}</Text>
        </View>
        <View style={{justifyContent:"center",marginLeft:10,flex:0.6,alignItems:"center"}}>
             <Image source={{uri : Icons[0].IconUrl}} style={{height:20,width:20}}/>
        </View>
    </View>
    )
}

const CommentShow = ({navigation,commentData}) => {
  return (
    <SafeAreaView style={{backgroundColor:"black",flex:1}}>
        <CommentAuth  navigation={navigation} commentData={commentData}/>
        <Divider />
       {
        commentData.comments.map((value,key)=>(
            <CommentByUser data={value} key={key} />
        ))
       }
       
    </SafeAreaView>
  )
}

export default CommentShow