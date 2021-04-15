import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomButton from "../components/CustomButton";
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
        <View style={styles.headline}>
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
      <View style={styles.deleteButton}>
        <CustomButton title="Delete" onPress={() => {}} />
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
    fontSize: 22,
  },
  deleteButton: {
    backgroundColor: Colors.cancel,
    paddingHorizontal: 20,
    paddingVertical: 2,
    marginTop: "26%",
    //ios
    shadowColor: Colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    //android
    elevation: 4,

    //border
    borderRadius: 8,
  },
  headline: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  infoContainer: {
    width: 250,
    paddingVertical: 50,
  },
  scores: {
    alignItems: "center",
    paddingTop: "16%",
    fontSize: 16,
  },
  title: {
    color: Colors.black,
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default GameHistoryScreen;
