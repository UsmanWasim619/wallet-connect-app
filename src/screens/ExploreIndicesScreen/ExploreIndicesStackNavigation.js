import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CommonActions, useFocusEffect } from "@react-navigation/native";
import HomeMainScreen from "../MainHomeScreens/HomeMainScreen";
import { AllIndicesScreen } from "./Screen/AllIncicesScreen";
import IndicesDetailsScreen from "./Screen/IndicesDetailsScreen";
import StocksListScreen from "./Screen/StockListScreen";
import SuperStarUserScreen from "../SuperStarUser/Screen/SuperStarUserScreen";

const stack = createNativeStackNavigator();

const ExploreIndicesStackNavigation = ({ navigation }) => {
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
      initialRouteName="DiscoverScreen"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <stack.Screen name="DiscoverScreen" component={HomeMainScreen} />
      <stack.Screen name="AllIndicesScreen" component={AllIndicesScreen} />
      <stack.Screen
        name="IndicesDetailsScreen"
        component={IndicesDetailsScreen}
      />
      <stack.Screen name="StocksListScreen" component={StocksListScreen} />
      <stack.Screen
        name="SuperStarUserScreen"
        component={SuperStarUserScreen}
      />
    </stack.Navigator>
  );
};

export default ExploreIndicesStackNavigation;
