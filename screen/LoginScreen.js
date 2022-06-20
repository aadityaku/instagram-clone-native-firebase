import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import LoginHeader from '../components/login/LoginHeader';
import LoginButton from '../components/login/LoginButton';
import LoginForm from '../components/login/LoginForm';
import SingUpForm from '../components/login/SingUpForm';


const Stack = createStackNavigator();
const LoginScreen = () => {
  return (
    
        <Stack.Navigator>
          <Stack.Screen component={LoginButton} name="loginbutton" options={{headerShown:false}}/>
          <Stack.Screen component={LoginForm} name="loginform" options={{headerShown:false}}/>
          <Stack.Screen component={SingUpForm} name="singupform" options={{headerShown:false}}/>
        </Stack.Navigator>
   
  )
}

export default LoginScreen;

const styles = StyleSheet.create({})