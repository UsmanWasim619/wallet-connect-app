import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const GradientHOC = (Component) => {
  const gradientProps = {
    colors: ["#737373", "#737373", "#00ccef"],
  };

  return (props) => {
    return (
      <>
        <StatusBar
          networkActivityIndicatorVisible={true}
          translucent={true}
          style="auto"
          backgroundColor="#000"
          barStyle="light-content"
        />
        {/* <LinearGradient colors={gradientProps.colors} style={styles.gradient}>
        </LinearGradient> */}
        <ImageBackground
          style={styles.gradient}
          source={require("../../assets/png/auth-bg.png")}
        >
          <Component {...props} />
        </ImageBackground>
      </>
    );
  };
};

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
    ...StyleSheet.absoluteFill,
  },
});
