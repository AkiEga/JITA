import { TICKET_ACTION }  from "./actionTypes";
import { BROWSER_ACTION }  from "./actionTypes";

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

export const moveTicketPage = url => ({
  type: BROWSER_ACTION.NEW_PAGE,
  payload: {
    url: url
  }
})