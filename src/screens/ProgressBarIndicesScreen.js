import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from "react-native-reanimated";
import { Path as ReanimatedPath } from "react-native-svg";
import Glassmorphism from "../components/Glassmorphism";
import { GradientHOC } from "../HOC/GradientHOC";

const AnimatedPath = Animated.createAnimatedComponent(ReanimatedPath);

const ProgressBarIndicesScreen = () => {
  const [currentValue, setCurrentValue] = useState(49136.4);
  const [highValue, setHighValue] = useState(49543.15);
  const [lowValue, setLowValue] = useState(48430.95);

  const progress1 = useSharedValue(0);
  const progress2 = useSharedValue(0);

  useEffect(() => {
    const range = highValue - lowValue;
    const normalizedValue = (currentValue - lowValue) / range;

    progress1.value = withTiming(normalizedValue, { duration: 2000 });
    progress2.value = withTiming(normalizedValue, { duration: 2000 });
  }, [currentValue, highValue, lowValue, progress1, progress2]);

  const animatedProps1 = useAnimatedProps(() => ({
    strokeDashoffset: 800 * (1 - progress1.value),
    strokeDasharray: [800, 800],
  }));

  const animatedProps2 = useAnimatedProps(() => ({
    strokeDashoffset: 800 * (1 - progress2.value),
    strokeDasharray: [800, 800],
  }));

  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
    Dimensions.get("window");
  // new
  const CURVE_START = { x: SCREEN_WIDTH * 0.3, y: SCREEN_HEIGHT * 0.9 };
  const CURVE_END = { x: SCREEN_WIDTH * 0.3, y: SCREEN_HEIGHT * 0.18 };
  const CURVE_CONTROL1 = { x: SCREEN_WIDTH * 0.5, y: SCREEN_HEIGHT * 0.6 };
  const CURVE_CONTROL2 = { x: SCREEN_WIDTH * 0.7, y: SCREEN_HEIGHT * 0.3 };

  // final path2 --------------------
  const path2 = `M ${CURVE_START.x + 40} ${CURVE_START.y} C ${
    CURVE_CONTROL1.x + 50
  } ${CURVE_CONTROL1.y + 100} ${CURVE_CONTROL2.x + 45} ${
    CURVE_CONTROL2.y + 40
  } ${CURVE_END.x} ${CURVE_END.y - 10}`;

  // old
  const CURVE_START_O = { x: SCREEN_WIDTH * 0.3, y: SCREEN_HEIGHT * 0.18 };
  const CURVE_END_O = { x: SCREEN_WIDTH * 0.3, y: SCREEN_HEIGHT * 0.9 };

  const CURVE_CONTROL1_O = { x: SCREEN_WIDTH * 0.5, y: SCREEN_HEIGHT * 0.3 };
  const CURVE_CONTROL2_O = { x: SCREEN_WIDTH * 0.7, y: SCREEN_HEIGHT * 0.6 };
  const path1_O = `M ${CURVE_START_O.x} ${CURVE_START_O.y} C ${CURVE_CONTROL1_O.x} ${CURVE_CONTROL1_O.y} ${CURVE_CONTROL2_O.x} ${CURVE_CONTROL2_O.y} ${CURVE_END_O.x} ${CURVE_END_O.y}`;

  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" style={styles.curveContainer}>
        <Defs>
          <LinearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#ff00ff" stopOpacity="1" />
            <Stop offset="100%" stopColor="#6200ea" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <AnimatedPath
          d={path1_O}
          stroke="url(#gradient1)"
          strokeWidth="13"
          fill="none"
          animatedProps={animatedProps1}
        />

        <Path
          d="M10,0 C290,300 250,550 50,800"
          stroke="#A1A1A157"
          strokeWidth="1"
          fill="none"
        />

        <AnimatedPath
          d={path2}
          stroke="#01A2CB"
          strokeWidth="13"
          fill="none"
          animatedProps={animatedProps2}
        />

        <Path
          d={`M${10 + 40},0 C${290 + 40},300 ${250 + 30},550 ${50 + 40},800`}
          stroke="#A1A1A157"
          strokeWidth="1"
          fill="none"
        />
      </Svg>

      <View style={styles.contentContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: "auto",
          }}
        >
          <View>
            <View style={styles.lotInfo}>
              <Glassmorphism
                height={70}
                width={70}
                style={{
                  boxShadow: "none",
                  justifyContent: "flex-start",
                  alignSelf: "flex-start",
                  marginBottom: 10,
                }}
              />
              <Text style={styles.lotName}>Lot Name</Text>
              <Text style={styles.lotValue}>{currentValue.toFixed(2)}</Text>
              <Text style={styles.percentageChange}>+245.95 (+0.48%)</Text>
            </View>

            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Image
                  source={require("../../assets/png/Sparkle.png")}
                  style={styles.statLabel}
                />
                <Text style={styles.statValue}>Best for longterm</Text>
              </View>
              <View style={styles.statItem}>
                <Image
                  source={require("../../assets/png/UsersThree.png")}
                  style={styles.statLabel}
                />

                <Text style={styles.statValue}>{highValue.toFixed(2)}</Text>
              </View>
              <View style={styles.statItem}>
                <Image
                  source={require("../../assets/png/ShieldStar.png")}
                  style={styles.statLabel}
                />

                <Text style={styles.statValue}>{lowValue.toFixed(2)}</Text>
              </View>
            </View>
          </View>
          <View style={{ gap: 20 }}>
            <Glassmorphism height={85} width={85} padding={0}>
              <View style={{ justifyContent: "center" }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 12,
                    color: "#707070",
                  }}
                >
                  Open
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 13,
                    color: "#ffffff",
                  }}
                >
                  49,532.00
                </Text>
              </View>
            </Glassmorphism>
            <Glassmorphism height={85} width={85} padding={0}>
              <View style={{ justifyContent: "center" }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 12,
                    color: "#707070",
                  }}
                >
                  High
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 13,
                    color: "#ffffff",
                  }}
                >
                  49,532.00
                </Text>
              </View>
            </Glassmorphism>
            <Glassmorphism height={85} width={85} padding={0}>
              <View style={{ justifyContent: "center" }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 12,
                    color: "#707070",
                  }}
                >
                  Low
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 13,
                    color: "#ffffff",
                  }}
                >
                  49,532.00
                </Text>
              </View>
            </Glassmorphism>
            <Glassmorphism height={85} width={85} padding={0}>
              <View style={{ justifyContent: "center" }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 12,
                    color: "#707070",
                  }}
                >
                  Prev.Close
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 13,
                    color: "#ffffff",
                  }}
                >
                  49,532.00
                </Text>
              </View>
            </Glassmorphism>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  curveContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  lotInfo: {
    marginTop: "auto",
  },
  lotName: {
    fontSize: 24,
    fontWeight: "500",
    color: "#fff",
    marginBottom: 20,
  },
  lotValue: {
    fontSize: 22,
    fontWeight: "400",
    color: "#fff",
    marginBottom: 10,
  },
  percentageChange: {
    fontSize: 16,
    color: "#4caf50",
  },
  statsContainer: {
    marginTop: "auto",
  },
  statItem: {
    marginBottom: 10,
    flexDirection: "row",
    gap: 7,
  },
  statLabel: {
    fontSize: 14,
    color: "#aaa",
    height: 17,
    width: 17,
  },
  statValue: {
    fontSize: 16,
    color: "#fff",
  },
});

