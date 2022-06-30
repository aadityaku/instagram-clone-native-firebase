import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './HomeScreen'
import NewPost from './NewPostScreen'
import SearchScreen from './SearchScreen';
import ReelsScreen from './ReelsScreen';
import LikesScreen from './LikesScreen';
import ProfileScreen from './ProfileScreen';
import BottomIcons from '../components/BottomIcons';
import CommentScreen from './CommentScreen';

const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator >
            
            <Stack.Screen name="home" component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen name="newpost" component={NewPost} options={{headerShown: false}} />
            <Stack.Screen name="search" component={SearchScreen} options={{headerShown: false}} />
            <Stack.Screen name="reels" component={ReelsScreen} options={{headerShown: false}} />
            <Stack.Screen name="like" component={LikesScreen} options={{headerShown: false}} />
            <Stack.Screen name="profile" component={ProfileScreen} options={{headerShown: false}} />
            <Stack.Screen name="comments" component={CommentScreen} options={{headerShown: false}} />
        </Stack.Navigator>
        
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})