import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from './reducers/index';
import { thunk } from "redux-thunk";

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer, applyMiddleware(thunk))
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );

  export default store

  