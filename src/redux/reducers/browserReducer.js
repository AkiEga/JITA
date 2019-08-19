import { BROWSER_ACTION } from "redux/actionTypes";

const initialState = {
	url: "https://www.google.com",
	url_history: ["https://www.google.com"],
	url_history_pos: 0,
}

export default function(state = initialState, action) {
	switch (action.type) {
		case BROWSER_ACTION.NEW_PAGE: {		
			let new_url = action.payload.url;
			return { 
				url: new_url,
				url_history: state.url_history.push(new_url),
				url_history_pos: state.url_history_pos++
			};
		}
		case BROWSER_ACTION.PREVIOUS_PAGE: {
			return {
			};
		}
		case BROWSER_ACTION.NEXT_PAGE:{
			return;
		}
		case BROWSER_ACTION.UPDATE: {
			return;
		}
		default:
			return state;
	}
}