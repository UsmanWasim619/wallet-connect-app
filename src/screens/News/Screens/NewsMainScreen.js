import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";
import HorizontalLine from "../../../components/HorizontalLine";
import { NewsItem } from "./NewsItems";
import { NewsCard } from "./NewsCard";
import { GradientHOC } from "../../../HOC/GradientHOC";
import CommonHeader from "../../../components/CommonHeader";
// import { TrendingCard, NewsItem } from "../";

const NewsMainScreen = () => {
  const trendingItems = [
    {
      id: "1",
      title: "AI is the big focus at the Consumer Electronics Show 2025",
      icon: "robot",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1ght3HnIpzoa8XscnYn9d7nCrf5olm.png",
    },
    {
      id: "2",
      title: "Crypto",
      icon: "currency-btc",
      color: "#36B336",
    },
    {
      id: "3",
      title: "Amazon, Chewy, and RH top e-commerce picks at BofA",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1ght3HnIpzoa8XscnYn9d7nCrf5olm.png",
    },
    {
      id: "4",
      title: "Housing",
      icon: "home",
      color: "#36B336",
    },
    {
      id: "5",
      title:
        "Nasdaq, S&P 500, Dow futures jump as Nvidia leads chip stocks higher",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1ght3HnIpzoa8XscnYn9d7nCrf5olm.png",
    },
    {
      id: "6",
      title: "Tech",
      icon: "laptop",
      color: "#36B336",
    },
  ];

  const newsItems = [
    {
      id: "1",
      title: "UK 2024 car market falls just short of 2 million",
      subtitle:
        "The UK new car market recorded its second successive annual increase...",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1ght3HnIpzoa8XscnYn9d7nCrf5olm.png",
    },
    {
      id: "2",
      title: "5 Things to Know Before the Stock Market Opens",
      subtitle: "Investors prepare for a shortened trading week and...",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1ght3HnIpzoa8XscnYn9d7nCrf5olm.png",
    },
    {
      id: "3",
      title: "Analysts revamps Apple stock price target o...",
      subtitle: "It started out as Project Purple over 20 years ago and we...",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1ght3HnIpzoa8XscnYn9d7nCrf5olm.png",
    },
  ];

  return (
    <>
      <CommonHeader screenName={"News"} />
      <ScrollView style={styles.container}>
        <Text style={styles.sectionTitle}>Trending</Text>
        <View style={styles.trendingGrid}>
          {/* {trendingItems.map((item) => ( */}
          {/* ))} */}
        </View>
        <NewsCard {...trendingItems[0]} />
        <View style={{ marginTop: 20, marginBottom: 10 }}>
          <HorizontalLine />
        </View>
        <Text style={styles.sectionTitle}>Other Market News</Text>
        <View style={styles.newsList}>
          {newsItems.map((item) => (
            <NewsItem key={item.id} {...item} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  backText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 4,
  },
  headerTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 16,
  },
  sectionTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "400",
    marginHorizontal: 16,
    marginVertical: 14,
  },
  trendingGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 8,
  },
  newsList: {
    padding: 16,
  },
  // ------------
  card: {
    width: "31%",
    aspectRatio: 1,
    backgroundColor: "#A1A1A1",
    borderRadius: 12,
    margin: "1%",
    padding: 12,
    position: "relative",
    borderTopEndRadius: 30,
  },
  image: {
    width: "100%",
    height: "60%",
    borderRadius: 8,
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

  curved: {
    width: "100%",
    height: 200,
    backgroundColor: "white",
    borderRadius: 100,
    overflow: "hidden",
    transform: [{ scaleX: 2 }],
  },
});

export default GradientHOC(NewsMainScreen);
