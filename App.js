import {SafeAreaView ,StyleSheet} from 'react-native'
import React from 'react'

import AuthScreen from './screen/AuthScreen'


const App = () => {
  
  return (
     <SafeAreaView  style={styles.mainContainer}>
       <AuthScreen/>
     </SafeAreaView>
     
   
  )
}

export default App;
const styles=StyleSheet.create({
      mainContainer:{
        flex:1,
        backgroundColor:"black"
      }
    })
