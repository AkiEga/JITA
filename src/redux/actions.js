import { TICKET_ACTION }  from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
  type: TICKET_ACTION.CREATE,
  payload: {
  }
});

export const toggleTodo = id => ({
  type: TICKET_ACTION.UPDATE,
  payload: {  }
});

