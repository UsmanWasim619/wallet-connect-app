import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CommonActions, useFocusEffect } from "@react-navigation/native";
import SuperStarUserScreen from "./Screen/SuperStarUserScreen";

const stack = createNativeStackNavigator();

const SuperStarUserStackNavigation = ({ navigation }) => {
  const [resetNavigation, setResetNavigation] = useState();

  //   useFocusEffect(
  //     React.useCallback(() => {
  //       return () => {
  //         const navigateReset = navigation.dispatch(
  //           CommonActions.reset({
  //             index: 1,
  //             routes: [{ name: "NftsDashboard" }],
  //           })
  //         );
  //         setResetNavigation(navigateReset);
  //       };
  //     }, [resetNavigation])
  //   );
  return (
    <stack.Navigator
      initialRouteName="SuperStarUserScreen"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <stack.Screen name="SuperStarUserScreen" component={SuperStarUserScreen} />
      {/* <stack.Screen name="AllIndicesScreen" component={AllIndicesScreen} /> */}
    </stack.Navigator>
  );
};

export default SuperStarUserStackNavigation;
