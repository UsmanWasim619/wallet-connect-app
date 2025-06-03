import React from "react";
import StackNavigator from "./src/navigation/StackNavigator";
import { Provider } from "react-redux";
import store from "./src/store/redux/store";
import Native from "./provider";

const App = () => {
  return (
    <Native>
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    </Native>
  );
};

export default App;
