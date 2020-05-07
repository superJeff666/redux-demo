import { createStore } from "./redux";
import reducer from "./reducer";

let initState = {
  count: 0
};
let store = createStore(reducer, initState);

store.subscribe(() => {
  let state = store.getState();
  console.log(state.count);
});

store.dispatch({
  type: "INCREMENT"
});
store.dispatch({
    type: 'DECREMENT'
});

//随便改state的值，reducer外的修改是无效的！
store.dispatch({
    type: 'ssss'
});