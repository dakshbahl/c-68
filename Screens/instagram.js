import React from 'react'
import {View, Stylesheet, Text, Image} from 'react-native'

export default class InstagramScreen extends React.Component{
  render(){
    return(
      <View>
       <Image source={require('../assets/instagramIcon.png')}/>
      </View>
    )
  }
}