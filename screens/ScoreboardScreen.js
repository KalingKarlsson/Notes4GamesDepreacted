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
  FlatList,
  SafeAreaView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import CustomButton from "../components/CustomButton";
import GridItem from "../components/GridItem";
import Colors from "../constants/Colors";
import * as scoreboardActions from "../store/scoreboard-actions";

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

  const selectedAmountOfPlayers = props.navigation.getParam("playerAmount");

  let numOfBlankTiles = selectedAmountOfPlayers * gameCounts.length;

  const window = useWindowDimensions();

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

    console.log(finalResultsTotal);

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

  const renderItem = ({ item, key }) => {
    <View style={stylesPort.gridItemCol} key={key}>
      <GridItem
        style={stylesPort.gridItemScore}
        editable={false}
        key={key}
        value={item}
        blurOnSubmit
      />
    </View>;
  };

  if (window.height > window.width) {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={stylesPort.screen}>
          <Text style={stylesPort.title}>{pickedGame}</Text>
          <View style={stylesPort.grid}>
            <View style={stylesPort.gridPlayers}>
              <View style={stylesPort.gridItem}>
                <Text style={stylesPort.gridItemScore}></Text>
              </View>
              {[...Array(selectedAmountOfPlayers)].map((item, index) => (
                <View style={stylesPort.gridItem} key={index}>
                  <GridItem
                    style={stylesPort.gridItemScore}
                    placeHolder="Name"
                    autoCapitalize="none"
                    autoCorrect={false}
                    key={index}
                    value={item}
                    maxLength={5}
                    numberOfLines={1}
                    onChangeText={(text) => addPlayerNames(text, index)} //todo
                    textContentType="name"
                  />
                </View>
              ))}
            </View>

            <SafeAreaView style={stylesPort.scroller2}>
              {/*               <FlatList
                data={gameCounts}
                renderItem={renderItem}
                keyExtractor={(item) => item}
              /> */}

              <ScrollView style={stylesPort.scroller} scrollEnabled={true}>
                <View
                  style={
                    pickedGame === "Liverpool"
                      ? stylesPort.gridColumnsLiver
                      : stylesPort.gridColumnsSkumm
                  }
                >
                  <View style={stylesPort.gridRounds}>
                    {gameCounts.map((item, key) => (
                      <View style={stylesPort.gridItemCol} key={key}>
                        <GridItem
                          style={stylesPort.gridItemScore}
                          editable={false}
                          key={key}
                          value={item}
                          blurOnSubmit
                        />
                      </View>
                    ))}
                  </View>

                  <View style={stylesPort.gridContent}>{contentArrPort()}</View>
                </View>
              </ScrollView>
              <View style={stylesPort.button}>{scoresDialog}</View>
            </SafeAreaView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  } else {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={stylesLand.screen}>
          <Text style={stylesLand.title}>Skummeslöv</Text>
          <View style={stylesLand.grid}>
            <View style={stylesLand.gridPlayers}>
              <View style={stylesLand.gridItem}>
                <Text style={stylesLand.gridItemScore}></Text>
              </View>
              {[...Array(selectedAmountOfPlayers)].map((item, key) => (
                <View style={stylesLand.gridItem} key={key}>
                  <GridItem
                    style={stylesLand.gridItemScore}
                    blurOnSubmit
                    editable={false}
                    autoCapitalize="none"
                    autoCorrect={false}
                    key={key}
                    value={item}
                    maxLength={4}
                    numberOfLines={1}
                    textContentType="name"
                  />
                </View>
              ))}
            </View>

            <ScrollView
              style={stylesLand.scroller}
              contentContainerStyle={{ alignItems: "center" }}
            >
              <View style={stylesLand.gridColumns}>
                <View style={stylesLand.gridRounds}>
                  {Skummeslöv.map((item, key) => (
                    <View style={stylesLand.gridItemCol} key={key}>
                      <GridItem
                        style={stylesLand.gridItemScore}
                        blurOnSubmit
                        editable={false}
                        key={key}
                        value={item}
                      />
                    </View>
                  ))}
                </View>

                <View style={stylesLand.gridContent}>{contentArrLand()}</View>
              </View>

              <View style={stylesLand.button}>{scoresDialog}</View>
            </ScrollView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

ScoreboardScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Notes4Games",
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
    height: 400,
  },
  gridColumnsSkumm: {
    flex: 1,
    flexDirection: "row",
    height: 550,
  },
  gridRounds: {
    width: "11%",
  },
  gridContent: {
    flexWrap: "wrap",
    width: "89%",
  },
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
  },
  scroller: {
    backgroundColor: Colors.accent,
  },
  scroller2: {
    flex: 1,
    alignItems: "center",
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

function sort(results) {
  results.sort(function (a, b) {
    return a.sum - b.sum;
  });
}
