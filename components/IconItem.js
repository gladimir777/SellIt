import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "./config/colors";

const IconItem = ({ name, bgColor, title }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={name}
        size={30}
        color={colors.white}
        style={[styles.icon, { backgroundColor: bgColor }]}
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default IconItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 4,
    marginLeft: 10,
  },
  icon: {
    backgroundColor: colors.primaryColor,
    borderRadius: 19,
    padding: 4,
  },
});
