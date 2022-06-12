import React, { useState } from "react"
import {View,Text,Image, ScrollView, TouchableOpacity} from "react-native";
import { Divider } from "@rneui/themed";
import peoplsData from "../data/peopls";
import { StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import Entypo from "react-native-vector-icons/Entypo"
import Icons from "../data/Icons";
import Post from "../data/post";
const PostHeader = (props) => {
    return(
        <View>
       <View style={{justifyContent:"space-between",height:50,flexDirection:"row",alignItems:"center",marginLeft:10}}>
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
            <Image  source={{uri: props.img}} style={styles.image}/>
            <View style={{flexDirection:"row",marginLeft:15}}>
              <Text style={{color:"white"}}>{props.name}</Text>
              <Entypo name="dot-single" size={18} style={{color:"white"}}/>
              <Text style={{color:"blue"}}>Follow </Text>
            </View>

            
          </View>
          <View style={{alignItems:"center",marginRight:9}}>
            <Ionicons name="ellipsis-vertical-outline" size={25} style={{color:"white"}}/>
          </View>
       </View>
       <Divider/>
       </View>
    )
}
const PostData = ({data}) =>{
     return(
        <View>
          {
            data.map((value,index)=>(
                 <View key={index}>
                    <PostHeader key={index} name={value.usersName} img={value.profileImg}/>
                        <Image source={{uri: value.postImg}} style={{height:450,width:"100%"}}/>
                    <PostBottom bottomdata={Icons}/>
                    {
                       !!value.like && <PostLike like={value.like}/>
                    }
                    <PostCaption caption={value.caption} name={value.usersName}/>
                    <PostComment comment={value.comments}/>
                    <Divider/>
                 </View>
                ))
          }
        </View>
     )
}
const PostCaption = ({caption,name}) => {
  const [isMore,setIsMore] = useState(false);
  return (
    <View  style={{flexDirection:"row",alignItems:"center",marginLeft:10}}>
      <Text style={{color:"white"}}>

      
      <Text style={{fontWeight:"bold"}}>{name}{' '}</Text>
      {caption.slice(0,24)}
      {(isMore) && caption}
      {(!isMore) && (caption.length > 24 ) && <TouchableOpacity style={{alignItems:"center"}} onPress={() => setIsMore(true)}>
           <Text style={{color:"grey",top:5}}>...more</Text>
        </TouchableOpacity>}
      
    </Text>
  </View>
  )
}

const PostComment = ({comment}) =>{
  return (
    <View>
      <Text style={{color:"grey",marginLeft:10,marginTop:4 }}>
        View
        {(comment.length >2 )?" ":"  all"}{' '}
        {(comment.length)}{' '}
        {(comment.length > 1)?"Comments":"Comment"}
      </Text>
    </View>
  )
}

const PostLike = ({like}) =>{
         return(
          <View  style={{flexDirection:"row",alignItems:"center",marginLeft:10}}>
            <Text style={{color:"white",textAlign:"center"}}>{like}{"  "}{(like<2) ?"like":"likes"}</Text>
            
          </View>
         )
}
const PostBottom = ({bottomdata}) => {
    const [like,setLike] = useState(false);
    return(
        
        <View style={{justifyContent:"space-between",height:50,flexDirection:"row",alignItems:"center"}}>
           <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around",width:145}}>
             {
                !like && <TouchableOpacity onPress={() => setLike(true)}>
                     <Image  source={{uri: bottomdata[0].IconUrl}} style={{height:27,width:26}}/>
                </TouchableOpacity>
             }
             {
                like && <TouchableOpacity onPress={() => setLike(false)}>
                <Image  source={{uri: bottomdata[0].LikedUrl}} style={{height:27,width:26}}/>
                </TouchableOpacity>
             }
             <Image  source={{uri: bottomdata[1].IconUrl}} style={{height:25,width:25}}/>
             <Image  source={{uri: bottomdata[2].IconUrl}} style={{height:28,width:27}}/>
             
             
           </View>
           <View style={{alignItems:"center",marginRight:9}}>
              <Image  source={{uri: bottomdata[3].IconUrl}} style={{height:28,width:27}}/>
           </View>
        </View>
        
       
    )
}
const PostScreen = () =>{
    return(
        <>
            <PostData data={Post}/>
            
        </>
    )
}
export default PostScreen;
const styles=StyleSheet.create({
    image:{
      height:35,
      width:35,
      borderRadius:50,
    }
});