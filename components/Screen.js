import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

const Screen = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    //  backgroundColor: "red",
  },
});
