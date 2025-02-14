import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/auth/LoginScreen";
import OTPScreen from "../screens/auth/OTPScreen";
import TabsNavigations from "./TabNavigator";
import { connect, useDispatch } from "react-redux";
import { AxiosInterceptors } from "../interceptors/AxiosInterceptor";

const Stack = createStackNavigator();

const StackNavigator = ({ token, loader, isNetConnected, user }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    AxiosInterceptors(dispatch);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Dashboard" component={TabsNavigations} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state?.auth,
    ...state?.loader,
    ...state?.isNetConnected,
    ...state?.auth?.user,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(StackNavigator);
