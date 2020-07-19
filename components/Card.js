import React from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";

import colors from "./config/colors";

const Card = ({ title, subtitle, image }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image resizeMode="cover" source={image} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: { flex: 1 },
  cardContainer: {
    backgroundColor: "#f8f4f4",
    height: 350,
    paddingHorizontal: 20,
  },
  card: {
    width: "100%",
    top: StatusBar.currentHeight + 50,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  image: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingBottom: 20,
  },
  title: {
    padding: 10,
    fontSize: 15,
  },
  subtitle: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    color: colors.secondaryColor,
  },
});
