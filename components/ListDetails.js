import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";

import colors from "../components/config/colors";
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
        <View style={styles.profileContainer}>
          <Image
            style={styles.profilePicture}
            source={require("../assets/mosh.jpg")}
          />
          <View style={styles.profileTextContainer}>
            <Text style={styles.name}>Gladimir Jacobsen</Text>
            <Text style={styles.numberOfItem}>5 Listings</Text>
          </View>
        </View>
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
    fontSize: 20,
  },
  subtitle: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    color: colors.secondaryColor,
    fontSize: 20,
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  profilePicture: {
    height: 70,
    width: 70,
    borderRadius: 35,
    resizeMode: "cover",
  },
  profileTextContainer: {
    margin: 10,
  },
  name: {
    fontWeight: "bold",
  },
});
