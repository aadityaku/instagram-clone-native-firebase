import { StyleSheet, Text, View,Image, TextInput, SafeAreaView, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Divider } from "@rneui/themed";
import * as yup from 'yup'
import { Formik } from 'formik';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'react-native-image-picker';
import auth from "@react-native-firebase/auth"
import firestore from "@react-native-firebase/firestore"
const CHECK = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACd0lEQVR4nO2aS2sTURhAzxejlEbcuBC7q1YKFqTYBpdStSJa8B+4DSH+AQWlv0EQ2+5040pKwYWUggsRBI2iNFjSIOhCxcdKDVqbfG6qtENm8pg7kzvjPct55M45GTL3DgGHw+FwOBwOx/+J9PsCoubEjfV9zT16ZnMzW35x+dBb7/5MPy4qLvIL1fHGbl4rcm9XtrF2/FZ1xntMagPkF6rj2pQVhKGtTQMZoeg9LpUB/snD/p17Mu+8x6YugL88FZXGNe/xqQoQIL+m8nu6XBj94j0nNU+BNvKnyoWjH1qdl4oAvcpDCgKEkYeEBwgrDwkOYEIeEhrAlDwkMIBJeUhYANPykKAAUchDQgJEJQ8JCBClPFgeIGp5sDhAHPJgaYC45MHCAHHKg2UB4pYHiwL0Qx4sCRAkL43s1NPS8Meoxs767pnVzOSB2nWEC4o8RgavlgtDddMXECC/uqFy+lVp+JPpMbfjewdMztUugd7etumhSm7GZIS28sWRSOUh6KWo6qhny5Toj/sT8+8HTQxsgzwEvhWWu8BPz0YjEWyRh4AAz4ojqypcpEWEjNYfjN2s7O1lwDY/eNNxykMHT4GJ+fWzoiwBAztPlEf1xq/zldLY904H6+evvR8dPQZNRLBRHrqYB4SJYKs8dDkR6iWCzfLQw0ywmwi2y0OPU+FOIiRBHkKsBYIiqHIF0SUsl4eQi6H8XO2coot4IgDa4rNjn+R0QujVoN+d4MG6b/4vRpbDbSJYKw8G3wf4RLBaHgz+RaZcOLK8tXb4CiDwZEPlpM3yEMEboWN3Xuay33IHn38+/IZZaZr+fIfD4XA4HA6Hw+EwwR9I5OvJGplLGwAAAABJRU5ErkJggg==";
const BACK_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABSUlEQVRoge3YMU4UYRjH4Xc2WoiFHZUVB/AA3IBgLAzewB56pOMIBg8ACT1GD6CRUmorSAhaaOxsTMhjsWwM8G0yMyF52eR9yql+/0lm9puNKKWUUkop5S7hBS7wCxvZPaNgDX/99zO7aTCs4o/rfmR3DYJn+H1jxCVeZbf1hhV8d9tmdltvWMa3xog32W294QlOGiPeZrf1hiV8bozYxyS7rxc8xMfGiCM8yO7rBRMcNkZ8wVJ2X2/Ya4y4706xFhHRXY3YjYjt1Ds53kXXdU9nD6/UlDswiYjoum4nIt4lt4xxGhGvr10x/2E/xuOczpFMX78fGmPeW5TX7wwe4VNjzIFF+UGcMT2ifG2MWZwjyoz5h8ad7LbBzD/Gb2W3DWb+h9XL7LbBtD91z7K7RnH7z4fz7KbR8Nz0oHaO9eyeUkoppZRSBvkHYKW2Ll8n764AAAAASUVORK5CYII=";
const POST_IMAGE = "https://scontent.fbom26-1.fna.fbcdn.net/v/t39.30808-6/271295773_1024563694935381_799864773430337465_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pz4L2Xs8kmIAX9SPGdi&_nc_ht=scontent.fbom26-1.fna&oh=00_AT-JmFHrPvH82atJJfD4l6czXXEsXcnYj247hnx0Z6YKoQ&oe=62AAE176"

const NewPostHeader = ({navigation}) => {
  return (
    <View style={{backgroundColor:"black"}}>
      <View style={{flexDirection:"row",height:50,justifyContent:"space-between",margin:5}}>
         <View style={{flex:1,flexDirection:"row",justifyContent:"space-around"}}>
            <TouchableOpacity onPress={() => navigation.push("home")}>
                <Image style={{height:30,width:30}} source={{uri: BACK_ICON}} />
            </TouchableOpacity>
            <Text style={{color:"white",fontSize:22,fontWeight:"bold",textAlign:"center"}}>New Post</Text>
         </View>
         <View style={{flex:1,alignItems:"flex-end"}}>
            <Image style={{height:30,width:30}} source={{uri : CHECK}} />
         </View>
      </View>
       
      </View>
  )
}

