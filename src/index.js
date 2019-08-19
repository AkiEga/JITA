import React from "react";
import ReactDOM from "react-dom";
//import "semantic-ui-css/semantic.min.css";
import App from "App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "redux/reducers";

const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
