import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CommonActions, useFocusEffect } from "@react-navigation/native";
import NewsMainScreen from "./Screens/NewsMainScreen";

const stack = createNativeStackNavigator();

const NewsStackNavigation = ({ navigation }) => {
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
      initialRouteName="NewsScreen"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <stack.Screen name="NewsScreen" component={NewsMainScreen} />
      {/* <stack.Screen name="AllIndicesScreen" component={AllIndicesScreen} /> */}
    </stack.Navigator>
  );
};

export default NewsStackNavigation;
