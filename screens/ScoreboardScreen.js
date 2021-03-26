import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  useWindowDimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import CustomButton from "../components/CustomButton";
import GridItem from "../components/GridItem";
import Colors from "../constants/Colors";
import * as scoreboardsActions from "../store/actions/scoreboard-actions";

const Liverpool = ["1", "2", "3", "4", "5", "6", "7", "8"];
const Skummeslöv = ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];

let pickedGame = "";
let gameCounts = [];

const ScoreboardScreen = (props) => {
  const [state, setState] = useState({
    inputData: [],
  });
  const [playerNum, setPlayerNum] = useState({
    playerCount: [],
  });

  pickedGame = props.navigation.getParam("gameName");

  if (pickedGame === "Liverpool") {
    gameCounts = Liverpool;
  } else {
    gameCounts = Skummeslöv;
  }

  const dispatch = useDispatch();
  //const availablePlayers = useSelector((state) => state.scoreboard.players);

  const selectedAmountOfPlayers = props.navigation.getParam("playerAmount");

  let numOfBlankTiles = selectedAmountOfPlayers * gameCounts.length;

  const window = useWindowDimensions();

  const saveScoreboardHandler = () => {
    const finsishedGame = scoreboardsActions.addScoreboard(pickedGame);
    console.log(finsishedGame); // correct data
    dispatch(finsishedGame);
  };

  const contentArrPort = () => {
    return [...Array(numOfBlankTiles)].map((item, index) => (
      <View style={stylesPort.gridItemCol} key={index}>
        <GridItem
          style={stylesPort.gridItemScore}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          onChangeText={(text) => addValues(text, index)}
          maxLength={4}
        />
      </View>
    ));
  };

  const contentArrLand = () => {
    return [...Array(numOfBlankTiles)].map((item, index) => (
      <View style={stylesLand.gridItemCol} key={index}>
        <GridItem
          style={stylesLand.gridItemScore}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          onChangeText={(text) => addValues(text, index)}
          maxLength={4}
        />
      </View>
    ));
  };

  const addPlayerNames = (name, index) => {
    let nameArray = playerNum.playerCount;
    let checkBool = false;

    if (nameArray.length !== 0) {
      nameArray.forEach((element) => {
        if (element.index === index) {
          element.text = name;
          checkBool = true;
        }
      });
    }

    if (checkBool) {
      setPlayerNum({
        playerCount: nameArray,
      });
    } else {
      nameArray.push({ text: name, index: index });
      setPlayerNum({
        playerCount: nameArray,
      });
    }
  };

  const addValues = (text, index) => {
    let dataArray = state.inputData;
    let checkBool = false;

    text = text.replace(/[^0-9]/g, "");

    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.text = text;
          checkBool = true;
        }
      });
    }

    if (checkBool) {
      setState({
        inputData: dataArray,
      });
    } else {
      dataArray.push({ text: text, index: index });
      setState({
        inputData: dataArray,
      });
    }
  };

  const outputData = () => {
    let summary = 0;
    let scoresTotal = [];
    let results = [];

    const sortedInputArray = state.inputData;

    sortedInputArray.sort(function (a, b) {
      return a.index - b.index;
    });

    for (let index = 0; index < sortedInputArray.length; index++) {
      const element = sortedInputArray[index]; //object of first index
      summary = summary + +element.text;

      if ((index + 1) % gameCounts.length === 0) {
        scoresTotal.push(summary);
        summary = 0;
      }
    }

    for (let i = 0; i < playerNum.playerCount.length; i++) {
      const name = playerNum.playerCount[i].text; //name of first player

      for (let j = 0; j < scoresTotal.length; j++) {
        const playerSum = scoresTotal[j];

        if (i == j) {
          results.push({ name: name, sum: playerSum });
        }
      }
    }

    results.sort(function (a, b) {
      return a.sum - b.sum;
    });

    const finalResultsTotal = [];
    for (let k = 0; k < results.length; k++) {
      const element = results[k];
      finalResultsTotal.push({
        place: k + 1,
        name: element.name,
        score: element.sum,
      });
    }
    return finalResultsTotal;
  };

  const allPlayersDone = outputData();

  const printFinalScores = () => {
    const finalScores = outputData();
    let rows = "";

    for (let i = 0; i < finalScores.length; i++) {
      const element = finalScores[i];
      rows +=
        element.place + ": " + element.name + "    " + element.score + "\n";
    }
    saveScoreboardHandler();
    return rows;
  };

  const scoresDialog = (
    <CustomButton
      title="Calculate Scores"
      onPress={() => {
        Alert.alert(
          "Scores",
          allPlayersDone.length === playerNum.playerCount.length
            ? printFinalScores()
            : "All players are not finished yet!",
          [
            {
              text: "OK",
              onPress: () => console.log("OK Pressed"),
            },
          ],
          { cancelable: false }
        );
      }}
    />
  );

  const getStyleSheet = () => {
    let stylesheet;
    window.height > window.width
      ? (stylesheet = stylesPort)
      : (stylesheet = stylesLand);
    return stylesheet;
  };

  const selectedStyle = getStyleSheet();
  if (window.height > window.width) {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={selectedStyle.screen}>
          <Text style={selectedStyle.title}>{pickedGame}</Text>
          <View style={selectedStyle.grid}>
            <View style={selectedStyle.gridPlayers}>
              <View style={selectedStyle.gridItem}>
                <Text style={selectedStyle.gridItemScore}></Text>
              </View>
              {[...Array(selectedAmountOfPlayers)].map((item, index) => (
                <View style={selectedStyle.gridItem} key={index}>
                  <GridItem
                    style={selectedStyle.gridItemScore}
                    placeholder="Name"
                    autoCapitalize="none"
                    autoCorrect={false}
                    key={index}
                    value={item}
                    maxLength={5}
                    numberOfLines={1}
                    onChangeText={(text) => addPlayerNames(text, index)}
                    textContentType="name"
                  />
                </View>
              ))}
            </View>

            <ScrollView style={selectedStyle.scroller}>
              <View
                style={
                  pickedGame === "Liverpool"
                    ? selectedStyle.gridColumnsLiver
                    : selectedStyle.gridColumnsSkumm
                }
              >
                <View>
                  {gameCounts.map((item, key) => (
                    <View style={selectedStyle.gridItemCol} key={key}>
                      <GridItem
                        style={selectedStyle.gridItemScore}
                        editable={false}
                        key={key}
                        value={item}
                        blurOnSubmit
                      />
                    </View>
                  ))}
                </View>

                <View style={selectedStyle.gridContent}>
                  {contentArrPort()}
                </View>
              </View>
            </ScrollView>
            <View style={selectedStyle.button}>{scoresDialog}</View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  } else {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={selectedStyle.screen}>
          <Text style={selectedStyle.title}>{pickedGame}</Text>
          <View style={selectedStyle.grid}>
            <View style={selectedStyle.gridPlayers}>
              <View style={selectedStyle.gridItem}>
                <Text style={selectedStyle.gridItemScore}></Text>
              </View>
              {[...Array(selectedAmountOfPlayers)].map((item, index) => (
                <View style={selectedStyle.gridItem} key={index}>
                  <GridItem
                    style={selectedStyle.gridItemScore}
                    placeholder="Name"
                    autoCapitalize="none"
                    autoCorrect={false}
                    key={index}
                    value={item}
                    maxLength={5}
                    numberOfLines={1}
                    onChangeText={(text) => addPlayerNames(text, index)}
                    textContentType="name"
                  />
                </View>
              ))}
            </View>

            <ScrollView style={selectedStyle.scroller}>
              <View
                style={
                  pickedGame === "Liverpool"
                    ? selectedStyle.gridColumnsLiver
                    : selectedStyle.gridColumnsSkumm
                }
              >
                <View>
                  {gameCounts.map((item, key) => (
                    <View style={selectedStyle.gridItemCol} key={key}>
                      <GridItem
                        style={selectedStyle.gridItemScore}
                        blurOnSubmit
                        editable={false}
                        key={key}
                        value={item}
                      />
                    </View>
                  ))}
                </View>
                <View style={selectedStyle.gridContent}>
                  {contentArrLand()}
                </View>
              </View>
            </ScrollView>
            <View style={selectedStyle.button}>{scoresDialog}</View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

ScoreboardScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("scoreboardTitle"),
  };
};

