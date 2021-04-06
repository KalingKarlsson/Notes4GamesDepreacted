import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Colors";

const GameHistoryScreen = (props) => {
  const printFinalScores = () => {
    const finalScores = props.navigation.getParam("scoreboardScores");
    let rows = "";

    for (let i = 0; i < finalScores.length; i++) {
      const element = finalScores[i];
      rows +=
        element.place + ": " + element.name + "    " + element.score + "\n";
    }
    return rows;
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>
          {props.navigation.getParam("scoreboardTitle")}
        </Text>
        <Text style={styles.date}>
          {props.navigation.getParam("scoreboardDate")}
        </Text>
      </View>
      <View style={styles.scores}>
        <Text>{printFinalScores()}</Text>
      </View>
    </View>
  );
};

GameHistoryScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("scoreboardTitle"),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
  },
  date: {
    color: Colors.black,
    fontSize: 16,
  },
  infoContainer: {
    width: 250,
    justifyContent: "space-evenly",
    flexDirection: "row",
    paddingVertical: 50,
  },
  scores: {},
  title: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default GameHistoryScreen;
