import React from 'react'
import {Text, View, Stylesheet} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import InstagramScreen from './Screens/instagram'
import FacebookScreen from './Screens/facebook'
import MyHeader from './components/header'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'



export default class App extends React.Component{
  render(){
    return(
      <SafeAreaProvider>
        <MyHeader/>
        <AppContainer/>
      </SafeAreaProvider>
    )
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Instagram:{screen:InstagramScreen},
    Facebook:{screen:FacebookScreen}
  }
)
const AppContainer = createAppContainer(TabNavigator)