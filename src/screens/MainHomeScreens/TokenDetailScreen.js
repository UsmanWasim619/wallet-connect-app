import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Image,
  Animated,
} from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { BlurView } from "expo-blur";
import { GradientHOC } from "../../HOC/GradientHOC";
import CommonHeader from "../../components/CommonHeader";
import Glassmorphism from "../../components/Glassmorphism";

const { width: screenWidth } = Dimensions.get("window");

// Time period options for chart
const TIME_PERIODS = ["1D", "1W", "1M", "3M", "1Y", "All"];

const TokenScreen = ({ navigation }) => {
  const [selectedPeriod, setSelectedPeriod] = useState("1W");
  const [animatedPrice] = useState(new Animated.Value(0));
  const [priceDirection, setPriceDirection] = useState("up"); // 'up' or 'down'

  // Sample token data
  const tokenData = {
    name: "Future",
    symbol: "FTR",
    currentPrice: 2876.45,
    priceChangePercent: 4.32,
    high24h: 2912.78,
    low24h: 2788.21,
    marketCap: "128.4B",
    volume24h: "5.2B",
    circulatingSupply: "45.6M",
    totalSupply: "100M",
    allTimeHigh: 3245.67,
    allTimeLow: 1023.45,
  };

  // Line chart data for react-native-gifted-charts
  const lineData = [
    { value: 20, dataPointText: "20", label: "Jan" },
    { value: 45, dataPointText: "45", label: "Feb" },
    { value: 28, dataPointText: "28", label: "Mar" },
    { value: 80, dataPointText: "80", label: "Apr" },
    { value: 99, dataPointText: "99", label: "May" },
    { value: 120, dataPointText: "120", label: "Jun" },
  ];

  // Simulate live price updates
  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.random();
      const newDirection = random > 0.5 ? "up" : "down";
      setPriceDirection(newDirection);

      Animated.sequence([
        Animated.timing(animatedPrice, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(animatedPrice, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const priceColor = tokenData.priceChangePercent >= 0 ? "#4CD964" : "#FF3B30";

  const priceScale = animatedPrice.interpolate({
    inputRange: [0, 1],
    outputRange: [1, priceDirection === "up" ? 1.05 : 0.95],
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <CommonHeader screenName={"Token details"} />
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Price Card */}
        <View style={styles.priceCard}>
          <Glassmorphism padding={10} height={200}>
            {/* <BlurView intensity={20} tint="dark" style={styles.blurContainer}> */}
            <View style={styles.priceContainer}>
              <Text style={styles.priceLabel}>Current Price</Text>
              <View style={styles.priceRow}>
                <Animated.Text
                  style={[
                    styles.priceValue,
                    { transform: [{ scale: priceScale }] },
                  ]}
                >
                  ₹{tokenData.currentPrice.toLocaleString()}
                </Animated.Text>
                <View
                  style={[
                    styles.changeContainer,
                    { backgroundColor: `${priceColor}20` },
                  ]}
                >
                  <Text style={[styles.changeText, { color: priceColor }]}>
                    {tokenData.priceChangePercent >= 0 ? "+" : ""}
                    {tokenData.priceChangePercent}%
                  </Text>
                </View>
              </View>
            </View>

            {/* High/Low Indicator */}
            <View style={styles.highLowContainer}>
              <Text style={styles.highLowLabel}>24h Low</Text>
              <View style={styles.highLowBar}>
                <View style={styles.highLowBarBackground} />
                <View
                  style={[
                    styles.highLowBarFill,
                    {
                      width: `${
                        ((tokenData.currentPrice - tokenData.low24h) /
                          (tokenData.high24h - tokenData.low24h)) *
                        100
                      }%`,
                    },
                  ]}
                />
                <View style={styles.highLowIndicator} />
              </View>
              <Text style={styles.highLowLabel}>24h High</Text>
            </View>

            <View style={styles.highLowValues}>
              <Text style={styles.highLowValueText}>
                ₹{tokenData.low24h.toLocaleString()}
              </Text>
              <Text
                style={[
                  styles.highLowValueText,
                  { textAlign: "right", paddingRight: 10 },
                ]}
              >
                ₹{tokenData.high24h.toLocaleString()}
              </Text>
            </View>
            {/* </BlurView> */}
          </Glassmorphism>
        </View>

        {/* Chart Card */}
        <View style={styles.chartCard}>
          <Glassmorphism padding={10} height={380}>
            <View style={styles.chartHeader}>
              <Text style={styles.chartTitle}>Price Chart</Text>
              <View style={styles.periodSelector}>
                {TIME_PERIODS.map((period) => (
                  <TouchableOpacity
                    key={period}
                    style={[
                      styles.periodButton,
                      selectedPeriod === period && styles.selectedPeriodButton,
                    ]}
                    onPress={() => setSelectedPeriod(period)}
                  >
                    <Text
                      style={[
                        styles.periodButtonText,
                        selectedPeriod === period &&
                          styles.selectedPeriodButtonText,
                      ]}
                    >
                      {period}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <LineChart
              data={lineData}
              width={screenWidth - 60}
              height={170}
              // spacing={screenWidth / 10}
              initialSpacing={10}
              color="#8441f4"
              thickness={2}
              startFillColor="rgba(134, 65, 244, 0.8)"
              endFillColor="rgba(134, 65, 244, 0.1)"
              startOpacity={0.8}
              endOpacity={0.1}
              noOfSections={5}
              curved
              hideRules
              hideYAxisText
              yAxisColor="rgba(255,255,255,0.1)"
              xAxisColor="rgba(255,255,255,0.1)"
              pointerConfig={{
                pointerStripHeight: 160,
                pointerStripColor: "rgba(255,255,255,0.1)",
                pointerStripWidth: 2,
                pointerColor: "#8441f4",
                radius: 6,
                pointerLabelWidth: 60,
                pointerLabelHeight: 30,
                pointerLabelComponent: (items) => {
                  console.log("items: ", items);
                  return (
                    <View
                      style={{
                        height: 30,
                        width: 60,
                        backgroundColor: "#8441f4",
                        borderRadius: 4,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ color: "white", fontSize: 12 }}>
                        {items[0].value}
                      </Text>
                    </View>
                  );
                },
              }}
              hideDataPoints={false}
              dataPointsColor="#8441f4"
              dataPointsRadius={5}
              focusEnabled
              showStripOnFocus
              showTextOnFocus
              animateOnDataChange
              animationDuration={1000}
              onDataChangeAnimationDuration={300}
              xAxisLabelTextStyle={{
                color: "rgba(255,255,255,0.6)",
                fontSize: 10,
              }}
              xAxisIndicesHeight={10}
              xAxisIndicesColor="rgba(255,255,255,0.3)"
              rulesType="solid"
              rulesColor="rgba(255,255,255,0.1)"
              showReferenceLine1
              referenceLine1Position={80}
              referenceLine1Config={{
                type: "dashed",
                color: "rgba(255,255,255,0.2)",
                dashWidth: 5,
                dashGap: 3,
              }}
            />
          </Glassmorphism>
        </View>

        {/* Token Stats Card */}
        <View style={styles.statsCard}>
          <BlurView intensity={20} tint="dark" style={styles.blurContainer}>
            <Text style={styles.sectionTitle}>Token Statistics</Text>

            <View style={styles.statRow}>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Market Cap</Text>
                <Text style={styles.statValue}>₹{tokenData.marketCap}</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>24h Volume</Text>
                <Text style={styles.statValue}>₹{tokenData.volume24h}</Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.statRow}>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Circulating Supply</Text>
                <Text style={styles.statValue}>
                  {tokenData.circulatingSupply} {tokenData.symbol}
                </Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Total Supply</Text>
                <Text style={styles.statValue}>
                  {tokenData.totalSupply} {tokenData.symbol}
                </Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.statRow}>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>All Time High</Text>
                <Text style={styles.statValue}>
                  ₹{tokenData.allTimeHigh.toLocaleString()}
                </Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>All Time Low</Text>
                <Text style={styles.statValue}>
                  ₹{tokenData.allTimeLow.toLocaleString()}
                </Text>
              </View>
            </View>
          </BlurView>
        </View>

        {/* About Card */}
        <View style={styles.aboutCard}>
          <BlurView intensity={20} tint="dark" style={styles.blurContainer}>
            <Text style={styles.sectionTitle}>About {tokenData.name}</Text>
            <Text style={styles.aboutText}>
              Future (FTR) is a next-generation cryptocurrency designed to
              revolutionize decentralized finance. Built on a highly scalable
              blockchain architecture, Future offers lightning-fast transactions
              with minimal fees while maintaining robust security and
              decentralization.
            </Text>
            <TouchableOpacity style={styles.readMoreButton}>
              <Text style={styles.readMoreText}>Read More</Text>
            </TouchableOpacity>
          </BlurView>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={[styles.actionButton, styles.buyButton]}>
            <Text style={styles.actionButtonText}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.sellButton]}>
            <Text style={styles.actionButtonText}>Sell</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#121212",
  },
  //   header: {
  //     flexDirection: "row",
  //     alignItems: "center",
  //     justifyContent: "space-between",
  //     paddingTop: 60,
  //     paddingBottom: 20,
  //     paddingHorizontal: 20,
  //   },

  header: {
    paddingBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  backButtonText: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  tokenLogo: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginRight: 8,
  },
  tokenSymbol: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.6)",
  },
  favoriteButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  favoriteButtonText: {
    fontSize: 20,
    color: "#FFD700",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  priceCard: {
    borderRadius: 16,
    // overflow: "hidden",
    marginBottom: 20,
  },
  blurContainer: {
    overflow: "hidden",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: 20,
  },
  priceContainer: {
    marginBottom: 20,
  },
  priceLabel: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.6)",
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceValue: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginRight: 12,
  },
  changeContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  changeText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  highLowContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  highLowLabel: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.6)",
    width: 60,
  },
  highLowBar: {
    flex: 1,
    height: 4,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 2,
    marginHorizontal: 10,
    position: "relative",
  },
  highLowBarBackground: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 2,
  },
  highLowBarFill: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#4CD964",
    borderRadius: 2,
  },
  highLowIndicator: {
    position: "absolute",
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    top: -2,
    marginLeft: -4,
    left: "50%",
  },
  highLowValues: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  highLowValueText: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.6)",
    width: 80,
  },

  chartCard: {
    // borderRadius: 16,
    // overflow: "hidden",
    marginBottom: 20,
  },
  chartHeader: {
    marginBottom: 20,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 15,
  },
  periodSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 8,
    padding: 4,
  },
  periodButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  selectedPeriodButton: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
  periodButtonText: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.6)",
  },
  selectedPeriodButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  chartContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  statsCard: {
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  statItem: {
    flex: 1,
  },
  statLabel: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.6)",
    marginBottom: 4,
  },
  statValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    marginVertical: 15,
  },
  aboutCard: {
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 20, // Extra space for action buttons
  },
  aboutText: {
    fontSize: 14,
    lineHeight: 22,
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: 15,
  },
  readMoreButton: {
    alignSelf: "flex-start",
  },
  readMoreText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4CD964",
  },
  actionButtonsContainer: {
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    // right: 0,
    flexDirection: "row",
    paddingHorizontal: 20,
    // paddingBottom: 20,
    // backgroundColor: "rgba(18, 18, 18, 0.9)",
    borderTopWidth: 1,
    // borderTopColor: "rgba(255, 255, 255, 0.1)",
    marginBottom: "25%",
  },
  actionButton: {
    flex: 1,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 6,
  },
  buyButton: {
    backgroundColor: "#4CD964",
  },
  sellButton: {
    backgroundColor: "#FF3B30",
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default GradientHOC(TokenScreen);
