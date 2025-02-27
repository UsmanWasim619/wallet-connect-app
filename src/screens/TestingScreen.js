import React, { useRef } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Swiper from "react-native-deck-swiper";

// Sample Data
const data = [
  { id: 1, title: "Beautiful House", image: "https://via.placeholder.com/300" },
  {
    id: 2,
    title: "Luxury Apartment",
    image: "https://via.placeholder.com/300",
  },
  { id: 3, title: "Modern Condo", image: "https://via.placeholder.com/300" },
  { id: 4, title: "Cozy Villa", image: "https://via.placeholder.com/300" },
];

// Card Components
const CardType1 = ({ card }) => (
  <View style={[styles.card, { backgroundColor: "#ffdddd" }]}>
    <Image source={{ uri: card.image }} style={styles.image} />
    <Text style={styles.title}>{card.title}</Text>
    <Text style={styles.description}>Type 1 Card</Text>
  </View>
);

const CardType2 = ({ card }) => (
  <View style={[styles.card, { backgroundColor: "#ddffdd" }]}>
    <Image source={{ uri: card.image }} style={styles.image} />
    <Text style={styles.title}>{card.title}</Text>
    <Text style={styles.description}>Type 2 Card</Text>
  </View>
);

const CardType3 = ({ card }) => (
  <View style={[styles.card, { backgroundColor: "#ddddff" }]}>
    <Image source={{ uri: card.image }} style={styles.image} />
    <Text style={styles.title}>{card.title}</Text>
    <Text style={styles.description}>Type 3 Card</Text>
  </View>
);

const CardType4 = ({ card }) => (
  <View style={[styles.card, { backgroundColor: "#ffffdd" }]}>
    <Image source={{ uri: card.image }} style={styles.image} />
    <Text style={styles.title}>{card.title}</Text>
    <Text style={styles.description}>Type 4 Card</Text>
  </View>
);

// Main Swiper Component
const CustomCardSwiper = () => {
  const swiperRef = useRef(null);

  const renderCard = (card) => {
    console.log("card?.title:", card?.title);
    switch (card?.title) {
      case "Beautiful House":
        return <CardType1 card={card} />;
      case "Luxury Apartments":
        return <CardType2 card={card} />;
      case "Modern Condo":
        return <CardType3 card={card} />;
      case "Cozy Villa":
        return <CardType4 card={card} />;
      default:
        return <CardType1 card={card} />;
    }
  };

  return (
    <View style={styles.container}>
     
    </View>
  );
};

export default CustomCardSwiper;

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  card: {
    width: 300,
    height: 400,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: "100%", height: "70%", borderRadius: 10 },
  title: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
  description: { fontSize: 14, marginTop: 5, color: "#555" },
  buttons: { flexDirection: "row", marginTop: 20 },
  button: {
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  buttonText: { color: "#fff", fontSize: 16 },
  labelLeft: { color: "red", fontSize: 24, fontWeight: "bold" },
  labelRight: { color: "green", fontSize: 24, fontWeight: "bold" },
  wrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
