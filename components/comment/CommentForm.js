import React, { useEffect, useState } from 'react'
import {View,Text,TouchableOpacity, Image, TextInput} from "react-native";
import { Divider } from '@rneui/themed';
import auth from "@react-native-firebase/auth";
import firebase  from "@react-native-firebase/app";
import firestore from "@react-native-firebase/firestore";
import { Formik } from 'formik';
import * as Yup from "yup"
const postCommentSchema = Yup.object().shape({
  postComment:Yup.string().max(200,"comment is under 200 lenght").required("comment is must have less than 200")
})
const CommentForm = ({commentData,navigation}) => {
  const [currentUserLogged,setCurrentLoggedUser] = useState(null);
  const getCurrentUserName = () =>{
    const user = auth().currentUser;
    const commentbyUser = firestore().collection("users").where("owner_id","==", user.uid).limit(1).onSnapshot(
      snapshot => snapshot.docs.map(doc => {
        setCurrentLoggedUser({
          fullName:doc.data().fullname,
          dp:doc.data().profile_Picture,
        })
      })
    )
    return commentbyUser;
  }
  useEffect(()=>{
    getCurrentUserName()
  },[])
  const addToCommentFirebase = async (values) =>{
    let data ={
      img:currentUserLogged.dp,
      user:currentUserLogged.fullName,
      owner_id:auth().currentUser.uid,
      comment:values.postComment,
      owner_email:auth().currentUser.email,

      
    }
    console.log(commentData.id);
    console.log(data);
    const user =await firestore()
    .collection("users")
    .doc(commentData.email)
    .collection('post')
    .doc(commentData.id)
    .update({
      comments: firebase.firestore.FieldValue.arrayUnion(data)
    })
    .then(() => console.log("comment inserted successfully"))
    navigation.navigate("home");
    return user;
  }
  
  const initialValue = {
    postComment:"",
  }
  return (
    <Formik
    validationSchema={postCommentSchema}
    onSubmit={(values) => addToCommentFirebase(values)}
    initialValues={initialValue}
    validateOnMount={true}
    >
      {
        ({handleSubmit,handleBlur,handleChange,values,isValid,errors})=>(
          <View style={{flexDirection:"row",backgroundColor:"grey",marginBottom:30}}>
        <TouchableOpacity  style={{height:50,justifyContent:"center",paddingHorizontal:16,flex:0.5}}>
                    <View style={{height:37,borderWidth:0.5,borderRadius:50,borderColor:"white",width:37,justifyContent:"center"}}>
                        <Image source={{uri: commentData.profileImg}} style={{height:37,width:37,borderWidth:2,borderRadius:50}} />
                    </View>    
        </TouchableOpacity>
        
        <View style={{justifyContent:"center",flex:3}}>
          <TextInput placeholderTextColor={"white"} value={values.postComment} onBlur={handleBlur('postComment')} onChangeText={handleChange('postComment')}  placeholder='Add a comment' multiline={true} style={{color:"white"}}/>
        </View>
        <TouchableOpacity style={{justifyContent:"center",marginLeft:10,flex:0.9,alignItems:"center"}} disabled={!isValid} onPress={handleSubmit}>
             <Text style={{color:(isValid)?"blue":"red",fontSize:15}}>Post</Text>
        </TouchableOpacity>
    </View>
        )
      }
    </Formik>
  )
}

export default CommentForm