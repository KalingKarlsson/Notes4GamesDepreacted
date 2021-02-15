import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Platform,
  FlatList,
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomButton from "../components/CustomButton";
import GridItem from "../components/GridItem";
import HeaderButton from "../components/HeaderButton";
import * as scoreboardActions from "../store/scoreboard-actions";
import Colors from "../constants/Colors";

const ScoreboardScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const Liverpool = ["1", "2", "3", "4", "5", "6", "7", "8"];

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

  const players = [
    "Anton",
    "Tess",
    "Kaling",
    "Trisse",
    "Totte",
    "Charlott",
    "Kalinga",
    "Edward",
  ];

  let numOfBlankTiles = players.length * Skummeslöv.length;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.screen}>
        <Text style={styles.title}>Skummeslöv</Text>
        <View style={styles.grid}>
          <View style={styles.gridPlayers}>
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
                  maxLength={8}
                  textContentType="name"
                />
              </View>
            ))}
          </View>

          <ScrollView style={styles.scroller}>
            <View style={styles.gridColumns}>
              <View style={styles.gridRounds}>
                {Skummeslöv.map((item) => (
                  <View style={styles.gridItemCol}>
                    <GridItem
                      style={styles.gridItemScore}
                      blurOnSubmit
                      editable={false}
                      value={item}
                    />
                  </View>
                ))}
              </View>

              <View style={styles.gridContent}>
                {[...Array(numOfBlankTiles)].map((item, key) => (
                  <View style={styles.gridItemCol}>
                    <GridItem
                      style={styles.gridItemScore}
                      blurOnSubmit
                      autoCapitalize="none"
                      autoCorrect={false}
                      keyboardType="number-pad"
                      onChangeText={numberInputHandler}
                      key={key}
                      maxLength={4}
                    />
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.button}>
              <CustomButton title="Calculate Scores" onPress={() => {}} />
            </View>
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

ScoreboardScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Notes4Games",
  };
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    width: "50%",

    backgroundColor: Colors.ceruleancrayola,
    padding: 4,
    marginVertical: "2%",
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
  grid: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    paddingHorizontal: 50,
    paddingTop: 10,
  },
  gridItem: {
    width: "11%",
    height: 50,
    backgroundColor: Colors.white,

    borderWidth: 1,
    borderColor: Colors.grey,

    justifyContent: "center",
    alignItems: "center",
  },
  gridItemCol: {
    height: 50,
    width: Platform.OS === "android" ? 65.1 : 78.315,
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
  gridPlayers: {
    width: "100%",
    height: "20%",
    flexDirection: "row",
  },
  gridColumns: {
    height: 550,
    flexDirection: "row",
    width: "100%",
  },
  gridRounds: {
    width: "11%",
    height: "100%",
  },
  gridContent: {
    flexWrap: "wrap",
    width: "89%",
  },
  screen: {
    flex: 1,
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
