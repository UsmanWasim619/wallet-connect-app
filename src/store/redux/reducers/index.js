import { combineReducers } from "redux";
import AuthReducer from "./Auth.reducer";
import LoaderReducer from "./Loader.reducer";
import HideAndShowReducer from "./HideAndShow.reducer";
import tabMenuReducer from "./TabsMenu.reducer";

const rootReducer = combineReducers({
  /**
   * Add other reducers here if needed
   * */
  auth: AuthReducer,
  loader: LoaderReducer,
  nabarShow: HideAndShowReducer,
  tabMenu: tabMenuReducer,
});

export default rootReducer;
