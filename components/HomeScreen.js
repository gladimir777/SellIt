import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  StatusBar,
} from "react-native";

import colors from "./config/colors";
import ButtonComponent from "./ButtonComponent";
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={styles.image}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logo-red.png")}
            style={styles.logo}
          />
          <Text style={styles.legende}>Sell what you don't need</Text>
        </View>
        <View style={styles.buttonContainer}>
          <ButtonComponent
            color={colors.primaryColor}
            text="Login"
            margin={20}
          />
          <ButtonComponent color={colors.secondaryColor} text="Register" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    top: StatusBar.currentHeight + 30,
    alignItems: "center",
    padding: 10,
  },
  logo: {
    width: 70,
    height: 70,
  },
  legende: {
    fontSize: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  redButton: {
    height: 50,
    backgroundColor: colors.primaryColor,
  },
  greenButton: {
    height: 50,
    backgroundColor: colors.secondaryColor,
  },
});
