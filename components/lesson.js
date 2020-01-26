import React, { Component } from 'react';
import { Text, View, Picker, TouchableOpacity, Alert} from 'react-native';
import styles from '../styles/stylesheet'



export default class Lesson extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Text style={styles.pageHeader}>Plan a Lesson</Text>
        </View>
        <TouchableOpacity style={{flex: 1}} onPress={() => Alert.alert('Alert!')}>
        <View style={{flex: 1}}>
          <Text style={styles.sectionHeader}>Standards</Text>
          <Text style={styles.teacherInput}>Choose a Standard</Text>
        </View>
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <Text style={styles.sectionHeader}>Scaffolds</Text>
          <Text style={styles.teacherInput}>Enter a Scaffold</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.sectionHeader}>Objective</Text>
          <Text style={styles.teacherInput}>Enter an Objective</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.sectionHeader}>Lesson</Text>
          <Text style={styles.teacherInput}>Enter Do-Now, Mini-Lesson, Activity</Text>
        </View>
      </View>
    );
  }
}
