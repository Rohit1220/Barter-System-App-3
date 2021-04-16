import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import AppTabNavigator from './components/AppTabNavigator';

export default function App() {
  return (
    <AppContainer/>
  );
} 

const sn = createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  bottomTab:{screen:AppTabNavigator},
})

const AppContainer = createAppContainer(sn);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
