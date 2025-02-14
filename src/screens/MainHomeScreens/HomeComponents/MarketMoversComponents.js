import { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const AnimatedView = Animated.createAnimatedComponent(View);
const { width } = Dimensions.get("window");
console.log("width: ", width);

export default function MarketMoversComponents({ data }) {
  const rotationAnim = useRef(new Animated.Value(0)).current;

  const rotateTo = (toValue) => {
    Animated.timing(rotationAnim, {
      toValue, // 180 for Maximum Return, 0 for Minimum Return
      duration: 330,
      useNativeDriver: true, // Set to false since rotateY is not natively supported
    }).start();
  };

  // Interpolating rotation value for Y-axis flip
  const rotateYInterpolate = rotationAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <View style={{ borderRadius: 16, overflow: "hidden" }}>
      {/* Animated Wrapper */}
      <AnimatedView
        style={{
          transform: [{ rotateY: rotateYInterpolate }],
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Svg
          width={width}
          height={width - 10}
          viewBox="0 0 362 397"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <G filter="url(#filter0_bi_756_202)">
            <Path
              d="M361.363 74.1399C361.363 66.5904 361.362 60.9534 360.779 56.6169C360.197 52.2876 359.039 49.292 356.75 47.003C354.461 44.7141 351.465 43.5556 347.136 42.9735C342.799 42.3905 337.162 42.39 329.613 42.39H279.613H251.613H213.025H213.011C208.764 42.39 205.56 42.39 202.971 42.1456C200.375 41.9005 198.38 41.4084 196.552 40.4138C194.724 39.4191 193.227 38.0112 191.611 35.9644C190 33.9239 188.26 31.2336 185.953 27.667L185.946 27.6559L177.86 15.155C175.544 11.5751 173.816 8.90465 172.222 6.88476C170.63 4.86899 169.183 3.51597 167.435 2.56481C165.686 1.61365 163.764 1.1329 161.207 0.891532C158.645 0.64967 155.465 0.649414 151.201 0.649414H32.6128C25.0633 0.649414 19.4263 0.649945 15.0898 1.23297C10.7605 1.81503 7.7648 2.97353 5.47586 5.26248C3.18689 7.55144 2.02841 10.5471 1.44635 14.8764C0.863312 19.2129 0.862793 24.8499 0.862793 32.3994V364.399C0.862793 371.949 0.863312 377.586 1.44635 381.922C2.02841 386.252 3.18689 389.247 5.47586 391.536C7.7648 393.825 10.7605 394.984 15.0898 395.566C19.4263 396.149 25.0633 396.149 32.6128 396.149H329.613C337.162 396.149 342.799 396.149 347.136 395.566C351.465 394.984 354.461 393.825 356.75 391.536C359.039 389.247 360.197 386.252 360.779 381.922C361.362 377.586 361.363 371.949 361.363 364.399V74.1399Z"
              stroke="#D0D5DD"
              strokeWidth={0.5}
            />
          </G>
          <Defs>
            <LinearGradient
              id="paint0_linear_756_202"
              x1={190.113}
              y1={0.399414}
              x2={190.113}
              y2={271.796}
              gradientUnits="userSpaceOnUse"
            >
              <Stop stopColor="#1F1F1F" />
              <Stop offset={1} stopColor="#1F1F1F" stopOpacity={0.5} />
            </LinearGradient>
          </Defs>
        </Svg>
      </AnimatedView>
      <View
        style={{
          position: "absolute",
          marginTop: "1%",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          width: width - 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            // backgroundColor: "#252729",
            borderRadius: 20,
            // margin: 10,
            padding: 4,
            zIndex: 100,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              // backgroundColor: "#1A1C1E",
              borderRadius: 16,
              padding: 8,
              zIndex: 10,
            }}
            onPress={() => rotateTo(0)}
          >
            <Text style={{ color: "white", textAlign: "center", fontSize: 13 }}>
              Minimum Return
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 8,
              zIndex: 10,
            }}
            onPress={() => rotateTo(180)}
          >
            <Text
              style={{ color: "#808080", textAlign: "center", fontSize: 13 }}
            >
              Maximum Return
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            borderColor: "#252729",
            width: "90%",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "center",
            paddingHorizontal: 10,
            paddingVertical: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Text style={{ fontSize: 10, color: "#ffffff" }}>Top Gainers</Text>
            <Text style={{ fontSize: 10, color: "#ffffff" }}>Top looser</Text>
            <Text style={{ fontSize: 10, color: "#ffffff" }}>5W High</Text>
            <Text style={{ fontSize: 10, color: "#ffffff" }}>5W Low</Text>
          </View>
          <Text style={{ fontSize: 10, color: "#ffffff" }}>View All</Text>
        </View>
        {data.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 12,
              paddingVertical: 12,
              borderTopWidth: index > 0 ? 1 : 0,
              borderTopColor: "#252729",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              width: "90%",
            }}
          >
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: "#00000047",
                    height: 28,
                    width: 28,
                    justifyContent: "center",
                    textAlign: "center",
                    borderRadius: 18,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 12,
                      fontWeight: "600",
                      width: 30,
                      textAlign: "center",
                    }}
                  >
                    {item.code}
                  </Text>
                </View>
                <Text style={{ color: "white", fontSize: 12, marginLeft: 12 }}>
                  {item.name}
                </Text>
              </View>
              <Text
                style={{
                  color: "#808080",
                  fontSize: 10,
                  marginTop: 4,
                  marginLeft: 42,
                }}
              >
                {item.subtext}
              </Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={{ color: "#4CAF50", fontSize: 12 }}>
                {item.price}
              </Text>
              <Text style={{ color: "white", fontSize: 10 }}>
                {item.change}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
