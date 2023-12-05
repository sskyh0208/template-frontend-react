import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // 環境変数からバックエンドURLを取得
  const backendUrl = process.env.REACT_APP_BACKEND_URL + '/api';

  // バックエンドへのGETリクエストを行う関数
  const testBackend = () => {
    const url = backendUrl + '/test'
    console.log('url: ' + url);
    fetch(url, { method: 'GET' })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert('Response received from backend');
    })
    .catch(error => {
        console.error('Error fetching data: ', error);
        alert('Error fetching data; see console for details.');
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={testBackend} className="App-link">
          バックエンドテスト
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
