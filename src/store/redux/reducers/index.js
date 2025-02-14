import { combineReducers } from "redux";
import AuthReducer from "./Auth.reducer";
import LoaderReducer from "./Loader.reducer";
import HideAndShowReducer from "./HideAndShow.reducer";

const rootReducer = combineReducers({
  /**
   * Add other reducers here if needed
   * */
  auth: AuthReducer,
  loader: LoaderReducer,
  nabarShow: HideAndShowReducer,
});

export default rootReducer;
