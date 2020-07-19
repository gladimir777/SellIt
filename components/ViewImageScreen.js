import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";

import colors from "./config/colors";

const ViewImageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.retangleContainer}>
        <View style={styles.redBox}></View>
        <View style={styles.greenBox}></View>
      </View>
      <View style={{ flex: 1 }}>
        <Image
          resizeMode="contain"
          source={require("../assets/chair.jpg")}
          style={styles.bgImage}
        ></Image>
      </View>
    </SafeAreaView>
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
    backgroundColor: colors.primaryColor,
  },
  greenBox: {
    height: 50,
    width: 50,
    backgroundColor: colors.secondaryColor,
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
});
