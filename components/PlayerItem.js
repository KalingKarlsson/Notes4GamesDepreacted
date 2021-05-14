import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import Colors from "../constants/Colors";
const PlayerItem = (props) => {
  return (
    <TouchableWithoutFeedback style={styles.playerItem}>
      <View style={styles.infoContainer}>
        <Text style={styles.place}>{props.place}</Text>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.score}>{props.score}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  playerItem: {
    alignItems: "center",
  },
  place: {
    color: Colors.black,
    fontSize: 20,
    width: "30%",
  },
  infoContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    color: Colors.black,
    fontSize: 18,
    width: "50%",
  },
  score: {
    color: Colors.black,
    fontSize: 16,
    width: "20%",
  },
});

export default PlayerItem;
