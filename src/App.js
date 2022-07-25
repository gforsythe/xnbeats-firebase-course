import React from 'react';
import Rout from './routes';
import { Provider } from 'react-redux';
import ReduxStore from './store/index';

const App = () => {
    return (
      <Provider store={ReduxStore()}>
      <Rout/>
      </Provider>
      
    )
}

export default App;
