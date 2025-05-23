import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Svg, {
  Circle,
  ClipPath,
  Defs,
  G,
  Mask,
  Path,
  Pattern,
  RadialGradient,
  LinearGradient as LinearGradientSVG,
  Rect,
  Stop,
  Use,
} from "react-native-svg";

import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import Glassmorphism from "../../../components/Glassmorphism";
import HorizontalLine from "../../../components/HorizontalLine";
const HotDealsComponent = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      {/* What's Hot Section */}
      <View style={styles.section}>
        <Text style={styles.title}>What's Hot?</Text>
        <Text style={styles.subtitle}>
          These stocks are gaining in today's market {"\n"} condition. Do you
          hold them?
        </Text>

        <TouchableOpacity onPress={() => {}} style={[styles.button]}>
          <LinearGradient
            colors={["#302e2e47", "#ffffff47"]}
            style={[styles.linearGradient]}
          >
            <Text style={[styles.text]}>Check Top Gainers</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Market Overview */}

      <MarketOverview navigation={navigation} />
      {/* Superstar Users */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Superstar Users</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SuperStarUserScreen");
            }}
          >
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>
        <ProfileCard navigation={navigation} />
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Stocks picked for you</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("StocksListScreen");
            }}
          >
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>
        <BestStockPickForYou navigation={navigation} />
      </View>
    </ScrollView>
    // <View
    //   style={{
    //     justifyContent: "center",
    //     alignItems: "center",
    //     marginVertical: "auto",
    //   }}
    // >
    //   <MainContainer />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"#000"
  },
  section: {
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    lineHeight: 17.07,
    marginBottom: 15,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 12,
    color: "#FFFFFF",
    marginBottom: 20,
    textAlign: "center",
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.05)",
  },
  cardMini: {
    borderRadius: 15,
    flexDirection: "row",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  openText: {
    color: "#4CAF50",
    fontSize: 14,
  },
  marketData: {
    gap: 15,
  },
  indexContainer: {
    // flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.05)",
    height: 50,
    width: "100%",
    padding: 10,
    borderRadius: 8,
  },
  indexName: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "500",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  price: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "500",
  },
  change: {
    fontSize: 12,
  },
  positive: {
    color: "#4CAF50",
  },
  negative: {
    color: "#FF5252",
  },
  tradingInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.1)",
  },
  tradingColumn: {
    flex: 1,
  },
  tradingLabel: {
    color: "#AAAAAA",
    fontSize: 14,
    marginBottom: 4,
  },
  tradingTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#FFFFFF",
  },
  viewAll: {
    color: "#FFFFFF87",
    fontSize: 14,
  },
  usersScroll: {
    marginLeft: -20,
    marginRight: -20,
    paddingLeft: 20,
  },
  userCard: {
    width: 125,
    padding: 15,
    borderRadius: 15,
    marginRight: 15,
    alignItems: "center",

    height: 146,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 20,
    // marginBottom: 10,
    position: "absolute",
    top: -30,
    // right: 0,
    left: 30,
    zIndex: 10,
    borderWidth: 3,
    borderEndEndRadius: 20,
    borderStartEndRadius: 20,
    borderColor: "#000",
  },
  userName: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 4,
    lineHeight: 18,
    marginTop: "auto",
  },
  userRole: {
    color: "#AAAAAA",
    fontSize: 14,
    textAlign: "center",
  },
  // ------------
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    height: 40,
    zIndex: 99,
    marginHorizontal: "auto",
    width: "50%%",
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  linearGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 40,
    height: 50,
    elevation: 5,
    zIndex: 100,
    width: 160,
    // borderWidth: 1,
    borderColor: "#ffffff",
    overflow: "hidden",
  },
  text: {
    color: "#ffffff", // default text color
    fontSize: 13,
    fontWeight: "400",
  },
});

export default HotDealsComponent;

const MarketOverview = () => {
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <Glassmorphism height={180} padding={10}>
        <View style={styless.header}>
          <Text style={styless.headerText}>Market Overview</Text>
          <View style={styless.statusContainer}>
            <View style={styless.statusDot} />
            <Text style={styless.statusText}>Open</Text>
          </View>
        </View>

        <View style={styless.marketContainer}>
          {/* NIFTY 50 */}
          <View style={styless.marketItem}>
            <View style={styless.cardMiniContainer}>
              <View style={{ flexDirection: "row", gap: 5 }}>
                <Image
                  style={[styless.indicator, styless.positiveIndicator]}
                  source={require("../../../../assets/png/market-over-view-green-arrow.png")}
                />
              </View>

              <View>
                <View style={styless.marketHeader}>
                  <Text style={styless.marketTitle}>NIFTY 50</Text>
                </View>

                <View style={styless.lotMainContainer}>
                  <Text style={styless.priceText}>50,577.85</Text>
                  <View style={styless.changeContainer}>
                    <Text style={[styless.changeText, styless.positiveText]}>
                      +90.45
                    </Text>
                    <Text style={[styless.changeText, styless.positiveText]}>
                      (+0.18%)
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* BANKNIFTY */}

          <View style={styless.marketItem}>
            <View style={styless.cardMiniContainer}>
              <View>
                <Image
                  style={[styless.indicator, styless.positiveIndicator]}
                  source={require("../../../../assets/png/market-over-view-red-arrow.png")}
                />
              </View>

              <View>
                <View style={styless.marketHeader}>
                  <Text style={styless.marketTitle}>BANKNIFTY</Text>
                </View>

                <View style={styless.lotMainContainer}>
                  <Text style={styless.priceText}>40,577.85</Text>
                  <View style={styless.changeContainer}>
                    <Text style={[styless.changeText, styless.negativeText]}>
                      -90.45
                    </Text>
                    <Text style={[styless.changeText, styless.negativeText]}>
                      (-0.18%)
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <HorizontalLine />
        <View style={styless.footer}>
          <View style={styless.footerItem}>
            <Image
              style={{ height: 13, width: 13 }}
              source={require("../../../../assets/png/makeover-trendUp.png")}
            />
            <View style={{ flexDirection: "row" }}>
              <Text style={styless.footerTitle}>Gainers</Text>
              <Text style={styless.footerCountUp}>(50)</Text>
            </View>
          </View>
          <View style={styless.footerItem}>
            <Text style={styless.footerTitle}>Top NIFTY 50</Text>
          </View>
          <View style={styless.footerItem}>
            <Image
              style={{ height: 13, width: 13 }}
              source={require("../../../../assets/png/makeover-trendDown.png")}
            />
            <View style={{ flexDirection: "row" }}>
              <Text style={styless.footerTitle}>Losers</Text>
              <Text style={styless.footerCountDown}>(20)</Text>
            </View>
          </View>
        </View>
      </Glassmorphism>
    </View>
  );
};

const styless = StyleSheet.create({
  container: {
    backgroundColor: "#1C1C27",
    borderRadius: 16,
    padding: 16,
    width: "100%",
    // maxWidth: 400,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "400",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#4CAF50",
    marginRight: 4,
  },
  statusText: {
    color: "#4CAF50",
    fontSize: 12,
  },

  lotMainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    width: 140,
  },

  cardMiniContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingVertical: 10,
    paddingHorizontal: 3,
    borderRadius: 8,
    flexDirection: "row",
    gap: 6,
  },

  marketContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  marketItem: {
    flex: 1,
    paddingHorizontal: 8,
  },
  marketHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  marketTitle: {
    color: "#FFFFFF",
    fontSize: 12,
    // marginLeft: 8,
  },
  indicator: {
    width: 16,
    height: 36,
    borderRadius: 4,
  },
  positiveIndicator: {
    // backgroundColor: "#4CAF50",
  },
  negativeIndicator: {
    // backgroundColor: "#FF4D4F",
  },
  priceText: {
    color: "#4CAF50",
    fontSize: 10,
    fontWeight: "400",
    marginBottom: 4,
  },
  changeContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  changeText: {
    fontSize: 8,
    marginRight: 4,
  },
  positiveText: {
    color: "#4CAF50",
  },
  negativeText: {
    color: "#FF4D4F",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    // borderTopWidth: 1,
    // borderTopColor: "rgba(255, 255, 255, 0.1)",
    paddingTop: 16,
  },
  footerItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  footerTitle: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "500",
  },
  footerCountUp: {
    color: "#2A9D7B",
    fontSize: 12,
    marginLeft: 4,
  },
  footerCountDown: {
    color: "#D11515",
    fontSize: 12,
    marginLeft: 4,
  },
});

const CARD_WIDTH = Dimensions.get("window").width * 0.85;

function ProfileCard({ navigation }) {
  return (
    <View style={stylesSuperUser.container}>
      <View style={stylesSuperUser.cardWrapper}>
        {/* Avatar that overlaps the card */}
        <Glassmorphism style={stylesSuperUser.avatarContainer} padding={0}>
          <Image
            source={require("../../../../assets/png/super-profile-icon.png")}
            style={stylesSuperUser.avatar}
          />
        </Glassmorphism>

        {/* Main card with glass effect */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SuperStarUserScreen");
          }}
        >
          <Glassmorphism
            intensity={50}
            style={stylesSuperUser.card}
            height={145}
          >
            <View style={stylesSuperUser.contentContainer}>
              <Text style={stylesSuperUser.name}>Shreya Chadda</Text>
              <View
                style={{ flexDirection: "row", gap: 6, alignItems: "center" }}
              >
                <Text style={stylesSuperUser.subtitle}>Lorem</Text>
                <Image
                  style={stylesSuperUser.verticalLine}
                  source={require("../../../../assets/png/verticalLine.png")}
                />
                <Text style={stylesSuperUser.subtitle}>Ipsum</Text>
              </View>
            </View>
          </Glassmorphism>
        </TouchableOpacity>
      </View>

      <View style={stylesSuperUser.cardWrapper}>
        {/* Avatar that overlaps the card */}
        <Glassmorphism style={stylesSuperUser.avatarContainer} padding={0}>
          <Image
            source={require("../../../../assets/png/super-profile-icon.png")}
            style={stylesSuperUser.avatar}
          />
        </Glassmorphism>

        {/* Main card with glass effect */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SuperStarUserScreen");
          }}
        >
          <Glassmorphism
            intensity={50}
            style={stylesSuperUser.card}
            height={145}
          >
            <View style={stylesSuperUser.contentContainer}>
              <Text style={stylesSuperUser.name}>Shreya Chadda</Text>
              <View
                style={{ flexDirection: "row", gap: 6, alignItems: "center" }}
              >
                <Text style={stylesSuperUser.subtitle}>Lorem</Text>
                <Image
                  style={stylesSuperUser.verticalLine}
                  source={require("../../../../assets/png/verticalLine.png")}
                />
                <Text style={stylesSuperUser.subtitle}>Ipsum</Text>
              </View>
            </View>
          </Glassmorphism>
        </TouchableOpacity>
      </View>
      <View style={stylesSuperUser.cardWrapper}>
        {/* Avatar that overlaps the card */}
        <Glassmorphism style={stylesSuperUser.avatarContainer} padding={0}>
          <Image
            source={require("../../../../assets/png/super-profile-icon.png")}
            style={stylesSuperUser.avatar}
          />
        </Glassmorphism>

        {/* Main card with glass effect */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SuperStarUserScreen");
          }}
        >
          <Glassmorphism
            intensity={50}
            style={stylesSuperUser.card}
            height={145}
          >
            <View style={stylesSuperUser.contentContainer}>
              <Text style={stylesSuperUser.name}>Shreya Chadda</Text>
              <View
                style={{ flexDirection: "row", gap: 6, alignItems: "center" }}
              >
                <Text style={stylesSuperUser.subtitle}>Lorem</Text>
                <Image
                  style={stylesSuperUser.verticalLine}
                  source={require("../../../../assets/png/verticalLine.png")}
                />
                <Text style={stylesSuperUser.subtitle}>Ipsum</Text>
              </View>
            </View>
          </Glassmorphism>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const stylesSuperUser = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  cardWrapper: {
    alignItems: "center",
    width: 115,
  },
  card: {
    width: "100%",
    // backgroundColor: "#00000000",
    borderRadius: 20,
    overflow: "hidden",
    paddingTop: 45, // Space for overlapping avatar
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    zIndex: 0,
    elevation: 0,

    boxShadow: `rgba(255, 255, 255, 1) 0px 10px 30px -20px inset, rgba(0, 0, 0, 0.3) 0px 10px 10px 0px inset`,
    // boxShadow: `0 0px 30px 10px rgba(255, 255, 255, 1), 0 0px 60px 20px rgba(255, 255, 255, 1), 0 0px 120px 80px rgba(255, 255, 255, 0.5)`,

    overflow: "hidden",
  },
  avatarContainer: {
    width: 65,
    height: 65,
    borderRadius: 35,
    position: "absolute",
    top: -35,
    zIndex: 10,
    // padding: 2,
    // borderWidth: 5,
    borderColor: "#00000030",
    // boxShadow: `0 0px 0px 1px #00000001, 0 0px 1px 1px #00000001, 0 0px 1px 10px #00000002`,
    paddingHorizontal: 5,
    paddingTop: 6,
    paddingBottom: 6,
    boxShadow: "none",
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 35,
    // aspectRatio: 1,
    overflow: "hidden",
    // objectFit:"contain",
    zIndex: 5,

    backgroundColor: "#000",
  },
  contentContainer: {
    alignItems: "center",
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 10,
    color: "rgba(255, 255, 255, 0.6)",
  },

  verticalLine: {
    height: 20,
    width: 1,
  },
});

const BestStockPickForYou = ({ navigation }) => {
  const bestStockPickForYou = [{}, {}, {}];
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {bestStockPickForYou?.map((b, idx) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("StocksListScreen");
          }}
          key={idx}
          style={{ backgroundColor: "#00000000", marginRight: 10 }}
        >
          <Svg
            width={203}
            height={102}
            viewBox="0 0 203 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <G filter="url(#filter0_bi_239_6786)">
              <Path
                d="M0 12C0 5.37258 5.37258 0 12 0H142.349C146.487 0 150.332 2.13144 152.525 5.64001L165.475 26.36C167.668 29.8686 171.513 32 175.651 32H188C194.627 32 200 37.3726 200 44V90C200 96.6274 194.627 102 188 102H12C5.37258 102 0 96.6274 0 90V12Z"
                fill="#111111"
                fillOpacity={0.16}
              />
              <Path
                d="M0 12C0 5.37258 5.37258 0 12 0H142.349C146.487 0 150.332 2.13144 152.525 5.64001L165.475 26.36C167.668 29.8686 171.513 32 175.651 32H188C194.627 32 200 37.3726 200 44V90C200 96.6274 194.627 102 188 102H12C5.37258 102 0 96.6274 0 90V12Z"
                fill="url(#paint0_linear_239_6786)"
                fillOpacity={0.1}
              />
              <Path
                d="M0.5 12C0.5 5.64873 5.64873 0.5 12 0.5H142.349C146.314 0.5 150 2.54263 152.101 5.90501L165.051 26.625C167.335 30.2798 171.341 32.5 175.651 32.5H188C194.351 32.5 199.5 37.6487 199.5 44V90C199.5 96.3513 194.351 101.5 188 101.5H12C5.64873 101.5 0.5 96.3513 0.5 90V12Z"
                stroke="url(#paint1_linear_239_6786)"
              />
            </G>
            <View>
              <View style={stylesBestStockPickForYou.content}>
                <View style={stylesBestStockPickForYou.leftSection}>
                  {/* Logo and Company Name */}
                  <View style={stylesBestStockPickForYou.logoContainer}>
                    <Image
                      source={{
                        uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-j27dCmq5yzT0SGLfqYDxujtBcP2gZz.png",
                      }}
                      style={stylesBestStockPickForYou.logo}
                    />
                  </View>
                  <View>
                    <Text style={stylesBestStockPickForYou.companyName}>
                      BPCL
                    </Text>
                    <View style={stylesBestStockPickForYou.exchangeInfo}>
                      <Image
                        style={stylesBestStockPickForYou.SuitcaseSimple}
                        source={require("../../../../assets/png/SuitcaseSimple.png")}
                      />
                      <Text style={stylesBestStockPickForYou.exchangeText}>
                        12 • NSE
                      </Text>
                    </View>
                  </View>
                </View>
                {/* Price Section */}
              </View>
              <HorizontalLine
                imageLine={require("../../../../assets/png/Line-geen.png")}
              />
              <View style={stylesBestStockPickForYou.rightSection}>
                <Text style={stylesBestStockPickForYou.change}>
                  -4.90 (-1.45%)
                </Text>
                <Text style={stylesBestStockPickForYou.price}>333.40</Text>
              </View>
            </View>
            <G filter="url(#filter1_d_239_6786)">
              <Rect
                x={167.5}
                y={0.5}
                width={23}
                height={23}
                rx={11.5}
                stroke="url(#paint3_linear_239_6786)"
                shapeRendering="crispEdges"
              />
            </G>
            <Path
              d="M183.751 8.00004V14.5004C183.751 14.6993 183.671 14.8901 183.531 15.0308C183.39 15.1714 183.199 15.2504 183 15.2504C182.802 15.2504 182.611 15.1714 182.47 15.0308C182.329 14.8901 182.25 14.6993 182.25 14.5004V9.81264L175.531 16.5311C175.39 16.672 175.199 16.7512 174.999 16.7512C174.8 16.7512 174.609 16.672 174.468 16.5311C174.327 16.3902 174.248 16.1991 174.248 15.9999C174.248 15.8006 174.327 15.6095 174.468 15.4686L181.188 8.75008H176.5C176.301 8.75008 176.11 8.67106 175.97 8.5304C175.829 8.38974 175.75 8.19897 175.75 8.00004C175.75 7.80112 175.829 7.61034 175.97 7.46968C176.11 7.32902 176.301 7.25 176.5 7.25H183C183.199 7.25 183.39 7.32902 183.531 7.46968C183.671 7.61034 183.751 7.80112 183.751 8.00004Z"
              fill="white"
            />

            <Defs>
              <Pattern
                id="pattern0_239_6786"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
              >
                <Use xlinkHref="#image0_239_6786" transform="scale(0.00125)" />
              </Pattern>
              <LinearGradientSVG
                id="paint0_linear_239_6786"
                x1={100}
                y1={0}
                x2={100}
                y2={102}
                gradientUnits="userSpaceOnUse"
              >
                <Stop stopOpacity={0} />
                <Stop offset={1} stopColor="#2A9D7B" />
              </LinearGradientSVG>
              <LinearGradientSVG
                id="paint1_linear_239_6786"
                x1={-4.5}
                y1={0.00000172782}
                x2={202}
                y2={104.5}
                gradientUnits="userSpaceOnUse"
              >
                <Stop stopColor="white" stopOpacity={0.1} />
                <Stop offset={1} stopColor="#2A9D7B" />
              </LinearGradientSVG>
              <LinearGradientSVG
                id="paint2_linear_239_6786"
                x1={167.114}
                y1={68}
                x2={27.9091}
                y2={68}
                gradientUnits="userSpaceOnUse"
              >
                <Stop stopColor="#2A9D7B" stopOpacity={0.1} />
                <Stop offset={0.472967} stopColor="#2A9D7B" />
                <Stop offset={1} stopColor="#2A9D7B" stopOpacity={0.1} />
              </LinearGradientSVG>
              <LinearGradientSVG
                id="paint3_linear_239_6786"
                x1={166.46}
                y1={-9.10321e-7}
                x2={197.834}
                y2={8.16288}
                gradientUnits="userSpaceOnUse"
              >
                <Stop stopColor="white" stopOpacity={0.5} />
                <Stop offset={1} stopColor="#2A9D7B" />
              </LinearGradientSVG>
            </Defs>
          </Svg>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const stylesBestStockPickForYou = StyleSheet.create({
  container: {
    backgroundColor: "#1A1A1A",
    borderRadius: 12,
    padding: 16,
    width: "100%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    flexDirection: "row",
    padding: 10,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  SuitcaseSimple: {
    height: 10,
    width: 10,
    color: "#666",
  },
  logoContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    overflow: "hidden",
    backgroundColor: "#2A2A2A",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  companyName: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
  },
  exchangeInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    gap: 5,
  },
  exchangeText: {
    color: "#666",
    fontSize: 10,
  },
  rightSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    // alignItems: "flex-end",
    // marginRight: 16,
    paddingVertical: "auto",
    alignItems: "center",
    marginTop: 10,
  },
  price: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "400",
    color: "#2A9D7B",
  },
  change: {
    color: "#A1A1A1",
    fontSize: 12,
    marginTop: 4,
  },
  arrow: {
    height: 30,
    width: 30,
  },
});

