import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CommonButton = ({
  onPress,
  title,
  width, // Get width from props
  gradientColors = ["#017482", "#017482"],
  textSize = 13,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { width: `${width}` }, // Apply width if provided, otherwise default to 100%
      ]}
    >
      <LinearGradient
        colors={gradientColors}
        style={[styles.linearGradient, { width: `${width}` }]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={[styles.text, { fontSize: textSize }]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    height: 50,
    zIndex: 99,
    marginHorizontal: "auto",
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
  },
  text: {
    color: "white", // default text color
    fontSize: 13,
    fontWeight: "700",
  },
});

export default CommonButton;
