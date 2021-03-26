import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const ScoreboardItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.scoreboardItem}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  scoreboardItem: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  infoContainer: {
    marginLeft: 25,
    width: 250,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: "black",
    fontSize: 18,
    marginBottom: 5,
  },
  date: {
    color: "#666",
    fontSize: 16,
  },
});

export default ScoreboardItem;
