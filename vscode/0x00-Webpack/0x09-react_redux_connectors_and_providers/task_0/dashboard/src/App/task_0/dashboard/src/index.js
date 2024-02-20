import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import { createStore } from 'redux'; 
import uiReducer from './reducers/uiReducer'; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const store = createStore(uiReducer);

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();