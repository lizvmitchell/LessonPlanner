import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#e3dbdb',
    // textAlign: 'center',
    fontWeight: 'bold',
    color: '#4e3d42',
    fontSize: 18
  },
  cardContainer: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15
  },
  pageHeader: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#e3dbdb',
    marginTop: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#400406',
    fontSize: 24,
    paddingBottom: 20
  },
  sectionHeader: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#e3dbdb',
    paddingLeft: 5,
    marginLeft: 2,
    // marginTop: -40,
    fontWeight: 'bold',
    color: '#4e3d42',
    fontSize: 20,
    marginBottom: 5
  },
  teacherInput: {
    flex: 4,
    // justifyContent: 'center',
    backgroundColor: '#e3dbdb',
    paddingLeft: 10,
    marginLeft: 2,
    // marginTop: -120,
    // paddingBottom: -40,
    color: '#6d6466',
    fontSize: 18,
  },
  formInput: {
    flex: 2,
    justifyContent: 'flex-start',
    backgroundColor: '#e3dbdb',
    paddingLeft: 5,
    marginLeft: 2,
    marginTop: 0,
    // marginTop: -120,
    // paddingBottom: -40,
    paddingBottom: 300,
    color: '#6d6466',
    fontSize: 18,
    zIndex: 10
  },
  formHeader: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#e3dbdb',
    marginTop: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#400406',
    fontSize: 24,
  },
  doneButton: {
    flex: 1,
    backgroundColor: '#e3dbdb',
    marginTop: 0,
    textAlign: 'center',
    alignSelf: 'center',
    color: '#400406',
    fontSize: 24,
    paddingBottom: 40
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e3dbdb',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#4e3d42',
    fontSize: 18,
  },
});

export default styles
