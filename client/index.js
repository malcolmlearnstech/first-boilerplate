import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

// make sure this is the same as the id of the div in your index.html
ReactDOM.createRoot(document.getElementById('app')).render(
  <>
    <h2>
      <div>Hello, world!</div>
    </h2>
  </>
);
