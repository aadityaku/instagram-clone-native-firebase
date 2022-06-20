import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View,Text,Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { Divider } from '@rneui/themed';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Entypo from "react-native-vector-icons/Entypo"
const Tab = createMaterialTopTabNavigator();
const Logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADZUlEQVR4nO3azYscRRjH8c9sxuBhNQohMdGLgm/ga/SoGBBjiKhXBUXRg3g0hiSHIAh6NCZ410uMf4BeRT2JmqzxDUUIIrtZE99Jorhqdj3UNFPdzJhxu6tnBusLDU3v9vP8qqvqqXqeGjKZTCaTyWQymUzmf0hnTD634Dps6D37Hl/iY6yMQVMrXIYDOCE0ctB1Ai9j45g0JqGD3ThreMOr1xns0sIITe3gQryGhyrPT+JdLPY0bMJWYZTEvIEn8EdamWnoCA2Ie/YItmFmwP/P4F7MVd45bDyxqja7lRuyH2tGeK8rxIr43WcTaUzGBpzWb8BLq7BxUDkmVKfHRBP34BGj9XyVrvJ02N+YusR0lJe6bTVsbY/sLJiSWHC7vuhFgwPeqMwIK0Zhb0ttdQMcNM010f17WK5ha7lnY5DtRkjxATZH9wsN2JuP7i9vwF6JFB8g3ss3MWdjG43nCSk+wGJ030SPXTHE9sRym37Q+k79IHgqsndrbXUtUF0Gt9ewtSOyM29KlkFCSlsInxM2Nf+VLo6pt5scG9Wt8IFV2HhFeSs8dTWCXcoJzUGjjYSucuNX8EwijUnpCKls3JA5ISYMS4d3KA/7FRyScO63URB5FQ9Xnp/SL4gQlsut+jXCgsN40pQWRAo6Qj5/xuglsdPCsJ+aqD8KG4WUdsHwhs8L0b46EpIxrrL4LUJZvChynMRX+vM/k8m0Q9sxYC1uxpW4BJf2nv+CX/ENPsGfLetKyo14ER9hyfmXwCV8iBdwwxj0NsIFwonO50Zf+4ddn+Fxq0uozkuKKfAInsdVA/62gq/xBX4Uhj5hKqwXevzqIbqO4zlhdziRbMZbBh90HsL9WDeCnXV4AK8bvHt8UzhLnCjuwc/KQn/AHszWsDuLvT1bse2fcHcNu43ymBC1C3HnhIJInYZXuUhIp89FfpbwaIM+VsXTQu2+EPUt7kzo7y4hXyj8LeOphP7+lfvwVyTmU+UKbio2KZ8Z/o0HW/Bb4iblX3y8LwzTtrgYH0T+zwr7jVboCie+hfPjWkxfI9YLS2qh45iw/0jOvsjpb7i2DadDuB6/R3r2pXY4IzR6koqVO5WnQorTrhJHe87ebsPZCKzBO4Kmo204nMUdQsFzUlgrLJFtBuJMJpPJZDKZ6eYfaygk2tk4ybIAAAAASUVORK5CYII="
function Phone({navigation}){
    const PhoneSchema = Yup.object().shape({
        number:Yup.string().required().min(1,"number must be 10") 
    })
    const initialValue = {
        number:""
    }

    return(
       <Formik initialValues={initialValue}
       onSubmit={(values) => navigation.navigate('home')}
       validateOnMount={true}
       validationSchema={PhoneSchema}
       >
           {
            ({handleSubmit,handleChange,handleBlur,isValid,values})=>(
                <>
                <View style={{marginTop:12,height:45,alignItems:"center",backgroundColor:"#eceff1",flexDirection:"row",borderColor:"grey",borderWidth:0.5,borderRadius:5,paddingHorizontal:10}}>
                <Text style={{color:"black",fontWeight:"600",margin:5}}>IND +91</Text>
                <Divider style={{backgroundColor:"grey",width:1,margin:8}} orientation={'vertical'}/>
                <TextInput style={{width:"68%"}}
                placeholderTextColor="grey"
                autoCapitalize='none'
                keyboardType='numeric'
                placeholder='Phone'
                onBlur={handleBlur('number')}
                onChangeText={handleChange('number')}
                value={values.number}
                ></TextInput>
                {
                    isValid && <Entypo name="cross"   size={25} style={{color:"black"}}/>
                }
            </View>
            <View style={{marginTop:13}}>
                <Text style={{fontSize:12,textAlign:"center"}}>You may recieve SMS notifications from us for security and login purposes.</Text>
            </View>
            <TouchableOpacity onPress={handleSubmit} disabled={!isValid} style={{backgroundColor:(isValid)?"#0095f6":"#0095f64d",height:45,borderRadius:5,justifyContent:"center",alignItems:"center",marginTop:14}}>
                <Text style={{fontWeight:"600",color:"white"}} > Next</Text>
            </TouchableOpacity>
                </>
            )
           }
       </Formik>
    )
}
function Email({navigation}){
    const EmailSchema = Yup.object().shape({
        email: Yup.string().email().required("an emil is required")  
    })
    
    const initialValue = {
        email:""
    }
    return (
        <Formik
        initialValues={initialValue}
        onSubmit={(values) => navigation.navigate("home")}
        validationSchema={EmailSchema}
        validateOnMount={true}
        
        >
            {
                ({handleBlur,handleChange,handleSubmit,isValid,values})=>(
                    <>
                    <View style={{marginTop:12,height:45,alignItems:"center",backgroundColor:"#eceff1",flexDirection:"row",borderColor:"grey",borderWidth:0.5,borderRadius:5,paddingHorizontal:10}}>
           
                    <TextInput style={{width:"100%"}}
                     placeholderTextColor="grey"
                     keyboardType='email-address'
                     placeholder='Email'
                     onChangeText={handleChange('email')}
                     onBlur={handleBlur('email')}
                     value={values.email}
                     ></TextInput>
                    </View>

                    <TouchableOpacity onPress={handleSubmit} disabled={!isValid} style={{backgroundColor:(isValid)?"#0095f6":"#0095f64d",height:45,borderRadius:5,justifyContent:"center",alignItems:"center",marginTop:14}}>
                        <Text style={{fontWeight:"600",color:"white"}} > Next</Text>
                    </TouchableOpacity>
                    </>
                )
            }
        </Formik>
    )
}
const SingUpForm = ({navigation}) =>{
    return (
        <SafeAreaView style={{flex :1,backgroundColor:"#f5f5f5"}}>
        <View style={{flex:0.76,alignItems:"center",justifyContent:"flex-end",paddingHorizontal:20}}>
            <Image source={{uri: Logo}} style={{height:159,width:"50%",borderRadius:90,borderColor:"black", borderWidth:2,resizeMode:"contain"}}/>
        </View>
       <Tab.Navigator style={{paddingHorizontal:15,margin :7}} screenOptions={{ 
        tabBarStyle:{backgroundColor:"#f5f5f5",elevation:0,borderBottomColor:"grey",borderBottomWidth:0.4,fontWeight :"600"},
        tabBarIndicatorStyle: {backgroundColor:"black",height:1},
        tabBarLabelStyle:{fontWeight:"600"}
       }}
       
       >
         
          <Tab.Screen component={Phone} name="phone" />
          <Tab.Screen component={Email} name="Email"/>
       </Tab.Navigator>
       <Divider/>
            <TouchableOpacity onPress={() => navigation.navigate("loginform")} style={{justifyContent:"center",alignItems:"center",flexDirection:"row",flex:0.17}}>
                <Text style={{color:"black",fontSize:12.5}}>Already have an account?</Text>
                <Text style={{color:"blue",fontSize:12,fontWeight:"bold"}}>Log in</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default SingUpForm;