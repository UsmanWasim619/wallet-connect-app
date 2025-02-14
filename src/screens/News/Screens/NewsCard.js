import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import HousingCard from "../../test";
// import CryptoCard from "../../test";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";
// import CryptoCard from "../../test";

export function NewsCard({ title, icon, image, color }) {
  return (
    <>
      <ScrollView>
        <View
          style={{ flexDirection: "row", gap: 10, justifyContent: "center" }}
        >
          <View style={{ gap: 10 }}>
            <TouchableOpacity style={styles.card}>
              <Image source={{ uri: image }} style={styles.image} />
              <View style={{ paddingHorizontal: 9 }}>
                <Text style={styles.title} numberOfLines={2}>
                  {title}
                </Text>
              </View>
            </TouchableOpacity>

            <Svg
              width={110}
              height={95}
              viewBox="0 0 123 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              // {...props}
            >
              <View style={styles.rightArrowContainer}>
                <MaterialCommunityIcons
                  name="arrow-top-right"
                  size={16}
                  color="white"
                />
              </View>
              <G filter="url(#filter0_b_239_7727)">
                <Path
                  d="M0 12C0 5.37258 5.37258 0 12 0H70.028C74.6022 0 78.7786 2.60047 80.7968 6.70535L88.9532 23.2947C90.9714 27.3995 95.1478 30 99.722 30H111C117.627 30 123 35.3726 123 42V83C123 89.6274 117.627 95 111 95H12C5.37259 95 0 89.6274 0 83V12Z"
                  fill="#00000000"
                  // fillOpacity={0.03}
                />
                <Path
                  d="M0 12C0 5.37258 5.37258 0 12 0H70.028C74.6022 0 78.7786 2.60047 80.7968 6.70535L88.9532 23.2947C90.9714 27.3995 95.1478 30 99.722 30H111C117.627 30 123 35.3726 123 42V83C123 89.6274 117.627 95 111 95H12C5.37259 95 0 89.6274 0 83V12Z"
                  fill="#00000000"
                  // fillOpacity={0.03}
                />
                <Path
                  d="M0.5 12C0.5 5.64872 5.64873 0.5 12 0.5H70.028C74.4116 0.5 78.414 2.99212 80.3481 6.92596L88.5045 23.5153C90.6068 27.7912 94.9572 30.5 99.722 30.5H111C117.351 30.5 122.5 35.6487 122.5 42V83C122.5 89.3513 117.351 94.5 111 94.5H12C5.64873 94.5 0.5 89.3513 0.5 83V12Z"
                  stroke="white"
                  strokeOpacity={0.3}
                />
              </G>
              <Defs>
                <LinearGradient
                  id="paint0_linear_239_7727"
                  x1={61.6704}
                  y1={-81.0893}
                  x2={61.6704}
                  y2={174.732}
                  gradientUnits="userSpaceOnUse"
                >
                  <Stop stopColor="white" />
                  <Stop offset={0.500144} stopColor="white" stopOpacity={0} />
                  <Stop offset={1} stopColor="white" />
                </LinearGradient>
                <LinearGradient
                  id="paint1_linear_239_7727"
                  x1={-140.206}
                  y1={47.5}
                  x2={241.23}
                  y2={47.5}
                  gradientUnits="userSpaceOnUse"
                >
                  <Stop stopColor="white" />
                  <Stop offset={0.534495} stopColor="white" stopOpacity={0} />
                  <Stop offset={1} stopColor="white" />
                </LinearGradient>
              </Defs>
              <View
                style={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <Image
                  source={require("../../../../assets/png/news-housing.png")}
                  style={{ width: 60, height: 60, marginTop: 5, marginLeft: 6 }}
                />
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: 12,
                    fontWeight: "400",
                    marginLeft: 10,
                  }}
                >
                  Housing
                </Text>
              </View>
            </Svg>
          </View>
          {/* secound */}
          <View style={{ gap: 10 }}>
            <Svg
              width={110}
              height={95}
              viewBox="0 0 123 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              // {...props}
            >
              <View style={styles.rightArrowContainer}>
                <MaterialCommunityIcons
                  name="arrow-top-right"
                  size={16}
                  color="white"
                />
              </View>
              <G filter="url(#filter0_b_239_7727)">
                <Path
                  d="M0 12C0 5.37258 5.37258 0 12 0H70.028C74.6022 0 78.7786 2.60047 80.7968 6.70535L88.9532 23.2947C90.9714 27.3995 95.1478 30 99.722 30H111C117.627 30 123 35.3726 123 42V83C123 89.6274 117.627 95 111 95H12C5.37259 95 0 89.6274 0 83V12Z"
                  fill="#00000000"
                />
                <Path
                  d="M0 12C0 5.37258 5.37258 0 12 0H70.028C74.6022 0 78.7786 2.60047 80.7968 6.70535L88.9532 23.2947C90.9714 27.3995 95.1478 30 99.722 30H111C117.627 30 123 35.3726 123 42V83C123 89.6274 117.627 95 111 95H12C5.37259 95 0 89.6274 0 83V12Z"
                  fill="#00000000"
                />
                <Path
                  d="M0.5 12C0.5 5.64872 5.64873 0.5 12 0.5H70.028C74.4116 0.5 78.414 2.99212 80.3481 6.92596L88.5045 23.5153C90.6068 27.7912 94.9572 30.5 99.722 30.5H111C117.351 30.5 122.5 35.6487 122.5 42V83C122.5 89.3513 117.351 94.5 111 94.5H12C5.64873 94.5 0.5 89.3513 0.5 83V12Z"
                  stroke="white"
                  strokeOpacity={0.3}
                />
              </G>
              <Defs>
                <LinearGradient
                  id="paint0_linear_239_7727"
                  x1={61.6704}
                  y1={-81.0893}
                  x2={61.6704}
                  y2={174.732}
                  gradientUnits="userSpaceOnUse"
                >
                  <Stop stopColor="white" />
                  <Stop offset={0.500144} stopColor="white" stopOpacity={0} />
                  <Stop offset={1} stopColor="white" />
                </LinearGradient>
                <LinearGradient
                  id="paint1_linear_239_7727"
                  x1={-140.206}
                  y1={47.5}
                  x2={241.23}
                  y2={47.5}
                  gradientUnits="userSpaceOnUse"
                >
                  <Stop stopColor="white" />
                  <Stop offset={0.534495} stopColor="white" stopOpacity={0} />
                  <Stop offset={1} stopColor="white" />
                </LinearGradient>
              </Defs>
              <View
                style={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <Image
                  source={require("../../../../assets/png/news-crypto.png")}
                  style={{ width: 60, height: 60, marginTop: 5, marginLeft: 7 }}
                />
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: 12,
                    fontWeight: "400",
                    marginLeft: 15,
                  }}
                >
                  Crypto
                </Text>
              </View>
            </Svg>

            <TouchableOpacity style={styles.card}>
              <Image source={{ uri: image }} style={styles.image} />
              <View style={{ paddingHorizontal: 9 }}>
                <Text style={styles.title} numberOfLines={2}>
                  {title}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ gap: 10 }}>
            <TouchableOpacity style={styles.rightCard}>
              <Image source={{ uri: image }} style={styles.image} />
              <View style={{ paddingHorizontal: 9 }}>
                <Text style={styles.title} numberOfLines={2}>
                  {title}
                </Text>
              </View>
            </TouchableOpacity>
            {/*  */}
            <Svg
              width={99}
              height={113}
              viewBox="0 0 99 113"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <View style={styles.rightArrowContainer}>
                <MaterialCommunityIcons
                  name="arrow-top-right"
                  size={16}
                  color="white"
                />
              </View>
              <G filter="url(#filter0_b_239_7729)">
                <Path
                  d="M0 12C0 5.37258 5.37258 0 12 0H46.028C50.6022 0 54.7786 2.60047 56.7968 6.70535L64.9532 23.2947C66.9714 27.3995 71.1478 30 75.722 30H87C93.6274 30 99 35.3726 99 42V101C99 107.627 93.6274 113 87 113H12C5.37258 113 0 107.627 0 101V12Z"
                  fill="#00000000"
                />
                <Path
                  d="M0 12C0 5.37258 5.37258 0 12 0H46.028C50.6022 0 54.7786 2.60047 56.7968 6.70535L64.9532 23.2947C66.9714 27.3995 71.1478 30 75.722 30H87C93.6274 30 99 35.3726 99 42V101C99 107.627 93.6274 113 87 113H12C5.37258 113 0 107.627 0 101V12Z"
                  fill="#00000000"
                />
                <Path
                  d="M0.5 12C0.5 5.64872 5.64873 0.5 12 0.5H46.028C50.4116 0.5 54.414 2.99212 56.3481 6.92596L64.5045 23.5153C66.6068 27.7912 70.9572 30.5 75.722 30.5H87C93.3513 30.5 98.5 35.6487 98.5 42V101C98.5 107.351 93.3513 112.5 87 112.5H12C5.64873 112.5 0.5 107.351 0.5 101V12Z"
                  stroke="white"
                  strokeOpacity={0.3}
                />
              </G>
              <Defs>
                <LinearGradient
                  id="paint0_linear_239_7729"
                  x1={49.6371}
                  y1={-96.4536}
                  x2={49.6371}
                  y2={207.839}
                  gradientUnits="userSpaceOnUse"
                >
                  <Stop stopColor="white" />
                  <Stop offset={0.500144} stopColor="white" stopOpacity={0} />
                  <Stop offset={1} stopColor="white" />
                </LinearGradient>
                <LinearGradient
                  id="paint1_linear_239_7729"
                  x1={-112.849}
                  y1={56.5}
                  x2={194.161}
                  y2={56.5}
                  gradientUnits="userSpaceOnUse"
                >
                  <Stop stopColor="white" />
                  <Stop offset={0.534495} stopColor="white" stopOpacity={0} />
                  <Stop offset={1} stopColor="white" />
                </LinearGradient>
              </Defs>

              <View
                style={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  marginTop: 8,
                }}
              >
                <Image
                  source={require("../../../../assets/png/news-tech.png")}
                  style={{
                    width: 60,
                    height: 60,
                    marginTop: 5,
                    marginLeft: 2,
                    marginBottom: 10,
                  }}
                />
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: 12,
                    fontWeight: "400",
                    marginLeft: 15,
                  }}
                >
                  Crypto
                </Text>
              </View>
            </Svg>
          </View>
        </View>
      </ScrollView>
      {/* <CryptoCard/> */}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 110,
    aspectRatio: 0.7,
    borderRadius: 12,
    position: "relative",
    height: 164,
    borderColor: "#ffffff27",
    borderWidth: 1,
    overflow: "hidden",
  },
  rightCard: {
    width: 110,
    aspectRatio: 0.7,
    borderRadius: 12,
    position: "relative",
    height: 145,
    borderColor: "#ffffff27",
    borderWidth: 1,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: 8,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#36B336",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
  },
  arrow: {
    position: "absolute",
    top: 8,
    right: 8,
  },

  rightArrowContainer: {
    height: 22,
    width: 22,
    position: "absolute",
    top: 2,
    right: 4,
    borderRadius: 20,
    padding: 2,
    borderColor: "#ffffff30",
    borderWidth: 1,
  },

  curved: {
    width: "100%",
    height: 200,
    backgroundColor: "white",
    borderRadius: 100,
    overflow: "hidden",
    transform: [{ scaleX: 2 }],
  },
});
