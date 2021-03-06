import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore(); //might need to be outside the Root
export default store;

const Root = () => {

  window.store = store;
  window.dispatch = store.dispatch;
  
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
