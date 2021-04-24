import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import CustomButton from "../components/CustomButton";
import Colors from "../constants/Colors";
import * as playerActions from "../store/actions/player-actions";

const GameHistoryScreen = (props) => {
  const printFinalScores = () => {
    const finalScores = props.navigation.getParam("scoreboardScores");
    const players = useSelector((state) => state.players.players);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(playerActions.loadPlayers());
    }, [dispatch]);

    console.log("players", players);
    //console.log(finalScores);

    /*     function malformedJSON2Array(tar) {
      var arr = [];
      tar = tar.replace(/^\{|\}$/g, "").split(",");
      for (var i = 0, cur, pair; (cur = tar[i]); i++) {
        arr[i] = {};
        pair = cur.split(":");
        arr[i][pair[0]] = /^\d*$/.test(pair[1]) ? +pair[1] : pair[1];
      }
      return arr;
    }

    const correctFormat = malformedJSON2Array(finalScores); */
    /*
     * final scores raw 
    (
        {
        name = te;
        place = 1;
        score = 50;
    },
        {
        name = anr;
        place = 2;
        score = 123;
    }
)
     */

    /*     let foo = finalScores.replace(/[=]/g, ":");
    let foo2 = foo.replace(/[();]/g, "");

    console.log(JSON.parse(foo2)); */
    /*     let strippedFinalScores = finalScores.replace(/[{(,;)}]/g, "");

    strippedFinalScores = strippedFinalScores.replace("name =", "");
    strippedFinalScores = strippedFinalScores.replace("place =", "");

    strippedFinalScores = strippedFinalScores.replace("score =", ""); */

    let rows = "";

    /*     for (let i = 0; i < finalScores.length; i++) {
      let element = finalScores[i];
      element = element.replace(/[{(,= \n;)}]/g, "");
      rows += element;
    } */

    return finalScores;
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
