// Import necessary modules and components
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Render the React component into the DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
module.exports = {
  devServer: {
    setupMiddlewares: function(devServer) {
      
    }
  }
};
