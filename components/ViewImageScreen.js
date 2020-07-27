import React from "react";
import { StyleSheet, View, StatusBar, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "./Screen";

import colors from "./config/colors";

const ViewImageScreen = () => {
  return (
    <Screen style={styles.container}>
      <View style={styles.retangleContainer}>
        <View style={styles.redBox}>
          <MaterialCommunityIcons color="#fff" name="close" size={32} />
        </View>
        <View style={styles.greenBox}>
          <MaterialCommunityIcons
            color="#fff"
            name="trash-can-outline"
            size={32}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Image
          resizeMode="contain"
          source={require("../assets/chair.jpg")}
          style={styles.bgImage}
        ></Image>
      </View>
    </Screen>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  retangleContainer: {
    display: "flex",
    height: 60,
    flexDirection: "row",
    top: StatusBar.currentHeight,
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
  redBox: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  greenBox: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
});
