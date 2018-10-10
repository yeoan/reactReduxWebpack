import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import YourComponent from './components/your-component.js';
import store from './store';

ReactDom.render(
  <Provider store={store}>
    <YourComponent/>
  </Provider>
  ,
  document.getElementById('app')
);
