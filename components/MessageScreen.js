import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
} from "react-native";

import ListItem from "./ListItem";
import ListItemSeparator from "./ListItemSeparator";
import ListItemDeleteAction from "./ListItemDeleteAction";

const initMessages = [
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
  const [message, setMessage] = useState(initMessages);
  const handleDelete = (item) => {
    setMessage(message.filter((obj) => obj.id !== item.id));
  };
  return (
    <SafeAreaView style={{ top: StatusBar.currentHeight }}>
      <FlatList
        data={message}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Pressed", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        keyExtractor={(message) => message.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </SafeAreaView>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({});
