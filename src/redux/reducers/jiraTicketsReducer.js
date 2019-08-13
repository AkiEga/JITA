import { TICKET_ACTION } from "redux/actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TICKET_ACTION.CREATE: {
		return;
    }
    case TICKET_ACTION.READ: {
		return;
	}
	case TICKET_ACTION.UPDATE: {
		return ;
	}
	case TICKET_ACTION.DELETE: {
		return ;
	}
	default:
       return state;
  }
}