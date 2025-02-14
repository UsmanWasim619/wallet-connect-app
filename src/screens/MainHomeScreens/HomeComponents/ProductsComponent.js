import { View, Text, TouchableOpacity, Image } from "react-native";
import Glassmorphism from "../../../components/Glassmorphism";

export default function ProductsComponent({ icon, title, img }) {
  return (
    <TouchableOpacity
      style={{
        width: "31%",
        aspectRatio: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: "1%",
      }}
    >
      <Glassmorphism
        intensity={30}
        style={{
          width: 52,
          height: 52,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          // boxShadow:"none"

          boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
          backgroundColor: "#70707010",
        }}
      >
        {/* {icon} */}

        <Image source={img} style={{ width: 28, height: 28 }} />
      </Glassmorphism>
      <Text
        style={{
          color: "white",
          fontSize: 12,
          marginTop: 8,
          textAlign: "center",
          fontWeight: "500",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
