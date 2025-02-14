import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  Modal,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import Glassmorphism from "../../../components/Glassmorphism";
import CommonButton from "../../../components/CommonButton";
import { GradientHOC } from "../../../HOC/GradientHOC";
import { StatusBar } from "expo-status-bar";
import WatchlistModal from "../../../components/WatchlistModal";

// Sample stock data
const stocks = [
  {
    symbol: "DIS",
    company: "The Walt Disney Company",
    price: "95.81",
    change: "-1.60",
    percentage: "(-0.41%)",
    trendImg: require("../../../../assets/png/waitlist-down-arrow.png"),
    isNegative: true,
  },
  {
    symbol: "DIS",
    company: "The Walt Disney Company",
    price: "95.81",
    change: "1.60",
    percentage: "(+0.41%)",
    trendImg: require("../../../../assets/png/waitlist-up-arrow.png"),
    isNegative: false,
  },
];

// Stock Item Component
const StockItem = ({ stock, navigation }) => {
  const { symbol, company, price, change, percentage, trendImg, isNegative } =
    stock;

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("");
        }}
      >
        <Glassmorphism height={80} style={styles.stockItem}>
          <View style={styles.container}>
            <View style={styles.leftContent}>
              <Text style={styles.symbol}>{symbol}</Text>
              <Text style={styles.company}>{company}</Text>
            </View>
            <View style={styles.rightContent}>
              <Text style={styles.price}>{price}</Text>
              <ChangeDisplay
                change={change}
                percentage={percentage}
                trendImg={trendImg}
                isNegative={isNegative}
              />
            </View>
            <View style={styles.verticalLines}>
              <Line isNegative />
              <Line isNegative />
            </View>
            <Line style={{ marginLeft: 3 }} />
          </View>
        </Glassmorphism>
      </TouchableOpacity>
    </>
  );
};

// Change Display Component
const ChangeDisplay = ({ change, percentage, trendImg, isNegative }) => {
  const changeColor = isNegative ? "#FF4B4B" : "#2A9D7A";

  return (
    <View style={styles.changeContainer}>
      <Text style={[styles.change, { color: changeColor }]}>{change}</Text>
      <Text style={styles.percentage}>{percentage}</Text>
      <Image style={styles.chart} source={trendImg} />
    </View>
  );
};

// Line Component
const Line = ({ isNegative, style = {} }) => {
  const color = isNegative ? "red" : "#2A9D7A";

  return (
    <View
      style={[
        styles.line,
        { backgroundColor: color, boxShadow: `0 0px 11px 1px ${color}` },
        style,
      ]}
    />
  );
};

// WaitList Component Main
const WatchlistScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleWaitListModal = () => setModalVisible(!modalVisible);
  const handleClose = () => setModalVisible(false);

  return (
    <>
      <View
        style={{
          width: "100%",
          height: 50,
          // alignItems: "center",
          marginVertical: 10,
          padding: 10,
          justifyContent: "flex-start",
        }}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Feather name="chevron-left" size={24} color="#fff" />
          <Text style={styles.backText}>Watchlist</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.waitListContainer}>
        <View style={styles.searchHeader}>
          <BlurView
            style={styles.searchContainer}
            tint="systemThickMaterialDark"
            intensity={70}
          >
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
          </BlurView>

          <BlurView
            intensity={80}
            tint="systemThickMaterialDark"
            style={styles.searchIconContainer}
          >
            <MaterialCommunityIcons name="pencil" size={20} color="#8E8E93" />
          </BlurView>
          <BlurView
            intensity={80}
            tint="systemThickMaterialDark"
            style={styles.searchIconContainerFilter}
          >
            <MaterialCommunityIcons
              name="menu"
              size={18}
              color="#8E8E93"
              style={styles.menuIcon}
            />
          </BlurView>
        </View>

        <Tabs toggleWaitListModal={toggleWaitListModal} />
        {stocks.map((stock, index) => (
          <StockItem key={index} stock={stock} navigation={navigation} />
        ))}

        <WatchlistModal visible={modalVisible} onClose={handleClose} />
      </View>
    </>
  );
};

