import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import {createButtonTabNavigator} from 'react-navigation-tabs'
import Transactionscreen from './screens/Booktransactionscreen'
import Searchscreen from './screens/Searchscreen'
export default function App() {
  return (
    <Appcontainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
var switchContainer = createButtonTabNavigator({ 
  Transaction : {screen:Transactionscreen},
  Search:{screen:Searchscreen}
})
const Appcontainer = createAppContainer(switchContainer)