import React from 'react';
import { View,  } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class MyHeader extends React.Component {
  render() {
    return (

        <Header
          leftComponent={{ icon: 'menu', color: 'pink' }}
          centerComponent={{
            text: 'BUZZ APP',
            style: {
              color: 'pink',
              fontWeight: 'bold',
              fontSize: 18,
              fontFamily: 'ariel',
            },
           
          }}/>
           

    );
  }
}
