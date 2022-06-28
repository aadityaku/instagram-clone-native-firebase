import React from 'react'
import { SafeAreaView, View,Text } from 'react-native'
import ProfileImage from './ProfileImage'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfilePostPhotos from './ProfilePostPhotos';
import ProfilesReels from './ProfilesReels';
import ProfileTagPhotos from './ProfileTagPhotos';

const Tab = createMaterialTopTabNavigator();
const ProfileTab = () => {
  return (
   
        <>
        <View style={{backgroundColor:"black"}}>
            <Text>hello world</Text>
        </View>
        <Tab.Navigator style={{paddingHorizontal:15,margin :7}} screenOptions={{ 
        tabBarStyle:{backgroundColor:"black",elevation:0,borderBottomColor:"grey",borderBottomWidth:0.4,fontWeight :"600"},
        tabBarIndicatorStyle: {backgroundColor:"black",height:1},
        tabBarLabelStyle:{fontWeight:"bold"}
       }} initialRouteName="photo">
        <Tab.Screen component={ProfilePostPhotos} name="photo"  />
        <Tab.Screen component={ProfilesReels} name="profilesreels" />
        <Tab.Screen component={ProfileTagPhotos} name="profiletagphotos" />
   </Tab.Navigator>
   </>
    
  )
}

export default ProfileTab;