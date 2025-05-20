import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { GradientHOC } from "../../HOC/GradientHOC";
import CommonHeader from "../../components/CommonHeader";
import HorizontalLine from "../../components/HorizontalLine";
import Glassmorphism from "../../components/Glassmorphism";

const screenWidth = Dimensions.get("window").width;

// Sample transaction data
const transactions = [
  {
    id: "1",
    type: "Deposit",
    amount: "+₹2,500.00",
    source: "Bank Transfer",
    date: "15 May, 2025",
    time: "10:23 AM",
    icon: "🏦",
  },
  {
    id: "2",
    type: "Investment",
    amount: "-₹1,200.00",
    source: "Stock Purchase - AAPL",
    date: "12 May, 2025",
    time: "2:45 PM",
    icon: "📈",
  },
  {
    id: "3",
    type: "Dividend",
    amount: "+₹85.50",
    source: "MSFT Quarterly Dividend",
    date: "10 May, 2025",
    time: "9:00 AM",
    icon: "💰",
  },
  {
    id: "4",
    type: "Withdrawal",
    amount: "-₹500.00",
    source: "To Checking Account",
    date: "5 May, 2025",
    time: "4:30 PM",
    icon: "💸",
  },
  {
    id: "5",
    type: "Interest",
    amount: "+₹12.75",
    source: "Savings Interest",
    date: "1 May, 2025",
    time: "12:00 AM",
    icon: "✨",
  },
];

// Line chart data for react-native-gifted-charts
const lineData = [
  { value: 20, dataPointText: "20", label: "Jan" },
  { value: 45, dataPointText: "45", label: "Feb" },
  { value: 28, dataPointText: "28", label: "Mar" },
  { value: 80, dataPointText: "80", label: "Apr" },
  { value: 99, dataPointText: "99", label: "May" },
  { value: 120, dataPointText: "120", label: "Jun" },
];

const WalletScreen = () => {
  // Render each transaction item
  const renderTransactionItem = ({ item }) => (
    <>
      <TouchableOpacity style={styles.transactionItem}>
        <View style={styles.transactionIconContainer}>
          <Text style={styles.transactionIcon}>{item.icon}</Text>
        </View>
        <View style={styles.transactionDetails}>
          <View>
            <Text style={styles.transactionType}>{item.type}</Text>
            <Text style={styles.transactionSource}>{item.source}</Text>
          </View>
          <View>
            <Text
              style={[
                styles.transactionAmount,
                item.amount.includes("+")
                  ? styles.positiveAmount
                  : styles.negativeAmount,
              ]}
            >
              {item.amount}
            </Text>
            <Text style={styles.transactionDate}>
              {item.date} • {item.time}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <HorizontalLine />
    </>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <CommonHeader screenName={"My Wallet"} />
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Glassmorphism Card */}
        <View style={styles.cardContainer}>
          <Glassmorphism padding={10} height={380}>
            <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>Investment Portfolio</Text>
                <TouchableOpacity style={styles.moreButton}>
                  <Text style={styles.moreButtonText}>Details</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                  <Text style={styles.statLabel}>Total Investment</Text>
                  <Text style={styles.statValue}>₹8,750.00</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statLabel}>Total Profit</Text>
                  <Text style={[styles.statValue, styles.profitValue]}>
                    ₹1,245.75
                  </Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statLabel}>Profit %</Text>
                  <Text style={[styles.statValue, styles.profitValue]}>
                    +14.2%
                  </Text>
                </View>
              </View>
            </View>

            {/* Gifted Charts LineChart */}
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

        {/* Transaction History Section */}
        <View style={styles.transactionsContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Transaction History</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={transactions}
            renderItem={renderTransactionItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: "15%",
  },
  header: {
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
  },
  cardContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 24,
    // overflow: "hidden",
    height: "auto",
  },
  cardContent: {
    paddingTop: 25,
    paddingHorizontal: 20,
    flex: 1,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  moreButton: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  moreButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
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
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  profitValue: {
    color: "#4CD964",
  },
  chartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  transactionsContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  seeAllText: {
    color: "#a1a1a1",
    fontSize: 14,
    fontWeight: "400",
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  transactionIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  transactionIcon: {
    fontSize: 20,
  },
  transactionDetails: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  transactionType: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  transactionSource: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.6)",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
    marginBottom: 4,
  },
  positiveAmount: {
    color: "#4CD964",
  },
  negativeAmount: {
    color: "#FF3B30",
  },
  transactionDate: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.6)",
    textAlign: "right",
  },
});

export default GradientHOC(WalletScreen);