// Tabs Component
const Tabs = ({ toggleWaitListModal }) => (
  <View style={styles.tabMainContainer}>
    <View style={styles.tabContainer}>
      {["1", "2", "3", "+"].map((tab, index) => (
        <TouchableOpacity
          onPress={toggleWaitListModal}
          key={index}
          intensity={80}
          tint="systemThickMaterialDark"
          style={[styles.tab, index === 0 && styles.activeTab]}
        >
          <Text
            style={[styles.tabText, index === 0 ? styles.activeTabText : null]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>

    <Text style={styles.waitListName}>My Watchlist</Text>
  </View>
);

// function WatchlistModal({ visible, onClose, onCreate }) {
//   const [watchlistName, setWatchlistName] = useState("");

//   const handleCreate = () => {
//     if (watchlistName.trim()) {
//       onCreate(watchlistName);
//       setWatchlistName("");
//       onClose();
//     }
//   };

//   return (
//     <Modal
//       animationType="fade"
//       transparent={true}
//       visible={visible}
//       onRequestClose={onClose}
//     >
//       <Pressable style={styles.overlay} onPress={onClose}>
//         <View
//           style={styles.modalContainer}
//           onStartShouldSetResponder={() => true}
//         >
//           <Glassmorphism style={styles.modalContent} height={260} width={280}>
//             {/* Close Button */}
//             <TouchableOpacity style={styles.closeButton} onPress={onClose}>
//               <Text style={styles.closeButtonText}>×</Text>
//             </TouchableOpacity>

//             {/* Modal Header */}
//             <Text style={styles.title}>New Watchlist</Text>
//             <Text style={styles.subtitle}>Enter a name for this watchlist</Text>

//             {/* Input Field */}
//             <TextInput
//               style={styles.input}
//               placeholder="Watchlist name"
//               placeholderTextColor="#666"
//               value={watchlistName}
//               onChangeText={setWatchlistName}
//               autoFocus={true}
//               maxLength={80}
//             />
//             {/* Create Button */}
//             <CommonButton
//               width={"100%"}
//               style={styles.createButton}
//               title={"Create"}
//               onPress={handleCreate}
//             />
//           </Glassmorphism>
//         </View>
//       </Pressable>
//     </Modal>
//   );
// }

const styles = StyleSheet.create({
  searchHeader: {
    flexDirection: "row",
    alignItems: "center",
    // marginTop: 30,
    marginBottom: 10,
    gap: 10,
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
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingHorizontal: 8,
    marginRight: 12,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#FCF7FD0D",
  },
  searchIcon: {
    marginRight: 8,
  },
  searchIconContainer: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderColor: "#FCF7FD0D",
    borderRadius: 12,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden",
    padding: 8,
  },
  searchIconContainerFilter: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderColor: "#FCF7FD0D",
    borderRadius: 12,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden",
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    color: "#FFFFFF",
    height: 40,
    fontSize: 16,
  },
  menuIcon: {
    marginLeft: 12,
  },
  waitListContainer: {
    marginTop: 10,
    gap: 10,
    paddingHorizontal: 12,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  waitListName: { fontSize: 16, color: "#ffffff", fontWeight: "500" },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 12,
    marginVertical: 4,
  },
  leftContent: {
    flex: 1,
  },
  rightContent: {
    alignItems: "flex-end",
  },
  symbol: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  company: {
    color: "#8E8E93",
    fontSize: 14,
    marginTop: 2,
  },
  price: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 24,
  },
  changeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  change: {
    fontSize: 14,
    marginRight: 4,
  },
  percentage: {
    color: "#8E8E93",
    fontSize: 14,
  },
  chart: {
    height: 18,
    width: 18,
    marginLeft: 10,
    marginRight: -9,
    zIndex: 20,
  },
  line: {
    width: 2,
    height: 70,
    zIndex: 1,
  },
  verticalLines: {
    flexDirection: "row",
    gap: 10,
  },
  stockItem: {
    borderRadius: 8,
    backgroundColor: "#FFFFFF1A",
  },

  tabMainContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "baseline",
    width: "100%",
  },

  tabContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  tab: {
    marginRight: 15,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: "#333333",
  },
  activeTab: {
    backgroundColor: "#FFFFFF",
    zIndex: 20,
  },
  tabText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  activeTabText: {
    color: "#000000",
    fontSize: 16,
  },

  // Modal
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    maxWidth: 340,
  },
  modalContent: {
    backgroundColor: "#1b1a1c77",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    overflow: "hidden",
  },
  closeButton: {
    position: "absolute",
    right: 16,
    top: 16,
    zIndex: 1,
  },
  closeButtonText: {
    color: "#666",
    fontSize: 24,
    fontWeight: "400",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 8,
  },
  subtitle: {
    color: "#999",
    fontSize: 14,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#A1A1A117",
    borderRadius: 8,
    padding: 12,
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 20,
  },
  createButton: {
    width: "100%",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  createButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default GradientHOC(WatchlistScreen);
