import React, { Component } from 'react';
import { Text, View, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard, ScrollView} from 'react-native';
import styles from '../styles/stylesheet'
import { connect } from 'react-redux'
import { updatePlan } from '../reducer/reducer'

class Plan extends Component {
  constructor(props) {
    super(props)

    this.state = {
      plan: this.props.plan
    }
    this.updatePlan = this.updatePlan.bind(this);
  }

  updatePlan() {
    this.props.updatePlan(this.state.plan)
    this.props.navigation.navigate('Lesson')
  }

  render () {
    return (
      <TouchableWithoutFeedback style={{flex: 1}} onPress={() => Keyboard.dismiss()}>
        <View style={styles.formContainer}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={styles.formHeader}>Enter a Plan</Text>
              <ScrollView contentContainerStyle={styles.container}>
                <TextInput multiline numberOfLines={20} style={styles.formInput} placeholder={'Enter Do-Now, Mini-Lesson, Activity'} value={this.state.plan} onChangeText={(plan) => this.setState({plan})}/>
              </ScrollView>
              <TouchableOpacity onPress={() => this.updatePlan()} style={{flex: 1}} title={'Done'}>
                <Text style={styles.doneButton}>Done</Text>
              </TouchableOpacity>
            </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state) => ({
  plan: state.plan
})

const mapDispatchToProps = (dispatch) => ({
  updatePlan: (plan) => dispatch(updatePlan(plan))

})

export default connect(mapStateToProps, mapDispatchToProps)(Plan)
