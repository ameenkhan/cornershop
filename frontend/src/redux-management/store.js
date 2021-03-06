import { createStore, combineReducers } from 'redux';
import cartReducer from './reducer';

// using combineReducers for scalability
const rootReducer = combineReducers({
  cart: cartReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;