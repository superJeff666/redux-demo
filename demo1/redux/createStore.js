export default function createStore(reducer,initState) {
  let state = initState;
  let listeners = [];

  //订阅
  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    // state = newState;
    // 请按照reducer里面的规则修改state
    state = reducer(state, action)
    //通知
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }

  function getState() {
    return state;
  }

  dispatch({type: Symbol()});

  return {
    subscribe,
    dispatch,
    getState
  };
}
