import { Button, Pressable, StyleSheet, Text, TextInput, View,Image, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import LoginHeader from './LoginHeader'
import { Divider } from '@rneui/themed'
import FontAwesome5Brands from "react-native-vector-icons/FontAwesome5Pro"
import * as Yup from "yup";
import { Formik } from 'formik'
import auth from "@react-native-firebase/auth";
const LoginForm = ({navigation}) => {
    
    
    const LoginFormSchema = Yup.object().shape({
        email:Yup.string().email().required("an emil is required"),
        password:Yup.string().required().min(6,"your password must be >= 6 length")
    })
    const onLogin = (email,password) =>{
         auth()
            .signInWithEmailAndPassword(email,password)
            .then(()=>{
                console.log("user account is created   & signed in");
            })
            .catch(error => {
                Alert.alert("Something went to wrong",`${error}`,[
                    {text:"ok",onPress:console.log("ok")},
                    {text:"Singup",onPress:navigation.navigate("singupform")}

                ])
            })
    }
    const initialValue = {
        email:"",
        password:""
    }
  return (
    <SafeAreaView style={{flex:1}}>
    <LoginHeader/>
    
    <View style={styles.FormContainer}>
        <View style={{width:"100%",alignItems:"center",justifyContent:"center"}}>
            <Image style={{height:50,width:"50%"}} source={{uri:"https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"}}/>
        </View>
       <Formik
       initialValues={initialValue}
       validationSchema={LoginFormSchema}
       onSubmit={(values) => onLogin(values.email,values.password)}
       validateOnMount={true}
       >
       {
        ({handleSubmit,handleBlur,isValid,handleChange,values})=>(
            <>
            <View style={styles.formInput}>
                 <TextInput 
                 style={{paddingHorizontal:10}}
                 placeholderTextColor="#202020" 
                 placeholder='Phone Number, Email or Username'
                 autoCapitalize='none'
                 keyboardType='email-address'
                 textContentType='emailAddress'
                 onBlur={handleBlur('email')}
                 onChangeText={handleChange('email')}
                 value={values.email}
                 />
     
             </View>
             <View style={styles.formInput}>
                 <TextInput
                 style={{paddingHorizontal:10}}
                 secureTextEntry={true}
                 placeholderTextColor="#202020" 
                 placeholder='Password'
                 onBlur={handleBlur('password')}
                 onChangeText={handleChange("password")}
                 value={values.password}
                  />
             </View>
                 <Pressable onPress={handleSubmit}  titleSize={20} disabled={!isValid} style={styles.button(isValid)} >
                     <Text style={styles.loginButtonText}>Log In</Text>
                 </Pressable> 
     
             <View style={{display:"flex",flexDirection:"row",justifyContent:"center",paddingVertical:12}}>
                 <Text style={{color:"grey",fontWeight:"600",fontSize:12}}>Forget your login details? </Text>
                 <Text style={{color:"#0095f64d",fontSize:12}}>Get Help Logging in</Text>
             </View>
             </>
        )
       }
       </Formik>
        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",display:"flex",paddingVertical:10}}>
            <Divider color='black' style={{width:"40%"}} />
                <Text style={{color:"grey",paddingHorizontal:4}}>OR</Text>
            <Divider color='black' style={{width:"40%"}}/>
        </View>  
        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",display:"flex",paddingVertical:10}}>
            <FontAwesome5Brands name="facebook" size={25} color="#1e90ff"/>
                <Text style={{color:"grey",marginLeft:6,fontWeight:"600",color:"#0095f6"}}>Log in with Facebook</Text>
            
        </View>  
    </View>
    <Divider/>
    <TouchableOpacity onPress={() => navigation.navigate("singupform")} style={{justifyContent:"center",alignItems:"center",flexDirection:"row",flex:0.5,marginBottom:2}}>
       <Text style={{color:"black",fontSize:12}}>Dont't have an account?</Text>
       <Text style={{color:"#0095f6",fontSize:12}}>Sign Up</Text>
    </TouchableOpacity>
   
    </SafeAreaView>
  )
}

export default LoginForm

const styles = StyleSheet.create({
    FormContainer:{
        padding:10,
        flex:5,
        justifyContent:"center",
        alignItems:"center"
    },  
    formInput:{
        width:"93%",
        height:50,
        borderRadius:5,
        borderWidth:1,
        borderColor:"#d4d4d4",
        borderStyle:"solid",
        marginTop:12,
        backgroundColor:"#dcdcdc"
    },
    button: (isValid) =>  ({
        backgroundColor: isValid ? "#0095f6" : "#0095f64d",
        justifyContent:"center",
        alignItems:"center",
        minHeight:45,
        marginTop:10,
        borderRadius:5,
        width:"93%",
    }),
    loginButtonText:{
        flexDirection:"row",
        fontWeight:"700",
        color:"#fff",
        fontSize:16,
    }
    
})