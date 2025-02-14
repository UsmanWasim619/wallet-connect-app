import { LinearGradient } from "expo-linear-gradient";
import { View, Text } from "react-native";
import Glassmorphism from "../../../components/Glassmorphism";

export default function CommodityCardComponents({ title, price, change, expiry }) {
  return (
    <Glassmorphism
      padding={0}
      width={120}
      intensity={10}
      style={{
        borderRadius: 12,
        paddingTop: 12,
        marginRight: 10,
        height: 120,
        justifyContent: "center",
        alignItems: "cneter",
        boxShadow: "none",
        backgroundColor: "#00000000",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 12,
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        {title}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 8,
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 14, textAlign: "center" }}>
          ₹
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 14,
            textAlign: "center",
            fontWeight: "600",
            marginLeft: 2,
          }}
        >
          {price}
        </Text>
      </View>
      <Text
        style={{
          color: "#4CAF50",
          fontSize: 12,
          marginTop: 4,
          textAlign: "center",
        }}
      >
        +{change}
      </Text>
      <LinearGradient
        colors={["#ffffff", "#00000047"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          // backgroundColor: "#252729",
          borderBottomRightRadius: 11,
          borderBottomLeftRadius: 11,

          height: 20,
          marginTop: "auto",
          alignSelf: "center",
          width: "100%",
        }}
      >
        <Text
          style={{
            color: "#000",
            fontWeight: "",
            fontSize: 10,
            textAlign: "center",
          }}
        >
          Expiry {expiry}
        </Text>
      </LinearGradient>
    </Glassmorphism>
  );
}
