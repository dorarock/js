import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './layouts/Layout';


ReactDOM.render(<Provider store={store}><Router history={browserHistory}>
    <Route path="/" component={Layout}></Route>
  </Router></Provider>, document.querySelector("#root"));