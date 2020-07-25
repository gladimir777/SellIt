import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import ListItem from "./ListItem";
import Icon from "./Icon";
import ListItemSeparator from "./ListItemSeparator";
import colors from "./config/colors";

const menuItem = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      bgColor: colors.primaryColor,
    },
  },
  {
    title: "My messages",
    icon: {
      name: "email",
      bgColor: colors.secondaryColor,
    },
  },
];
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
      <View>
        <FlatList
          data={menuItem}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              bgColor="#fff"
              IconComponent={
                <Icon
                  bgColor={item.icon.bgColor}
                  name={item.icon.name}
                  size={40}
                />
              }
            />
          )}
          keyExtractor={(item) => item.title}
        />
      </View>
      <View style={styles.logout}>
        <ListItem
          title="Log out"
          bgColor="#fff"
          IconComponent={
            <Icon bgColor={colors.yellow} name="logout" size={40} />
          }
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
    marginVertical: 20,
  },
  logout: {
    marginTop: 20,
  },
});
