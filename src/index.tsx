import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Web3ReactProvider, Web3ReactHooks } from '@web3-react/core';
import { hooks as metaMaskHooks, metaMask } from './utils/metaMask';
import { MetaMask } from '@web3-react/metamask'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const connectors: [MetaMask, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
]

const Provider = () => {
  return (
      <Web3ReactProvider connectors={connectors}>
        <></>
      </Web3ReactProvider>
  )
}

root.render(
  <React.StrictMode>
    <Provider/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
