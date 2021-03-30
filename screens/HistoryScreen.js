import React, { useEffect } from "react";
import { StyleSheet, Platform, FlatList, View, Text } from "react-native";
import { useSelector } from "react-redux";

import ScoreboardItem from "../components/ScoreboardItem";
import Colors from "../constants/Colors";

const HistoryScreen = (props) => {
  const scoreboards = useSelector((state) => state.scoreboards.scoreboards);
  console.log(scoreboards);

  /*
    Array [
  Scoreboard {
    "date": "29/03/2021",
    "scores": Array [
      Object {
        "name": "anton",
        "place": 1,
        "score": 16,
      },
      Object {
        "name": "kalle",
        "place": 2,
        "score": 40,
      },
    ],
    "title": "Liverpool",
  }
  */

  return (
    <View style={styles.container}>
      <FlatList
        data={scoreboards}
        keyExtractor={(itemData) => itemData.id}
        renderItem={(itemData) => (
          <ScoreboardItem
            key={itemData.item.id}
            id={itemData.item.id}
            title={itemData.item.title}
            date={itemData.item.date}
            onSelect={() => {
              props.navigation.navigate("GameHistory", {
                scoreboardTitle: itemData.item.title,
                scoreboardId: itemData.item.date,
                scoreboardScores: itemData.item.scores,
              });
            }}
          />
        )}
      />
    </View>
  );
};

HistoryScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Notes4Games",
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
  },
});

export default HistoryScreen;
