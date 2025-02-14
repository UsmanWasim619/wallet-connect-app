import { Image, StyleSheet } from "react-native";

const HorizontalLine = () => (
  <Image
    source={require("../../assets/png/super-star-user-line.png")}
    style={styles.horizontalRule}
  />
);

const styles = StyleSheet.create({
  horizontalRule: {
    width: "100%", // Adjust width as needed
    height: 1,
  },
});

export default HorizontalLine;
