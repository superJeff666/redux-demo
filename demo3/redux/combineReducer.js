export default function combineReducer(reducers) {
  const reducerKeys = Object.keys(reducers);

  //返回合并后的新的reducer函数
  return function combination(state = {}, action) {
    //生成新的state
    const nextState = {};

    //遍历执行所有的reducers,整合成为一个新的state
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i];
      const reducer = reducers[key];

      //之前的key的state;
      const prevStateKey = state[key];

      //执行分reducer，获得新的state
      const nextStateKey = reducer(prevStateKey, action);

      nextState[key] = nextStateKey;
    }
    return nextState;
  };
}
