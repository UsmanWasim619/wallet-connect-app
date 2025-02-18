import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HorizontalLine from "./HorizontalLine";

export default function CommonHeader({ screenName }) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBar}>
        <View style={styles.topBarIcons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="chevron-back" size={20} color="white" />
          </TouchableOpacity>
          <View>
            <Text style={styles.title}>{screenName}</Text>
          </View>
        </View>
      </View>
      <HorizontalLine />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    // backgroundColor: "#1C1C1E",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",

    // paddingHorizontal: 16,
    height: 44,
    marginTop: "12%",
    marginBottom:"2%"
  },
  title: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "400",
  },

  topBarIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    alignContent: "center",
    gap: 5,
    width: "100%",
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
  },
});
