import { useReducer } from "react";

const initialState = {name:"toto",count: 0};

function reducer(state:any, action:any) {
  switch (action.type) {
    case 'increment':
      return {...state,count: state.count + 1};
    case 'decrement':
      return {...state, count: state.count - 1};
    default:
      throw new Error();
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Total : {state.count}
      Name: {state.name}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

export default UseReducer
