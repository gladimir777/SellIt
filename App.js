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
import moduleName from "./components/Card";

import colors from "./components/config/colors";
import Card from "./components/Card";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card
        image={require("./assets/jacket.jpg")}
        title="Red jacket for sale!"
        subtitle="$100"
      />
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
