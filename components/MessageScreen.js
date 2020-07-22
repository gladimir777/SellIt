import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
} from "react-native";

import ListItem from "./ListItem";

const messages = [
  {
    id: 1,
    title: " t1",
    description: "d1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "t2",
    description: "d2",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: " t3",
    description: "d3",
    image: require("../assets/mosh.jpg"),
  },
];

const MessageScreen = () => {
  return (
    <SafeAreaView style={{ top: StatusBar.currentHeight }}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
        keyExtractor={(message) => message.id.toString()}
      />
    </SafeAreaView>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({});
