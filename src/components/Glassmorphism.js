import React from "react";
import { View, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

const Glassmorphism = ({
  children,
  height = 300,
  width = "100%",
  style = {},
  padding = 20,
}) => {
  return (
    <BlurView
      tint="systemThickMaterialDark"
      intensity={45}
      style={[styles.blurContainer, { height, width, padding }, style]}
    >
      {children}
    </BlurView>
  );
};

const styles = StyleSheet.create({
  blurContainer: {
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderRadius: 20,
    borderColor: "rgba(255, 255, 255, 0.13)",
    borderWidth: 1,
    shadowColor: "rgba(255, 255, 255, 0.07)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 10,
    shadowRadius: 15,
    elevation: 0.3,
    boxShadow: `rgba(255, 255, 255, 1) 0px 10px 40px -20px inset, rgba(0, 0, 0, 0.3) 0px 10px 10px -12px inset`,
              // boxShadow: `0 0px 30px 10px rgba(255, 255, 255, 1), 0 0px 60px 20px rgba(255, 255, 255, 1), 0 0px 120px 80px rgba(255, 255, 255, 0.5)`,

    overflow: "hidden",
  },
});

export default Glassmorphism;

{
  /* <BlurView
            tint="systemThickMaterialDark"
            blurAmount={20}
            style={{
              backgroundColor: "rgba(0, 0, 0, 0)", // Slightly transparent dark background
              borderRadius: 20, // Smooth rounded corners
              borderColor: "rgba(255, 255, 255, 0.2)", // Subtle glowing border
              borderWidth: 1, // Thin border width
              shadowColor: "rgba(255, 255, 255, 0.12)", // Glow effect color
              shadowOffset: {
                width: 0,
                height: 0,
              },
              // boxShadow: `0 0px 30px 10px rgba(255, 255, 255, 1), 0 0px 60px 20px rgba(255, 255, 255, 1), 0 0px 120px 80px rgba(255, 255, 255, 0.5)`,
              boxShadow: `rgba(255, 255, 255, 1) 0px 10px 60px -20px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -12px inset`,

              shadowOpacity: 1, // Fully visible glow
              shadowRadius: 15, // Wide glow radius
              // elevation: 0.1, // For Android shadow
              padding: 20,
              overflow: "hidden",
              height: 332,
            }}
          >
          
          </BlurView> */
}
