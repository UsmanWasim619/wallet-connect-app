import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CommonButton from "../../../components/CommonButton";
import TabMenu from "../../../components/TabMenu";
import { GradientHOC } from "../../../HOC/GradientHOC";
import HorizontalLine from "../../../components/HorizontalLine";

const menuItems = ["GAINERS", "52W HIGH", "ALL", "52W LOW", "TOP LOSERS"];

const stocksData = [
  {
    id: "1",
    name: "Zomato Ltd.",
    symbol: "ZOMATO",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bBPBJvEAXqTvNlaXXroiojij9Li9n0.png",
    ltp: "217.20",
    change: "+2.60",
    changePercent: "1.20",
  },
  {
    id: "2",
    name: "Suzlon Electr..",
    symbol: "SUZLON",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bBPBJvEAXqTvNlaXXroiojij9Li9n0.png",
    ltp: "217.20",
    change: "+2.60",
    changePercent: "1.20",
  },
  {
    id: "3",
    name: "Vodafone Id..",
    symbol: "IDEA",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bBPBJvEAXqTvNlaXXroiojij9Li9n0.png",
    ltp: "217.20",
    change: "+2.60",
    changePercent: "1.20",
  },
  {
    id: "4",
    name: "Kalyan Jewe..",
    symbol: "KALYANKJIL",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bBPBJvEAXqTvNlaXXroiojij9Li9n0.png",
    ltp: "217.20",
    change: "+2.60",
    changePercent: "1.20",
  },
  {
    id: "5",
    name: "Easy Trip Plan",
    symbol: "EASEMYTRIP",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bBPBJvEAXqTvNlaXXroiojij9Li9n0.png",
    ltp: "217.20",
    change: "+2.60",
    changePercent: "1.20",
  },
];

const StocksListScreen = ({ navigation }) => {
  const [selectedMenu, setSelectedMenu] = useState("ALL");

  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="chevron-back" size={24} color="white" />
        <Text style={styles.headerTitle}>Stocks</Text>
      </TouchableOpacity>
    </View>
  );

  const renderMenuItems = () => (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.menuContainer}
    >
      {menuItems.map((item) => (
        <TouchableOpacity
          key={item}
          style={[
            styles.menuItem,
            selectedMenu === item && styles.selectedMenuItem,
          ]}
          onPress={() => setSelectedMenu(item)}
        >
          <Text
            style={[
              styles.menuText,
              selectedMenu === item && styles.selectedMenuText,
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const renderListHeader = () => (
    <>
      <View style={styles.listHeader}>
        <Text style={styles.listHeaderText}>Company</Text>
        <Text style={styles.listHeaderTextLTP}>LTP</Text>
        <Text style={styles.listHeaderText}>Change (%Change)</Text>
      </View>
      <HorizontalLine />
    </>
  );

  const renderStockItem = ({ item }) => (
    <>
      <View style={styles.stockItem}>
        <View style={styles.companyInfo}>
          <Image source={{ uri: item.logo }} style={styles.logo} />
          <View>
            <Text numberOfLines={1} style={styles.companyName}>
              {item.name}
            </Text>
            <Text numberOfLines={1} style={styles.symbol}>
              {item.symbol}
            </Text>
          </View>
          <Text numberOfLines={1} style={styles.ltp}>
            {item.ltp}
          </Text>
        </View>
        <Text numberOfLines={1} style={styles.change}>
          {item.change} ({item.changePercent}%)
        </Text>
      </View>
      <HorizontalLine />
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      {renderHeader()}
      {/* <TabMenu data={menuItems} /> */}
      {renderListHeader()}
      <FlatList
        data={stocksData}
        renderItem={renderStockItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />

      {/* <CommonButton
        title={"next"}
        onPress={() => {
          navigation.navigate("NewsScreen");
        }}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 8,
  },
  menuContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
  },
  menuItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
  },
  selectedMenuItem: {
    backgroundColor: "#8DC63F",
  },
  menuText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  selectedMenuText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  listHeaderText: {
    color: "#A1A1A1",
    fontSize: 14,
  },
  listHeaderTextLTP: {
    color: "#A1A1A1",
    fontSize: 14,
    marginLeft: 50,
  },
  stockItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  companyInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 2,
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 20,
    marginRight: 10,
  },
  companyName: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
    width: 100,
  },
  symbol: {
    color: "#FFFFFF",
    fontSize: 10,
    marginTop: 4,
    fontWeight: "300",
    width: 100,
  },
  ltp: {
    color: "#FFFFFF",
    fontSize: 14,
    flex: 1,
    textAlign: "center",
  },
  change: {
    color: "#4CAF50",
    fontSize: 12,
    flex: 1,
    textAlign: "right",
    width: 100,
  },
});

export default GradientHOC(StocksListScreen);
