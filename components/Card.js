import React from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";

import colors from "./config/colors";

const Card = ({ title, subtitle, image }) => {
  return (
    <View style={styles.card}>
      <Image resizeMode="cover" source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    top: StatusBar.currentHeight + 15,
  },
  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: "hidden",
    margin: 15,
  },
  image: {
    height: 200,
    width: "100%",
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
