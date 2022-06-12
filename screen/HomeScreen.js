import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HomeScreenHeader from '../components/HomeScreenHeader';
import Strories from '../components/Stories';

import PostScreen from '../components/PostScreen';

const HomeScreen = () => {
  return (
    <View style={{flex:1}}>
      
       <HomeScreenHeader/>
       <ScrollView >
        <Strories/>
        <PostScreen/>
       </ScrollView>
    </View>
  )
}

export default HomeScreen;