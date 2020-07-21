import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Dimensions,
} from "react-native";

import HomeScreen from "./components/HomeScreen";
import ViewImageScreen from "./components/ViewImageScreen";
import ButtonComponent from "./components/ButtonComponent";
import Card from "./components/Card";
import ListDetails from "./components/ListDetails";
import colors from "./components/config/colors";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ListDetails />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    //justifyContent: "center",
  },
});
