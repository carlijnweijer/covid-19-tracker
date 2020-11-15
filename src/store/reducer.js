import { combineReducers } from "redux";
import summary from "./summary/reducer";

const reducer = combineReducers({
  summary,
});

export default reducer;
