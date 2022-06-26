import React from 'react'
import { Text, View } from 'react-native'
import BottomIcons from '../components/BottomIcons'

const ReelsScreen = ({navigation}) => {
  return (
    <View>
        <Text>
            this is Reels screen
        </Text>
        <View>
        <BottomIcons navigation={navigation} name={"reels"}/>
        </View>
    </View>
  )
}

export default ReelsScreen