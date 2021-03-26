import React, { useEffect } from "react";
import { StyleSheet, Platform, FlatList, View, Text } from "react-native";
import { useSelector } from "react-redux";

import ScoreboardItem from "../components/ScoreboardItem";
import Colors from "../constants/Colors";

const HistoryScreen = (props) => {
  const scoreboards = useSelector((state) => state.scoreboards.scoreboards);
  console.log(scoreboards);

  /*
    Scoreboard {
    "date": undefined,
    "id": "Liverpool",
    "title": "26/03/2021",
  },
  */

  return (
    <View style={styles.container}>
      <FlatList
        data={scoreboards}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          console.log(itemData.item.title), // is adte???
          console.log(itemData.item.date), // undefined??
          (
            <ScoreboardItem
              title={itemData.item.title}
              date={itemData.item.date}
              onSelect={() => {
                props.navigation.navigate("GameHistory", {
                  scoreboardTitle: itemData.item.title,
                  scoreboardId: itemData.item.id,
                });
              }}
            />
          )
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
