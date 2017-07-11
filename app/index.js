import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {auth, db} from '../config/fireConfig';
import { StackNavigator } from 'react-navigation';
import Register from './Register';
import PairGenerator from './PairGenerator';

const App = StackNavigator({
  Home : { screen: Register },
  PairGenerator : { screen: PairGenerator},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;