// const MainContainer = () => {
//   return (
//     <Svg
//       width={300}
//       height={300}
//       viewBox="0 0 359 359"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//       // {...props}
//     >
//       <G clipPath="url(#clip0_249_3716)">
//         <Path
//           fillRule="evenodd"
//           clipRule="evenodd"
//           d="M317.167 209.65C317.468 208.588 316.834 207.49 315.767 207.204L238.05 186.38C238.047 186.39 238.045 186.4 238.042 186.41C230.575 214.295 201.933 230.842 174.068 223.371C146.202 215.899 129.666 187.238 137.132 159.354C144.599 131.469 173.241 114.922 201.106 122.393C212.89 125.553 222.648 132.502 229.422 141.579L293.922 93.3772C294.806 92.7162 294.988 91.4622 294.315 90.5873C276.144 66.9829 250.651 50.054 221.81 42.4801C192.323 34.7368 161.081 37.2295 133.188 49.5508C105.295 61.8721 82.4012 83.2933 68.2477 110.314C54.0942 137.334 49.518 168.356 55.2671 198.31C61.0161 228.264 76.7503 255.378 99.8984 275.222C123.047 295.065 152.24 306.465 182.707 307.557C213.175 308.65 243.115 299.371 267.634 281.237C291.618 263.5 309.028 238.316 317.167 209.65Z"
//           fill="#5C5C5C"
//         />
//         <Path
//           d="M209.93 59.07C209.283 59.07 208.693 58.92 208.16 58.62C207.627 58.3133 207.203 57.89 206.89 57.35C206.583 56.8033 206.43 56.19 206.43 55.51C206.43 54.83 206.583 54.22 206.89 53.68C207.203 53.1333 207.627 52.71 208.16 52.41C208.693 52.1033 209.283 51.95 209.93 51.95C210.583 51.95 211.177 52.1033 211.71 52.41C212.243 52.71 212.663 53.13 212.97 53.67C213.277 54.21 213.43 54.8233 213.43 55.51C213.43 56.1967 213.277 56.81 212.97 57.35C212.663 57.89 212.243 58.3133 211.71 58.62C211.177 58.92 210.583 59.07 209.93 59.07ZM209.93 58.28C210.417 58.28 210.853 58.1667 211.24 57.94C211.633 57.7133 211.94 57.39 212.16 56.97C212.387 56.55 212.5 56.0633 212.5 55.51C212.5 54.95 212.387 54.4633 212.16 54.05C211.94 53.63 211.637 53.3067 211.25 53.08C210.863 52.8533 210.423 52.74 209.93 52.74C209.437 52.74 208.997 52.8533 208.61 53.08C208.223 53.3067 207.917 53.63 207.69 54.05C207.47 54.4633 207.36 54.95 207.36 55.51C207.36 56.0633 207.47 56.55 207.69 56.97C207.917 57.39 208.223 57.7133 208.61 57.94C209.003 58.1667 209.443 58.28 209.93 58.28ZM215.541 54.53C215.721 54.2167 215.988 53.9567 216.341 53.75C216.701 53.5367 217.118 53.43 217.591 53.43C218.078 53.43 218.518 53.5467 218.911 53.78C219.311 54.0133 219.625 54.3433 219.851 54.77C220.078 55.19 220.191 55.68 220.191 56.24C220.191 56.7933 220.078 57.2867 219.851 57.72C219.625 58.1533 219.311 58.49 218.911 58.73C218.518 58.97 218.078 59.09 217.591 59.09C217.125 59.09 216.711 58.9867 216.351 58.78C215.998 58.5667 215.728 58.3033 215.541 57.99V61.6H214.631V53.52H215.541V54.53ZM219.261 56.24C219.261 55.8267 219.178 55.4667 219.011 55.16C218.845 54.8533 218.618 54.62 218.331 54.46C218.051 54.3 217.741 54.22 217.401 54.22C217.068 54.22 216.758 54.3033 216.471 54.47C216.191 54.63 215.965 54.8667 215.791 55.18C215.625 55.4867 215.541 55.8433 215.541 56.25C215.541 56.6633 215.625 57.0267 215.791 57.34C215.965 57.6467 216.191 57.8833 216.471 58.05C216.758 58.21 217.068 58.29 217.401 58.29C217.741 58.29 218.051 58.21 218.331 58.05C218.618 57.8833 218.845 57.6467 219.011 57.34C219.178 57.0267 219.261 56.66 219.261 56.24ZM226.389 56.05C226.389 56.2233 226.379 56.4067 226.359 56.6H221.979C222.012 57.14 222.196 57.5633 222.529 57.87C222.869 58.17 223.279 58.32 223.759 58.32C224.152 58.32 224.479 58.23 224.739 58.05C225.006 57.8633 225.192 57.6167 225.299 57.31H226.279C226.132 57.8367 225.839 58.2667 225.399 58.6C224.959 58.9267 224.412 59.09 223.759 59.09C223.239 59.09 222.772 58.9733 222.359 58.74C221.952 58.5067 221.632 58.1767 221.399 57.75C221.166 57.3167 221.049 56.8167 221.049 56.25C221.049 55.6833 221.162 55.1867 221.389 54.76C221.616 54.3333 221.932 54.0067 222.339 53.78C222.752 53.5467 223.226 53.43 223.759 53.43C224.279 53.43 224.739 53.5433 225.139 53.77C225.539 53.9967 225.846 54.31 226.059 54.71C226.279 55.1033 226.389 55.55 226.389 56.05ZM225.449 55.86C225.449 55.5133 225.372 55.2167 225.219 54.97C225.066 54.7167 224.856 54.5267 224.589 54.4C224.329 54.2667 224.039 54.2 223.719 54.2C223.259 54.2 222.866 54.3467 222.539 54.64C222.219 54.9333 222.036 55.34 221.989 55.86H225.449ZM230.26 53.42C230.927 53.42 231.467 53.6233 231.88 54.03C232.294 54.43 232.5 55.01 232.5 55.77V59H231.6V55.9C231.6 55.3533 231.464 54.9367 231.19 54.65C230.917 54.3567 230.544 54.21 230.07 54.21C229.59 54.21 229.207 54.36 228.92 54.66C228.64 54.96 228.5 55.3967 228.5 55.97V59H227.59V53.52H228.5V54.3C228.68 54.02 228.924 53.8033 229.23 53.65C229.544 53.4967 229.887 53.42 230.26 53.42Z"
//           fill="#A1A1A1"
//         />
//         <Path
//           d="M193.552 74.176V73.144L197.584 67.36H199.24V72.988H200.356V74.176H199.24V76H197.896V74.176H193.552ZM197.956 68.752L195.124 72.988H197.956V68.752ZM203.194 73.624C203.274 74.024 203.446 74.328 203.71 74.536C203.974 74.744 204.33 74.848 204.778 74.848C205.346 74.848 205.762 74.624 206.026 74.176C206.29 73.728 206.422 72.964 206.422 71.884C206.23 72.156 205.958 72.368 205.606 72.52C205.262 72.664 204.886 72.736 204.478 72.736C203.958 72.736 203.486 72.632 203.062 72.424C202.638 72.208 202.302 71.892 202.054 71.476C201.814 71.052 201.694 70.54 201.694 69.94C201.694 69.06 201.95 68.36 202.462 67.84C202.982 67.312 203.694 67.048 204.598 67.048C205.686 67.048 206.458 67.412 206.914 68.14C207.378 68.86 207.61 69.968 207.61 71.464C207.61 72.496 207.522 73.34 207.346 73.996C207.178 74.652 206.882 75.148 206.458 75.484C206.034 75.82 205.446 75.988 204.694 75.988C203.838 75.988 203.178 75.764 202.714 75.316C202.25 74.868 201.99 74.304 201.934 73.624H203.194ZM204.718 71.584C205.198 71.584 205.574 71.436 205.846 71.14C206.126 70.836 206.266 70.436 206.266 69.94C206.266 69.388 206.118 68.96 205.822 68.656C205.534 68.344 205.138 68.188 204.634 68.188C204.13 68.188 203.73 68.348 203.434 68.668C203.146 68.98 203.002 69.392 203.002 69.904C203.002 70.392 203.142 70.796 203.422 71.116C203.71 71.428 204.142 71.584 204.718 71.584ZM214.747 68.428H210.727V70.816C210.895 70.592 211.143 70.404 211.471 70.252C211.807 70.1 212.163 70.024 212.539 70.024C213.211 70.024 213.755 70.168 214.171 70.456C214.595 70.744 214.895 71.108 215.071 71.548C215.255 71.988 215.347 72.452 215.347 72.94C215.347 73.532 215.231 74.06 214.999 74.524C214.775 74.98 214.435 75.34 213.979 75.604C213.531 75.868 212.979 76 212.323 76C211.451 76 210.751 75.784 210.223 75.352C209.695 74.92 209.379 74.348 209.275 73.636H210.607C210.695 74.012 210.891 74.312 211.195 74.536C211.499 74.752 211.879 74.86 212.335 74.86C212.903 74.86 213.327 74.688 213.607 74.344C213.895 74 214.039 73.544 214.039 72.976C214.039 72.4 213.895 71.96 213.607 71.656C213.319 71.344 212.895 71.188 212.335 71.188C211.943 71.188 211.611 71.288 211.339 71.488C211.075 71.68 210.883 71.944 210.763 72.28H209.467V67.228H214.747V68.428ZM216.747 69.412C216.795 68.668 217.079 68.088 217.599 67.672C218.127 67.256 218.799 67.048 219.615 67.048C220.175 67.048 220.659 67.148 221.067 67.348C221.475 67.548 221.783 67.82 221.991 68.164C222.199 68.508 222.303 68.896 222.303 69.328C222.303 69.824 222.171 70.248 221.907 70.6C221.643 70.952 221.327 71.188 220.959 71.308V71.356C221.431 71.5 221.799 71.764 222.063 72.148C222.327 72.524 222.459 73.008 222.459 73.6C222.459 74.072 222.351 74.492 222.135 74.86C221.919 75.228 221.599 75.52 221.175 75.736C220.751 75.944 220.243 76.048 219.651 76.048C218.787 76.048 218.075 75.828 217.515 75.388C216.963 74.94 216.667 74.3 216.627 73.468H217.947C217.979 73.892 218.143 74.24 218.439 74.512C218.735 74.776 219.135 74.908 219.639 74.908C220.127 74.908 220.503 74.776 220.767 74.512C221.031 74.24 221.163 73.892 221.163 73.468C221.163 72.908 220.983 72.512 220.623 72.28C220.271 72.04 219.727 71.92 218.991 71.92H218.679V70.792H219.003C219.651 70.784 220.143 70.676 220.479 70.468C220.823 70.26 220.995 69.932 220.995 69.484C220.995 69.1 220.871 68.796 220.623 68.572C220.375 68.34 220.023 68.224 219.567 68.224C219.119 68.224 218.771 68.34 218.523 68.572C218.275 68.796 218.127 69.076 218.079 69.412H216.747ZM224.652 74.14C225.42 73.476 226.024 72.932 226.464 72.508C226.912 72.076 227.284 71.628 227.58 71.164C227.876 70.7 228.024 70.236 228.024 69.772C228.024 69.292 227.908 68.916 227.676 68.644C227.452 68.372 227.096 68.236 226.608 68.236C226.136 68.236 225.768 68.388 225.504 68.692C225.248 68.988 225.112 69.388 225.096 69.892H223.776C223.8 68.98 224.072 68.284 224.592 67.804C225.12 67.316 225.788 67.072 226.596 67.072C227.468 67.072 228.148 67.312 228.636 67.792C229.132 68.272 229.38 68.912 229.38 69.712C229.38 70.288 229.232 70.844 228.936 71.38C228.648 71.908 228.3 72.384 227.892 72.808C227.492 73.224 226.98 73.708 226.356 74.26L225.816 74.74H229.62V75.88H223.788V74.884L224.652 74.14ZM231.554 76.084C231.306 76.084 231.098 76 230.93 75.832C230.762 75.664 230.678 75.456 230.678 75.208C230.678 74.96 230.762 74.752 230.93 74.584C231.098 74.416 231.306 74.332 231.554 74.332C231.794 74.332 231.998 74.416 232.166 74.584C232.334 74.752 232.418 74.96 232.418 75.208C232.418 75.456 232.334 75.664 232.166 75.832C231.998 76 231.794 76.084 231.554 76.084ZM233.716 71.512C233.716 70.128 233.948 69.048 234.412 68.272C234.884 67.488 235.692 67.096 236.836 67.096C237.98 67.096 238.784 67.488 239.248 68.272C239.72 69.048 239.956 70.128 239.956 71.512C239.956 72.912 239.72 74.008 239.248 74.8C238.784 75.584 237.98 75.976 236.836 75.976C235.692 75.976 234.884 75.584 234.412 74.8C233.948 74.008 233.716 72.912 233.716 71.512ZM238.612 71.512C238.612 70.864 238.568 70.316 238.48 69.868C238.4 69.42 238.232 69.056 237.976 68.776C237.72 68.488 237.34 68.344 236.836 68.344C236.332 68.344 235.952 68.488 235.696 68.776C235.44 69.056 235.268 69.42 235.18 69.868C235.1 70.316 235.06 70.864 235.06 71.512C235.06 72.184 235.1 72.748 235.18 73.204C235.26 73.66 235.428 74.028 235.684 74.308C235.948 74.588 236.332 74.728 236.836 74.728C237.34 74.728 237.72 74.588 237.976 74.308C238.24 74.028 238.412 73.66 238.492 73.204C238.572 72.748 238.612 72.184 238.612 71.512ZM241.404 71.512C241.404 70.128 241.636 69.048 242.1 68.272C242.572 67.488 243.38 67.096 244.524 67.096C245.668 67.096 246.472 67.488 246.936 68.272C247.408 69.048 247.644 70.128 247.644 71.512C247.644 72.912 247.408 74.008 246.936 74.8C246.472 75.584 245.668 75.976 244.524 75.976C243.38 75.976 242.572 75.584 242.1 74.8C241.636 74.008 241.404 72.912 241.404 71.512ZM246.3 71.512C246.3 70.864 246.256 70.316 246.168 69.868C246.088 69.42 245.92 69.056 245.664 68.776C245.408 68.488 245.028 68.344 244.524 68.344C244.02 68.344 243.64 68.488 243.384 68.776C243.128 69.056 242.956 69.42 242.868 69.868C242.788 70.316 242.748 70.864 242.748 71.512C242.748 72.184 242.788 72.748 242.868 73.204C242.948 73.66 243.116 74.028 243.372 74.308C243.636 74.588 244.02 74.728 244.524 74.728C245.028 74.728 245.408 74.588 245.664 74.308C245.928 74.028 246.1 73.66 246.18 73.204C246.26 72.748 246.3 72.184 246.3 71.512Z"
//           fill="white"
//         />
//         <Path
//           d="M200.43 93.07C200.43 93.65 200.23 94.1333 199.83 94.52C199.437 94.9 198.833 95.09 198.02 95.09H196.68V98H195.77V91.03H198.02C198.807 91.03 199.403 91.22 199.81 91.6C200.223 91.98 200.43 92.47 200.43 93.07ZM198.02 94.34C198.527 94.34 198.9 94.23 199.14 94.01C199.38 93.79 199.5 93.4767 199.5 93.07C199.5 92.21 199.007 91.78 198.02 91.78H196.68V94.34H198.02ZM202.471 93.41C202.631 93.0967 202.858 92.8533 203.151 92.68C203.451 92.5067 203.814 92.42 204.241 92.42V93.36H204.001C202.981 93.36 202.471 93.9133 202.471 95.02V98H201.561V92.52H202.471V93.41ZM210.291 95.05C210.291 95.2233 210.281 95.4067 210.261 95.6H205.881C205.915 96.14 206.098 96.5633 206.431 96.87C206.771 97.17 207.181 97.32 207.661 97.32C208.055 97.32 208.381 97.23 208.641 97.05C208.908 96.8633 209.095 96.6167 209.201 96.31H210.182C210.035 96.8367 209.741 97.2667 209.301 97.6C208.861 97.9267 208.315 98.09 207.661 98.09C207.141 98.09 206.675 97.9733 206.261 97.74C205.855 97.5067 205.535 97.1767 205.301 96.75C205.068 96.3167 204.951 95.8167 204.951 95.25C204.951 94.6833 205.065 94.1867 205.291 93.76C205.518 93.3333 205.835 93.0067 206.241 92.78C206.655 92.5467 207.128 92.43 207.661 92.43C208.181 92.43 208.641 92.5433 209.041 92.77C209.441 92.9967 209.748 93.31 209.961 93.71C210.181 94.1033 210.291 94.55 210.291 95.05ZM209.351 94.86C209.351 94.5133 209.275 94.2167 209.121 93.97C208.968 93.7167 208.758 93.5267 208.491 93.4C208.231 93.2667 207.941 93.2 207.621 93.2C207.161 93.2 206.768 93.3467 206.441 93.64C206.121 93.9333 205.938 94.34 205.891 94.86H209.351ZM213.533 97.16L215.233 92.52H216.203L214.053 98H212.993L210.843 92.52H211.823L213.533 97.16ZM219.424 94.51C219.424 93.83 219.577 93.22 219.884 92.68C220.191 92.1333 220.607 91.7067 221.134 91.4C221.667 91.0933 222.257 90.94 222.904 90.94C223.664 90.94 224.327 91.1233 224.894 91.49C225.461 91.8567 225.874 92.3767 226.134 93.05H225.044C224.851 92.63 224.571 92.3067 224.204 92.08C223.844 91.8533 223.411 91.74 222.904 91.74C222.417 91.74 221.981 91.8533 221.594 92.08C221.207 92.3067 220.904 92.63 220.684 93.05C220.464 93.4633 220.354 93.95 220.354 94.51C220.354 95.0633 220.464 95.55 220.684 95.97C220.904 96.3833 221.207 96.7033 221.594 96.93C221.981 97.1567 222.417 97.27 222.904 97.27C223.411 97.27 223.844 97.16 224.204 96.94C224.571 96.7133 224.851 96.39 225.044 95.97H226.134C225.874 96.6367 225.461 97.1533 224.894 97.52C224.327 97.88 223.664 98.06 222.904 98.06C222.257 98.06 221.667 97.91 221.134 97.61C220.607 97.3033 220.191 96.88 219.884 96.34C219.577 95.8 219.424 95.19 219.424 94.51ZM228.399 90.6V98H227.489V90.6H228.399ZM232.34 98.09C231.826 98.09 231.36 97.9733 230.94 97.74C230.526 97.5067 230.2 97.1767 229.96 96.75C229.726 96.3167 229.61 95.8167 229.61 95.25C229.61 94.69 229.73 94.1967 229.97 93.77C230.216 93.3367 230.55 93.0067 230.97 92.78C231.39 92.5467 231.86 92.43 232.38 92.43C232.9 92.43 233.37 92.5467 233.79 92.78C234.21 93.0067 234.54 93.3333 234.78 93.76C235.026 94.1867 235.15 94.6833 235.15 95.25C235.15 95.8167 235.023 96.3167 234.77 96.75C234.523 97.1767 234.186 97.5067 233.76 97.74C233.333 97.9733 232.86 98.09 232.34 98.09ZM232.34 97.29C232.666 97.29 232.973 97.2133 233.26 97.06C233.546 96.9067 233.776 96.6767 233.95 96.37C234.13 96.0633 234.22 95.69 234.22 95.25C234.22 94.81 234.133 94.4367 233.96 94.13C233.786 93.8233 233.56 93.5967 233.28 93.45C233 93.2967 232.696 93.22 232.37 93.22C232.036 93.22 231.73 93.2967 231.45 93.45C231.176 93.5967 230.956 93.8233 230.79 94.13C230.623 94.4367 230.54 94.81 230.54 95.25C230.54 95.6967 230.62 96.0733 230.78 96.38C230.946 96.6867 231.166 96.9167 231.44 97.07C231.713 97.2167 232.013 97.29 232.34 97.29ZM238.286 98.09C237.866 98.09 237.49 98.02 237.156 97.88C236.823 97.7333 236.56 97.5333 236.366 97.28C236.173 97.02 236.066 96.7233 236.046 96.39H236.986C237.013 96.6633 237.14 96.8867 237.366 97.06C237.6 97.2333 237.903 97.32 238.276 97.32C238.623 97.32 238.896 97.2433 239.096 97.09C239.296 96.9367 239.396 96.7433 239.396 96.51C239.396 96.27 239.29 96.0933 239.076 95.98C238.863 95.86 238.533 95.7433 238.086 95.63C237.68 95.5233 237.346 95.4167 237.086 95.31C236.833 95.1967 236.613 95.0333 236.426 94.82C236.246 94.6 236.156 94.3133 236.156 93.96C236.156 93.68 236.24 93.4233 236.406 93.19C236.573 92.9567 236.81 92.7733 237.116 92.64C237.423 92.5 237.773 92.43 238.166 92.43C238.773 92.43 239.263 92.5833 239.636 92.89C240.01 93.1967 240.21 93.6167 240.236 94.15H239.326C239.306 93.8633 239.19 93.6333 238.976 93.46C238.77 93.2867 238.49 93.2 238.136 93.2C237.81 93.2 237.55 93.27 237.356 93.41C237.163 93.55 237.066 93.7333 237.066 93.96C237.066 94.14 237.123 94.29 237.236 94.41C237.356 94.5233 237.503 94.6167 237.676 94.69C237.856 94.7567 238.103 94.8333 238.416 94.92C238.81 95.0267 239.13 95.1333 239.376 95.24C239.623 95.34 239.833 95.4933 240.006 95.7C240.186 95.9067 240.28 96.1767 240.286 96.51C240.286 96.81 240.203 97.08 240.036 97.32C239.87 97.56 239.633 97.75 239.326 97.89C239.026 98.0233 238.68 98.09 238.286 98.09ZM246.571 95.05C246.571 95.2233 246.561 95.4067 246.541 95.6H242.161C242.194 96.14 242.377 96.5633 242.711 96.87C243.051 97.17 243.461 97.32 243.941 97.32C244.334 97.32 244.661 97.23 244.921 97.05C245.187 96.8633 245.374 96.6167 245.481 96.31H246.461C246.314 96.8367 246.021 97.2667 245.581 97.6C245.141 97.9267 244.594 98.09 243.941 98.09C243.421 98.09 242.954 97.9733 242.541 97.74C242.134 97.5067 241.814 97.1767 241.581 96.75C241.347 96.3167 241.231 95.8167 241.231 95.25C241.231 94.6833 241.344 94.1867 241.571 93.76C241.797 93.3333 242.114 93.0067 242.521 92.78C242.934 92.5467 243.407 92.43 243.941 92.43C244.461 92.43 244.921 92.5433 245.321 92.77C245.721 92.9967 246.027 93.31 246.241 93.71C246.461 94.1033 246.571 94.55 246.571 95.05ZM245.631 94.86C245.631 94.5133 245.554 94.2167 245.401 93.97C245.247 93.7167 245.037 93.5267 244.771 93.4C244.511 93.2667 244.221 93.2 243.901 93.2C243.441 93.2 243.047 93.3467 242.721 93.64C242.401 93.9333 242.217 94.34 242.171 94.86H245.631Z"
//           fill="#A1A1A1"
//         />
//         <Path
//           d="M193.552 113.176V112.144L197.584 106.36H199.24V111.988H200.356V113.176H199.24V115H197.896V113.176H193.552ZM197.956 107.752L195.124 111.988H197.956V107.752ZM203.194 112.624C203.274 113.024 203.446 113.328 203.71 113.536C203.974 113.744 204.33 113.848 204.778 113.848C205.346 113.848 205.762 113.624 206.026 113.176C206.29 112.728 206.422 111.964 206.422 110.884C206.23 111.156 205.958 111.368 205.606 111.52C205.262 111.664 204.886 111.736 204.478 111.736C203.958 111.736 203.486 111.632 203.062 111.424C202.638 111.208 202.302 110.892 202.054 110.476C201.814 110.052 201.694 109.54 201.694 108.94C201.694 108.06 201.95 107.36 202.462 106.84C202.982 106.312 203.694 106.048 204.598 106.048C205.686 106.048 206.458 106.412 206.914 107.14C207.378 107.86 207.61 108.968 207.61 110.464C207.61 111.496 207.522 112.34 207.346 112.996C207.178 113.652 206.882 114.148 206.458 114.484C206.034 114.82 205.446 114.988 204.694 114.988C203.838 114.988 203.178 114.764 202.714 114.316C202.25 113.868 201.99 113.304 201.934 112.624H203.194ZM204.718 110.584C205.198 110.584 205.574 110.436 205.846 110.14C206.126 109.836 206.266 109.436 206.266 108.94C206.266 108.388 206.118 107.96 205.822 107.656C205.534 107.344 205.138 107.188 204.634 107.188C204.13 107.188 203.73 107.348 203.434 107.668C203.146 107.98 203.002 108.392 203.002 108.904C203.002 109.392 203.142 109.796 203.422 110.116C203.71 110.428 204.142 110.584 204.718 110.584ZM209.083 108.412C209.131 107.668 209.415 107.088 209.935 106.672C210.463 106.256 211.135 106.048 211.951 106.048C212.511 106.048 212.995 106.148 213.403 106.348C213.811 106.548 214.119 106.82 214.327 107.164C214.535 107.508 214.639 107.896 214.639 108.328C214.639 108.824 214.507 109.248 214.243 109.6C213.979 109.952 213.663 110.188 213.295 110.308V110.356C213.767 110.5 214.135 110.764 214.399 111.148C214.663 111.524 214.795 112.008 214.795 112.6C214.795 113.072 214.687 113.492 214.471 113.86C214.255 114.228 213.935 114.52 213.511 114.736C213.087 114.944 212.579 115.048 211.987 115.048C211.123 115.048 210.411 114.828 209.851 114.388C209.299 113.94 209.003 113.3 208.963 112.468H210.283C210.315 112.892 210.479 113.24 210.775 113.512C211.071 113.776 211.471 113.908 211.975 113.908C212.463 113.908 212.839 113.776 213.103 113.512C213.367 113.24 213.499 112.892 213.499 112.468C213.499 111.908 213.319 111.512 212.959 111.28C212.607 111.04 212.063 110.92 211.327 110.92H211.015V109.792H211.339C211.987 109.784 212.479 109.676 212.815 109.468C213.159 109.26 213.331 108.932 213.331 108.484C213.331 108.1 213.207 107.796 212.959 107.572C212.711 107.34 212.359 107.224 211.903 107.224C211.455 107.224 211.107 107.34 210.859 107.572C210.611 107.796 210.463 108.076 210.415 108.412H209.083ZM221.872 107.428H217.852V109.816C218.02 109.592 218.268 109.404 218.596 109.252C218.932 109.1 219.288 109.024 219.664 109.024C220.336 109.024 220.88 109.168 221.296 109.456C221.72 109.744 222.02 110.108 222.196 110.548C222.38 110.988 222.472 111.452 222.472 111.94C222.472 112.532 222.356 113.06 222.124 113.524C221.9 113.98 221.56 114.34 221.104 114.604C220.656 114.868 220.104 115 219.448 115C218.576 115 217.876 114.784 217.348 114.352C216.82 113.92 216.504 113.348 216.4 112.636H217.732C217.82 113.012 218.016 113.312 218.32 113.536C218.624 113.752 219.004 113.86 219.46 113.86C220.028 113.86 220.452 113.688 220.732 113.344C221.02 113 221.164 112.544 221.164 111.976C221.164 111.4 221.02 110.96 220.732 110.656C220.444 110.344 220.02 110.188 219.46 110.188C219.068 110.188 218.736 110.288 218.464 110.488C218.2 110.68 218.008 110.944 217.888 111.28H216.592V106.228H221.872V107.428ZM223.896 110.512C223.896 109.128 224.128 108.048 224.592 107.272C225.064 106.488 225.872 106.096 227.016 106.096C228.16 106.096 228.964 106.488 229.428 107.272C229.9 108.048 230.136 109.128 230.136 110.512C230.136 111.912 229.9 113.008 229.428 113.8C228.964 114.584 228.16 114.976 227.016 114.976C225.872 114.976 225.064 114.584 224.592 113.8C224.128 113.008 223.896 111.912 223.896 110.512ZM228.792 110.512C228.792 109.864 228.748 109.316 228.66 108.868C228.58 108.42 228.412 108.056 228.156 107.776C227.9 107.488 227.52 107.344 227.016 107.344C226.512 107.344 226.132 107.488 225.876 107.776C225.62 108.056 225.448 108.42 225.36 108.868C225.28 109.316 225.24 109.864 225.24 110.512C225.24 111.184 225.28 111.748 225.36 112.204C225.44 112.66 225.608 113.028 225.864 113.308C226.128 113.588 226.512 113.728 227.016 113.728C227.52 113.728 227.9 113.588 228.156 113.308C228.42 113.028 228.592 112.66 228.672 112.204C228.752 111.748 228.792 111.184 228.792 110.512ZM232.315 115.084C232.067 115.084 231.859 115 231.691 114.832C231.523 114.664 231.439 114.456 231.439 114.208C231.439 113.96 231.523 113.752 231.691 113.584C231.859 113.416 232.067 113.332 232.315 113.332C232.555 113.332 232.759 113.416 232.927 113.584C233.095 113.752 233.179 113.96 233.179 114.208C233.179 114.456 233.095 114.664 232.927 114.832C232.759 115 232.555 115.084 232.315 115.084ZM235.954 110.428C235.122 110.012 234.706 109.356 234.706 108.46C234.706 108.028 234.814 107.632 235.03 107.272C235.246 106.912 235.57 106.628 236.002 106.42C236.434 106.204 236.962 106.096 237.586 106.096C238.202 106.096 238.726 106.204 239.158 106.42C239.598 106.628 239.926 106.912 240.142 107.272C240.358 107.632 240.466 108.028 240.466 108.46C240.466 108.908 240.35 109.304 240.118 109.648C239.894 109.984 239.594 110.244 239.218 110.428C239.674 110.596 240.034 110.872 240.298 111.256C240.562 111.632 240.694 112.076 240.694 112.588C240.694 113.108 240.562 113.568 240.298 113.968C240.034 114.368 239.666 114.676 239.194 114.892C238.722 115.108 238.186 115.216 237.586 115.216C236.986 115.216 236.45 115.108 235.978 114.892C235.514 114.676 235.15 114.368 234.886 113.968C234.622 113.568 234.49 113.108 234.49 112.588C234.49 112.068 234.622 111.62 234.886 111.244C235.15 110.868 235.506 110.596 235.954 110.428ZM239.158 108.628C239.158 108.18 239.018 107.836 238.738 107.596C238.458 107.356 238.074 107.236 237.586 107.236C237.106 107.236 236.726 107.356 236.446 107.596C236.166 107.836 236.026 108.184 236.026 108.64C236.026 109.04 236.17 109.368 236.458 109.624C236.754 109.872 237.13 109.996 237.586 109.996C238.042 109.996 238.418 109.868 238.714 109.612C239.01 109.356 239.158 109.028 239.158 108.628ZM237.586 111.028C237.058 111.028 236.626 111.16 236.29 111.424C235.962 111.68 235.798 112.052 235.798 112.54C235.798 112.996 235.958 113.368 236.278 113.656C236.598 113.936 237.034 114.076 237.586 114.076C238.13 114.076 238.558 113.932 238.87 113.644C239.19 113.356 239.35 112.988 239.35 112.54C239.35 112.06 239.186 111.688 238.858 111.424C238.538 111.16 238.114 111.028 237.586 111.028ZM242.13 110.512C242.13 109.128 242.362 108.048 242.826 107.272C243.298 106.488 244.106 106.096 245.25 106.096C246.394 106.096 247.198 106.488 247.662 107.272C248.134 108.048 248.37 109.128 248.37 110.512C248.37 111.912 248.134 113.008 247.662 113.8C247.198 114.584 246.394 114.976 245.25 114.976C244.106 114.976 243.298 114.584 242.826 113.8C242.362 113.008 242.13 111.912 242.13 110.512ZM247.026 110.512C247.026 109.864 246.982 109.316 246.894 108.868C246.814 108.42 246.646 108.056 246.39 107.776C246.134 107.488 245.754 107.344 245.25 107.344C244.746 107.344 244.366 107.488 244.11 107.776C243.854 108.056 243.682 108.42 243.594 108.868C243.514 109.316 243.474 109.864 243.474 110.512C243.474 111.184 243.514 111.748 243.594 112.204C243.674 112.66 243.842 113.028 244.098 113.308C244.362 113.588 244.746 113.728 245.25 113.728C245.754 113.728 246.134 113.588 246.39 113.308C246.654 113.028 246.826 112.66 246.906 112.204C246.986 111.748 247.026 111.184 247.026 110.512Z"
//           fill="white"
//         />
//       </G>
//       <G filter="url(#filter0_df_249_3716)">
//         <Rect
//           width={110.334}
//           height={110.332}
//           rx={23.5811}
//           transform="matrix(0.696919 -0.71715 0.716684 0.697398 14.1109 102.607)"
//           fill="#CB05D6"
//           fillOpacity={0.9}
//           shapeRendering="crispEdges"
//         />
//       </G>
//       <G filter="url(#filter1_bdi_249_3716)">
//         <Path
//           d="M324.242 186.27C325.347 186.27 326.244 187.166 326.229 188.27C325.832 217.281 316.82 245.534 300.317 269.425C283.434 293.865 259.513 312.579 231.738 323.077C203.963 333.575 173.652 335.359 144.838 328.19C116.672 321.183 91.2439 305.946 71.7805 284.441C71.0396 283.623 71.1202 282.359 71.9483 281.628L179.533 186.77C179.898 186.448 180.368 186.27 180.855 186.27H324.242Z"
//           fill="#CB05D6"
//           fillOpacity={0.5}
//           shapeRendering="crispEdges"
//         />
//       </G>
//       <Mask
//         id="mask0_249_3716"
//         style={{ maskType: "alpha" }}
//         maskUnits="userSpaceOnUse"
//         x={70}
//         y={186}
//         width={257}
//         height={147}
//       >
//         <Path
//           d="M326.242 186.27C326.242 215.98 317.199 244.986 300.317 269.425C283.434 293.865 259.513 312.579 231.738 323.077C203.963 333.575 173.652 335.359 144.838 328.19C116.025 321.022 90.0775 305.242 70.4492 282.95L180.099 186.27H326.242Z"
//           fill="#8B0FB4"
//         />
//       </Mask>
//       <G mask="url(#mask0_249_3716)">
//         <G style={{ mixBlendMode: "overlay" }} opacity={0.4}>
//           <Path
//             d="M-129.705 166H-144V180.316M-129.705 166V180.316M-129.705 166H-115.409M-129.705 180.316H-144M-129.705 180.316V194.632M-129.705 180.316H-115.409M-144 180.316V194.632M-129.705 194.632H-144M-129.705 194.632V208.947M-129.705 194.632H-115.409M-144 194.632V208.947M-129.705 208.947H-144M-129.705 208.947V223.263M-129.705 208.947H-115.409M-144 208.947V223.263M-129.705 223.263H-144M-129.705 223.263V237.579M-129.705 223.263H-115.409M-144 223.263V237.579M-129.705 237.579H-144M-129.705 237.579V251.895M-129.705 237.579H-115.409M-144 237.579V251.895M-129.705 251.895H-144M-129.705 251.895V266.211M-129.705 251.895H-115.409M-144 251.895V266.211M-129.705 266.211H-144M-129.705 266.211V280.526M-129.705 266.211H-115.409M-144 266.211V280.526M-129.705 280.526H-144M-129.705 280.526V294.842M-129.705 280.526H-115.409M-144 280.526V294.842M-129.705 294.842H-144M-129.705 294.842V309.158M-129.705 294.842H-115.409M-144 294.842V309.158M-129.705 309.158H-144M-129.705 309.158V323.474M-129.705 309.158H-115.409M-144 309.158V323.474M-129.705 323.474H-144M-129.705 323.474V337.789M-129.705 323.474H-115.409M-144 323.474V337.789M-129.705 337.789H-144M-129.705 337.789V352.105M-129.705 337.789H-115.409M-144 337.789V352.105M-129.705 352.105H-144M-129.705 352.105V366.421M-129.705 352.105H-115.409M-144 352.105V366.421M-129.705 366.421H-144M-129.705 366.421V380.737M-129.705 366.421H-115.409M-144 366.421V380.737M-129.705 380.737H-144M-129.705 380.737V395.053M-129.705 380.737H-115.409M-144 380.737V395.053M-129.705 395.053H-144M-129.705 395.053V409.368M-129.705 395.053H-115.409M-144 395.053V409.368M-129.705 409.368H-144M-129.705 409.368V423.684M-129.705 409.368H-115.409M-144 409.368V423.684M-129.705 423.684H-144M-129.705 423.684V438M-129.705 423.684H-115.409M-144 423.684V438H-129.705M-129.705 438H-115.409M-115.409 166V180.316M-115.409 166H-101.114M-115.409 180.316V194.632M-115.409 180.316H-101.114M-115.409 194.632V208.947M-115.409 194.632H-101.114M-115.409 208.947V223.263M-115.409 208.947H-101.114M-115.409 223.263V237.579M-115.409 223.263H-101.114M-115.409 237.579V251.895M-115.409 237.579H-101.114M-115.409 251.895V266.211M-115.409 251.895H-101.114M-115.409 266.211V280.526M-115.409 266.211H-101.114M-115.409 280.526V294.842M-115.409 280.526H-101.114M-115.409 294.842V309.158M-115.409 294.842H-101.114M-115.409 309.158V323.474M-115.409 309.158H-101.114M-115.409 323.474V337.789M-115.409 323.474H-101.114M-115.409 337.789V352.105M-115.409 337.789H-101.114M-115.409 352.105V366.421M-115.409 352.105H-101.114M-115.409 366.421V380.737M-115.409 366.421H-101.114M-115.409 380.737V395.053M-115.409 380.737H-101.114M-115.409 395.053V409.368M-115.409 395.053H-101.114M-115.409 409.368V423.684M-115.409 409.368H-101.114M-115.409 423.684V438M-115.409 423.684H-101.114M-115.409 438H-101.114M-101.114 166V180.316M-101.114 166H-86.8182M-101.114 180.316V194.632M-101.114 180.316H-86.8182M-101.114 194.632V208.947M-101.114 194.632H-86.8182M-101.114 208.947V223.263M-101.114 208.947H-86.8182M-101.114 223.263V237.579M-101.114 223.263H-86.8182M-101.114 237.579V251.895M-101.114 237.579H-86.8182M-101.114 251.895V266.211M-101.114 251.895H-86.8182M-101.114 266.211V280.526M-101.114 266.211H-86.8182M-101.114 280.526V294.842M-101.114 280.526H-86.8182M-101.114 294.842V309.158M-101.114 294.842H-86.8182M-101.114 309.158V323.474M-101.114 309.158H-86.8182M-101.114 323.474V337.789M-101.114 323.474H-86.8182M-101.114 337.789V352.105M-101.114 337.789H-86.8182M-101.114 352.105V366.421M-101.114 352.105H-86.8182M-101.114 366.421V380.737M-101.114 366.421H-86.8182M-101.114 380.737V395.053M-101.114 380.737H-86.8182M-101.114 395.053V409.368M-101.114 395.053H-86.8182M-101.114 409.368V423.684M-101.114 409.368H-86.8182M-101.114 423.684V438M-101.114 423.684H-86.8182M-101.114 438H-86.8182M-86.8182 166V180.316M-86.8182 166H-72.5227M-86.8182 180.316V194.632M-86.8182 180.316H-72.5227M-86.8182 194.632V208.947M-86.8182 194.632H-72.5227M-86.8182 208.947V223.263M-86.8182 208.947H-72.5227M-86.8182 223.263V237.579M-86.8182 223.263H-72.5227M-86.8182 237.579V251.895M-86.8182 237.579H-72.5227M-86.8182 251.895V266.211M-86.8182 251.895H-72.5227M-86.8182 266.211V280.526M-86.8182 266.211H-72.5227M-86.8182 280.526V294.842M-86.8182 280.526H-72.5227M-86.8182 294.842V309.158M-86.8182 294.842H-72.5227M-86.8182 309.158V323.474M-86.8182 309.158H-72.5227M-86.8182 323.474V337.789M-86.8182 323.474H-72.5227M-86.8182 337.789V352.105M-86.8182 337.789H-72.5227M-86.8182 352.105V366.421M-86.8182 352.105H-72.5227M-86.8182 366.421V380.737M-86.8182 366.421H-72.5227M-86.8182 380.737V395.053M-86.8182 380.737H-72.5227M-86.8182 395.053V409.368M-86.8182 395.053H-72.5227M-86.8182 409.368V423.684M-86.8182 409.368H-72.5227M-86.8182 423.684V438M-86.8182 423.684H-72.5227M-86.8182 438H-72.5227M-72.5227 166V180.316M-72.5227 166H-58.2273M-72.5227 180.316V194.632M-72.5227 180.316H-58.2273M-72.5227 194.632V208.947M-72.5227 194.632H-58.2273M-72.5227 208.947V223.263M-72.5227 208.947H-58.2273M-72.5227 223.263V237.579M-72.5227 223.263H-58.2273M-72.5227 237.579V251.895M-72.5227 237.579H-58.2273M-72.5227 251.895V266.211M-72.5227 251.895H-58.2273M-72.5227 266.211V280.526M-72.5227 266.211H-58.2273M-72.5227 280.526V294.842M-72.5227 280.526H-58.2273M-72.5227 294.842V309.158M-72.5227 294.842H-58.2273M-72.5227 309.158V323.474M-72.5227 309.158H-58.2273M-72.5227 323.474V337.789M-72.5227 323.474H-58.2273M-72.5227 337.789V352.105M-72.5227 337.789H-58.2273M-72.5227 352.105V366.421M-72.5227 352.105H-58.2273M-72.5227 366.421V380.737M-72.5227 366.421H-58.2273M-72.5227 380.737V395.053M-72.5227 380.737H-58.2273M-72.5227 395.053V409.368M-72.5227 395.053H-58.2273M-72.5227 409.368V423.684M-72.5227 409.368H-58.2273M-72.5227 423.684V438M-72.5227 423.684H-58.2273M-72.5227 438H-58.2273M-58.2273 166V180.316M-58.2273 166H-43.9318M-58.2273 180.316V194.632M-58.2273 180.316H-43.9318M-58.2273 194.632V208.947M-58.2273 194.632H-43.9318M-58.2273 208.947V223.263M-58.2273 208.947H-43.9318M-58.2273 223.263V237.579M-58.2273 223.263H-43.9318M-58.2273 237.579V251.895M-58.2273 237.579H-43.9318M-58.2273 251.895V266.211M-58.2273 251.895H-43.9318M-58.2273 266.211V280.526M-58.2273 266.211H-43.9318M-58.2273 280.526V294.842M-58.2273 280.526H-43.9318M-58.2273 294.842V309.158M-58.2273 294.842H-43.9318M-58.2273 309.158V323.474M-58.2273 309.158H-43.9318M-58.2273 323.474V337.789M-58.2273 323.474H-43.9318M-58.2273 337.789V352.105M-58.2273 337.789H-43.9318M-58.2273 352.105V366.421M-58.2273 352.105H-43.9318M-58.2273 366.421V380.737M-58.2273 366.421H-43.9318M-58.2273 380.737V395.053M-58.2273 380.737H-43.9318M-58.2273 395.053V409.368M-58.2273 395.053H-43.9318M-58.2273 409.368V423.684M-58.2273 409.368H-43.9318M-58.2273 423.684V438M-58.2273 423.684H-43.9318M-58.2273 438H-43.9318M-43.9318 166V180.316M-43.9318 166H-29.6363M-43.9318 180.316V194.632M-43.9318 180.316H-29.6363M-43.9318 194.632V208.947M-43.9318 194.632H-29.6363M-43.9318 208.947V223.263M-43.9318 208.947H-29.6363M-43.9318 223.263V237.579M-43.9318 223.263H-29.6363M-43.9318 237.579V251.895M-43.9318 237.579H-29.6363M-43.9318 251.895V266.211M-43.9318 251.895H-29.6363M-43.9318 266.211V280.526M-43.9318 266.211H-29.6363M-43.9318 280.526V294.842M-43.9318 280.526H-29.6363M-43.9318 294.842V309.158M-43.9318 294.842H-29.6363M-43.9318 309.158V323.474M-43.9318 309.158H-29.6363M-43.9318 323.474V337.789M-43.9318 323.474H-29.6363M-43.9318 337.789V352.105M-43.9318 337.789H-29.6363M-43.9318 352.105V366.421M-43.9318 352.105H-29.6363M-43.9318 366.421V380.737M-43.9318 366.421H-29.6363M-43.9318 380.737V395.053M-43.9318 380.737H-29.6363M-43.9318 395.053V409.368M-43.9318 395.053H-29.6363M-43.9318 409.368V423.684M-43.9318 409.368H-29.6363M-43.9318 423.684V438M-43.9318 423.684H-29.6363M-43.9318 438H-29.6363M-29.6363 166V180.316M-29.6363 166H-15.3409M-29.6363 180.316V194.632M-29.6363 180.316H-15.3409M-29.6363 194.632V208.947M-29.6363 194.632H-15.3409M-29.6363 208.947V223.263M-29.6363 208.947H-15.3409M-29.6363 223.263V237.579M-29.6363 223.263H-15.3409M-29.6363 237.579V251.895M-29.6363 237.579H-15.3409M-29.6363 251.895V266.211M-29.6363 251.895H-15.3409M-29.6363 266.211V280.526M-29.6363 266.211H-15.3409M-29.6363 280.526V294.842M-29.6363 280.526H-15.3409M-29.6363 294.842V309.158M-29.6363 294.842H-15.3409M-29.6363 309.158V323.474M-29.6363 309.158H-15.3409M-29.6363 323.474V337.789M-29.6363 323.474H-15.3409M-29.6363 337.789V352.105M-29.6363 337.789H-15.3409M-29.6363 352.105V366.421M-29.6363 352.105H-15.3409M-29.6363 366.421V380.737M-29.6363 366.421H-15.3409M-29.6363 380.737V395.053M-29.6363 380.737H-15.3409M-29.6363 395.053V409.368M-29.6363 395.053H-15.3409M-29.6363 409.368V423.684M-29.6363 409.368H-15.3409M-29.6363 423.684V438M-29.6363 423.684H-15.3409M-29.6363 438H-15.3409M-15.3409 166V180.316M-15.3409 166H-1.04544M-15.3409 180.316V194.632M-15.3409 180.316H-1.04544M-15.3409 194.632V208.947M-15.3409 194.632H-1.04544M-15.3409 208.947V223.263M-15.3409 208.947H-1.04544M-15.3409 223.263V237.579M-15.3409 223.263H-1.04544M-15.3409 237.579V251.895M-15.3409 237.579H-1.04544M-15.3409 251.895V266.211M-15.3409 251.895H-1.04544M-15.3409 266.211V280.526M-15.3409 266.211H-1.04544M-15.3409 280.526V294.842M-15.3409 280.526H-1.04544M-15.3409 294.842V309.158M-15.3409 294.842H-1.04544M-15.3409 309.158V323.474M-15.3409 309.158H-1.04544M-15.3409 323.474V337.789M-15.3409 323.474H-1.04544M-15.3409 337.789V352.105M-15.3409 337.789H-1.04544M-15.3409 352.105V366.421M-15.3409 352.105H-1.04544M-15.3409 366.421V380.737M-15.3409 366.421H-1.04544M-15.3409 380.737V395.053M-15.3409 380.737H-1.04544M-15.3409 395.053V409.368M-15.3409 395.053H-1.04544M-15.3409 409.368V423.684M-15.3409 409.368H-1.04544M-15.3409 423.684V438M-15.3409 423.684H-1.04544M-15.3409 438H-1.04544M-1.04544 166V180.316M-1.04544 166H13.25M-1.04544 180.316V194.632M-1.04544 180.316H13.25M-1.04544 194.632V208.947M-1.04544 194.632H13.25M-1.04544 208.947V223.263M-1.04544 208.947H13.25M-1.04544 223.263V237.579M-1.04544 223.263H13.25M-1.04544 237.579V251.895M-1.04544 237.579H13.25M-1.04544 251.895V266.211M-1.04544 251.895H13.25M-1.04544 266.211V280.526M-1.04544 266.211H13.25M-1.04544 280.526V294.842M-1.04544 280.526H13.25M-1.04544 294.842V309.158M-1.04544 294.842H13.25M-1.04544 309.158V323.474M-1.04544 309.158H13.25M-1.04544 323.474V337.789M-1.04544 323.474H13.25M-1.04544 337.789V352.105M-1.04544 337.789H13.25M-1.04544 352.105V366.421M-1.04544 352.105H13.25M-1.04544 366.421V380.737M-1.04544 366.421H13.25M-1.04544 380.737V395.053M-1.04544 380.737H13.25M-1.04544 395.053V409.368M-1.04544 395.053H13.25M-1.04544 409.368V423.684M-1.04544 409.368H13.25M-1.04544 423.684V438M-1.04544 423.684H13.25M-1.04544 438H13.25M13.25 166V180.316M13.25 166H27.5455M13.25 180.316V194.632M13.25 180.316H27.5455M13.25 194.632V208.947M13.25 194.632H27.5455M13.25 208.947V223.263M13.25 208.947H27.5455M13.25 223.263V237.579M13.25 223.263H27.5455M13.25 237.579V251.895M13.25 237.579H27.5455M13.25 251.895V266.211M13.25 251.895H27.5455M13.25 266.211V280.526M13.25 266.211H27.5455M13.25 280.526V294.842M13.25 280.526H27.5455M13.25 294.842V309.158M13.25 294.842H27.5455M13.25 309.158V323.474M13.25 309.158H27.5455M13.25 323.474V337.789M13.25 323.474H27.5455M13.25 337.789V352.105M13.25 337.789H27.5455M13.25 352.105V366.421M13.25 352.105H27.5455M13.25 366.421V380.737M13.25 366.421H27.5455M13.25 380.737V395.053M13.25 380.737H27.5455M13.25 395.053V409.368M13.25 395.053H27.5455M13.25 409.368V423.684M13.25 409.368H27.5455M13.25 423.684V438M13.25 423.684H27.5455M13.25 438H27.5455M27.5455 166V180.316M27.5455 166H41.8409M27.5455 180.316V194.632M27.5455 180.316H41.8409M27.5455 194.632V208.947M27.5455 194.632H41.8409M27.5455 208.947V223.263M27.5455 208.947H41.8409M27.5455 223.263V237.579M27.5455 223.263H41.8409M27.5455 237.579V251.895M27.5455 237.579H41.8409M27.5455 251.895V266.211M27.5455 251.895H41.8409M27.5455 266.211V280.526M27.5455 266.211H41.8409M27.5455 280.526V294.842M27.5455 280.526H41.8409M27.5455 294.842V309.158M27.5455 294.842H41.8409M27.5455 309.158V323.474M27.5455 309.158H41.8409M27.5455 323.474V337.789M27.5455 323.474H41.8409M27.5455 337.789V352.105M27.5455 337.789H41.8409M27.5455 352.105V366.421M27.5455 352.105H41.8409M27.5455 366.421V380.737M27.5455 366.421H41.8409M27.5455 380.737V395.053M27.5455 380.737H41.8409M27.5455 395.053V409.368M27.5455 395.053H41.8409M27.5455 409.368V423.684M27.5455 409.368H41.8409M27.5455 423.684V438M27.5455 423.684H41.8409M27.5455 438H41.8409M41.8409 166V180.316M41.8409 166H56.1364M41.8409 180.316V194.632M41.8409 180.316H56.1364M41.8409 194.632V208.947M41.8409 194.632H56.1364M41.8409 208.947V223.263M41.8409 208.947H56.1364M41.8409 223.263V237.579M41.8409 223.263H56.1364M41.8409 237.579V251.895M41.8409 237.579H56.1364M41.8409 251.895V266.211M41.8409 251.895H56.1364M41.8409 266.211V280.526M41.8409 266.211H56.1364M41.8409 280.526V294.842M41.8409 280.526H56.1364M41.8409 294.842V309.158M41.8409 294.842H56.1364M41.8409 309.158V323.474M41.8409 309.158H56.1364M41.8409 323.474V337.789M41.8409 323.474H56.1364M41.8409 337.789V352.105M41.8409 337.789H56.1364M41.8409 352.105V366.421M41.8409 352.105H56.1364M41.8409 366.421V380.737M41.8409 366.421H56.1364M41.8409 380.737V395.053M41.8409 380.737H56.1364M41.8409 395.053V409.368M41.8409 395.053H56.1364M41.8409 409.368V423.684M41.8409 409.368H56.1364M41.8409 423.684V438M41.8409 423.684H56.1364M41.8409 438H56.1364M56.1364 166V180.316M56.1364 166H70.4318M56.1364 180.316V194.632M56.1364 180.316H70.4318M56.1364 194.632V208.947M56.1364 194.632H70.4318M56.1364 208.947V223.263M56.1364 208.947H70.4318M56.1364 223.263V237.579M56.1364 223.263H70.4318M56.1364 237.579V251.895M56.1364 237.579H70.4318M56.1364 251.895V266.211M56.1364 251.895H70.4318M56.1364 266.211V280.526M56.1364 266.211H70.4318M56.1364 280.526V294.842M56.1364 280.526H70.4318M56.1364 294.842V309.158M56.1364 294.842H70.4318M56.1364 309.158V323.474M56.1364 309.158H70.4318M56.1364 323.474V337.789M56.1364 323.474H70.4318M56.1364 337.789V352.105M56.1364 337.789H70.4318M56.1364 352.105V366.421M56.1364 352.105H70.4318M56.1364 366.421V380.737M56.1364 366.421H70.4318M56.1364 380.737V395.053M56.1364 380.737H70.4318M56.1364 395.053V409.368M56.1364 395.053H70.4318M56.1364 409.368V423.684M56.1364 409.368H70.4318M56.1364 423.684V438M56.1364 423.684H70.4318M56.1364 438H70.4318M70.4318 166V180.316M70.4318 166H84.7273M70.4318 180.316V194.632M70.4318 180.316H84.7273M70.4318 194.632V208.947M70.4318 194.632H84.7273M70.4318 208.947V223.263M70.4318 208.947H84.7273M70.4318 223.263V237.579M70.4318 223.263H84.7273M70.4318 237.579V251.895M70.4318 237.579H84.7273M70.4318 251.895V266.211M70.4318 251.895H84.7273M70.4318 266.211V280.526M70.4318 266.211H84.7273M70.4318 280.526V294.842M70.4318 280.526H84.7273M70.4318 294.842V309.158M70.4318 294.842H84.7273M70.4318 309.158V323.474M70.4318 309.158H84.7273M70.4318 323.474V337.789M70.4318 323.474H84.7273M70.4318 337.789V352.105M70.4318 337.789H84.7273M70.4318 352.105V366.421M70.4318 352.105H84.7273M70.4318 366.421V380.737M70.4318 366.421H84.7273M70.4318 380.737V395.053M70.4318 380.737H84.7273M70.4318 395.053V409.368M70.4318 395.053H84.7273M70.4318 409.368V423.684M70.4318 409.368H84.7273M70.4318 423.684V438M70.4318 423.684H84.7273M70.4318 438H84.7273M84.7273 166V180.316M84.7273 166H99.0227M84.7273 180.316V194.632M84.7273 180.316H99.0227M84.7273 194.632V208.947M84.7273 194.632H99.0227M84.7273 208.947V223.263M84.7273 208.947H99.0227M84.7273 223.263V237.579M84.7273 223.263H99.0227M84.7273 237.579V251.895M84.7273 237.579H99.0227M84.7273 251.895V266.211M84.7273 251.895H99.0227M84.7273 266.211V280.526M84.7273 266.211H99.0227M84.7273 280.526V294.842M84.7273 280.526H99.0227M84.7273 294.842V309.158M84.7273 294.842H99.0227M84.7273 309.158V323.474M84.7273 309.158H99.0227M84.7273 323.474V337.789M84.7273 323.474H99.0227M84.7273 337.789V352.105M84.7273 337.789H99.0227M84.7273 352.105V366.421M84.7273 352.105H99.0227M84.7273 366.421V380.737M84.7273 366.421H99.0227M84.7273 380.737V395.053M84.7273 380.737H99.0227M84.7273 395.053V409.368M84.7273 395.053H99.0227M84.7273 409.368V423.684M84.7273 409.368H99.0227M84.7273 423.684V438M84.7273 423.684H99.0227M84.7273 438H99.0227M99.0227 166V180.316M99.0227 166H113.318M99.0227 180.316V194.632M99.0227 180.316H113.318M99.0227 194.632V208.947M99.0227 194.632H113.318M99.0227 208.947V223.263M99.0227 208.947H113.318M99.0227 223.263V237.579M99.0227 223.263H113.318M99.0227 237.579V251.895M99.0227 237.579H113.318M99.0227 251.895V266.211M99.0227 251.895H113.318M99.0227 266.211V280.526M99.0227 266.211H113.318M99.0227 280.526V294.842M99.0227 280.526H113.318M99.0227 294.842V309.158M99.0227 294.842H113.318M99.0227 309.158V323.474M99.0227 309.158H113.318M99.0227 323.474V337.789M99.0227 323.474H113.318M99.0227 337.789V352.105M99.0227 337.789H113.318M99.0227 352.105V366.421M99.0227 352.105H113.318M99.0227 366.421V380.737M99.0227 366.421H113.318M99.0227 380.737V395.053M99.0227 380.737H113.318M99.0227 395.053V409.368M99.0227 395.053H113.318M99.0227 409.368V423.684M99.0227 409.368H113.318M99.0227 423.684V438M99.0227 423.684H113.318M99.0227 438H113.318M113.318 166V180.316M113.318 166H127.614M113.318 180.316V194.632M113.318 180.316H127.614M113.318 194.632V208.947M113.318 194.632H127.614M113.318 208.947V223.263M113.318 208.947H127.614M113.318 223.263V237.579M113.318 223.263H127.614M113.318 237.579V251.895M113.318 237.579H127.614M113.318 251.895V266.211M113.318 251.895H127.614M113.318 266.211V280.526M113.318 266.211H127.614M113.318 280.526V294.842M113.318 280.526H127.614M113.318 294.842V309.158M113.318 294.842H127.614M113.318 309.158V323.474M113.318 309.158H127.614M113.318 323.474V337.789M113.318 323.474H127.614M113.318 337.789V352.105M113.318 337.789H127.614M113.318 352.105V366.421M113.318 352.105H127.614M113.318 366.421V380.737M113.318 366.421H127.614M113.318 380.737V395.053M113.318 380.737H127.614M113.318 395.053V409.368M113.318 395.053H127.614M113.318 409.368V423.684M113.318 409.368H127.614M113.318 423.684V438M113.318 423.684H127.614M113.318 438H127.614M127.614 166V180.316M127.614 166H141.909M127.614 180.316V194.632M127.614 180.316H141.909M127.614 194.632V208.947M127.614 194.632H141.909M127.614 208.947V223.263M127.614 208.947H141.909M127.614 223.263V237.579M127.614 223.263H141.909M127.614 237.579V251.895M127.614 237.579H141.909M127.614 251.895V266.211M127.614 251.895H141.909M127.614 266.211V280.526M127.614 266.211H141.909M127.614 280.526V294.842M127.614 280.526H141.909M127.614 294.842V309.158M127.614 294.842H141.909M127.614 309.158V323.474M127.614 309.158H141.909M127.614 323.474V337.789M127.614 323.474H141.909M127.614 337.789V352.105M127.614 337.789H141.909M127.614 352.105V366.421M127.614 352.105H141.909M127.614 366.421V380.737M127.614 366.421H141.909M127.614 380.737V395.053M127.614 380.737H141.909M127.614 395.053V409.368M127.614 395.053H141.909M127.614 409.368V423.684M127.614 409.368H141.909M127.614 423.684V438M127.614 423.684H141.909M127.614 438H141.909M141.909 166V180.316M141.909 166H156.205M141.909 180.316V194.632M141.909 180.316H156.205M141.909 194.632V208.947M141.909 194.632H156.205M141.909 208.947V223.263M141.909 208.947H156.205M141.909 223.263V237.579M141.909 223.263H156.205M141.909 237.579V251.895M141.909 237.579H156.205M141.909 251.895V266.211M141.909 251.895H156.205M141.909 266.211V280.526M141.909 266.211H156.205M141.909 280.526V294.842M141.909 280.526H156.205M141.909 294.842V309.158M141.909 294.842H156.205M141.909 309.158V323.474M141.909 309.158H156.205M141.909 323.474V337.789M141.909 323.474H156.205M141.909 337.789V352.105M141.909 337.789H156.205M141.909 352.105V366.421M141.909 352.105H156.205M141.909 366.421V380.737M141.909 366.421H156.205M141.909 380.737V395.053M141.909 380.737H156.205M141.909 395.053V409.368M141.909 395.053H156.205M141.909 409.368V423.684M141.909 409.368H156.205M141.909 423.684V438M141.909 423.684H156.205M141.909 438H156.205M156.205 166V180.316M156.205 166H170.5M156.205 180.316V194.632M156.205 180.316H170.5M156.205 194.632V208.947M156.205 194.632H170.5M156.205 208.947V223.263M156.205 208.947H170.5M156.205 223.263V237.579M156.205 223.263H170.5M156.205 237.579V251.895M156.205 237.579H170.5M156.205 251.895V266.211M156.205 251.895H170.5M156.205 266.211V280.526M156.205 266.211H170.5M156.205 280.526V294.842M156.205 280.526H170.5M156.205 294.842V309.158M156.205 294.842H170.5M156.205 309.158V323.474M156.205 309.158H170.5M156.205 323.474V337.789M156.205 323.474H170.5M156.205 337.789V352.105M156.205 337.789H170.5M156.205 352.105V366.421M156.205 352.105H170.5M156.205 366.421V380.737M156.205 366.421H170.5M156.205 380.737V395.053M156.205 380.737H170.5M156.205 395.053V409.368M156.205 395.053H170.5M156.205 409.368V423.684M156.205 409.368H170.5M156.205 423.684V438M156.205 423.684H170.5M156.205 438H170.5M170.5 166V180.316M170.5 166H184.795M170.5 180.316V194.632M170.5 180.316H184.795M170.5 194.632V208.947M170.5 194.632H184.795M170.5 208.947V223.263M170.5 208.947H184.795M170.5 223.263V237.579M170.5 223.263H184.795M170.5 237.579V251.895M170.5 237.579H184.795M170.5 251.895V266.211M170.5 251.895H184.795M170.5 266.211V280.526M170.5 266.211H184.795M170.5 280.526V294.842M170.5 280.526H184.795M170.5 294.842V309.158M170.5 294.842H184.795M170.5 309.158V323.474M170.5 309.158H184.795M170.5 323.474V337.789M170.5 323.474H184.795M170.5 337.789V352.105M170.5 337.789H184.795M170.5 352.105V366.421M170.5 352.105H184.795M170.5 366.421V380.737M170.5 366.421H184.795M170.5 380.737V395.053M170.5 380.737H184.795M170.5 395.053V409.368M170.5 395.053H184.795M170.5 409.368V423.684M170.5 409.368H184.795M170.5 423.684V438M170.5 423.684H184.795M170.5 438H184.795M184.795 166V180.316M184.795 166H199.091M184.795 180.316V194.632M184.795 180.316H199.091M184.795 194.632V208.947M184.795 194.632H199.091M184.795 208.947V223.263M184.795 208.947H199.091M184.795 223.263V237.579M184.795 223.263H199.091M184.795 237.579V251.895M184.795 237.579H199.091M184.795 251.895V266.211M184.795 251.895H199.091M184.795 266.211V280.526M184.795 266.211H199.091M184.795 280.526V294.842M184.795 280.526H199.091M184.795 294.842V309.158M184.795 294.842H199.091M184.795 309.158V323.474M184.795 309.158H199.091M184.795 323.474V337.789M184.795 323.474H199.091M184.795 337.789V352.105M184.795 337.789H199.091M184.795 352.105V366.421M184.795 352.105H199.091M184.795 366.421V380.737M184.795 366.421H199.091M184.795 380.737V395.053M184.795 380.737H199.091M184.795 395.053V409.368M184.795 395.053H199.091M184.795 409.368V423.684M184.795 409.368H199.091M184.795 423.684V438M184.795 423.684H199.091M184.795 438H199.091M199.091 166V180.316M199.091 166H213.386M199.091 180.316V194.632M199.091 180.316H213.386M199.091 194.632V208.947M199.091 194.632H213.386M199.091 208.947V223.263M199.091 208.947H213.386M199.091 223.263V237.579M199.091 223.263H213.386M199.091 237.579V251.895M199.091 237.579H213.386M199.091 251.895V266.211M199.091 251.895H213.386M199.091 266.211V280.526M199.091 266.211H213.386M199.091 280.526V294.842M199.091 280.526H213.386M199.091 294.842V309.158M199.091 294.842H213.386M199.091 309.158V323.474M199.091 309.158H213.386M199.091 323.474V337.789M199.091 323.474H213.386M199.091 337.789V352.105M199.091 337.789H213.386M199.091 352.105V366.421M199.091 352.105H213.386M199.091 366.421V380.737M199.091 366.421H213.386M199.091 380.737V395.053M199.091 380.737H213.386M199.091 395.053V409.368M199.091 395.053H213.386M199.091 409.368V423.684M199.091 409.368H213.386M199.091 423.684V438M199.091 423.684H213.386M199.091 438H213.386M213.386 166V180.316M213.386 166H227.682M213.386 180.316V194.632M213.386 180.316H227.682M213.386 194.632V208.947M213.386 194.632H227.682M213.386 208.947V223.263M213.386 208.947H227.682M213.386 223.263V237.579M213.386 223.263H227.682M213.386 237.579V251.895M213.386 237.579H227.682M213.386 251.895V266.211M213.386 251.895H227.682M213.386 266.211V280.526M213.386 266.211H227.682M213.386 280.526V294.842M213.386 280.526H227.682M213.386 294.842V309.158M213.386 294.842H227.682M213.386 309.158V323.474M213.386 309.158H227.682M213.386 323.474V337.789M213.386 323.474H227.682M213.386 337.789V352.105M213.386 337.789H227.682M213.386 352.105V366.421M213.386 352.105H227.682M213.386 366.421V380.737M213.386 366.421H227.682M213.386 380.737V395.053M213.386 380.737H227.682M213.386 395.053V409.368M213.386 395.053H227.682M213.386 409.368V423.684M213.386 409.368H227.682M213.386 423.684V438M213.386 423.684H227.682M213.386 438H227.682M227.682 166V180.316M227.682 166H241.977M227.682 180.316V194.632M227.682 180.316H241.977M227.682 194.632V208.947M227.682 194.632H241.977M227.682 208.947V223.263M227.682 208.947H241.977M227.682 223.263V237.579M227.682 223.263H241.977M227.682 237.579V251.895M227.682 237.579H241.977M227.682 251.895V266.211M227.682 251.895H241.977M227.682 266.211V280.526M227.682 266.211H241.977M227.682 280.526V294.842M227.682 280.526H241.977M227.682 294.842V309.158M227.682 294.842H241.977M227.682 309.158V323.474M227.682 309.158H241.977M227.682 323.474V337.789M227.682 323.474H241.977M227.682 337.789V352.105M227.682 337.789H241.977M227.682 352.105V366.421M227.682 352.105H241.977M227.682 366.421V380.737M227.682 366.421H241.977M227.682 380.737V395.053M227.682 380.737H241.977M227.682 395.053V409.368M227.682 395.053H241.977M227.682 409.368V423.684M227.682 409.368H241.977M227.682 423.684V438M227.682 423.684H241.977M227.682 438H241.977M241.977 166V180.316M241.977 166H256.273M241.977 180.316V194.632M241.977 180.316H256.273M241.977 194.632V208.947M241.977 194.632H256.273M241.977 208.947V223.263M241.977 208.947H256.273M241.977 223.263V237.579M241.977 223.263H256.273M241.977 237.579V251.895M241.977 237.579H256.273M241.977 251.895V266.211M241.977 251.895H256.273M241.977 266.211V280.526M241.977 266.211H256.273M241.977 280.526V294.842M241.977 280.526H256.273M241.977 294.842V309.158M241.977 294.842H256.273M241.977 309.158V323.474M241.977 309.158H256.273M241.977 323.474V337.789M241.977 323.474H256.273M241.977 337.789V352.105M241.977 337.789H256.273M241.977 352.105V366.421M241.977 352.105H256.273M241.977 366.421V380.737M241.977 366.421H256.273M241.977 380.737V395.053M241.977 380.737H256.273M241.977 395.053V409.368M241.977 395.053H256.273M241.977 409.368V423.684M241.977 409.368H256.273M241.977 423.684V438M241.977 423.684H256.273M241.977 438H256.273M256.273 166V180.316M256.273 166H270.568M256.273 180.316V194.632M256.273 180.316H270.568M256.273 194.632V208.947M256.273 194.632H270.568M256.273 208.947V223.263M256.273 208.947H270.568M256.273 223.263V237.579M256.273 223.263H270.568M256.273 237.579V251.895M256.273 237.579H270.568M256.273 251.895V266.211M256.273 251.895H270.568M256.273 266.211V280.526M256.273 266.211H270.568M256.273 280.526V294.842M256.273 280.526H270.568M256.273 294.842V309.158M256.273 294.842H270.568M256.273 309.158V323.474M256.273 309.158H270.568M256.273 323.474V337.789M256.273 323.474H270.568M256.273 337.789V352.105M256.273 337.789H270.568M256.273 352.105V366.421M256.273 352.105H270.568M256.273 366.421V380.737M256.273 366.421H270.568M256.273 380.737V395.053M256.273 380.737H270.568M256.273 395.053V409.368M256.273 395.053H270.568M256.273 409.368V423.684M256.273 409.368H270.568M256.273 423.684V438M256.273 423.684H270.568M256.273 438H270.568M270.568 166V180.316M270.568 166H284.864M270.568 180.316V194.632M270.568 180.316H284.864M270.568 194.632V208.947M270.568 194.632H284.864M270.568 208.947V223.263M270.568 208.947H284.864M270.568 223.263V237.579M270.568 223.263H284.864M270.568 237.579V251.895M270.568 237.579H284.864M270.568 251.895V266.211M270.568 251.895H284.864M270.568 266.211V280.526M270.568 266.211H284.864M270.568 280.526V294.842M270.568 280.526H284.864M270.568 294.842V309.158M270.568 294.842H284.864M270.568 309.158V323.474M270.568 309.158H284.864M270.568 323.474V337.789M270.568 323.474H284.864M270.568 337.789V352.105M270.568 337.789H284.864M270.568 352.105V366.421M270.568 352.105H284.864M270.568 366.421V380.737M270.568 366.421H284.864M270.568 380.737V395.053M270.568 380.737H284.864M270.568 395.053V409.368M270.568 395.053H284.864M270.568 409.368V423.684M270.568 409.368H284.864M270.568 423.684V438M270.568 423.684H284.864M270.568 438H284.864M284.864 166V180.316M284.864 166H299.159M284.864 180.316V194.632M284.864 180.316H299.159M284.864 194.632V208.947M284.864 194.632H299.159M284.864 208.947V223.263M284.864 208.947H299.159M284.864 223.263V237.579M284.864 223.263H299.159M284.864 237.579V251.895M284.864 237.579H299.159M284.864 251.895V266.211M284.864 251.895H299.159M284.864 266.211V280.526M284.864 266.211H299.159M284.864 280.526V294.842M284.864 280.526H299.159M284.864 294.842V309.158M284.864 294.842H299.159M284.864 309.158V323.474M284.864 309.158H299.159M284.864 323.474V337.789M284.864 323.474H299.159M284.864 337.789V352.105M284.864 337.789H299.159M284.864 352.105V366.421M284.864 352.105H299.159M284.864 366.421V380.737M284.864 366.421H299.159M284.864 380.737V395.053M284.864 380.737H299.159M284.864 395.053V409.368M284.864 395.053H299.159M284.864 409.368V423.684M284.864 409.368H299.159M284.864 423.684V438M284.864 423.684H299.159M284.864 438H299.159M299.159 166V180.316M299.159 166H313.455M299.159 180.316V194.632M299.159 180.316H313.455M299.159 194.632V208.947M299.159 194.632H313.455M299.159 208.947V223.263M299.159 208.947H313.455M299.159 223.263V237.579M299.159 223.263H313.455M299.159 237.579V251.895M299.159 237.579H313.455M299.159 251.895V266.211M299.159 251.895H313.455M299.159 266.211V280.526M299.159 266.211H313.455M299.159 280.526V294.842M299.159 280.526H313.455M299.159 294.842V309.158M299.159 294.842H313.455M299.159 309.158V323.474M299.159 309.158H313.455M299.159 323.474V337.789M299.159 323.474H313.455M299.159 337.789V352.105M299.159 337.789H313.455M299.159 352.105V366.421M299.159 352.105H313.455M299.159 366.421V380.737M299.159 366.421H313.455M299.159 380.737V395.053M299.159 380.737H313.455M299.159 395.053V409.368M299.159 395.053H313.455M299.159 409.368V423.684M299.159 409.368H313.455M299.159 423.684V438M299.159 423.684H313.455M299.159 438H313.455M313.455 166V180.316M313.455 166H327.75M313.455 180.316V194.632M313.455 180.316H327.75M313.455 194.632V208.947M313.455 194.632H327.75M313.455 208.947V223.263M313.455 208.947H327.75M313.455 223.263V237.579M313.455 223.263H327.75M313.455 237.579V251.895M313.455 237.579H327.75M313.455 251.895V266.211M313.455 251.895H327.75M313.455 266.211V280.526M313.455 266.211H327.75M313.455 280.526V294.842M313.455 280.526H327.75M313.455 294.842V309.158M313.455 294.842H327.75M313.455 309.158V323.474M313.455 309.158H327.75M313.455 323.474V337.789M313.455 323.474H327.75M313.455 337.789V352.105M313.455 337.789H327.75M313.455 352.105V366.421M313.455 352.105H327.75M313.455 366.421V380.737M313.455 366.421H327.75M313.455 380.737V395.053M313.455 380.737H327.75M313.455 395.053V409.368M313.455 395.053H327.75M313.455 409.368V423.684M313.455 409.368H327.75M313.455 423.684V438M313.455 423.684H327.75M313.455 438H327.75M327.75 166V180.316M327.75 166H342.045M327.75 180.316V194.632M327.75 180.316H342.045M327.75 194.632V208.947M327.75 194.632H342.045M327.75 208.947V223.263M327.75 208.947H342.045M327.75 223.263V237.579M327.75 223.263H342.045M327.75 237.579V251.895M327.75 237.579H342.045M327.75 251.895V266.211M327.75 251.895H342.045M327.75 266.211V280.526M327.75 266.211H342.045M327.75 280.526V294.842M327.75 280.526H342.045M327.75 294.842V309.158M327.75 294.842H342.045M327.75 309.158V323.474M327.75 309.158H342.045M327.75 323.474V337.789M327.75 323.474H342.045M327.75 337.789V352.105M327.75 337.789H342.045M327.75 352.105V366.421M327.75 352.105H342.045M327.75 366.421V380.737M327.75 366.421H342.045M327.75 380.737V395.053M327.75 380.737H342.045M327.75 395.053V409.368M327.75 395.053H342.045M327.75 409.368V423.684M327.75 409.368H342.045M327.75 423.684V438M327.75 423.684H342.045M327.75 438H342.045M342.045 166V180.316M342.045 166H356.341M342.045 180.316V194.632M342.045 180.316H356.341M342.045 194.632V208.947M342.045 194.632H356.341M342.045 208.947V223.263M342.045 208.947H356.341M342.045 223.263V237.579M342.045 223.263H356.341M342.045 237.579V251.895M342.045 237.579H356.341M342.045 251.895V266.211M342.045 251.895H356.341M342.045 266.211V280.526M342.045 266.211H356.341M342.045 280.526V294.842M342.045 280.526H356.341M342.045 294.842V309.158M342.045 294.842H356.341M342.045 309.158V323.474M342.045 309.158H356.341M342.045 323.474V337.789M342.045 323.474H356.341M342.045 337.789V352.105M342.045 337.789H356.341M342.045 352.105V366.421M342.045 352.105H356.341M342.045 366.421V380.737M342.045 366.421H356.341M342.045 380.737V395.053M342.045 380.737H356.341M342.045 395.053V409.368M342.045 395.053H356.341M342.045 409.368V423.684M342.045 409.368H356.341M342.045 423.684V438M342.045 423.684H356.341M342.045 438H356.341M356.341 166V180.316M356.341 166H370.636M356.341 180.316V194.632M356.341 180.316H370.636M356.341 194.632V208.947M356.341 194.632H370.636M356.341 208.947V223.263M356.341 208.947H370.636M356.341 223.263V237.579M356.341 223.263H370.636M356.341 237.579V251.895M356.341 237.579H370.636M356.341 251.895V266.211M356.341 251.895H370.636M356.341 266.211V280.526M356.341 266.211H370.636M356.341 280.526V294.842M356.341 280.526H370.636M356.341 294.842V309.158M356.341 294.842H370.636M356.341 309.158V323.474M356.341 309.158H370.636M356.341 323.474V337.789M356.341 323.474H370.636M356.341 337.789V352.105M356.341 337.789H370.636M356.341 352.105V366.421M356.341 352.105H370.636M356.341 366.421V380.737M356.341 366.421H370.636M356.341 380.737V395.053M356.341 380.737H370.636M356.341 395.053V409.368M356.341 395.053H370.636M356.341 409.368V423.684M356.341 409.368H370.636M356.341 423.684V438M356.341 423.684H370.636M356.341 438H370.636M370.636 166V180.316M370.636 166H384.932M370.636 180.316V194.632M370.636 180.316H384.932M370.636 194.632V208.947M370.636 194.632H384.932M370.636 208.947V223.263M370.636 208.947H384.932M370.636 223.263V237.579M370.636 223.263H384.932M370.636 237.579V251.895M370.636 237.579H384.932M370.636 251.895V266.211M370.636 251.895H384.932M370.636 266.211V280.526M370.636 266.211H384.932M370.636 280.526V294.842M370.636 280.526H384.932M370.636 294.842V309.158M370.636 294.842H384.932M370.636 309.158V323.474M370.636 309.158H384.932M370.636 323.474V337.789M370.636 323.474H384.932M370.636 337.789V352.105M370.636 337.789H384.932M370.636 352.105V366.421M370.636 352.105H384.932M370.636 366.421V380.737M370.636 366.421H384.932M370.636 380.737V395.053M370.636 380.737H384.932M370.636 395.053V409.368M370.636 395.053H384.932M370.636 409.368V423.684M370.636 409.368H384.932M370.636 423.684V438M370.636 423.684H384.932M370.636 438H384.932M384.932 166V180.316M384.932 166H399.227M384.932 180.316V194.632M384.932 180.316H399.227M384.932 194.632V208.947M384.932 194.632H399.227M384.932 208.947V223.263M384.932 208.947H399.227M384.932 223.263V237.579M384.932 223.263H399.227M384.932 237.579V251.895M384.932 237.579H399.227M384.932 251.895V266.211M384.932 251.895H399.227M384.932 266.211V280.526M384.932 266.211H399.227M384.932 280.526V294.842M384.932 280.526H399.227M384.932 294.842V309.158M384.932 294.842H399.227M384.932 309.158V323.474M384.932 309.158H399.227M384.932 323.474V337.789M384.932 323.474H399.227M384.932 337.789V352.105M384.932 337.789H399.227M384.932 352.105V366.421M384.932 352.105H399.227M384.932 366.421V380.737M384.932 366.421H399.227M384.932 380.737V395.053M384.932 380.737H399.227M384.932 395.053V409.368M384.932 395.053H399.227M384.932 409.368V423.684M384.932 409.368H399.227M384.932 423.684V438M384.932 423.684H399.227M384.932 438H399.227M399.227 166V180.316M399.227 166H413.523M399.227 180.316V194.632M399.227 180.316H413.523M399.227 194.632V208.947M399.227 194.632H413.523M399.227 208.947V223.263M399.227 208.947H413.523M399.227 223.263V237.579M399.227 223.263H413.523M399.227 237.579V251.895M399.227 237.579H413.523M399.227 251.895V266.211M399.227 251.895H413.523M399.227 266.211V280.526M399.227 266.211H413.523M399.227 280.526V294.842M399.227 280.526H413.523M399.227 294.842V309.158M399.227 294.842H413.523M399.227 309.158V323.474M399.227 309.158H413.523M399.227 323.474V337.789M399.227 323.474H413.523M399.227 337.789V352.105M399.227 337.789H413.523M399.227 352.105V366.421M399.227 352.105H413.523M399.227 366.421V380.737M399.227 366.421H413.523M399.227 380.737V395.053M399.227 380.737H413.523M399.227 395.053V409.368M399.227 395.053H413.523M399.227 409.368V423.684M399.227 409.368H413.523M399.227 423.684V438M399.227 423.684H413.523M399.227 438H413.523M413.523 166V180.316M413.523 166H427.818M413.523 180.316V194.632M413.523 180.316H427.818M413.523 194.632V208.947M413.523 194.632H427.818M413.523 208.947V223.263M413.523 208.947H427.818M413.523 223.263V237.579M413.523 223.263H427.818M413.523 237.579V251.895M413.523 237.579H427.818M413.523 251.895V266.211M413.523 251.895H427.818M413.523 266.211V280.526M413.523 266.211H427.818M413.523 280.526V294.842M413.523 280.526H427.818M413.523 294.842V309.158M413.523 294.842H427.818M413.523 309.158V323.474M413.523 309.158H427.818M413.523 323.474V337.789M413.523 323.474H427.818M413.523 337.789V352.105M413.523 337.789H427.818M413.523 352.105V366.421M413.523 352.105H427.818M413.523 366.421V380.737M413.523 366.421H427.818M413.523 380.737V395.053M413.523 380.737H427.818M413.523 395.053V409.368M413.523 395.053H427.818M413.523 409.368V423.684M413.523 409.368H427.818M413.523 423.684V438M413.523 423.684H427.818M413.523 438H427.818M427.818 166V180.316M427.818 166H442.114M427.818 180.316V194.632M427.818 180.316H442.114M427.818 194.632V208.947M427.818 194.632H442.114M427.818 208.947V223.263M427.818 208.947H442.114M427.818 223.263V237.579M427.818 223.263H442.114M427.818 237.579V251.895M427.818 237.579H442.114M427.818 251.895V266.211M427.818 251.895H442.114M427.818 266.211V280.526M427.818 266.211H442.114M427.818 280.526V294.842M427.818 280.526H442.114M427.818 294.842V309.158M427.818 294.842H442.114M427.818 309.158V323.474M427.818 309.158H442.114M427.818 323.474V337.789M427.818 323.474H442.114M427.818 337.789V352.105M427.818 337.789H442.114M427.818 352.105V366.421M427.818 352.105H442.114M427.818 366.421V380.737M427.818 366.421H442.114M427.818 380.737V395.053M427.818 380.737H442.114M427.818 395.053V409.368M427.818 395.053H442.114M427.818 409.368V423.684M427.818 409.368H442.114M427.818 423.684V438M427.818 423.684H442.114M427.818 438H442.114M442.114 166V180.316M442.114 166H456.409M442.114 180.316V194.632M442.114 180.316H456.409M442.114 194.632V208.947M442.114 194.632H456.409M442.114 208.947V223.263M442.114 208.947H456.409M442.114 223.263V237.579M442.114 223.263H456.409M442.114 237.579V251.895M442.114 237.579H456.409M442.114 251.895V266.211M442.114 251.895H456.409M442.114 266.211V280.526M442.114 266.211H456.409M442.114 280.526V294.842M442.114 280.526H456.409M442.114 294.842V309.158M442.114 294.842H456.409M442.114 309.158V323.474M442.114 309.158H456.409M442.114 323.474V337.789M442.114 323.474H456.409M442.114 337.789V352.105M442.114 337.789H456.409M442.114 352.105V366.421M442.114 352.105H456.409M442.114 366.421V380.737M442.114 366.421H456.409M442.114 380.737V395.053M442.114 380.737H456.409M442.114 395.053V409.368M442.114 395.053H456.409M442.114 409.368V423.684M442.114 409.368H456.409M442.114 423.684V438M442.114 423.684H456.409M442.114 438H456.409M456.409 166V180.316M456.409 166H470.705M456.409 180.316V194.632M456.409 180.316H470.705M456.409 194.632V208.947M456.409 194.632H470.705M456.409 208.947V223.263M456.409 208.947H470.705M456.409 223.263V237.579M456.409 223.263H470.705M456.409 237.579V251.895M456.409 237.579H470.705M456.409 251.895V266.211M456.409 251.895H470.705M456.409 266.211V280.526M456.409 266.211H470.705M456.409 280.526V294.842M456.409 280.526H470.705M456.409 294.842V309.158M456.409 294.842H470.705M456.409 309.158V323.474M456.409 309.158H470.705M456.409 323.474V337.789M456.409 323.474H470.705M456.409 337.789V352.105M456.409 337.789H470.705M456.409 352.105V366.421M456.409 352.105H470.705M456.409 366.421V380.737M456.409 366.421H470.705M456.409 380.737V395.053M456.409 380.737H470.705M456.409 395.053V409.368M456.409 395.053H470.705M456.409 409.368V423.684M456.409 409.368H470.705M456.409 423.684V438M456.409 423.684H470.705M456.409 438H470.705M470.705 166V180.316M470.705 166H485V180.316M470.705 180.316V194.632M470.705 180.316H485M470.705 194.632V208.947M470.705 194.632H485M470.705 208.947V223.263M470.705 208.947H485M470.705 223.263V237.579M470.705 223.263H485M470.705 237.579V251.895M470.705 237.579H485M470.705 251.895V266.211M470.705 251.895H485M470.705 266.211V280.526M470.705 266.211H485M470.705 280.526V294.842M470.705 280.526H485M470.705 294.842V309.158M470.705 294.842H485M470.705 309.158V323.474M470.705 309.158H485M470.705 323.474V337.789M470.705 323.474H485M470.705 337.789V352.105M470.705 337.789H485M470.705 352.105V366.421M470.705 352.105H485M470.705 366.421V380.737M470.705 366.421H485M470.705 380.737V395.053M470.705 380.737H485M470.705 395.053V409.368M470.705 395.053H485M470.705 409.368V423.684M470.705 409.368H485M470.705 423.684V438M470.705 423.684H485M470.705 438H485V423.684M485 180.316V194.632M485 194.632V208.947M485 208.947V223.263M485 223.263V237.579M485 237.579V251.895M485 251.895V266.211M485 266.211V280.526M485 280.526V294.842M485 294.842V309.158M485 309.158V323.474M485 323.474V337.789M485 337.789V352.105M485 352.105V366.421M485 366.421V380.737M485 380.737V395.053M485 395.053V409.368M485 409.368V423.684"
//             stroke="url(#paint0_radial_249_3716)"
//             strokeWidth={0.5}
//           />
//         </G>
//       </G>
//       <G filter="url(#filter2_d_249_3716)">
//         <Path
//           d="M185.614 15.5408C185.614 14.4362 184.718 13.5395 183.613 13.5524C146.867 13.9783 111.196 26.1303 81.8073 48.2659C51.8857 70.803 30.1005 102.467 19.7386 138.479C9.37671 174.492 11.0003 212.9 24.3643 247.908C37.4901 282.292 61.2423 311.565 92.1356 331.479C93.0644 332.078 94.3008 331.795 94.8881 330.859L185.308 186.758C185.508 186.439 185.614 186.071 185.614 185.695L185.614 15.5408Z"
//           fill="#222222"
//         />
//       </G>
//       <Path
//         d="M59.52 105.82C60.0267 105.9 60.4867 106.107 60.9 106.44C61.3267 106.773 61.66 107.187 61.9 107.68C62.1533 108.173 62.28 108.7 62.28 109.26C62.28 109.967 62.1 110.607 61.74 111.18C61.38 111.74 60.8533 112.187 60.16 112.52C59.48 112.84 58.6733 113 57.74 113H52.54V99.06H57.54C58.4867 99.06 59.2933 99.22 59.96 99.54C60.6267 99.8467 61.1267 100.267 61.46 100.8C61.7933 101.333 61.96 101.933 61.96 102.6C61.96 103.427 61.7333 104.113 61.28 104.66C60.84 105.193 60.2533 105.58 59.52 105.82ZM54.36 105.08H57.42C58.2733 105.08 58.9333 104.88 59.4 104.48C59.8667 104.08 60.1 103.527 60.1 102.82C60.1 102.113 59.8667 101.56 59.4 101.16C58.9333 100.76 58.26 100.56 57.38 100.56H54.36V105.08ZM57.58 111.5C58.4867 111.5 59.1933 111.287 59.7 110.86C60.2067 110.433 60.46 109.84 60.46 109.08C60.46 108.307 60.1933 107.7 59.66 107.26C59.1267 106.807 58.4133 106.58 57.52 106.58H54.36V111.5H57.58ZM64.1256 107.48C64.1256 106.36 64.3523 105.38 64.8056 104.54C65.259 103.687 65.879 103.027 66.6656 102.56C67.4656 102.093 68.3523 101.86 69.3256 101.86C70.2856 101.86 71.119 102.067 71.8256 102.48C72.5323 102.893 73.059 103.413 73.4056 104.04V102.04H75.2456V113H73.4056V110.96C73.0456 111.6 72.5056 112.133 71.7856 112.56C71.079 112.973 70.2523 113.18 69.3056 113.18C68.3323 113.18 67.4523 112.94 66.6656 112.46C65.879 111.98 65.259 111.307 64.8056 110.44C64.3523 109.573 64.1256 108.587 64.1256 107.48ZM73.4056 107.5C73.4056 106.673 73.239 105.953 72.9056 105.34C72.5723 104.727 72.119 104.26 71.5456 103.94C70.9856 103.607 70.3656 103.44 69.6856 103.44C69.0056 103.44 68.3856 103.6 67.8256 103.92C67.2656 104.24 66.819 104.707 66.4856 105.32C66.1523 105.933 65.9856 106.653 65.9856 107.48C65.9856 108.32 66.1523 109.053 66.4856 109.68C66.819 110.293 67.2656 110.767 67.8256 111.1C68.3856 111.42 69.0056 111.58 69.6856 111.58C70.3656 111.58 70.9856 111.42 71.5456 111.1C72.119 110.767 72.5723 110.293 72.9056 109.68C73.239 109.053 73.4056 108.327 73.4056 107.5ZM83.6613 101.84C84.9946 101.84 86.0746 102.247 86.9013 103.06C87.7279 103.86 88.1413 105.02 88.1413 106.54V113H86.3413V106.8C86.3413 105.707 86.0679 104.873 85.5213 104.3C84.9746 103.713 84.2279 103.42 83.2813 103.42C82.3213 103.42 81.5546 103.72 80.9813 104.32C80.4213 104.92 80.1413 105.793 80.1413 106.94V113H78.3213V102.04H80.1413V103.6C80.5013 103.04 80.9879 102.607 81.6013 102.3C82.2279 101.993 82.9146 101.84 83.6613 101.84ZM97.2342 113L92.9342 108.16V113H91.1142V98.2H92.9342V106.9L97.1542 102.04H99.6942L94.5342 107.5L99.7142 113H97.2342ZM117.699 113H115.879L108.559 101.9V113H106.739V99.04H108.559L115.879 110.12V99.04H117.699V113ZM121.742 100.26C121.395 100.26 121.102 100.14 120.862 99.9C120.622 99.66 120.502 99.3667 120.502 99.02C120.502 98.6733 120.622 98.38 120.862 98.14C121.102 97.9 121.395 97.78 121.742 97.78C122.075 97.78 122.355 97.9 122.582 98.14C122.822 98.38 122.942 98.6733 122.942 99.02C122.942 99.3667 122.822 99.66 122.582 99.9C122.355 100.14 122.075 100.26 121.742 100.26ZM122.622 102.04V113H120.802V102.04H122.622ZM130.184 103.54H127.884V113H126.064V103.54H124.644V102.04H126.064V101.26C126.064 100.033 126.377 99.14 127.004 98.58C127.644 98.0067 128.664 97.72 130.064 97.72V99.24C129.264 99.24 128.697 99.4 128.364 99.72C128.044 100.027 127.884 100.54 127.884 101.26V102.04H130.184V103.54ZM134.526 103.54V110C134.526 110.533 134.639 110.913 134.866 111.14C135.092 111.353 135.486 111.46 136.046 111.46H137.386V113H135.746C134.732 113 133.972 112.767 133.466 112.3C132.959 111.833 132.706 111.067 132.706 110V103.54H131.286V102.04H132.706V99.28H134.526V102.04H137.386V103.54H134.526ZM149.031 102.04L142.431 118.16H140.551L142.711 112.88L138.291 102.04H140.311L143.751 110.92L147.151 102.04H149.031Z"
//         fill="white"
//       />
//       <Path
//         d="M38.104 172.352V170.288L46.168 158.72H49.48V169.976H51.712V172.352H49.48V176H46.792V172.352H38.104ZM46.912 161.504L41.248 169.976H46.912V161.504ZM58.3471 171.248C58.5071 172.048 58.8511 172.656 59.3791 173.072C59.9071 173.488 60.6191 173.696 61.5151 173.696C62.6511 173.696 63.4831 173.248 64.0111 172.352C64.5391 171.456 64.8031 169.928 64.8031 167.768C64.4191 168.312 63.8751 168.736 63.1711 169.04C62.4831 169.328 61.7311 169.472 60.9151 169.472C59.8751 169.472 58.9311 169.264 58.0831 168.848C57.2351 168.416 56.5631 167.784 56.0671 166.952C55.5871 166.104 55.3471 165.08 55.3471 163.88C55.3471 162.12 55.8591 160.72 56.8831 159.68C57.9231 158.624 59.3471 158.096 61.1551 158.096C63.3311 158.096 64.8751 158.824 65.7871 160.28C66.7151 161.72 67.1791 163.936 67.1791 166.928C67.1791 168.992 67.0031 170.68 66.6511 171.992C66.3151 173.304 65.7231 174.296 64.8751 174.968C64.0271 175.64 62.8511 175.976 61.3471 175.976C59.6351 175.976 58.3151 175.528 57.3871 174.632C56.4591 173.736 55.9391 172.608 55.8271 171.248H58.3471ZM61.3951 167.168C62.3551 167.168 63.1071 166.872 63.6511 166.28C64.2111 165.672 64.4911 164.872 64.4911 163.88C64.4911 162.776 64.1951 161.92 63.6031 161.312C63.0271 160.688 62.2351 160.376 61.2271 160.376C60.2191 160.376 59.4191 160.696 58.8271 161.336C58.2511 161.96 57.9631 162.784 57.9631 163.808C57.9631 164.784 58.2431 165.592 58.8031 166.232C59.3791 166.856 60.2431 167.168 61.3951 167.168ZM70.7735 161V158.504H75.7655V176H73.0055V161H70.7735ZM80.4361 162.824C80.5321 161.336 81.1001 160.176 82.1401 159.344C83.1961 158.512 84.5401 158.096 86.1721 158.096C87.2921 158.096 88.2601 158.296 89.0761 158.696C89.8921 159.096 90.5081 159.64 90.9241 160.328C91.3401 161.016 91.5481 161.792 91.5481 162.656C91.5481 163.648 91.2841 164.496 90.7561 165.2C90.2281 165.904 89.5961 166.376 88.8601 166.616V166.712C89.8041 167 90.5401 167.528 91.0681 168.296C91.5961 169.048 91.8601 170.016 91.8601 171.2C91.8601 172.144 91.6441 172.984 91.2121 173.72C90.7801 174.456 90.1401 175.04 89.2921 175.472C88.4441 175.888 87.4281 176.096 86.2441 176.096C84.5161 176.096 83.0921 175.656 81.9721 174.776C80.8681 173.88 80.2761 172.6 80.1961 170.936H82.8361C82.9001 171.784 83.2281 172.48 83.8201 173.024C84.4121 173.552 85.2121 173.816 86.2201 173.816C87.1961 173.816 87.9481 173.552 88.4761 173.024C89.0041 172.48 89.2681 171.784 89.2681 170.936C89.2681 169.816 88.9081 169.024 88.1881 168.56C87.4841 168.08 86.3961 167.84 84.9241 167.84H84.3001V165.584H84.9481C86.2441 165.568 87.2281 165.352 87.9001 164.936C88.5881 164.52 88.9321 163.864 88.9321 162.968C88.9321 162.2 88.6841 161.592 88.1881 161.144C87.6921 160.68 86.9881 160.448 86.0761 160.448C85.1801 160.448 84.4841 160.68 83.9881 161.144C83.4921 161.592 83.1961 162.152 83.1001 162.824H80.4361ZM105.102 162.56C104.926 161.824 104.606 161.272 104.142 160.904C103.678 160.536 103.03 160.352 102.198 160.352C100.934 160.352 99.9901 160.84 99.3661 161.816C98.7421 162.776 98.4141 164.376 98.3821 166.616C98.7981 165.912 99.4061 165.368 100.206 164.984C101.006 164.6 101.87 164.408 102.798 164.408C103.854 164.408 104.782 164.64 105.582 165.104C106.398 165.552 107.03 166.208 107.478 167.072C107.942 167.936 108.174 168.968 108.174 170.168C108.174 171.288 107.95 172.288 107.502 173.168C107.07 174.048 106.422 174.744 105.558 175.256C104.694 175.752 103.654 176 102.438 176C100.79 176 99.4941 175.64 98.5501 174.92C97.6221 174.184 96.9661 173.152 96.5821 171.824C96.2141 170.496 96.0301 168.84 96.0301 166.856C96.0301 161 98.0941 158.072 102.222 158.072C103.822 158.072 105.078 158.504 105.99 159.368C106.918 160.232 107.462 161.296 107.622 162.56H105.102ZM102.198 166.712C101.222 166.712 100.39 167.008 99.7021 167.6C99.0301 168.176 98.6941 169.016 98.6941 170.12C98.6941 171.224 99.0061 172.104 99.6301 172.76C100.27 173.4 101.158 173.72 102.294 173.72C103.302 173.72 104.094 173.408 104.67 172.784C105.262 172.16 105.558 171.328 105.558 170.288C105.558 169.2 105.27 168.336 104.694 167.696C104.134 167.04 103.302 166.712 102.198 166.712ZM113.517 176.168C113.021 176.168 112.605 176 112.269 175.664C111.933 175.328 111.765 174.912 111.765 174.416C111.765 173.92 111.933 173.504 112.269 173.168C112.605 172.832 113.021 172.664 113.517 172.664C113.997 172.664 114.405 172.832 114.741 173.168C115.077 173.504 115.245 173.92 115.245 174.416C115.245 174.912 115.077 175.328 114.741 175.664C114.405 176 113.997 176.168 113.517 176.168ZM118.466 172.352V170.288L126.53 158.72H129.842V169.976H132.074V172.352H129.842V176H127.154V172.352H118.466ZM127.274 161.504L121.61 169.976H127.274V161.504ZM135.301 167.024C135.301 164.256 135.765 162.096 136.693 160.544C137.637 158.976 139.253 158.192 141.541 158.192C143.829 158.192 145.437 158.976 146.365 160.544C147.309 162.096 147.781 164.256 147.781 167.024C147.781 169.824 147.309 172.016 146.365 173.6C145.437 175.168 143.829 175.952 141.541 175.952C139.253 175.952 137.637 175.168 136.693 173.6C135.765 172.016 135.301 169.824 135.301 167.024ZM145.093 167.024C145.093 165.728 145.005 164.632 144.829 163.736C144.669 162.84 144.333 162.112 143.821 161.552C143.309 160.976 142.549 160.688 141.541 160.688C140.533 160.688 139.773 160.976 139.261 161.552C138.749 162.112 138.405 162.84 138.229 163.736C138.069 164.632 137.989 165.728 137.989 167.024C137.989 168.368 138.069 169.496 138.229 170.408C138.389 171.32 138.725 172.056 139.237 172.616C139.765 173.176 140.533 173.456 141.541 173.456C142.549 173.456 143.309 173.176 143.821 172.616C144.349 172.056 144.693 171.32 144.853 170.408C145.013 169.496 145.093 168.368 145.093 167.024Z"
//         fill="white"
//       />
//       <Path
//         d="M43.972 198.26V199.604H38.218V198.26H43.972ZM46.9115 201.83C47.8075 201.055 48.5121 200.421 49.0255 199.926C49.5481 199.422 49.9821 198.899 50.3275 198.358C50.6728 197.817 50.8455 197.275 50.8455 196.734C50.8455 196.174 50.7101 195.735 50.4395 195.418C50.1781 195.101 49.7628 194.942 49.1935 194.942C48.6428 194.942 48.2135 195.119 47.9055 195.474C47.6068 195.819 47.4481 196.286 47.4295 196.874H45.8895C45.9175 195.81 46.2348 194.998 46.8415 194.438C47.4575 193.869 48.2368 193.584 49.1795 193.584C50.1968 193.584 50.9901 193.864 51.5595 194.424C52.1381 194.984 52.4275 195.731 52.4275 196.664C52.4275 197.336 52.2548 197.985 51.9095 198.61C51.5735 199.226 51.1675 199.781 50.6915 200.276C50.2248 200.761 49.6275 201.326 48.8995 201.97L48.2695 202.53H52.7075V203.86H45.9035V202.698L46.9115 201.83ZM53.9135 201.872V200.668L58.6175 193.92H60.5495V200.486H61.8515V201.872H60.5495V204H58.9815V201.872H53.9135ZM59.0515 195.544L55.7475 200.486H59.0515V195.544ZM69.754 195.166H65.064V197.952C65.26 197.691 65.5493 197.471 65.932 197.294C66.324 197.117 66.7393 197.028 67.178 197.028C67.962 197.028 68.5967 197.196 69.082 197.532C69.5767 197.868 69.9267 198.293 70.132 198.806C70.3467 199.319 70.454 199.861 70.454 200.43C70.454 201.121 70.3187 201.737 70.048 202.278C69.7867 202.81 69.39 203.23 68.858 203.538C68.3353 203.846 67.6913 204 66.926 204C65.9087 204 65.092 203.748 64.476 203.244C63.86 202.74 63.4913 202.073 63.37 201.242H64.924C65.0267 201.681 65.2553 202.031 65.61 202.292C65.9647 202.544 66.408 202.67 66.94 202.67C67.6027 202.67 68.0973 202.469 68.424 202.068C68.76 201.667 68.928 201.135 68.928 200.472C68.928 199.8 68.76 199.287 68.424 198.932C68.088 198.568 67.5933 198.386 66.94 198.386C66.4827 198.386 66.0953 198.503 65.778 198.736C65.47 198.96 65.246 199.268 65.106 199.66H63.594V193.766H69.754V195.166ZM72.9694 204.098C72.6801 204.098 72.4374 204 72.2414 203.804C72.0454 203.608 71.9474 203.365 71.9474 203.076C71.9474 202.787 72.0454 202.544 72.2414 202.348C72.4374 202.152 72.6801 202.054 72.9694 202.054C73.2494 202.054 73.4874 202.152 73.6834 202.348C73.8794 202.544 73.9774 202.787 73.9774 203.076C73.9774 203.365 73.8794 203.608 73.6834 203.804C73.4874 204 73.2494 204.098 72.9694 204.098ZM77.4804 201.228C77.5737 201.695 77.7744 202.049 78.0824 202.292C78.3904 202.535 78.8057 202.656 79.3284 202.656C79.991 202.656 80.4764 202.395 80.7844 201.872C81.0924 201.349 81.2464 200.458 81.2464 199.198C81.0224 199.515 80.705 199.763 80.2944 199.94C79.893 200.108 79.4544 200.192 78.9784 200.192C78.3717 200.192 77.821 200.071 77.3264 199.828C76.8317 199.576 76.4397 199.207 76.1504 198.722C75.8704 198.227 75.7304 197.63 75.7304 196.93C75.7304 195.903 76.029 195.087 76.6264 194.48C77.233 193.864 78.0637 193.556 79.1184 193.556C80.3877 193.556 81.2884 193.981 81.8204 194.83C82.3617 195.67 82.6324 196.963 82.6324 198.708C82.6324 199.912 82.5297 200.897 82.3244 201.662C82.1284 202.427 81.783 203.006 81.2884 203.398C80.7937 203.79 80.1077 203.986 79.2304 203.986C78.2317 203.986 77.4617 203.725 76.9204 203.202C76.379 202.679 76.0757 202.021 76.0104 201.228H77.4804ZM79.2584 198.848C79.8184 198.848 80.257 198.675 80.5744 198.33C80.901 197.975 81.0644 197.509 81.0644 196.93C81.0644 196.286 80.8917 195.787 80.5464 195.432C80.2104 195.068 79.7484 194.886 79.1604 194.886C78.5724 194.886 78.1057 195.073 77.7604 195.446C77.4244 195.81 77.2564 196.291 77.2564 196.888C77.2564 197.457 77.4197 197.929 77.7464 198.302C78.0824 198.666 78.5864 198.848 79.2584 198.848ZM90.9591 195.166H86.2691V197.952C86.4651 197.691 86.7544 197.471 87.1371 197.294C87.5291 197.117 87.9444 197.028 88.3831 197.028C89.1671 197.028 89.8017 197.196 90.2871 197.532C90.7817 197.868 91.1317 198.293 91.3371 198.806C91.5517 199.319 91.6591 199.861 91.6591 200.43C91.6591 201.121 91.5237 201.737 91.2531 202.278C90.9917 202.81 90.5951 203.23 90.0631 203.538C89.5404 203.846 88.8964 204 88.1311 204C87.1137 204 86.2971 203.748 85.6811 203.244C85.0651 202.74 84.6964 202.073 84.5751 201.242H86.1291C86.2317 201.681 86.4604 202.031 86.8151 202.292C87.1697 202.544 87.6131 202.67 88.1451 202.67C88.8077 202.67 89.3024 202.469 89.6291 202.068C89.9651 201.667 90.1331 201.135 90.1331 200.472C90.1331 199.8 89.9651 199.287 89.6291 198.932C89.2931 198.568 88.7984 198.386 88.1451 198.386C87.6877 198.386 87.3004 198.503 86.9831 198.736C86.6751 198.96 86.4511 199.268 86.3111 199.66H84.7991V193.766H90.9591V195.166Z"
//         fill="#D11515"
//       />
//       <Path
//         d="M100.695 206.604C99.7805 205.727 99.0759 204.611 98.5812 203.258C98.0959 201.905 97.8532 200.453 97.8532 198.904C97.8532 197.317 98.1145 195.819 98.6372 194.41C99.1692 193.001 99.9485 191.839 100.975 190.924H102.627V191.078C101.554 192.067 100.747 193.253 100.205 194.634C99.6639 196.015 99.3932 197.439 99.3932 198.904C99.3932 200.313 99.6452 201.676 100.149 202.992C100.653 204.308 101.386 205.461 102.347 206.45V206.604H100.695ZM109.98 198.26V199.604H104.226V198.26H109.98ZM112.037 198.764C112.037 197.149 112.308 195.889 112.849 194.984C113.4 194.069 114.343 193.612 115.677 193.612C117.012 193.612 117.95 194.069 118.491 194.984C119.042 195.889 119.317 197.149 119.317 198.764C119.317 200.397 119.042 201.676 118.491 202.6C117.95 203.515 117.012 203.972 115.677 203.972C114.343 203.972 113.4 203.515 112.849 202.6C112.308 201.676 112.037 200.397 112.037 198.764ZM117.749 198.764C117.749 198.008 117.698 197.369 117.595 196.846C117.502 196.323 117.306 195.899 117.007 195.572C116.709 195.236 116.265 195.068 115.677 195.068C115.089 195.068 114.646 195.236 114.347 195.572C114.049 195.899 113.848 196.323 113.745 196.846C113.652 197.369 113.605 198.008 113.605 198.764C113.605 199.548 113.652 200.206 113.745 200.738C113.839 201.27 114.035 201.699 114.333 202.026C114.641 202.353 115.089 202.516 115.677 202.516C116.265 202.516 116.709 202.353 117.007 202.026C117.315 201.699 117.516 201.27 117.609 200.738C117.703 200.206 117.749 199.548 117.749 198.764ZM121.86 204.098C121.571 204.098 121.328 204 121.132 203.804C120.936 203.608 120.838 203.365 120.838 203.076C120.838 202.787 120.936 202.544 121.132 202.348C121.328 202.152 121.571 202.054 121.86 202.054C122.14 202.054 122.378 202.152 122.574 202.348C122.77 202.544 122.868 202.787 122.868 203.076C122.868 203.365 122.77 203.608 122.574 203.804C122.378 204 122.14 204.098 121.86 204.098ZM124.187 201.872V200.668L128.891 193.92H130.823V200.486H132.125V201.872H130.823V204H129.255V201.872H124.187ZM129.325 195.544L126.021 200.486H129.325V195.544ZM135.169 198.666C134.199 198.181 133.713 197.415 133.713 196.37C133.713 195.866 133.839 195.404 134.091 194.984C134.343 194.564 134.721 194.233 135.225 193.99C135.729 193.738 136.345 193.612 137.073 193.612C137.792 193.612 138.403 193.738 138.907 193.99C139.421 194.233 139.803 194.564 140.055 194.984C140.307 195.404 140.433 195.866 140.433 196.37C140.433 196.893 140.298 197.355 140.027 197.756C139.766 198.148 139.416 198.451 138.977 198.666C139.509 198.862 139.929 199.184 140.237 199.632C140.545 200.071 140.699 200.589 140.699 201.186C140.699 201.793 140.545 202.329 140.237 202.796C139.929 203.263 139.5 203.622 138.949 203.874C138.399 204.126 137.773 204.252 137.073 204.252C136.373 204.252 135.748 204.126 135.197 203.874C134.656 203.622 134.231 203.263 133.923 202.796C133.615 202.329 133.461 201.793 133.461 201.186C133.461 200.579 133.615 200.057 133.923 199.618C134.231 199.179 134.647 198.862 135.169 198.666ZM138.907 196.566C138.907 196.043 138.744 195.642 138.417 195.362C138.091 195.082 137.643 194.942 137.073 194.942C136.513 194.942 136.07 195.082 135.743 195.362C135.417 195.642 135.253 196.048 135.253 196.58C135.253 197.047 135.421 197.429 135.757 197.728C136.103 198.017 136.541 198.162 137.073 198.162C137.605 198.162 138.044 198.013 138.389 197.714C138.735 197.415 138.907 197.033 138.907 196.566ZM137.073 199.366C136.457 199.366 135.953 199.52 135.561 199.828C135.179 200.127 134.987 200.561 134.987 201.13C134.987 201.662 135.174 202.096 135.547 202.432C135.921 202.759 136.429 202.922 137.073 202.922C137.708 202.922 138.207 202.754 138.571 202.418C138.945 202.082 139.131 201.653 139.131 201.13C139.131 200.57 138.94 200.136 138.557 199.828C138.184 199.52 137.689 199.366 137.073 199.366ZM142.123 196.258C142.123 195.577 142.319 195.045 142.711 194.662C143.113 194.27 143.626 194.074 144.251 194.074C144.877 194.074 145.385 194.27 145.777 194.662C146.179 195.045 146.379 195.577 146.379 196.258C146.379 196.939 146.179 197.476 145.777 197.868C145.385 198.26 144.877 198.456 144.251 198.456C143.626 198.456 143.113 198.26 142.711 197.868C142.319 197.476 142.123 196.939 142.123 196.258ZM150.663 194.256L145.077 204H143.509L149.095 194.256H150.663ZM144.251 195.04C143.663 195.04 143.369 195.446 143.369 196.258C143.369 197.079 143.663 197.49 144.251 197.49C144.531 197.49 144.746 197.392 144.895 197.196C145.054 196.991 145.133 196.678 145.133 196.258C145.133 195.446 144.839 195.04 144.251 195.04ZM147.821 201.984C147.821 201.303 148.017 200.771 148.409 200.388C148.811 199.996 149.324 199.8 149.949 199.8C150.565 199.8 151.069 199.996 151.461 200.388C151.863 200.771 152.063 201.303 152.063 201.984C152.063 202.665 151.863 203.202 151.461 203.594C151.069 203.986 150.565 204.182 149.949 204.182C149.324 204.182 148.811 203.986 148.409 203.594C148.017 203.202 147.821 202.665 147.821 201.984ZM149.935 200.766C149.347 200.766 149.053 201.172 149.053 201.984C149.053 202.796 149.347 203.202 149.935 203.202C150.523 203.202 150.817 202.796 150.817 201.984C150.817 201.172 150.523 200.766 149.935 200.766ZM153.308 206.604V206.45C154.27 205.461 155.002 204.308 155.506 202.992C156.01 201.676 156.262 200.313 156.262 198.904C156.262 197.439 155.992 196.015 155.45 194.634C154.909 193.253 154.102 192.067 153.028 191.078V190.924H154.68C155.707 191.839 156.482 193.001 157.004 194.41C157.536 195.819 157.802 197.317 157.802 198.904C157.802 200.453 157.555 201.905 157.06 203.258C156.575 204.611 155.875 205.727 154.96 206.604H153.308Z"
//         fill="white"
//       />
//       <Path
//         d="M59.75 136H58.476L53.352 128.23V136H52.078V126.228H53.352L58.476 133.984V126.228H59.75V136ZM65.0158 136.098C64.3718 136.098 63.7931 135.986 63.2798 135.762C62.7758 135.529 62.3791 135.211 62.0898 134.81C61.8004 134.399 61.6511 133.928 61.6418 133.396H62.9998C63.0464 133.853 63.2331 134.241 63.5598 134.558C63.8958 134.866 64.3811 135.02 65.0158 135.02C65.6224 135.02 66.0984 134.871 66.4438 134.572C66.7984 134.264 66.9758 133.872 66.9758 133.396C66.9758 133.023 66.8731 132.719 66.6678 132.486C66.4624 132.253 66.2058 132.075 65.8978 131.954C65.5898 131.833 65.1744 131.702 64.6518 131.562C64.0078 131.394 63.4898 131.226 63.0978 131.058C62.7151 130.89 62.3838 130.629 62.1038 130.274C61.8331 129.91 61.6978 129.425 61.6978 128.818C61.6978 128.286 61.8331 127.815 62.1038 127.404C62.3744 126.993 62.7524 126.676 63.2378 126.452C63.7324 126.228 64.2971 126.116 64.9318 126.116C65.8464 126.116 66.5931 126.345 67.1718 126.802C67.7598 127.259 68.0911 127.866 68.1658 128.622H66.7658C66.7191 128.249 66.5231 127.922 66.1778 127.642C65.8324 127.353 65.3751 127.208 64.8058 127.208C64.2738 127.208 63.8398 127.348 63.5038 127.628C63.1678 127.899 62.9998 128.281 62.9998 128.776C62.9998 129.131 63.0978 129.42 63.2938 129.644C63.4991 129.868 63.7464 130.041 64.0358 130.162C64.3344 130.274 64.7498 130.405 65.2818 130.554C65.9258 130.731 66.4438 130.909 66.8358 131.086C67.2278 131.254 67.5638 131.52 67.8438 131.884C68.1238 132.239 68.2638 132.724 68.2638 133.34C68.2638 133.816 68.1378 134.264 67.8858 134.684C67.6338 135.104 67.2604 135.445 66.7658 135.706C66.2711 135.967 65.6878 136.098 65.0158 136.098ZM71.4126 127.278V130.54H74.9686V131.59H71.4126V134.95H75.3886V136H70.1386V126.228H75.3886V127.278H71.4126Z"
//         fill="#A1A1A1"
//       />
//       <G filter="url(#filter3_f_249_3716)">
//         <Circle cx={174} cy={183} r={4} fill="#CB05D6" fillOpacity={0.9} />
//       </G>
//       <Path
//         d="M163 221L94.2646 331L85.2337 326.5L67.6736 314L46.6014 289.5L38.5739 278.5L31.5498 265L24.5258 248L21.0138 238L18.0035 228.5L17 221H18.0035H163Z"
//         fill="url(#pattern0_249_3716)"
//       />
//       <Defs>
//         <Pattern
//           id="pattern0_249_3716"
//           patternContentUnits="objectBoundingBox"
//           width={7.0137}
//           height={9.30909}
//         >
//           <Use
//             xlinkHref="#image0_249_3716"
//             transform="scale(0.00684932 0.00909091)"
//           />
//         </Pattern>
//         <RadialGradient
//           id="paint0_radial_249_3716"
//           cx={0}
//           cy={0}
//           r={1}
//           gradientUnits="userSpaceOnUse"
//           gradientTransform="translate(170.5 302) rotate(90) scale(136 253.964)"
//         >
//           <Stop stopColor="white" />
//           <Stop offset={1} stopColor="white" stopOpacity={0.2} />
//         </RadialGradient>
//         <ClipPath id="clip0_249_3716">
//           <Rect
//             width={330}
//             height={135}
//             fill="white"
//             transform="translate(23 8)"
//           />
//         </ClipPath>
//       </Defs>
//     </Svg>
//   );
// };
