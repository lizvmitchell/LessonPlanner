import React, { Component } from 'react';
import { Text, View, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard, ScrollView, Picker} from 'react-native';
import styles from '../styles/stylesheet'
import { connect } from 'react-redux'
import { updateSubject } from '../reducer/reducer'

class SubjectSelector extends Component {
  constructor(props) {
    super(props)

    this.state = {
      subject: ''
    }
    this.updateSubject = this.updateSubject.bind(this);
  }

  updateSubject() {
    this.props.updateSubject(this.state.subject)
    this.props.navigation.navigate('Home')
  }

  render () {
    return (
      <TouchableWithoutFeedback style={{flex: 1}} onPress={() => Keyboard.dismiss()}>
        <View style={styles.formContainer}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={styles.formHeader}>Select a Subject</Text>
              <View style={styles.container}>
                <Picker selectedValue={this.state.subject} onValueChange={(subject) => this.setState({subject})}>
                  <Picker.Item label = "Math" value = "Math" />
                  <Picker.Item label = "ELA" value = "ELA" />
                </Picker>
                <Text style={styles.formInput}>{this.state.subject}</Text>
              </View>
              <TouchableOpacity onPress={() => this.updateSubject()} style={{flex: 1}} title={'Done'}>
                <Text style={styles.doneButton}>Done</Text>
              </TouchableOpacity>
            </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state) => ({
  subject: state.subject
})

const mapDispatchToProps = (dispatch) => ({
  updateSubject: (subject) => dispatch(updateSubject(subject))

})

export default connect(mapStateToProps, mapDispatchToProps)(SubjectSelector)