//Portrait styles
const stylesPort = StyleSheet.create({
  button: {
    alignItems: "center",
    width: "70%",

    backgroundColor: Colors.ceruleancrayola,
    padding: 2,
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
    paddingTop: 10,
    alignItems: "center",
  },
  gridItem: {
    width: "11.1%",
    height: 50,
    backgroundColor: Colors.white,

    borderWidth: 1,
    borderColor: Colors.grey,

    justifyContent: "center",
    alignItems: "center",
  },
  gridItemCol: {
    height: 50,

    width: Platform.OS === "android" ? 40 : 41.6,
    backgroundColor: Colors.white,

    borderWidth: 1,
    borderColor: Colors.grey,
  },
  gridItemScore: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    justifyContent: "center",
  },
  gridPlayers: {
    width: "100%",
    flexDirection: "row",
  },
  gridColumnsLiver: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 400,
  },
  gridColumnsSkumm: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 550,
  },
  gridContent: {
    flexWrap: "wrap",
  },
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
  },
  scroller: {
    flex: 1,
  },
  scroller2: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: Colors.black,
    marginBottom: 2,
  },
});

//landscape styles
const stylesLand = StyleSheet.create({
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
    alignItems: "center",
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
  gridColumnsLiver: {
    height: 400,
    flexDirection: "row",
    width: "100%",
  },
  gridColumnsSkumm: {
    height: 550,
    flexDirection: "row",
    width: "100%",
  },
  gridRounds: {
    height: "100%",
  },
  gridContent: {
    flexWrap: "wrap",
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

function sort(results) {
  results.sort(function (a, b) {
    return a.sum - b.sum;
  });
}
