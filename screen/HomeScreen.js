import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HomeScreenHeader from '../components/HomeScreenHeader';
import Strories from '../components/Stories';

import PostScreen from '../components/PostScreen';
import BottomIcons from '../components/BottomIcons';
import NewPost from '../components/post/NewPost';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      
       <HomeScreenHeader navigation={navigation}/>
       <ScrollView >
        <Strories/>
        <PostScreen/> 
        
        </ScrollView>
       <BottomIcons/> 
       
    </View>
  )
}

export default HomeScreen;