import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/style.css';
import * as serviceWorker from './serviceWorker';

import axios from 'axios'

async function getData(){
    const data = (await axios.get('https://mumoinhat.net/api/tuan01/5e410b88da59655ac453a153')).data.data
    ReactDOM.render(<App {...data} />, document.getElementById('abc'));
}
getData()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
