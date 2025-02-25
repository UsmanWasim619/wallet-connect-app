import React, { useEffect, useState } from "react";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
import WatchlistScreen from "../screens/WatchLists/Screen/WatchlistScreen";
import ExploreIndicesStackNavigation from "../screens/ExploreIndicesScreen/ExploreIndicesStackNavigation";
import NewsStackNavigation from "../screens/News/NewsStackNavigation";
import IndicesDetailsScreen from "../screens/ExploreIndicesScreen/Screen/IndicesDetailsScreen";
import { BlurView } from "expo-blur";

const { width } = Dimensions.get("window");
const TAB_WIDTH = width / 4;

// Custom Tab Bar Component
const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <BlurView
      tint="systemUltraThinMaterialDark"
      intensity={100}
      style={styles.tabBarContainer}
    >
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <View key={route.key} style={styles.tabItem}>
              {isFocused && <View style={styles.activeIndicator} />}
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={[
                    styles.tabButton,
                    isFocused && styles.tabButtonActive,
                  ]}
                  onTouchEnd={onPress}
                >
                  {options.tabBarIcon({
                    color: isFocused ? "#01A3B6" : "#666",
                    size: 24,
                  })}
                  <Text
                    style={[
                      styles.tabLabel,
                      { color: isFocused ? "#01A3B6" : "#666" },
                    ]}
                  >
                    {route.name}
                  </Text>
                </View>

                {/* Hide vertical line after the last tab */}
                {index !== state.routes.length - 1 && (
                  <Image
                    style={styles.verticalLine}
                    source={require("../../assets/png/verticalLine.png")}
                  />
                )}
              </View>
            </View>
          );
        })}
      </View>
    </BlurView>
  );
};

const PortfolioScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.screenText}>Portfolio Screen</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const TabsNavigations = () => {
  const route = useRoute();
  console.log("route.name: ", route.name);
  const [showHeader, setShowheader] = useState(false);
  console.log("showHeader: ", showHeader);
  return (
    <>
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
          // header: () => <CustomHeaderForTabNavigation showBack={showHeader} />,
        }}
      >
        <Tab.Screen
          name="Discover"
          component={ExploreIndicesStackNavigation}
          options={{
            tabBarIcon: ({ color }) => {
              return (
                <Svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <G clipPath="url(#clip0_774_1238)">
                    <Path
                      d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96452 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM16.8356 7.66781L13.8356 13.6678C13.7989 13.7401 13.7401 13.7989 13.6678 13.8356L7.66782 16.8356C7.59738 16.871 7.51758 16.8833 7.43975 16.8708C7.36193 16.8582 7.29004 16.8214 7.2343 16.7657C7.17856 16.71 7.1418 16.6381 7.12925 16.5603C7.1167 16.4824 7.12899 16.4026 7.16438 16.3322L10.1644 10.3322C10.2011 10.2599 10.2599 10.2011 10.3322 10.1644L16.3322 7.16438C16.4026 7.12899 16.4824 7.11669 16.5603 7.12925C16.6381 7.1418 16.71 7.17856 16.7657 7.2343C16.8214 7.29004 16.8582 7.36193 16.8708 7.43975C16.8833 7.51757 16.871 7.59737 16.8356 7.66781Z"
                      fill={color}
                    />
                  </G>
                  <Defs>
                    <ClipPath id="clip0_774_1238">
                      <Rect width={24} height={24} fill="white" />
                    </ClipPath>
                  </Defs>
                </Svg>
              );
            },
          }}
        />
        <Tab.Screen
          name="Watchlist"
          component={WatchlistScreen}
          options={{
            tabBarIcon: ({ color }) => {
              return <Feather name="bookmark" size={24} color={color} />;
            },
          }}
        />

        <Tab.Screen
          name="Portfolio"
          component={IndicesDetailsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="briefcase" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="News"
          component={NewsStackNavigation}
          options={{
            tabBarIcon: ({ color }) => {
              return <Feather name="message-circle" size={24} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#707070",
    justifyContent: "center",
    alignItems: "center",
  },
  screenText: {
    color: "#fff",
    fontSize: 18,
  },
  tabBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#002430",
  },
  progressContainer: {
    height: 2,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    width: "100%",
  },
  progressBar: {
    height: "100%",
    width: "60%", // Adjust this for progress
    // backgroundColor: "#64DD17",
  },
  tabBar: {
    flexDirection: "row",
    height: 70,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // width: TAB_WIDTH,
  },
  tabButtonActive: {
    position: "relative",
    // borderTopColor: "red",
    // borderTopWidth: 3,
    borderRadius: 25,
  },
  activeIndicator: {
    position: "absolute",
    // bottom: 0,
    top: -1,
    width: 60,
    height: 3,
    backgroundColor: "#01A3B6",
    borderRadius: 2,
    boxShadow: `0 21px 60px -40px  #01A3B6`,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
  },
  verticalLine: {
    height: 38,
    width: 2,
  },
});

export default TabsNavigations;
