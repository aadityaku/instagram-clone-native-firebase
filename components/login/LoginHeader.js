import React, { useState } from 'react';
import { View ,TouchableOpacity ,Text} from 'react-native';
import Entypo from "react-native-vector-icons/Entypo"

const LoginHeader = () => {
    const [language,setLanguage] = useState(false);
  return (
    <View style={{alignItems:"center",paddingVertical:8,marginTop:2}}>
       <TouchableOpacity style={{flexDirection:"row"}}>
          <Text style={{fontSize:14}}>English  (United States)</Text>
          <Entypo name='chevron-small-down' size={20} color="grey"/>
       </TouchableOpacity>
    </View>
  )
}

export default LoginHeader