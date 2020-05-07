export default function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers); // ['counter', 'info']

  // 返回合并后的新的reducer函数
  return function combination(state = {}, action) {
    // 生成新的state
    const nextState = {};

    //遍历执行所有的reducers,整合成为一个新的state
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i];
      const reducer = reducers[key];
      console.log("reducer", reducer);
      //之前的key的state
      const prevStateKey = state[key];

      //执行分reducer, 获得新的state
      const nextStateKey = reducer(prevStateKey, action);
      console.log("newState", nextStateKey);

      nextState[key] = nextStateKey;
    }
    return nextState;
  };
}
