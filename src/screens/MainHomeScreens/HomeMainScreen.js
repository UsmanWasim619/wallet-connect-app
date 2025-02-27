import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import ProductsComponent from "./HomeComponents/ProductsComponent";
import CommodityCardComponents from "./HomeComponents/CommodityCardComponents";
import MarketMoversComponents from "./HomeComponents/MarketMoversComponents";
import { GradientHOC } from "../../HOC/GradientHOC";
import Glassmorphism from "../../components/Glassmorphism";
import DiscoverComponent from "./HomeComponents/DiscoverComponent";
import HotDealsComponent from "./HomeComponents/HotDealComponent";
import CustomHeaderForTabNavigation from "../../navigation/CustomHeaderForTabNavigation";
import TabMenu from "../../components/TabMenu";

const HomeScreen = ({ navigation }) => {
  const products = [
    {
      icon: (
        <MaterialCommunityIcons name="chart-line" size={24} color="#4CAF50" />
      ),

      img: require("../../../assets/png/product-financial-profit.png"),
      title: "Stock\nSIP",
    },
    {
      icon: (
        <MaterialCommunityIcons name="calculator" size={24} color="#4CAF50" />
      ),

      img: require("../../../assets/png/product-financial-planing.png"),
      title: "Financial\nPlanning",
    },
    {
      icon: (
        <MaterialCommunityIcons
          name="calculator-variant"
          size={24}
          color="#4CAF50"
        />
      ),

      img: require("../../../assets/png/product-sip-calculator.png"),
      title: "SIP\nCalculator",
    },
    {
      icon: (
        <MaterialCommunityIcons
          name="package-variant"
          size={24}
          color="#4CAF50"
        />
      ),

      img: require("../../../assets/png/product-lots-coin.png"),
      title: "Lots",
    },
    {
      icon: (
        <MaterialCommunityIcons name="chart-bar" size={24} color="#4CAF50" />
      ),

      img: require("../../../assets/png/product-research-analysis.png"),
      title: "Research and\nAnalysis",
    },
    {
      icon: <MaterialCommunityIcons name="bank" size={24} color="#4CAF50" />,

      img: require("../../../assets/png/product-wealth-management.png"),
      title: "Wealth\nManagement",
    },
  ];

  const commodities = [
    {
      title: "Silver",
      price: "92,082.00",
      change: "477.00 (+0.56%)",
      expiry: "5 Mar 2024",
    },
    {
      title: "Gold",
      price: "92,082.00",
      change: "477.00 (+0.56%)",
      expiry: "5 Mar 2024",
    },
    {
      title: "Natural Gas",
      price: "92,082.00",
      change: "477.00 (+0.56%)",
      expiry: "5 Mar 2024",
    },
  ];

  const marketMovers = [
    {
      code: "JU",
      name: "JUBLI PHARMA",
      subtext: "Nippon India ETF Gold BeES",
      price: "1,191.00",
      change: "144.05 (+13.76%)",
    },
    {
      code: "CO",
      name: "COCHINSHIP",
      subtext: "Cochin Shipyard Limited",
      price: "1,191.00",
      change: "144.05 (+13.76%)",
    },
    {
      code: "GR",
      name: "GRSE",
      subtext: "Garden Reach Shipbuilding Ltd",
      price: "1,191.00",
      change: "144.05 (+13.76%)",
    },
    {
      code: "MI",
      name: "Minda Corporation Ltd",
      subtext: "Minda Corporation Ltd",
      price: "1,191.00",
      change: "144.05 (+13.76%)",
    },
  ];
  const mainTabs = ["NIFTY", "INDIAVIX", "FINNIFTY", "MIDCPNIFTY", "SENSEX"];
  return (
    <ScrollView>
      {/* Header */}
      {/* <CustomHeaderForTabNavigation navigation={navigation} showBack={false} /> */}
      <View>
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
        <TabMenu data={mainTabs} selected={"FINNIFTY"} />
      </View>

      {/* Header end */}

      {/* MainSvg */}

      <DiscoverComponent navigation={navigation} />

      {/* MainSvg end */}
      <View style={{ flex: 1 }}>
        <HotDealsComponent navigation={navigation} />
      </View>

      {/* Products */}
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Products</Text>
            <Glassmorphism
              intensity={30}
              style={styles.productsGrid}
              padding={0}
            >
              {products.map((product, index) => (
                <ProductsComponent key={index} {...product} />
              ))}
            </Glassmorphism>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Commodities</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingRight: 16 }}
            >
              {commodities.map((commodity, index) => (
                <CommodityCardComponents key={index} {...commodity} />
              ))}
            </ScrollView>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Market Movers</Text>
            <MarketMoversComponents overs data={marketMovers} />
          </View>
          {/*  */}
          <View style={{ marginBottom: "15%" }} />
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#121212",
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 16,
  },
  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: 250,
    boxShadow: "none",
    backgroundColor: "#00000000",
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 44,
    marginTop: "10%",
  },
  topBar2: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 44,
    marginTop: 20,
    width: "100%",
    backgroundColor: "#00000000",
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
});

export default GradientHOC(HomeScreen);
