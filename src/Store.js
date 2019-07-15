import {createStore} from 'redux';
import reducer from './Reducer.js';

const initvalues = {
    'first': 0,
    'second': 10,
    'third': 20
}

console.log('store')

const store = createStore(reducer, initvalues)
export default store