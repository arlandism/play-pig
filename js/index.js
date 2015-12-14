const React = require('react');
const ReactDOM = require('react-dom');
const store = require('./store/store');
const AppContainer = require('./components/appContainer.jsx');

ReactDOM.render(
  React.createElement(AppContainer, store.getState()),
  document.getElementById('app-container')
);
