import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SpeechProvider } from '@speechly/react-client';

ReactDOM.render(
  <React.StrictMode>
    <SpeechProvider
      appId="7ba0fae0-8f15-4bda-89ab-b6b592a85fdf"
      language="en-US"
    >
      <App />
    </SpeechProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