const NewPostSchema=yup.object().shape({
    postImageUrl:yup.string().url('post image is required').required('post image is required'),
    postCaption:yup.string().max(200,"Caption is limit out")
})

const initialValue = {
    postCaption:"",
    postImageUrl:""
}
const PLACEHOLDER_IMAGE="https://via.placeholder.com/100.jpg";
const NewPostFormik = ({navigation}) =>{
    const [placeholder,setPlaceholder] = useState(PLACEHOLDER_IMAGE)
    const [isCurrentLogged,setIsCurrentLogged] = useState(null);
    const getCurrentUser = () =>{
        const user = auth().currentUser;
        
        const data = firestore().collection("users").where("owner_id", "==" , user.uid).limit(1).onSnapshot(
            snapshot => snapshot.docs.map(doc => {
              setIsCurrentLogged({
                fullname :doc.data().fullname,
                dp :doc.data().profile_Picture
              })
              
            })
          )
        return data;
    }
    console.log(isCurrentLogged);
    useEffect(()=>{
        getCurrentUser()
    },[])
    

    const addToPostFireBase = async (imgUrl,caption) =>{
       
        let dataForPost ={
            postImg:imgUrl,
            caption:caption,
            usersName:isCurrentLogged.fullname,
            profileImg:isCurrentLogged.dp,
            
            comments:[],
            likes_by_users:[],
            owner_uid:auth().currentUser.uid,
            created_at:firestore.FieldValue.serverTimestamp(),
            email:auth().currentUser.email,
        }
        console.log(dataForPost);
        const user = await firestore().collection('users').doc(auth().currentUser.email).collection('post').add(dataForPost).then(() => navigation.goBack())
        return user;
    }
    const handleImagePicker = () =>{
         let options = {
              title:"select image",
              selectionLimit:0,
              
              storageOptions:{
                  skipBackup:false,
                  path:"images"
              
            }
    };
    
    ImagePicker.launchImageLibrary(options,(res) => {
        console.log(res)
        setPlaceholder(res.assets[0].uri)
      })
    }
    return(
        <Formik initialValues={initialValue}
        validationSchema={NewPostSchema}
        onSubmit={(values) => addToPostFireBase(values.postImageUrl,values.postCaption) }
        validateOnMount={true}>
            {
                ({handleSubmit,handleBlur,handleChange,errors,isValid,values}) => (
                    <>
                    <View style={{flexDirection:"row",paddingHorizontal:12,marginBottom:5}}>
                        <TouchableOpacity onPress={() => handleImagePicker()}>
                            <Image source={{uri : (placeholder !==" ")?placeholder:PLACEHOLDER_IMAGE}} style={{height:65,width:60}}/>
                        </TouchableOpacity>
                        <TextInput style={{color:"white",width:"100%",flex:1}}
                         multiline={true} placeholder="Enter Caption"
                          placeholderTextColor="white"
                          onBlur={handleBlur('postCaption')}
                          onChangeText={handleChange('postCaption')}
                          value={values.postCaption}
                          />
                          {
                            errors.postCaption && (
                                <Text style={{color:"red",fontSize:14}}>{errors.postCaption}</Text>
                            )
                          }
                    </View>
                    <Divider style={{marginTop:5}}/>

                    <View style={{flexDirection:"row",paddingHorizontal:12,marginBottom:5}}>
                        
                        <TextInput style={{color:"white",width:"100%",flex:1}}
                        onChange={e => setPlaceholder(e.nativeEvent.text)}
                        onBlur={handleBlur('postImageUrl')}
                        onChangeText={handleChange('postImageUrl')}
                        value={values.postImageUrl}
                        multiline={true} 
                        placeholder="Write image url"
                        placeholderTextColor="white"/>
                          {
                            errors.postImageUrl && (
                                <Text style={{color:"red" , fontSize:14}}>{errors.postImageUrl}</Text>
                            )
                          }
                    </View>
                    <Divider style={{marginTop:5}}/> 
                    <Button onPress={handleSubmit} title="Post"></Button>
                    </>
                )
            }

        </Formik>
    )
}



const NewPost = ({navigation}) =>{
    return(
        <SafeAreaView style={{backgroundColor:"black",flex:1}}>
            <NewPostHeader navigation={navigation}/>
            <NewPostFormik navigation={navigation}/>
        </SafeAreaView>
        
    )
}

export default NewPost;
