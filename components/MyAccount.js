import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import ListItem from "./ListItem";

import colors from "./config/colors";

const MyAccount = () => {
  const handlePressed = () => console.log("Item pressed");
  return (
    <View style={styles.container}>
      <View style={styles.account}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          onPress={handlePressed}
          title="Glad Glad"
          subTitle="gladglad@gmail.com"
          bgColor={colors.white}
        />
      </View>
    </View>
  );
};

export default MyAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.medium,
  },
  account: {
    top: StatusBar.currentHeight,
  },
});
