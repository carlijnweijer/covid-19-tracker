import { combineReducers } from "redux";
import summary from "./countries/reducer";

const reducer = combineReducers({
  summary,
});

export default reducer;
