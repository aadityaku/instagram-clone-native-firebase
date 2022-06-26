import React from 'react'
import { Text, View } from 'react-native'
import BottomIcons from '../components/BottomIcons'

const LikesScreen = ({navigation}) => {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text>
            this is likes screen
        </Text>
        <View style={{flex:1}}>
        <BottomIcons navigation={navigation} name={"like"}/>
        </View>
    </View>
  )
}

export default LikesScreen