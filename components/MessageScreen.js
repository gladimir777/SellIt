import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import ListDetails from "./ListDetails";

const messages = [
  { id: 1, title: " t1", description: "d1" },
  { id: 2, title: "t2", description: "d2" },
  { id: 3, title: " t3", description: "d3" },
];

const MessageScreen = () => {
  return (
    <FlatList
      data={message}
      renderItem={({ item }) => <ListDetails />}
      keyExtractor={(message) => message.id.toString()}
    />
  );
};

export default MessageScreen;

const styles = StyleSheet.create({});
