import React, { Component } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import styles from '../styles/stylesheet'
import { connect } from 'react-redux'


class HomeScreen extends Component {
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

const mapStateToProps = (state) => ({
  standards: state.standards
})

export default connect(mapStateToProps)(HomeScreen)

