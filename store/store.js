import { createStore } from 'redux'
import { reducer } from '../reducer/reducer'

// Create a store with our reducer
const store = createStore(reducer)

export default store
