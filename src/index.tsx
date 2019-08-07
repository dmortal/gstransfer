import React from 'react';
import ReactDOM from 'react-dom';
import Framework7 from 'framework7/framework7.esm.bundle';
import Framework7React from 'framework7-react';
import '../node_modules/framework7/css/framework7.bundle.css';
import './index.css';
import App from './App';
Framework7.use(Framework7React);
ReactDOM.render(<App />, document.getElementById('root'));
