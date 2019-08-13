import { combineReducers } from "redux";
import browserReducer from "redux/reducers/browserReducer";
import jiraTicketsReducer from "redux/reducers/jiraTicketsReducer";

export default combineReducers({ jiraTicketsReducer, browserReducer });