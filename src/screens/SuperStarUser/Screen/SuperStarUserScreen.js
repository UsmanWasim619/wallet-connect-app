import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import Glassmorphism from "../../../components/Glassmorphism";
import CommonButton from "../../../components/CommonButton";
import { GradientHOC } from "../../../HOC/GradientHOC";
import CommonHeader from "../../../components/CommonHeader";

const SuperStarUser = ({ navigation }) => {
  return (
    <ScrollView>
      <CommonHeader screenName={"Superstar Users"} />
      <View style={styles.container}>
        <Glassmorphism height={129} style={styles.card}>
          {/* Header Section */}
          <View style={styles.header}>
            <View style={styles.leftSection}>
              <Image
                source={{
                  uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zadESq63AeTrxwqWC3rVAOGlbWlZTc.png",
                }}
                style={styles.profileImage}
              />
              <View style={styles.nameSection}>
                <Text style={styles.name}>Shreya Chadda</Text>
                <Text style={styles.companyName}>Company Name</Text>
              </View>
            </View>
            <View style={styles.rightSection}>
              <View style={styles.dateSection}>
                <Text style={styles.dateLabel}>
                  Date <Text style={styles.date}>17-01-25</Text>
                </Text>
                <Text style={styles.date} />
              </View>
              <Text style={styles.holdings}>Holdings (%)</Text>
            </View>
          </View>
          <HorizontalLine />
          {/* Bottom Section */}
          <View style={styles.bottomSection}>
            <View style={styles.bottomItem}>
              <Text style={styles.bottomLabel}>Total Profit</Text>
              <Text style={styles.bottomValue}>₹1,34,056</Text>
            </View>
            <View style={styles.bottomItem}>
              <Text style={styles.bottomLabel}>Lots</Text>
              <Text style={styles.bottomValue}>03</Text>
            </View>
            <View style={styles.bottomItem}>
              <Text style={styles.bottomLabel}>Total Amt</Text>
              <Text style={styles.bottomValue}>₹1,34,056</Text>
            </View>
          </View>
        </Glassmorphism>

        {/* <CommonButton
        title={"next"}
        onPress={() => {
          navigation.navigate("StocksListScreen");
        }}
      /> */}
      </View>
    </ScrollView>
  );
};
const HorizontalLine = () => (
  <Image
    source={require("../../../../assets/png/super-star-user-line.png")}
    style={styles.horizontalRule}
  />
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "#27232547",
    borderRadius: 12,
    padding: 16,
    boxShadow: "none",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 9,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  nameSection: {
    justifyContent: "center",
  },
  name: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "300",
    opacity: 0.8,
  },
  companyName: {
    color: "#FFFFFF",
    fontSize: 14,
    marginTop: 2,
    fontWeight: "600",
  },
  rightSection: {
    alignItems: "flex-end",
  },
  dateSection: {
    alignItems: "flex-end",
  },
  dateLabel: {
    color: "#A1A1A1",
    fontSize: 10,
    // opacity: 0.6,
  },
  date: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "500",
  },
  holdings: {
    color: "#FFFFFF",
    fontSize: 10,
    opacity: 0.6,
    marginTop: 4,
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    // borderTopWidth: 1,
    // borderTopColor: "rgba(255,255,255,0.1)",
    paddingTop: 16,
  },
  bottomItem: {
    flexDirection: "row",
    gap: 5,
    alignItems: "flex-start",
    alignItems: "baseline",
  },
  bottomLabel: {
    color: "#FFFFFF",
    fontSize: 10,
    opacity: 0.6,
    marginBottom: 4,
  },
  bottomValue: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  horizontalRule: {
    width: "100%", // Adjust width as needed
    height: 1,
  },
});

export default GradientHOC(SuperStarUser);
