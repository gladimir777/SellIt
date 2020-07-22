import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ListItem = ({ image, title, subTitle }) => {
  return (
    <View style={styles.profileContainer}>
      <Image style={styles.profilePicture} source={image} />
      <View style={styles.profileTextContainer}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.numberOfItem}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
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
    fontSize: 20,
    fontWeight: "500",
  },
  numberOfItem: {
    fontSize: 15,
  },
});
