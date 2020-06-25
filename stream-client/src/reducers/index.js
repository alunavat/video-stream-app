// We will start to use redux form pre built reducer
import { reducer as formReducer } from "redux-form"; // as formReducer is not necessary but for understanding
import { combineReducers } from "redux";
import authReducer from "./authReducers";
import streamReducer from "./streamReducers";
import streamReducers from "./streamReducers";

export default combineReducers({
  auth: authReducer,
  form: formReducer, // added for redux-form so that we use it's reducer functionality
  streams: streamReducers,
});
