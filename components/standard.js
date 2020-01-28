import React, { Component } from 'react';
import { Text, View, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard, ScrollView, Picker} from 'react-native';
import styles from '../styles/stylesheet'
import { connect } from 'react-redux'
import { updateStandard } from '../reducer/reducer'

class Standard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      standard: ''
    }
    this.updateStandard = this.updateStandard.bind(this);
  }

  updateStandard() {
    this.props.updateStandard(this.state.standard)
    this.props.navigation.navigate('Lesson')
  }

  render () {
    return (
      <TouchableWithoutFeedback style={{flex: 1}} onPress={() => Keyboard.dismiss()}>
        <View style={styles.formContainer}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={styles.formHeader}>Enter a Standard</Text>
              <View style={styles.container}>
                <Picker selectedValue={this.state.standard} onValueChange={(standard) => this.setState({standard})}>
                  <Picker.Item label = "R.6.1" value = "R.6.1" />
                  <Picker.Item label = "R.6.2" value = "R.6.2" />
                  <Picker.Item label = "R.6.3" value = "R.6.3" />
                </Picker>
                <Text style={styles.formInput}>{this.state.standard}</Text>
              </View>
              <TouchableOpacity onPress={() => this.updateStandard()} style={{flex: 1}} title={'Done'}>
                <Text style={styles.doneButton}>Done</Text>
              </TouchableOpacity>
            </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state) => ({
  standard: state.standard
})

const mapDispatchToProps = (dispatch) => ({
  updateStandard: (standard) => dispatch(updateStandard(standard))

})

export default connect(mapStateToProps, mapDispatchToProps)(Standard)
