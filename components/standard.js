import React, { Component } from 'react';
import { Text, View, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard} from 'react-native';
import styles from '../styles/stylesheet'
import { connect } from 'react-redux'
import { updateStandard } from '../reducer/reducer'

class Standard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      standard: this.props.standard
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
              <TextInput multiline numberOfLines={12} style={styles.formInput} placeholder={'Enter a Standard'} value={this.state.standard} onChangeText={(standard) => this.setState({standard})}/>
              <TouchableOpacity onPress={() => this.updateStandard()} style={styles.doneButton} title={'Done'}>
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
