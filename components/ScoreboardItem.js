import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

const ScoreboardItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.scoreboardItem}>
      <View style={styles.infoContainer}>
        <Text style={styles.id}>{props.id}</Text>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  scoreboardItem: {
    borderColor: Colors.ceruleancrayola,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginVertical: 4,
    alignItems: "center",
  },
  id: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: "bold",
    borderRadius: 5,
    borderColor: Colors.black,
  },
  infoContainer: {
    width: 250,
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
});

export default ScoreboardItem;
