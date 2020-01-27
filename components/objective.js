import React, { Component } from 'react';
import { Text, View, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard} from 'react-native';
import styles from '../styles/stylesheet'
import { connect } from 'react-redux'
import { updateObjective } from '../reducer/reducer'

class Objective extends Component {
  constructor(props) {
    super(props)

    this.state = {
      objective: 'Students will be able to...'
    }
    this.updateObjective = this.updateObjective.bind(this);
  }

  updateObjective() {
    this.props.updateObjective(this.state.objective)
    this.props.navigation.navigate('Lesson')
  }

  render () {
    return (
      <TouchableWithoutFeedback style={{flex: 1}} onPress={() => Keyboard.dismiss()}>
        <View style={styles.formContainer}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={styles.formHeader}>Enter an Objective</Text>
              <TextInput multiline numberOfLines={12} style={styles.formInput} placeholder={'Students will be able to...'} value={this.state.objective} onChangeText={(objective) => this.setState({objective})}/>
              <TouchableOpacity onPress={() => this.updateObjective()} style={styles.doneButton} title={'Done'}>
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
  updateObjective: (objective) => dispatch(updateObjective(objective))

})

export default connect(mapStateToProps, mapDispatchToProps)(Objective)
