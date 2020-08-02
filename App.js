import React from "react";
import { StyleSheet, TextInput } from "react-native";

import ListScreen from "./components/ListScreen";
import Screen from "./components/Screen";

export default function App() {
  const [firstName, setFirstname] = useState("");
  return (
    <Screen>
      <TextInput
        placeholder="First Name"
        onChangeText={(text) => setFirstname(text)}
        style={{
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
          padding: 5,
        }}
      />
    </Screen>
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