export default GradientHOC(ProgressBarIndicesScreen);

// import { useEffect, useState } from "react";
// import { View, Text, StyleSheet, Dimensions } from "react-native";
// import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";
// import Animated, {
//   useSharedValue,
//   useAnimatedProps,
//   withTiming,
// } from "react-native-reanimated";
// import { Path as ReanimatedPath } from "react-native-svg";
// import { GradientHOC } from "./gra.HOC";

// const AnimatedPath = Animated.createAnimatedComponent(ReanimatedPath);

// const LotCard = () => {
//   const [currentValue, setCurrentValue] = useState(49136.4);
//   const [highValue, setHighValue] = useState(49543.15);
//   const [lowValue, setLowValue] = useState(48430.95);

//   const progress1 = useSharedValue(0);
//   const progress2 = useSharedValue(0);

//   useEffect(() => {
//     // Calculate the progress based on current value relative to high and low
//     const range = highValue - lowValue;
//     const normalizedValue = (currentValue - lowValue) / range;

//     // Animate progress values
//     progress1.value = withTiming(normalizedValue, { duration: 2000 });
//     progress2.value = withTiming(normalizedValue, { duration: 2000 });
//   }, [currentValue, highValue, lowValue, progress1]); // Added progress1 to dependencies

//   // Animated props for the purple line
//   const animatedProps1 = useAnimatedProps(() => ({
//     strokeDashoffset: 800 * (1 - progress2.value),
//     strokeDasharray: [800, 800],
//   }));

//   // Animated props for the cyan line
//   const animatedProps2 = useAnimatedProps(() => ({
//     strokeDashoffset: 800 * (1 - progress2.value),
//     strokeDasharray: [800, 800],
//   }));

//   const gap = 30;
//   const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
//     Dimensions.get("window");

