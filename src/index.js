import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ModeContextProvider} from './context/modeContext'

ReactDOM.render(
  <React.StrictMode>
    <ModeContextProvider>
      <App />
    </ModeContextProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);
