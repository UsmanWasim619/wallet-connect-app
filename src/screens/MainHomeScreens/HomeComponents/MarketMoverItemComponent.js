import { View, Text } from "react-native";

export default function MarketMoverItem({ code, name, price, change }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#2A2A2A",
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ color: "white", fontSize: 16 }}>{code}</Text>
        <Text style={{ color: "#808080", fontSize: 12 }}>{name}</Text>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={{ color: "white", fontSize: 16 }}>{price}</Text>
        <Text style={{ color: "#4CAF50", fontSize: 12 }}>{change}</Text>
      </View>
    </View>
  );
}
