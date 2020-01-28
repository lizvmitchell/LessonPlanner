import React, { Component } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import styles from '../styles/stylesheet'
import { connect } from 'react-redux'


class HomeScreen extends Component {
  render () {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.homeContainer}>
        <TouchableOpacity style={{flex: 1}} onPress={() => navigate('Lesson')}>
          <View style={{flex: 1}}>
            <Text style={styles.pageHeader}>Plan a Lesson!</Text>
            <TouchableOpacity style={{flex: 1}} onPress={() => navigate('GradeSelector')}>
              <Text style={styles.pageHeader}>{this.props.grade ? this.props.grade : `Select a grade`}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1}} onPress={() => navigate('SubjectSelector')}>
              <Text style={styles.pageHeader}>{this.props.subject? this.props.subject : `Select a subject`}</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  standards: state.standards,
  grade: state.grade,
  subject: state.subject

})

export default connect(mapStateToProps)(HomeScreen)

