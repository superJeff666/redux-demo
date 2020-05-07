import { createStore,combineReducers } from './redux';
import counterReducer from './reducers/counter';
import infoReducer from './reducers/info';

const reducer = combineReducers({
    counter: counterReducer,
    info: infoReducer
})

/**
 * 注意：我们没有传initState进去,因为初始化的时候会执行 dispatch({type: Symbol()});
 * 触发 state = reducer(state,action)
 * state 为undefined, action.type为不匹配任何计划中type的值，所以会返回reducer中设置的默认值
 */

let store = createStore(reducer);

console.dir('getState',store.getState())

store.subscribe(() => {
  let state = store.getState();
  console.log('new', state.counter.count, state.info.name, state.info.description);
});

store.dispatch({
    type: 'INCREAMENT'
});

store.dispatch({
    type: 'SET_NAME',
    name: 'tom'
})
