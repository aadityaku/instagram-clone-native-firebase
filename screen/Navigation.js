import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './HomeScreen'
import NewPost from './NewPostScreen'
import LoginScreen from './LoginScreen';
const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}} />
            <Stack.Screen name="home" component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen name="newpost" component={NewPost} options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})