import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "./config/colors";

const ButtonComponent = ({ text, color, margin }) => {
  return (
    <TouchableOpacity
      style={[{ backgroundColor: color, marginBottom: margin }, styles.btn]}
    >
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    borderRadius: 15,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    color: colors.white,
  },
});
