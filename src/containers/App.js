import React, { Component } from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';
/* eslint-disable no-unused-vars */
import Styles from '../stylesheets/style.css';
/* eslint-enable no-unused-vars */

import SearchApp from './SearchApp';

const reducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());;

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <SearchApp />
        </Provider>
      </div>
    );
  }
}
