import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
const OneSignal = window.OneSignal || [];
OneSignal.push(async () => {
  OneSignal.init({
    appId: '85d22519-b046-4a87-a167-fbfb88b7664c',
    notifyButton: {
      enable: true,
    },
  });
});
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
