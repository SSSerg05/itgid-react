import React from 'react';
// import ReactDOM from 'react-dom'; // for ver 17.x.x
import { createRoot } from 'react-dom/client'; // for ver 18.x.x

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// new for 18.x.x
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);

/// old for 17.x.x
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
