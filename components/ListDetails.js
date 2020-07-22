import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";

import colors from "../components/config/colors";
import ListItem from "./ListItem";
const ListDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image
            resizeMode="cover"
            source={require("../assets/jacket.jpg")}
            style={styles.image}
          />
          <Text style={styles.title}>Red jacket for sale</Text>
          <Text style={styles.subtitle}>$100</Text>
        </View>
        <ListItem
          title="Gladimir Jacobsen"
          subTitle="5 Listing Items"
          image={require("../assets/mosh.jpg")}
        />
      </View>
    </View>
  );
};

export default ListDetails;

const styles = StyleSheet.create({
  container: { flex: 1 },
  cardContainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
  card: {
    width: "100%",
    backgroundColor: colors.white,
  },
  image: {
    height: 300,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingBottom: 20,
  },
  title: {
    padding: 10,
    paddingLeft: 20,
    fontSize: 25,
  },
  subtitle: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    color: colors.secondaryColor,
    fontSize: 20,
  },
});
