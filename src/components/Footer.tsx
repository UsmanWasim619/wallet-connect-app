import { View, StyleSheet, TouchableOpacity } from "react-native"
import { Text } from "@reown/appkit-ui-react-native"
import { Home, Compass, BarChart2, User } from "react-native-feather"

interface FooterProps {
  isDarkMode?: boolean
}

export function Footer({ isDarkMode }: FooterProps) {
  return (
    <View style={[styles.footer, isDarkMode && styles.darkFooter]}>
      <TouchableOpacity style={styles.tabItem}>
        <Home stroke={isDarkMode ? "#FFFFFF" : "#1A1C27"} width={20} height={20} />
        <Text variant="small-400" style={[styles.tabText, styles.activeTab, isDarkMode && styles.darkText]}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem}>
        <Compass stroke={isDarkMode ? "#718096" : "#718096"} width={20} height={20} />
        <Text variant="small-400" style={[styles.tabText, isDarkMode && styles.darkInactiveText]}>
          Explore
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem}>
        <BarChart2 stroke={isDarkMode ? "#718096" : "#718096"} width={20} height={20} />
        <Text variant="small-400" style={[styles.tabText, isDarkMode && styles.darkInactiveText]}>
          Activity
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem}>
        <User stroke={isDarkMode ? "#718096" : "#718096"} width={20} height={20} />
        <Text variant="small-400" style={[styles.tabText, isDarkMode && styles.darkInactiveText]}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.05)",
  },
  darkFooter: {
    backgroundColor: "#121212",
    borderTopColor: "rgba(255,255,255,0.1)",
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  tabText: {
    marginTop: 4,
    color: "#718096",
  },
  activeTab: {
    color: "#3B82F6",
  },
  darkText: {
    color: "#60A5FA",
  },
  darkInactiveText: {
    color: "#718096",
  },
})
