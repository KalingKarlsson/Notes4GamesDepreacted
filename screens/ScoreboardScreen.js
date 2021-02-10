import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Platform,
  FlatList,
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import GridItem from "../components/GridItem";
import HeaderButton from "../components/HeaderButton";
import * as scoreboardActions from "../store/scoreboard-actions";
import Colors from "../constants/Colors";

const ScoreboardScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [counter, setCounter] = useState(3);

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const increment = () => {
    setCounter((prevState) => prevState + 1);
  };

  const SkummeslövCounter = () => {
    [...Array(txtArr)].map((item, key) => (key = { key }));
  };

  useEffect(() => {
    setCounter(increment);
  }, [setCounter]);

  let players = [
    "Anton",
    "Tess",
    "Kaling",
    "Trisse",
    "Totte",
    "Charlott",
    "Kalinga",
    "Edward",
  ];

  const Liverpool = [8];
  const Skummeslöv = [
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
  ];

  let txtArr = Array(11).fill(3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);

  let dummydata = 63;
  let count = 3;

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Skummeslöv</Text>
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        style={styles.scroller}
      >
        <View style={styles.grid}>
          <View style={styles.gridItem}>
            <Text style={styles.gridItemScore}></Text>
          </View>
          {players.map((item) => (
            <View style={styles.gridItem}>
              <GridItem
                style={styles.gridItemScore}
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                value={item}
              />
            </View>
          ))}

          {[...Array(dummydata)].map((item, key) => (
            //{key % 9 ? enteredValue : }
            <View style={styles.gridItem}>
              <GridItem
                style={styles.gridItemScore}
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                onChangeText={numberInputHandler}
                key={key}
                value={key % 9 ? enteredValue : increment}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

ScoreboardScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Notes4Games",
  };
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "80%",
  },
  gridItem: {
    width: 70,
    height: 50,
    backgroundColor: Colors.white,

    borderWidth: 1,
    borderColor: Colors.grey,

    justifyContent: "center",
    alignItems: "center",
  },
  gridItemScore: {
    fontSize: 18,
    width: "100%",
    height: "100%",
    textAlign: "center",
    justifyContent: "center",
  },
  mainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  scroller: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: Colors.black,
    marginBottom: 2,
  },
});

export default ScoreboardScreen;
