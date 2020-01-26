// import React, { Component } from 'react';
// import { Text, View, Picker, TouchableOpacity, Alert} from 'react-native';
// import styles from '../styles/stylesheet'

import HomeScreen from './components/homeScreen'
import Lesson from './components/lesson'

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Lesson: {screen: Lesson},
  },
  {
    initialRouteName: 'Home',
  }
);

const App = createAppContainer(MainNavigator);

export default App;

