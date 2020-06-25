import _ from "lodash";
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_STREAM:
      return _.omit(state, action.payload); // in this case the return was ID from action and hence we directly omit using action.payload
    //omit creates a new state always
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    // this basically takes array action.payload and converts it into
    // object with key as id and adds all records to state with a new object
    default:
      return state;
  }
};

//mapKeys from lodash takes an array and provided ID from us from the array
// and creates an object out of array with key as ID provided by us
