import React, { useState,useEffect } from "react"
import {View,Text,Image, ScrollView, TouchableOpacity} from "react-native";
import { Divider } from "@rneui/themed";
import peoplsData from "../data/peopls";
import { StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import Entypo from "react-native-vector-icons/Entypo"
import Icons from "../data/Icons";
import Post from "../data/post";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
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
const PostData = ({data,navigation}) =>{
     return(
        <View style={{backgroundColor:"black"}}>
          {
            data.map((value,index)=>(
                 <View key={index}>
                    <PostHeader key={index} name={value.usersName} img={value.profileImg}/>
                        <Image source={{uri: value.postImg}} style={{height:450,width:"100%"}}/>
                    <PostBottom bottomdata={Icons} post={value} navigation={navigation}/>
                    
                    
                        <PostLike  post={value}/>
                      
                    
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

const PostLike = ({post}) =>{
         return(
          <View  style={{flexDirection:"row",alignItems:"center",marginLeft:10}}>
            <Text style={{color:"white",textAlign:"center"}}>{post.likes_by_users.length}{"  "}{(post.likes_by_users.length<2) ?"like":"likes"}</Text>
            
          </View>
         )
}
const PostBottom = ({bottomdata,post,navigation}) => {
    
    const currentLikeStatus = !post.likes_by_users.includes(
      auth().currentUser.email
    )
    const handleLike = post =>{
      firestore()
      .collection('users')
      .doc(post.email)
      .collection("post")
      .doc(post.id)
      .update({
          likes_by_users: currentLikeStatus ? 
          firestore.FieldValue.arrayUnion(
              auth().currentUser.email)
              : 
              firestore.FieldValue.arrayRemove(
                  auth().currentUser.email)   
      }).then(console.log(currentLikeStatus)).catch(error => {
          console.log(error)
      })

      
  }

    return(
        
        <View style={{justifyContent:"space-between",height:50,flexDirection:"row",alignItems:"center"}}>
           <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around",width:145}}>
             
                <TouchableOpacity onPress={() => handleLike(post)}>
                     <Image  source={{uri: (currentLikeStatus)?bottomdata[0].IconUrl:bottomdata[0].LikedUrl}} style={{height:27,width:26}}/>
                </TouchableOpacity>
             

            
             <TouchableOpacity onPress={() => navigation.navigate("comments",{commentData:post})}>
                <Image  source={{uri: bottomdata[1].IconUrl}} style={{height:25,width:25}}/>
             </TouchableOpacity>
             <Image  source={{uri: bottomdata[2].IconUrl}} style={{height:28,width:27}}/>
             
             
           </View>
           <View style={{alignItems:"center",marginRight:9}}>
              <Image  source={{uri: bottomdata[3].IconUrl}} style={{height:28,width:27}}/>
           </View>
        </View>
        
       
    )
}

export default PostData;
const styles=StyleSheet.create({
    image:{
      height:35,
      width:35,
      borderRadius:50,
    }
});