import React from "react";
import { StyleSheet } from "react-native";

import ListScreen from "./components/ListScreen";
import Screen from "./components/Screen";

export default function App() {
  return <ListScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    //justifyContent: "center",
    // top: StatusBar.currentHeight,
  },
});
