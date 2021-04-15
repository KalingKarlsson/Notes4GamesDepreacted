import React, { useEffect } from "react";
import {
  StyleSheet,
  Platform,
  FlatList,
  View,
  Text,
  Animated,
} from "react-native";
import { useSelector } from "react-redux";

import ScoreboardItem from "../components/ScoreboardItem";
import Colors from "../constants/Colors";

const HistoryScreen = (props) => {
  const scoreboards = useSelector((state) => state.scoreboards.scoreboards);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>
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
                scoreboardDate: itemData.item.date,
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
  title: {
    fontSize: 28,
    fontFamily: "open-sans-bold",
    color: Colors.black,
    marginBottom: "2%",
  },
});

export default HistoryScreen;
