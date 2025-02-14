import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { GradientHOC } from "../gra.HOC";

const StockTicker = () => {
  return (
    <View style={styles.container}>
      {/* Search Header */}
      <View style={styles.searchHeader}>
        <View style={styles.searchContainer}>
          <Feather
            name="search"
            size={20}
            color="#8E8E93"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#8E8E93"
          />
        </View>
        <MaterialCommunityIcons name="pencil" size={20} color="#8E8E93" />
        <MaterialCommunityIcons
          name="menu"
          size={20}
          color="#8E8E93"
          style={styles.menuIcon}
        />
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <Pressable style={[styles.tab, styles.activeTab]}>
          <Text style={styles.activeTabText}>1</Text>
        </Pressable>
        <Pressable style={styles.tab}>
          <Text style={styles.tabText}>2</Text>
        </Pressable>
        <Pressable style={styles.tab}>
          <Text style={styles.tabText}>3</Text>
        </Pressable>
        <Pressable style={styles.tab}>
          <Text style={styles.tabText}>+</Text>
        </Pressable>
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(28, 28, 30, 0.9)",
    padding: 16,
  },
  searchHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(40, 40, 40, 0.8)",
    borderRadius: 8,
    paddingHorizontal: 8,
    marginRight: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: "#FFFFFF",
    height: 36,
    fontSize: 16,
  },
  menuIcon: {
    marginLeft: 12,
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  tab: {
    marginRight: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  activeTab: {
    backgroundColor: "#FFFFFF",
  },
  tabText: {
    color: "#8E8E93",
    fontSize: 16,
  },
  activeTabText: {
    color: "#000000",
    fontSize: 16,
  },
  stockContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  stockInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  symbol: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  company: {
    color: "#8E8E93",
    fontSize: 14,
    marginTop: 4,
  },
  priceContainer: {
    alignItems: "flex-end",
  },
  price: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  changeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  change: {
    color: "#FF4B4B",
    fontSize: 14,
  },
  changePercent: {
    color: "#8E8E93",
    fontSize: 14,
    marginLeft: 4,
  },
  redLine: {
    width: 2,
    height: "100%",
    backgroundColor: "#FF4B4B",
    marginLeft: 16,
  },
});

export default GradientHOC(StockTicker);
