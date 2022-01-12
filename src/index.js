import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// const store = createStore();


{/* <Provider store={store}> */}
// </Provider>
ReactDOM.render(
<App />,
document.getElementById('root')
);
