import { Divider } from '@rneui/themed/dist/Divider'
import React from 'react'
import { View,Text, SafeAreaView ,ScrollView} from 'react-native'
import CommentForm from '../components/comment/CommentForm'
import CommentHeader from '../components/comment/CommentHeader'
import CommentShow from '../components/comment/CommentShow'

const CommentScreen = ({navigation,route}) => {
   const {commentData} = route.params
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"black"}}>
        <CommentHeader navigation={navigation}/>
        <ScrollView style={{backgroundColor:"black"}}>
        <CommentShow commentData={commentData} navigation={navigation}/>
        
        </ScrollView>
        
        <CommentForm commentData={commentData} navigation={navigation}/>
    </SafeAreaView>
  )
}

export default CommentScreen