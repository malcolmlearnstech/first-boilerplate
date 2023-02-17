import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';

// make sure this is the same as the id of the div in your index.html
ReactDOM.createRoot(document.getElementById('app')).render(
  <Provider store={store}>
    <div className="indexStyling">
      <h2>Hello, world!</h2>
    </div>
  </Provider>
);
