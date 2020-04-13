import React from 'react';
import './App.css';
import Session from './services/Session'
import { Provider } from 'react-redux'
import { store } from './store'
import ReduxToastr from 'react-redux-toastr'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

function App() {
  return (
    <Provider store={store}>
      <Session />

      <ReduxToastr
        timeOut={2000}
        newestOnTop={false}
        preventDuplicates
        position="top-center"
        getState={(state) => state.toastr} // This is the default
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        closeOnToastrClick
      />
    </Provider>
  );
}

export default App;
