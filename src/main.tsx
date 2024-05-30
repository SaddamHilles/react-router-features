import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
// import { increment } from './features/counterSlice.ts';

// console.log(increment());
store.dispatch({type: 'counter/incrementByAmount', payload: 25})
// console.log(store.getState().count);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
