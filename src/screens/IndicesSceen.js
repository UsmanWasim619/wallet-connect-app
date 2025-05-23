import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HorizontalLine from "./customs/horizontalLine.component";
import Glassmorphism from "../components/Glassmorphism";
import TabMenu from "../components/TabMenu";
import { GradientHOC } from "../HOC/GradientHOC";

const IndicesPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="white" />
          <Text style={styles.headerText}>All Indices</Text>
        </TouchableOpacity>
      </View>

      {/* Navigation Tabs */}

      <TabMenu
        data={["PERFORMANCE", "OVERVIEW", "RESEARCH"]}
        selected={"OVERVIEW"}
      />

      {/* Content Card */}
      <Glassmorphism height={129} style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.logoPlaceholder} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Nifty 50</Text>
            <Text style={styles.subtitle}>Other Detail Lorem Ipsum</Text>
          </View>
        </View>
        {/* Metrics */}
        <HorizontalLine />
        <View style={styles.metricsContainer}>
          <View style={styles.metricItem}>
            <Text style={styles.metricLabel}>Market Position</Text>
            <Text style={styles.metricValue}>₹1,34,056</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.metricItem}>
            <Text style={styles.metricLabel}>Total Amount</Text>
            <Text style={styles.metricValue}>₹1,34,056</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.metricItem}>
            <Text style={styles.metricLabel}>Historical Performance</Text>
            <Text style={styles.metricValue}>₹1,34,056</Text>
          </View>
        </View>
      </Glassmorphism>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#1a1a1a',
    paddingHorizontal: 10,
  },
  header: {
    padding: 16,
    marginTop: 10,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 16,
    marginLeft: 8,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
  },
  tabText: {
    color: "#888",
    fontSize: 14,
    fontWeight: "600",
  },
  activeTab: {
    color: "#4CAF50",
  },
  tabIndicator: {
    height: 2,
    backgroundColor: "#333",
  },
  activeIndicator: {
    width: "33.33%",
    height: "100%",
    backgroundColor: "#4CAF50",
    marginLeft: "33.33%",
  },
  //   card: {
  //     backgroundColor: "#222",
  //     margin: 16,
  //     borderRadius: 12,
  //     padding: 16,
  //   },
  card: {
    backgroundColor: "#27232547",
    borderRadius: 12,
    boxShadow: "none",
    marginTop: 18,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  logoPlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: "#333",
    borderRadius: 20,
  },
  titleContainer: {
    marginLeft: 12,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#FFFFFF",
    fontSize: 10,
    marginTop: 4,
    fontWeight: "300",
  },
  metricsContainer: {
    marginTop: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  metricItem: {
    flex: 1,
  },
  metricLabel: {
    color: "#A1A1A1",
    fontSize: 9,
    marginBottom: 8,
  },
  metricValue: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  divider: {
    width: 1,
    backgroundColor: "#333",
    marginHorizontal: 12,
  },
});

export default GradientHOC(IndicesPage);
