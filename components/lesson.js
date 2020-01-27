import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView} from 'react-native';
import styles from '../styles/stylesheet'
import { connect } from 'react-redux'


class Lesson extends Component {
  render () {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{flex: 1}}>
          <Text style={styles.pageHeader}>Plan a Lesson</Text>
        </View>
        <TouchableOpacity style={{flex: 1}} onPress={() => navigate('Standard')}>
          <View style={styles.cardContainer}>
            <Text style={styles.sectionHeader}>Standards</Text>
            <Text style={styles.teacherInput}>{this.props.standard}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1}} onPress={() => navigate('Scaffold')}>
          <View style={styles.cardContainer}>
            <Text style={styles.sectionHeader}>Scaffolds</Text>
            <Text style={styles.teacherInput}>{this.props.scaffold}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1}} onPress={() => navigate('Objective')}>
          <View style={styles.cardContainer}>
            <Text style={styles.sectionHeader}>Objective</Text>
            <Text style={styles.teacherInput}>{this.props.objective}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1}} onPress={() => navigate('Plan')}>
          <View style={styles.cardContainer}>
            <Text style={styles.sectionHeader}>Lesson</Text>
            <Text style={styles.teacherInput}>{this.props.plan}</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  standard: state.standard,
  objective: state.objective,
  scaffold: state.scaffold,
  plan: state.plan
})

export default connect(mapStateToProps)(Lesson)
