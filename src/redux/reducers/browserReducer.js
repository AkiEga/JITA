import { BROWSER_ACTION } from "redux/actionTypes";

const initialState = {
	url_history: ["https://www.google.com"],
	url_history_pos: 0,
}

export default function(state = initialState, action) {
	switch (action.type) {
		case BROWSER_ACTION.BROWSE_NEW_PAGE: {
			return;
		}
		case BROWSER_ACTION.PREVIOUS_PAGE: {
			return {
			};
		}
		case BROWSER_ACTION.BROWSE_NEXT_PAGE:{
			return;
		}
		case BROWSER_ACTION.UPDATE: {
			return;
		}
		default:
			return state;
	}
}