import { applyMiddleware, compose, createStore } from 'redux';


import thunk from 'redux-thunk';
// import reducer from './reducer';
// import reducer from './reducers.js/reducer';
// import reducers from './store/reducers';


import { composeWithDevTools } from 'redux-devtools-extension';
// import combineReducers from './combineReducers';
import allResducers from './reducers.js/combineReducers';


const devToolExtention =
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// في الريديكس ثانك العادي
const store = createStore(allResducers, composeWithDevTools(applyMiddleware(thunk)));
// const store = createStore(reducer, compose(applyMiddleware(thunk), devToolExtention));
// const store = createStore(combineReducers, compose(applyMiddleware(thunk), devToolExtention));

// const store = createStore(reducer, compose(applyMiddleware(thunk)));


// في الريديكس العادي
// const store = createStore(reducer, devToolExtention)
export default store;

