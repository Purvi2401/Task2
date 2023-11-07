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
      <p>Add another counter</p>
      <button onClick={() => addCounter()}>Add Counter</button>
      {counters.map((counter) => (
        <div key={counter.id}>
          <h2>{counter.label}</h2>
          <p>Value: {counter.value}</p>
          <div>
            <button onClick={() => incrementCounter(counter.id)}>
              Increment
            </button>
            <button onClick={() => decrementCounter(counter.id)}>
              Decrement
            </button>
            <button onClick={() => resetCounter(counter.id)}>Reset</button>
          </div>
          <div>
            <h4>Rename Counter</h4>
            <input
              type="text"
              value={counter.label}
              onChange={(e) => updateLabel(counter.id, e.target.value)}
            />
          </div>
          <div>
            <h4>Set initial value</h4>
            <input
              type="number"
              value={counter.startValue}
              onChange={(e) =>
                setStartValue(counter.id, parseInt(e.target.value))
              }
            />
          </div>
          <br></br>
          <div>
            <button onClick={() => removeCounter(counter.id)}>
              Remove Counter
            </button>
          </div>
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
