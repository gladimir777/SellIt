import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

import HomeScreen from "./components/HomeScreen";
import ViewImageScreen from "./components/ViewImageScreen";
import ButtonComponent from "./components/ButtonComponent";
import Card from "./components/Card";
import ListDetails from "./components/ListDetails";
import ListItem from "./components/ListItem";
import MessageScreen from "./components/MessageScreen";
import MyAccount from "./components/MyAccount";
import Icon from "./components/Icon";
import ListScreen from "./components/ListScreen";
import colors from "./components/config/colors";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ListScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    //justifyContent: "center",
    // top: StatusBar.currentHeight,
  },
});
