import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from 'react-redux'
import configureStore from './store';
import Dashboard from "./pages/dashboard/dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

ReactDOM.render( <Provider store={store}>
       <div>
<Dashboard />
        </div>
  </Provider>, document.getElementById("root"));

serviceWorker.unregister();
