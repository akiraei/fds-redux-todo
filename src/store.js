
import {combineReducers, createStore} from 'redux'

const incr = 'incr';
const decr = 'decr';
const zero = 'zero';

const addTodo = 'addTodo';

let idCount = 1

export function addTodoFunc(body) {
  return {
    type: addTodo,
    body,
  };
}

export function incrFunc(amount) {
  return {
    type: incr,
    amount,
  };
}

export function decrFunc(amount) {
  return {
    type: decr,
    amount,
  };
}

export function zeroFunc() {
  return {
    type: zero,
  };
}

 function count(state = 0, action) {
  switch (action.type) {
    case incr:
      return state + action.amount;
    case zero:
      return 0;
    case decr:
      return state - action.amount;
    default:
      return state;
  }
}

 function todos(state = [], action) {
  switch (action.type) {
    case addTodo:
      return [...state, { id: idCount++, body: action.body, complete: false }];
    default:
      return state;
  }
}

const initial = {
  count: 0,
  todos: [],
};

const rootReducer = combineReducers({
  todos,
  count,
});

export const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});
