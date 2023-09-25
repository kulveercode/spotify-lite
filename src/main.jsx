import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { StateProvider } from './assets/utils/StateProvider.jsx';
import reducer, { initialState } from './assets/utils/reducer.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
  </React.StrictMode>,
);

