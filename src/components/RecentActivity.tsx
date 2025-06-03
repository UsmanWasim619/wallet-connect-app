import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "@reown/appkit-ui-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowDown, ArrowUp, Clock } from "react-native-feather";

interface RecentActivityProps {
  isDarkMode?: boolean;
}

export function RecentActivity({ isDarkMode }: RecentActivityProps) {
  const { isConnected } = useAccount();

  if (!isConnected) return null;

  return (
    <LinearGradient
      colors={isDarkMode ? ["#2A2D3E", "#1A1C27"] : ["#F0F4FF", "#E4ECFF"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.headerRow}>
        <Text
          variant="medium-600"
          style={[styles.title, isDarkMode && styles.darkText]}
        >
          Recent Activity
        </Text>
        <TouchableOpacity>
          <Text variant="small-400" style={styles.viewAllText}>
            View All
          </Text>
        </TouchableOpacity>
      </View>

      {activityData.map((item, index) => (
        <View
          key={index}
          style={[
            styles.activityItem,
            index < activityData.length - 1 && styles.borderBottom,
            isDarkMode && styles.darkBorder,
          ]}
        >
          <View
            style={[
              styles.iconContainer,
              item.type === "received" ? styles.receivedIcon : styles.sentIcon,
            ]}
          >
            {item.type === "received" ? (
              <ArrowDown stroke="#FFFFFF" width={16} height={16} />
            ) : (
              <ArrowUp stroke="#FFFFFF" width={16} height={16} />
            )}
          </View>

          <View style={styles.activityDetails}>
            <Text
              variant="small-600"
              style={[styles.activityTitle, isDarkMode && styles.darkText]}
            >
              {item.title}
            </Text>
            <View style={styles.timeRow}>
              <Clock
                stroke={isDarkMode ? "#A0AEC0" : "#718096"}
                width={12}
                height={12}
              />
              <Text
                variant="small-400"
                style={[styles.timeText, isDarkMode && styles.darkTimeText]}
              >
                {item.time}
              </Text>
            </View>
          </View>

          <View style={styles.amountContainer}>
            <Text
              variant="small-600"
              style={[
                styles.amountText,
                item.type === "received"
                  ? styles.receivedText
                  : styles.sentText,
              ]}
            >
              {item.type === "received" ? "+" : "-"}
              {item.amount}
            </Text>
            <Text
              variant="small-400"
              style={[styles.currencyText, isDarkMode && styles.darkTimeText]}
            >
              {item.currency}
            </Text>
          </View>
        </View>
      ))}
    </LinearGradient>
  );
}

// Mock data for recent activity
const activityData = [
  {
    type: "received",
    title: "Received from 0x704...7689",
    time: "2 hours ago",
    amount: "0.05",
    currency: "ETH",
  },
  {
    type: "sent",
    title: "Sent to 0x123...4567",
    time: "Yesterday",
    amount: "0.02",
    currency: "ETH",
  },
  {
    type: "received",
    title: "Received from 0x890...1234",
    time: "3 days ago",
    amount: "0.1",
    currency: "ETH",
  },
];

// Import at the top
import { useAccount } from "wagmi";

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    color: "#1A1C27",
    fontSize: 18,
  },
  darkText: {
    color: "#FFFFFF",
  },
  viewAllText: {
    color: "#3B82F6",
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.05)",
  },
  borderBottom: {
    borderBottomWidth: 1,
  },
  darkBorder: {
    borderBottomColor: "rgba(255,255,255,0.1)",
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  receivedIcon: {
    backgroundColor: "#10B981",
  },
  sentIcon: {
    backgroundColor: "#F59E0B",
  },
  activityDetails: {
    flex: 1,
  },
  activityTitle: {
    color: "#1A1C27",
    marginBottom: 4,
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  timeText: {
    color: "#718096",
  },
  darkTimeText: {
    color: "#A0AEC0",
  },
  amountContainer: {
    alignItems: "flex-end",
  },
  amountText: {
    fontSize: 14,
  },
  receivedText: {
    color: "#10B981",
  },
  sentText: {
    color: "#F59E0B",
  },
  currencyText: {
    color: "#718096",
    marginTop: 2,
  },
});
