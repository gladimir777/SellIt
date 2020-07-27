import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "./config/colors";

const Icon = ({ name, bgColor = "#000", size = 30, color = "#fff" }) => {
  return (
    <View
      style={[
        styles.icon,
        {
          width: size,
          height: size,
          borderRadius: size * 0.5,
        },
        { backgroundColor: bgColor },
      ]}
    >
      <MaterialCommunityIcons
        name={name}
        size={size / 2}
        color={colors.white}
      />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
});
