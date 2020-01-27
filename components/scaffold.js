import React, { Component } from 'react';
import { Text, View, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard} from 'react-native';
import styles from '../styles/stylesheet'
import { connect } from 'react-redux'
import { updateScaffold } from '../reducer/reducer'

class Scaffold extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scaffold: 'ELLs will be supported by...'
    }
    this.updateScaffold = this.updateScaffold.bind(this);
  }

  updateScaffold() {
    this.props.updateScaffold(this.state.scaffold)
    this.props.navigation.navigate('Lesson')
  }

  render () {
    return (
      <TouchableWithoutFeedback style={{flex: 1}} onPress={() => Keyboard.dismiss()}>
        <View style={styles.formContainer}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={styles.formHeader}>Enter a Scaffold</Text>
              <TextInput multiline numberOfLines={12} style={styles.formInput} placeholder={'ELLs will be supported by...'} value={this.state.scaffold} onChangeText={(scaffold) => this.setState({scaffold})}/>
              <TouchableOpacity onPress={() => this.updateScaffold()} style={styles.doneButton} title={'Done'}>
                <Text style={styles.doneButton}>Done</Text>
              </TouchableOpacity>
            </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state) => ({
  scaffold: state.scaffold
})

const mapDispatchToProps = (dispatch) => ({
  updateScaffold: (scaffold) => dispatch(updateScaffold(scaffold))

})

export default connect(mapStateToProps, mapDispatchToProps)(Scaffold)
