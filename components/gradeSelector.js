import React, { Component } from 'react';
import { Text, View, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard, ScrollView, Picker} from 'react-native';
import styles from '../styles/stylesheet'
import { connect } from 'react-redux'
import { updateGrade } from '../reducer/reducer'

class GradeSelector extends Component {
  constructor(props) {
    super(props)

    this.state = {
      grade: ''
    }
    this.updateGrade = this.updateGrade.bind(this);
  }

  updateGrade() {
    this.props.updateGrade(this.state.grade)
    this.props.navigation.navigate('Home')
  }

  render () {
    return (
      <TouchableWithoutFeedback style={{flex: 1}} onPress={() => Keyboard.dismiss()}>
        <View style={styles.formContainer}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={styles.formHeader}>Select a Grade</Text>
              <View style={styles.container}>
                <Picker selectedValue={this.state.grade} onValueChange={(grade) => this.setState({grade})}>
                  <Picker.Item label = "Kindergarten" value = "Kindergarten" />
                  <Picker.Item label = "1st" value = "1st" />
                </Picker>
                <Text style={styles.formInput}>{this.state.grade}</Text>
              </View>
              <TouchableOpacity onPress={() => this.updateGrade()} style={{flex: 1}} title={'Done'}>
                <Text style={styles.doneButton}>Done</Text>
              </TouchableOpacity>
            </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state) => ({
  grade: state.grade
})

const mapDispatchToProps = (dispatch) => ({
  updateGrade: (grade) => dispatch(updateGrade(grade))

})

export default connect(mapStateToProps, mapDispatchToProps)(GradeSelector)
