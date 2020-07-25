import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import colors from "./config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

const ListItem = ({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  IconComponent,
  bgColor,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={[styles.profileContainer, { backgroundColor: bgColor }]}>
          {IconComponent}
          {image && (
            <Image
              style={[styles.profilePicture, { width: 70, height: 70 }]}
              source={image}
            />
          )}

          <View style={styles.profileTextContainer}>
            <Text style={styles.name}>{title}</Text>
            {subTitle && <Text style={styles.numberOfItem}>{subTitle}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    padding: 15,
  },
  profilePicture: {
    borderRadius: 35,
    resizeMode: "cover",
  },
  profileTextContainer: {
    marginHorizontal: 10,
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    fontWeight: "500",
    alignContent: "center",
  },
  numberOfItem: {
    fontSize: 15,
  },
});
