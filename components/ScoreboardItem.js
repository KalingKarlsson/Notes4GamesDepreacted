import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import Colors from "../constants/Colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
const ScoreboardItem = (props) => {
  const rightSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    return (
      <TouchableOpacity onPress={props.handleDelete} activeOpacity={0.6}>
        <View style={styles.deleteBox}>
          <Animated.Text
            style={{
              transform: [{ scale: scale }],
              fontSize: 18,
              color: Colors.white,
            }}
          >
            Delete
          </Animated.Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={rightSwipe} onSwipeableRightOpen={() => {}}>
      <TouchableOpacity onPress={props.onSelect} style={styles.scoreboardItem}>
        <View style={styles.infoContainer}>
          <Text style={styles.id}>{props.id}</Text>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.date}>{props.date}</Text>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  scoreboardItem: {
    borderBottomColor: Colors.ceruleancrayola,
    borderTopColor: Colors.ceruleancrayola,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginVertical: 4,
    alignItems: "center",
  },
  id: {
    color: Colors.black,
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 5,
    borderColor: Colors.black,
  },
  infoContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  title: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    color: Colors.black,
    fontSize: 16,
  },
  deleteBox: {
    backgroundColor: Colors.cancel,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: 90,
    marginVertical: 4,
  },
});

export default ScoreboardItem;
