import { createStore, combineReducer } from "./redux";
import counterReducer from "./reducers/counter";
import infoReducer from "./reducers/info";

const reducer = combineReducer({
  counter: counterReducer,
  info: infoReducer
});

/**
 * 注意：我们没有传initState进去，因为初始化的时候会执行dispatch({type: Symbol()});
 * 触发state = reducer(state,action);
 * 因为state为undefined,action.type为不匹配任何计划中type的值，所以会返回reducer中设置的默认值
 */
let store = createStore(reducer);

console.dir(store.getState());

store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter.count, state.info.name, state.info.description);
});

store.dispatch({
  type: "INCREMENT"
});

store.dispatch({
  type: "SET_NAME",
  name: "tom"
});
