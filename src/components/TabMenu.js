import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
import HorizontalLine from "./HorizontalLine";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = 100;


class TabMenu extends React.Component {
  constructor(props) {
    super(props);
    this.scrollViewRef = React.createRef();
    this.scrollX = new Animated.Value(0);
    // Add a flag to prevent double updates
    this.isUpdatingFromTab = false;
  }

  componentDidUpdate(prevProps) {
    // Only update scroll position if the change came from Swiper (not from tab press)
    if (
      prevProps.selectedTab !== this.props.selectedTab &&
      !this.isUpdatingFromTab
    ) {
      this.scrollToSelectedTab();
    }
    // Reset the flag after the update
    this.isUpdatingFromTab = false;
  }

  scrollToSelectedTab = () => {
    const { selectedTab } = this.props;
    const data = ["NIFTY", "INDIAVIX", "FINNIFTY", "MIDCPNIFTY", "SENSEX"];

    if (selectedTab !== null && selectedTab < data.length) {
      const newScrollPosition =
        selectedTab * ITEM_WIDTH - width / 2 + ITEM_WIDTH / 2;

      Animated.timing(this.scrollX, {
        toValue: newScrollPosition,
        duration: 300,
        useNativeDriver: false,
      }).start();

      if (this.scrollViewRef.current) {
        this.scrollViewRef.current.scrollTo({
          x: newScrollPosition,
          animated: true,
        });
      }
    }
  };

  handleTabPress = (tab) => {
    const data = ["NIFTY", "INDIAVIX", "FINNIFTY", "MIDCPNIFTY", "SENSEX"];
    const index = data.indexOf(tab);
    if (index !== -1) {
      // Set the flag before updating Redux
      this.isUpdatingFromTab = true;
      this.props.setSelectedTab(index);
    }
  };

  renderTabs = () => {
    const data = ["NIFTY", "INDIAVIX", "FINNIFTY", "MIDCPNIFTY", "SENSEX"];
    return data.map((tab, index) => (
      <TabItem
        key={`${tab}-${index}`}
        tab={tab}
        isSelected={this.props.selectedTab === index}
        onPress={() => this.handleTabPress(tab)}
      />
    ));
  };

  render() {
    return (
      <View style={styles.container}>
        <HorizontalLine />
        <View style={styles.tabsContainer}>
          <Animated.ScrollView
            ref={this.scrollViewRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
            scrollEventThrottle={16}
          >
            {this.renderTabs()}
          </Animated.ScrollView>
        </View>
        <HorizontalLine />
      </View>
    );
  }
}

const TabItem = React.memo(({ tab, isSelected, onPress }) => {
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
  // container: {
  //   backgroundColor: "#fff",
  // },
  // horizontalLine: {
  //   height: 1,
  //   backgroundColor: "#E0E0E0",
  //   width: "100%",
  // },
  // tabsContainer: {
  //   height: 50,
  // },
  // scrollContent: {
  //   alignItems: "center",
  // },
  // tabButton: {
  //   width: ITEM_WIDTH,
  //   height: 50,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   position: "relative",
  // },
  // tabText: {
  //   fontSize: 14,
  //   color: "#666",
  // },
  // selectedTabText: {
  //   color: "#000",
  //   fontWeight: "bold",
  // },
  // indicator: {
  //   position: "absolute",
  //   bottom: 0,
  //   height: 3,
  //   width: 40,
  //   backgroundColor: "#000",
  //   borderRadius: 3,
  // },
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

const mapStateToProps = (state) => ({
  selectedTab: state.tabMenu.selectedTab, // Redux state
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedTab: (index) =>
    dispatch({ type: "SET_SELECTED_TAB", payload: index }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TabMenu);
