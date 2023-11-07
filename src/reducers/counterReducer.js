import {
  ADD_COUNTER,
  REMOVE_COUNTER,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER,
  UPDATE_LABEL,
  SET_START_VALUE,
} from "../actions/types";

const initialState = {
  counters: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        counters: [
          ...state.counters,
          {
            id: state.counters.length,
            value: 0,
            label: `Counter ${state.counters.length + 1}`,
          },
        ],
      };
    case REMOVE_COUNTER:
      return {
        ...state,
        counters: state.counters.filter(
          (counter) => counter.id !== action.payload
        ),
      };
    case INCREMENT_COUNTER:
      return {
        ...state,
        counters: state.counters.map((counter) =>
          counter.id === action.payload
            ? { ...counter, value: counter.value + 1 }
            : counter
        ),
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        counters: state.counters.map((counter) =>
          counter.id === action.payload
            ? { ...counter, value: counter.value - 1 }
            : counter
        ),
      };
    case RESET_COUNTER:
      return {
        ...state,
        counters: state.counters.map((counter) =>
          counter.id === action.payload ? { ...counter, value: 0 } : counter
        ),
      };
    case UPDATE_LABEL:
      return {
        ...state,
        counters: state.counters.map((counter) =>
          counter.id === action.payload.id
            ? { ...counter, label: action.payload.label }
            : counter
        ),
      };
    case SET_START_VALUE:
      return {
        ...state,
        counters: state.counters.map((counter) =>
          counter.id === action.payload.id
            ? { ...counter, value: action.payload.value }
            : counter
        ),
      };
    default:
      return state;
  }
};

export default counterReducer;
