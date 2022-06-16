import { View, Text,SafeAreaView ,StyleSheet} from 'react-native'
import React from 'react'
import HomeScreen from './screen/HomeScreen'
import NewPost from './screen/NewPostScreen'
import Navigation from './screen/Navigation'


const App = () => {
  return (
     <SafeAreaView  style={styles.mainContainer}>
        <Navigation/>
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
