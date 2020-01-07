import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import configureStore from './store';
import Dashboard from "./pages/dashboard/dashboard";
import App from "./App";

const store = createStore(configureStore)

ReactDOM.render( <Provider store={store}>
       <div>
<Dashboard />
<App/>

        </div>
  </Provider>, document.getElementById("root"));

serviceWorker.unregister();
