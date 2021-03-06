import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "./config/colors";

const ListItemSeparator = () => {
  return <View style={styles.separator} />;
};

export default ListItemSeparator;

const styles = StyleSheet.create({
  separator: {
    backgroundColor: colors.light,
    width: "100%",
    height: 2,
  },
});
