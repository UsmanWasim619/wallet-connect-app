import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CommonActions, useFocusEffect } from "@react-navigation/native";
import HomeMainScreen from "../MainHomeScreens/HomeMainScreen";
import { AllIndicesScreen } from "./Screen/AllIncicesScreen";
import IndicesDetailsScreen from "./Screen/IndicesDetailsScreen";
import StocksListScreen from "./Screen/StockListScreen";
import SuperStarUserScreen from "../SuperStarUser/Screen/SuperStarUserScreen";
import ProgressBarIndicesScreen from "../ProgressBarIndicesScreen";
import TokenDetailScreen from "../MainHomeScreens/TokenDetailScreen";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const stack = createNativeStackNavigator();

// Export this function so it can be used in TabsNavigations.js
export const getTabBarVisibility = (route) => {
  // Default to showing the tab bar if route.state is undefined
  const routeName = getFocusedRouteNameFromRoute(route) ?? "DiscoverScreen";

  // Add all routes where you want to hide the tab bar
  const hideTabBarRoutes = [
    "TokenScreen",
    "IndicesDetailsScreen",
    "SuperStarUserScreen",
    "StocksListScreen",
  ];

  return !hideTabBarRoutes.includes(routeName);
};

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
      <stack.Screen
        name="ProgressBarIndicesScreen"
        component={ProgressBarIndicesScreen}
      />

      <stack.Screen name="DiscoverScreen" component={HomeMainScreen} />

      
      <stack.Screen name="TokenScreen" component={TokenDetailScreen} />


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
