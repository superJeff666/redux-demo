import { createStore, combineReducers } from "./redux";
import counterReducer from "./reducers/counter";

import loggerMiddleware from "./middlewares/loggerMiddleware";
import exceptionMiddle from "./middlewares/exceptionMiddleware";
import timeMiddleware from "./middlewares/timeMiddleware";

const reducer = combineReducers({
  counter: counterReducer
});

const store = createStore(reducer);
const next = store.dispatch;

const logger = loggerMiddleware(store);
const exception = exceptionMiddle(store);
const time = timeMiddleware(store);
store.dispatch = exception(time(logger(next)));

store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter.count);
});

store.dispatch({
  type: "INCREMENT"
});
store.dispatch({
  type: "DECREMENT"
});
