import React from 'react'
import { Text, View } from 'react-native'
import BottomIcons from '../components/BottomIcons'

const ProfileScreen = ({navigation}) => {
  return (
    <View>
        <Text>This is profile Screen</Text>
        <View>
        <BottomIcons navigation={navigation} name={'profile'}/>
        </View>
    </View>
  )
}

export default ProfileScreen