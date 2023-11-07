import React from "react";
import { connect } from "react-redux";
import {
  addCounter,
  removeCounter,
  incrementCounter,
  decrementCounter,
  resetCounter,
  updateLabel,
  setStartValue,
} from "./actions/counterActions";

const Counter = ({
  counters,
  addCounter,
  removeCounter,
  incrementCounter,
  decrementCounter,
  resetCounter,
  updateLabel,
  setStartValue,
}) => {
  return (
    <div>
      <button onClick={() => addCounter()}>Add Counter</button>
      {counters.map((counter) => (
        <div key={counter.id}>
          <h3>{counter.label}</h3>
          <p>Value: {counter.value}</p>
          <button onClick={() => incrementCounter(counter.id)}>
            Increment
          </button>
          <button onClick={() => decrementCounter(counter.id)}>
            Decrement
          </button>
          <button onClick={() => resetCounter(counter.id)}>Reset</button>
          <input
            type="text"
            value={counter.label}
            onChange={(e) => updateLabel(counter.id, e.target.value)}
          />
          <input
            type="number"
            value={counter.startValue}
            onChange={(e) =>
              setStartValue(counter.id, parseInt(e.target.value))
            }
          />
          <button onClick={() => removeCounter(counter.id)}>
            Remove Counter
          </button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  counters: state.counters,
});

export default connect(mapStateToProps, {
  addCounter,
  removeCounter,
  incrementCounter,
  decrementCounter,
  resetCounter,
  updateLabel,
  setStartValue,
})(Counter);
