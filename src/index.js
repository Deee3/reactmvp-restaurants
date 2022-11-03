//This file creates the root and renders the Main component to the idnex.html

import React from 'react';
import ReactDOM from 'react-dom/client';

//import './index.css';
import App from './App';

//Create your root container with this fucntion
//ReactDOM.render is deprecated in favor of createRoot().render
let root = ReactDOM.createRoot(document.getElementById('root'))

//render your root app
root.render(<App />);