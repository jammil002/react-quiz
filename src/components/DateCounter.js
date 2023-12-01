import { useReducer, useState } from "react";

function reducer(state, action) {
  console.log(state, action);
  // if (action.type === "inc") return state + action.playload;
  // if (action.type === "dev") return state - action.playload;
  // if (action.type === "setCount") return action.playload;

  switch(action.type) {
    case 'dec':
      return {...state, count: state.count +1};
    case 'inc':
      return {...state, count: state.count -1};
    case 'setCount':
      return {...state, count: action.playload};
    case 'reset':
      return {count: 0, step: 1};
    default:
      throw new Error('Weird Action');
  }
}

function DateCounter() {
  const [count, dispatch] = useReducer(reducer, 0);
  const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec", playload: -1 });
  };

  const inc = function () {
    dispatch({ type: "inc", playload: 1 });

  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", playload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    setStep(Number(e.target.value));
  };

  const reset = function () {
    dispatch({type: 'reset'})

  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
