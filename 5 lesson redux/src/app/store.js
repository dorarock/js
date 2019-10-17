import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
//import promise from 'redux-promise-middleware';
import reducers from './reducers';

const middlewares = applyMiddleware(thunk);

export default createStore(reducers, middlewares);