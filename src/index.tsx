import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import App from './components/App';
import './index.css';
import reducer from './redux/reducers'
import registerServiceWorker from './registerServiceWorker';

let loggerMiddleware = createLogger()

let initialState = {
  home: {
    posts: [],
    isFetching: false
  }
}

let store = createStore(reducer,
  initialState,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
