import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/configureStore';
// import { fetchMission } from './redux/mission/mission';

const root = ReactDOM.createRoot(document.getElementById('root'));
// store.dispatch(fetchMission);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
);
