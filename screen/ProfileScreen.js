import { Divider } from '@rneui/themed'
import React from 'react'
import { SafeAreaView, Text, View,Image } from 'react-native'
import BottomIcons from '../components/BottomIcons'
import ProfileDashboard from '../components/profile/ProfileDashboard'
import ProfileHeader from '../components/profile/ProfileHeader'
import ProfileImage from '../components/profile/ProfileImage'
import ProfilePostPhotos from '../components/profile/ProfilePostPhotos'
import ProfilesReels from '../components/profile/ProfilesReels'
import ProfileTab from '../components/profile/ProfileTab'
import ProfileTagPhotos from '../components/profile/ProfileTagPhotos'
import AntDesign from "react-native-vector-icons/AntDesign"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native'

const Tab = createMaterialTopTabNavigator();
const tags = <svg aria-label="" className="_ab6-" color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
const photos = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAAUElEQVRYhe2TMQoAIAwDW/H/X66TIFoFh5LlbmyGHIWYAYjx7BgRUVLmfvS1iqIf+ivMjOd39ux2X7MM+QcQkAswQ2aIACtgBQjIBZghgJwBPSU0LyTABvsAAAAASUVORK5CYII="
const reels = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACy0lEQVRoge2Zu2sUURjFzxckGlBjUojEgJoEiaUo4gPEThsjloKgmCb/gYmVWviOtZ2QgIVFfIHaKdgI8YFFNKIGhPhIoYkkhWyRn8XMQnYy696ZvTOrMD/YYu/MOfc7O/fOnZ0rFRQUeAFYCwwAt4GzYVsvUMKNYQfNAjAJ3AVOAe0+AzQD54BfSzosAdvC48OOQUpAb0LNHHAGaKk3xCbgTZVOHofntAIzjoWl0QC8ADamDdEFfK7RQV94bn+Cog6n0ABMJw4DrAReOZh/DM9tAsYdC/qQQlNmHFiVJMj5BOaDoWYvsJihpsyQa4g2Kid2LeaBjlA7mqGmzBzQ5hJkIKExwGio7QiLdGEkhabMSZcgdxKaQjA89oT6wQw1ZcZcgkwlNC3zkmACNwPvM9QATLoEWUhUfiX9oUdfxpp5lyD1MAOsC30eZqihZpCCBmPRhv/lsplZRe1NjSrEN0WQf40iyL9GFkEeSdoiqVvSNUmlDPqoTeK1fDnrI349wJgH3wqidXtfR6L39yW+ByRdl7S9Hv9q/eQ2R8zsqaSdkk5I+u7bP9fJbmaLZjYiaauki/I4f3IbWnEAxyTd8tFPo4O0S/rho59GryOHfBk1JAiwBrgg6aYvzxW+jFwAmiQdl3RZ0gaf3rkF8b2ORIkbWrX/2P8FYHPkew/B65sn8hdiWY1xQb7V2ckNghfg3cBVSROSjtbpGeVrtCFuaL1VsGCl5aCkT3XoXZiINsRdkQcZF+GD+9GGuAWxXdKUpNY8KkrBnKQuM5td2rjsipjZT0lX8qoqBZeiIaSYKyJJBHt2zyTtyLqqhIxL2m9mv6MHqj4XAZ2SnktKt3fnn2lJu83sS9zBqo8oZjYtaZeCX6HRvJa0r1oIJ4AWYIhgpyhvZoHTOOwbJnnkbpN0JPz0SuqUtDr1LxTPgoIh9E7BLfZe3MQuKChIzh82Kl0XBuhtrAAAAABJRU5ErkJggg=="
const ProfileScreen = ({navigation}) => {
  return (
    // <SafeAreaView>
        
          <>
          
          
          <ProfileHeader navigation={navigation}/>
          <Divider/>
          <ScrollView >
          <View style={{height:950}}>
            
            <ProfileDashboard/>
          <Divider/>
          <ProfileImage/>
         
    <Tab.Navigator  screenOptions={{ 
      tabBarStyle:{backgroundColor:"black",elevation:0,fontWeight :"600"},
      tabBarIndicatorStyle: {backgroundColor:"white",height:2},
      tabBarLabelStyle:{fontWeight:"bold",color:"white"},
      
     }} initialRouteName="photo">
      <Tab.Screen component={ProfilePostPhotos} name="photo" options={{tabBarShowLabel:false,
      tabBarIcon : ({color})=> <Image source={{uri : photos}} style={{height:25,width:25}}/>
      }}  />
      <Tab.Screen component={ProfilesReels} name="profilesreels" options={{tabBarShowLabel:false,
      tabBarIcon : ({color})=> <AntDesign name="table" size={20}/>
      }}   />
      <Tab.Screen component={ProfileTagPhotos} name="profiletagphotos" options={{tabBarShowLabel:false,
      tabBarIcon : ({color})=> <Image source={{uri : photos}} style={{height:25,width:25}}/>
      }}   />
 </Tab.Navigator>
 </View> 
            </ScrollView>
             
          
 
  <BottomIcons navigation={navigation} name={'profile'}/>
</>
  // </SafeAreaView>
  )
}

export default ProfileScreen