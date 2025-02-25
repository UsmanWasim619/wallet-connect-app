import { useState, useRef, memo } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
  Text,
} from "react-native";
import HorizontalLine from "./HorizontalLine";
import { useDispatch } from "react-redux";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = 100;

export default function TabMenu({
  data = ["GAINERS", "52W HIGH", "ALL", "52W LOW", "TOP LOSERS"],
  selected = "ALL",
}) {
  const [selectedTab, setSelectedTab] = useState(selected);

  const scrollViewRef = useRef(null);
  const [scrollX] = useState(new Animated.Value(0));

  const dispatch = useDispatch();

  const handleTabPress = (tab, index) => {
    setSelectedTab(tab);
    dispatch({ type: "SET_SELECTED_TAB", payload: tab });

    const newScrollPosition = index * ITEM_WIDTH - width / 2 + ITEM_WIDTH / 2;
    scrollViewRef.current?.scrollTo({ x: newScrollPosition, animated: true });
  };

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const handleScrollEnd = (event) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    if (contentOffset.x <= 0) {
      scrollViewRef.current?.scrollTo({
        x: contentSize.width / 3,
        animated: false,
      });
    } else if (contentOffset.x + layoutMeasurement.width >= contentSize.width) {
      scrollViewRef.current?.scrollTo({
        x: contentSize.width / 3,
        animated: false,
      });
    }
  };

  const renderTabs = () => {
    const extendedData = [...data, ...data, ...data];
    return extendedData.map((tab, index) => (
      <TabItem
        key={`${tab}-${index}`}
        tab={tab}
        isSelected={selectedTab === tab}
        onPress={() => handleTabPress(tab, index)}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <HorizontalLine />
      <View style={styles.tabsContainer}>
        <Animated.ScrollView
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          onMomentumScrollEnd={handleScrollEnd}
        >
          {renderTabs()}
        </Animated.ScrollView>
      </View>
      <HorizontalLine />
    </View>
  );
}

const TabItem = memo(({ tab, isSelected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.tabButton}>
      <Text style={[styles.tabText, isSelected && styles.selectedTabText]}>
        {tab}
      </Text>
      {isSelected && <View style={styles.indicator} />}
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    height: 65,
  },
  tabsContainer: {
    flex: 1,
    justifyContent: "center",
  },
  scrollContent: {
    paddingTop: 3,
    // paddingHorizontal: width / 2 - ITEM_WIDTH / 2, // Ensure the first item can be centered
  },
  tabButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    position: "relative",
    alignItems: "center",
    width: "auto",
  },
  tabText: {
    color: "#FFFFFF87",
    fontSize: 14,
    fontWeight: "400",
    width: "auto",
  },
  selectedTabText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    width: "auto",
  },
  indicator: {
    position: "absolute",
    bottom: 0,
    left: 10,
    right: 10,
    height: 2,
    backgroundColor: "#01A3B6",
    shadowColor: "#01A3B6",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 1,
    boxShadow: `0 -5px 40px 10px  #01A3B6`,
  },
});
