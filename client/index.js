import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';

// make sure this is the same as the id of the div in your index.html
ReactDOM.createRoot(document.getElementById('app')).render(
  <>
    <Provider store={store}>
      <h2>
        <div>Hello, world!</div>
      </h2>
    </Provider>
  </>
);
