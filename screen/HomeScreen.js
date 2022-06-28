import { View, Text, ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import HomeScreenHeader from '../components/HomeScreenHeader';
import Strories from '../components/Stories';

import PostScreen from '../components/PostScreen';
import BottomIcons from '../components/BottomIcons';
import NewPost from '../components/post/NewPost';
import firestore from "@react-native-firebase/firestore"
import PostData from '../components/PostScreen';
const HomeScreen = ({navigation}) => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    firestore().collectionGroup("post").onSnapshot(snapshot => {
      setPost(snapshot.docs.map(document => ({id:document.id, ...document.data()})))
    })
  },[]) 
  return (
    <View style={{flex:1}}>
      
       <HomeScreenHeader navigation={navigation}/>
       <ScrollView >
        <Strories />

        <PostData data={posts}/> 
        
        </ScrollView>
        
        <BottomIcons navigation={navigation} name={"home"}/>
    </View>
  )
}

export default HomeScreen;