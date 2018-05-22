import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'react-chrome-redux';
import App from './App';

const store = new Store({
  portName: process.env.REACT_APP_STORE_PORT,
});

let root = document.getElementById('root');

render(<div>loading</div>, root);

store.ready().then(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    root,
  );
});
