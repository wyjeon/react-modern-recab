import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//실제 DOM내부에 리액트 컴포넌트를 랜더링한다.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') //id가 root인 DOM을 선택한다.
);
