import {
  ADD_COUNTER,
  REMOVE_COUNTER,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER,
  UPDATE_LABEL,
  SET_START_VALUE,
} from "./types";

export const addCounter = () => {
  return {
    type: ADD_COUNTER,
  };
};

export const removeCounter = (id) => {
  return {
    type: REMOVE_COUNTER,
    payload: id,
  };
};

export const incrementCounter = (id) => {
  return {
    type: INCREMENT_COUNTER,
    payload: id,
  };
};

export const decrementCounter = (id) => {
  return {
    type: DECREMENT_COUNTER,
    payload: id,
  };
};

export const resetCounter = (id) => {
  return {
    type: RESET_COUNTER,
    payload: id,
  };
};

export const updateLabel = (id, label) => {
  return {
    type: UPDATE_LABEL,
    payload: { id, label },
  };
};

export const setStartValue = (id, value) => {
  return {
    type: SET_START_VALUE,
    payload: { id, value },
  };
};
