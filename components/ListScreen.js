import React from "react";
import { StyleSheet, FlatList, View, StatusBar } from "react-native";
import Card from "./Card";

const listItems = [
  {
    id: 1,
    title: "Red jacket for sale",
    subTitle: "$" + 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    subTitle: "$" + 1000,
    image: require("../assets/couch.jpg"),
  },
];
const ListScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={listItems}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subtitle={item.subTitle}
              image={item.image}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
  listContainer: {
    top: StatusBar.currentHeight + 15,
  },
});
