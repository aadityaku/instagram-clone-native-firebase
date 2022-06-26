import React from 'react'
import { Text, View } from 'react-native'
import BottomIcons from '../components/BottomIcons'

const SearchScreen = ({navigation}) => {
  return (
    <View>
        <Text>
            this is Search secreen
        </Text>
        <View>
        <BottomIcons navigation={navigation} name={"search"}/>
        </View>
    </View>
  )
}

export default SearchScreen