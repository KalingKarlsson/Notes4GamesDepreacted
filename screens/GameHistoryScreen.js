import React, { useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import CustomButton from "../components/CustomButton";
import PlayerItem from "../components/PlayerItem";
import Colors from "../constants/Colors";
import * as playerActions from "../store/actions/player-actions";

const GameHistoryScreen = (props) => {
  const players = useSelector((state) => state.players.players);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(playerActions.loadPlayers());
  }, [dispatch]);

  /*     players Array [
      Player {
        "id": "1",
        "name": "tess",
        "place": 1,
        "score": 54,
      },
      Player {
        "id": "2",
        "name": "anton",
        "place": 2,
        "score": 56,
      }, */

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
          <FlatList
            data={players}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
              <PlayerItem
                key={itemData.item.id}
                place={itemData.item.place}
                name={itemData.item.name}
                score={itemData.item.score}
              />
            )}
          />
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
