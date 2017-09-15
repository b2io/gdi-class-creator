import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { App } from 'modules/App';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import 'styles/base';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
