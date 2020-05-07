let initState = {
  name: "jeff",
  description: "super"
};
export default function infoReducer(state, action) {
  console.log('action',action)
  if (!state) {
    state = initState;
  }
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.name
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        description: action.description
      };
    default:
      return state;
  }
}
