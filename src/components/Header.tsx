import { View, StyleSheet, TouchableOpacity } from "react-native"
import { Text } from "@reown/appkit-ui-react-native"
import { Menu, Bell, Settings } from "react-native-feather"

interface HeaderProps {
  isDarkMode?: boolean
}

export function Header({ isDarkMode }: HeaderProps) {
  return (
    <View style={[styles.header, isDarkMode && styles.darkHeader]}>
      <TouchableOpacity style={styles.iconButton}>
        <Menu stroke={isDarkMode ? "#FFFFFF" : "#1A1C27"} width={24} height={24} />
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <Text variant="medium-600" style={[styles.logoText, isDarkMode && styles.darkText]}>
          Reown
        </Text>
        <Text variant="small-400" style={[styles.appName, isDarkMode && styles.darkSubText]}>
          AppKit
        </Text>
      </View>

      <View style={styles.rightIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <Bell stroke={isDarkMode ? "#FFFFFF" : "#1A1C27"} width={20} height={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Settings stroke={isDarkMode ? "#FFFFFF" : "#1A1C27"} width={20} height={20} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.05)",
  },
  darkHeader: {
    backgroundColor: "#121212",
    borderBottomColor: "rgba(255,255,255,0.1)",
  },
  iconButton: {
    padding: 8,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    fontSize: 18,
    color: "#1A1C27",
  },
  darkText: {
    color: "#FFFFFF",
  },
  appName: {
    marginLeft: 4,
    color: "#3B82F6",
    fontSize: 14,
  },
  darkSubText: {
    color: "#60A5FA",
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
})
