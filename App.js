// import React, { Component } from 'react';
// import { Text, View, Picker, TouchableOpacity, Alert} from 'react-native';
// import styles from '../styles/stylesheet'

import HomeScreen from './components/homeScreen'
import Lesson from './components/lesson'
import Objective from './components/objective'
import Scaffold from './components/scaffold'
import Plan from './components/plan'
import Standard from './components/standard'
import GradeSelector from './components/gradeSelector'
import SubjectSelector from './components/subjectSelector'

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { connect } from 'react-redux';
import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Lesson: {screen: Lesson},
    Objective: {screen: Objective},
    Scaffold: {screen: Scaffold},
    Plan: {screen: Plan},
    Standard: {screen: Standard},
    GradeSelector: {screen: GradeSelector},
    SubjectSelector: {screen: SubjectSelector}
  },
  {
    initialRouteName: 'Home',
  }
);

const Nav = createAppContainer(MainNavigator);

const mapStateToProps = (state) => ({
  standards: state.standards
})



const App = connect(mapStateToProps)(Nav);

export default class AppWithStore extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}


