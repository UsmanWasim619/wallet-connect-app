import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function NewsItem({ title, subtitle, image }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.subtitle} numberOfLines={2}>
          {subtitle}
        </Text>
      </View>
      <MaterialCommunityIcons
        name="chevron-right"
        size={30}
        color="#ffffff"
        style={styles.arrow}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF20",
  },
  content: {
    flex: 1,
    marginRight: 12,
  },
  title: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 4,
  },
  subtitle: {
    color: "#6B7280",
    fontSize: 11,
  },
  image: {
    width: 34,
    height: 34,
    borderRadius: 8,
    marginRight: 10,
  },
  arrow: {
    // width: 24,
  },
});
