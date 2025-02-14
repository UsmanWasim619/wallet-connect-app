import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import TabMenu from "../components/TabMenu";
import { GradientHOC } from "../HOC/GradientHOC";

const { width } = Dimensions.get("window");

const CustomHeaderForTabNavigation = ({ navigation, showBack = false }) => {
  const [activeMainTab, setActiveMainTab] = useState("FINNIFTY");
  const [activeSubTab, setActiveSubTab] = useState("OVERVIEW");
  const [showHeader, setShowHeader] = useState(showBack);
  console.log("showHeader:C ", showHeader);

  const mainTabs = ["NIFTY", "INDIAVIX", "FINNIFTY", "MIDCPNIFTY", "SENSEX"];
  const subTabs = ["PERFORMANCE", "OVERVIEW", "RESEARCH"];

  useEffect(() => {
    setShowHeader(showBack);
  }, []);

  {
    /* {showHeader && (
    <View style={{ width: "100%" }}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Feather name="chevron-left" size={24} color="#fff" />
        <Text style={styles.backText}>All Indices</Text>
      </TouchableOpacity>
    </View>
  )} */
  }
  const renderTopBar = () => (
    <>
      {/* {showHeader && (
        <View style={{ width: "100%", height: 50,alignItems:"center" }}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Feather name="chevron-left" size={24} color="#fff" />
            <Text style={styles.backText}>All Indices</Text>
          </TouchableOpacity>
        </View>
      )} */}
      {!showHeader && (
        <View style={styles.topBar}>
          <View style={styles.topBarIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Feather name="search" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Feather name="briefcase" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Feather name="user" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );

  const renderTabs = (tabs, activeTab, setActiveTab, scrollable = true) => {
    const TabContainer = scrollable ? ScrollView : View;
    const containerStyle = scrollable
      ? styles.scrollContainer
      : styles.tabContainer;

    return (
      <TabContainer
        horizontal={scrollable}
        showsHorizontalScrollIndicator={false}
        style={containerStyle}
        contentContainerStyle={scrollable && styles.scrollContent}
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, !scrollable && { flex: 1 }]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
            {activeTab === tab && <View style={styles.activeIndicator} />}
          </TouchableOpacity>
        ))}
      </TabContainer>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        {renderTopBar()}

        {/* {!showHeader && renderTabs(mainTabs, activeMainTab, setActiveMainTab)} */}
        {/* {renderTabs(subTabs, activeSubTab, setActiveSubTab, false)} */}
      </View>
      {!showHeader && <TabMenu data={mainTabs} selected={"FINNIFTY"} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#000",
    justifyContent: "center",
    alignSelf: "center",
  },

  container: {
    // backgroundColor: "#000",
    marginTop: "3%",
    paddingBottom: 8,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 44,
    marginTop: 20,
  },
  topBarIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    gap: 10,
    width: "100%",
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  backText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 4,
  },
  scrollContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  tabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    position: "relative",
    alignItems: "center",
  },
  tabText: {
    color: "#666",
    fontSize: 14,
    fontWeight: "600",
  },
  activeTabText: {
    color: "#fff",
  },
  activeIndicator: {
    position: "absolute",
    bottom: 0,
    left: 16,
    right: 16,
    height: 2,
    backgroundColor: "#64DD17",
  },
});

export default CustomHeaderForTabNavigation;
