import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  * as firebase from'firebase';

ReactDOM.render(<App />, document.getElementById('root'));
var config={
    apiKey: "AIzaSyBDEllUUJas4n_DkmMPGbxIfAC8b9q2UU4",
    authDomain: "diswatch.firebaseapp.com",
    databaseURL: "https://diswatch.firebaseio.com",
    projectId: "diswatch",
    storageBucket: "diswatch.appspot.com",
    messagingSenderId: "6266907700",
    appId: "1:6266907700:web:57986d7218d6c3b5e7ae61",
    measurementId: "G-895E1JRDLB"
}
firebase.initializeApp(config);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