//   const CURVE_START = { x: SCREEN_WIDTH * 0.3, y: SCREEN_HEIGHT * 0.18 };
//   const CURVE_END = { x: SCREEN_WIDTH * 0.3, y: SCREEN_HEIGHT * 0.9 };
//   const CURVE_CONTROL1 = { x: SCREEN_WIDTH * 0.5, y: SCREEN_HEIGHT * 0.3 };
//   const CURVE_CONTROL2 = { x: SCREEN_WIDTH * 0.7, y: SCREEN_HEIGHT * 0.6 };
//   const path1 = `M ${CURVE_START.x} ${CURVE_START.y} C ${CURVE_CONTROL1.x} ${CURVE_CONTROL1.y} ${CURVE_CONTROL2.x} ${CURVE_CONTROL2.y} ${CURVE_END.x} ${CURVE_END.y}`;

//   const path2 = `M ${CURVE_START.x + 35} ${CURVE_START.y} C ${
//     CURVE_CONTROL1.x + 40
//   } ${CURVE_CONTROL1.y + 50} ${CURVE_CONTROL2.x + 40} ${
//     CURVE_CONTROL2.y + 20
//   } ${CURVE_END.x} ${CURVE_END.y + 45}`;

//   return (
//     <View style={styles.container}>
//       {/* Curved Lines */}
//       <Svg height="100%" width="100%" style={styles.curveContainer}>
//         <Defs>
//           {/* Gradient Definition for Purple Line */}
//           <LinearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//             <Stop offset="0%" stopColor="#ff00ff" stopOpacity="1" />
//             <Stop offset="100%" stopColor="#6200ea" stopOpacity="1" />
//           </LinearGradient>
//         </Defs>
//         {/* Purple Line with Gradient */}
//         <AnimatedPath
//           d={path1}
//           stroke="url(#gradient1)" // Apply gradient
//           strokeWidth="13"
//           fill="none"
//           animatedProps={animatedProps1}
//         />

//         {/* White Path (to create a background effect) */}
//         <Path
//           d="M10,0 C290,300 250,550 50,800"
//           stroke="#A1A1A157" // White
//           strokeWidth="1"
//           fill="none"
//           // stopOpacity={0.01}
//         />

//         {/* Cyan Line */}
//         <AnimatedPath
//           d={path2}
//           stroke="#01A2CB" // Cyan
//           strokeWidth="13"
//           fill="none"
//           animatedProps={animatedProps2}
//         />

//         {/* White Path for Cyan Line (background effect) */}
//         <Path
//           d={`M${10 + gap},0 C${290 + gap},300 ${250 + gap},550 ${
//             50 + gap
//           },800`}
//           stroke="#A1A1A157" // White
//           strokeWidth="1"
//           fill="none"
//           // stopOpacity={0.03}
//         />
//       </Svg>

//       {/* Main Content */}
//       <View style={styles.contentContainer}>
//         {/* Lot Info */}
//         <View style={styles.lotInfo}>
//           <Text style={styles.lotName}>Lot Name</Text>
//           <Text style={styles.lotValue}>{currentValue.toFixed(2)}</Text>
//           <Text style={styles.percentageChange}>+245.95 (+0.48%)</Text>
//         </View>

//         {/* Stats */}
//         <View style={styles.statsContainer}>
//           <View style={styles.statItem}>
//             <Text style={styles.statLabel}>Open</Text>
//             <Text style={styles.statValue}>49,532.00</Text>
//           </View>
//           <View style={styles.statItem}>
//             <Text style={styles.statLabel}>High</Text>
//             <Text style={styles.statValue}>{highValue.toFixed(2)}</Text>
//           </View>
//           <View style={styles.statItem}>
//             <Text style={styles.statLabel}>Low</Text>
//             <Text style={styles.statValue}>{lowValue.toFixed(2)}</Text>
//           </View>
//           <View style={styles.statItem}>
//             <Text style={styles.statLabel}>Prev. Close</Text>
//             <Text style={styles.statValue}>49,350.80</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 10,
//   },
//   curveContainer: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     height: "100%",
//     width: "100%",
//   },
//   contentContainer: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 10,
//   },
//   lotInfo: {
//     marginBottom: 20,
//   },
//   lotName: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   lotValue: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   percentageChange: {
//     fontSize: 16,
//     color: "#4caf50",
//   },
//   statsContainer: {
//     marginTop: 20,
//   },
//   statItem: {
//     marginBottom: 10,
//   },
//   statLabel: {
//     fontSize: 14,
//     color: "#aaa",
//   },
//   statValue: {
//     fontSize: 16,
//     color: "#fff",
//   },
// });

// export default GradientHOC(LotCard);
