import React from "react";
import StackNavigator from "./src/navigation/StackNavigator";
import { Provider } from "react-redux";
import store from "./src/store/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
};

export default App;
