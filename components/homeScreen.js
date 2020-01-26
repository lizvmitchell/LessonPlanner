import React, { Component } from 'react';
import { Text, View, Picker, TouchableOpacity, Alert} from 'react-native';
import styles from '../styles/stylesheet'

export default class HomeScreen extends Component {
  render () {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{flex: 1}} onPress={() => navigate('Lesson')}>
          <View style={{flex: 1}}>
            <Text style={styles.pageHeader}>Plan a Lesson!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

