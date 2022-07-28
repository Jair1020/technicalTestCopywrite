import reactDom from 'react-dom';
import App from './App';
import store from './redux/store'
import { Provider } from 'react-redux'
import { StrictMode } from 'react';


reactDom.render(
  <StrictMode>
    <Provider store={store}>
      <App />,
    </Provider>,
  </StrictMode>,
  document.getElementById('root')
);
