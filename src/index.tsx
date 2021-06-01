import './index.scss'
import ReactDOM from 'react-dom'
import App from './App'
import { StoreProvider } from './components/store/CentralStore'
import { StrictMode } from 'react';

ReactDOM.render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>,
  document.getElementById('root')
);
