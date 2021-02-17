import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Alert,
  Modal,
  useWindowDimensions,
} from "react-native";
import { DeviceMotion } from "expo-sensors";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import * as ScreenOrientation from "expo-screen-orientation";

import CustomButton from "../components/CustomButton";
import GridItem from "../components/GridItem";
import * as scoreboardActions from "../store/scoreboard-actions";
import Colors from "../constants/Colors";

const Liverpool = ["1", "2", "3", "4", "5", "6", "7", "8"];

const Skummeslöv = ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];

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

const ScoreboardScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const window = useWindowDimensions();

  let numOfBlankTiles = players.length * Skummeslöv.length;
  let sum = 0;

  if (window.height > window.width) {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={stylesPort.screen}>
          <Text style={stylesPort.title}>Liverpool</Text>
          <View style={stylesPort.grid}>
            <View style={stylesPort.gridPlayers}>
              <View style={stylesPort.gridItem}>
                <Text style={stylesPort.gridItemScore}></Text>
              </View>
              {players.map((item, key) => (
                <View style={stylesPort.gridItem} key={key}>
                  <GridItem
                    style={stylesPort.gridItemScore}
                    blurOnSubmit
                    autoCapitalize="none"
                    autoCorrect={false}
                    key={key}
                    value={item}
                    maxLength={8}
                    textContentType="name"
                    multiline={true}
                    numberOfLines={2}
                  />
                </View>
              ))}
            </View>

            <ScrollView
              style={stylesPort.scroller}
              contentContainerStyle={{ alignItems: "center" }}
            >
              <View style={stylesPort.gridColumns}>
                <View style={stylesPort.gridRounds}>
                  {Skummeslöv.map((item, key) => (
                    <View style={stylesPort.gridItemCol} key={key}>
                      <GridItem
                        style={stylesPort.gridItemScore}
                        blurOnSubmit
                        editable={false}
                        key={key}
                        value={item}
                      />
                    </View>
                  ))}
                </View>

                <View style={stylesPort.gridContent}>
                  {[...Array(numOfBlankTiles)].map((item, key) => (
                    <View style={stylesPort.gridItemCol} key={key}>
                      <GridItem
                        style={stylesPort.gridItemScore}
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

              <View style={stylesPort.button}>
                <CustomButton
                  title="Calculate Scores"
                  onPress={() => {
                    Alert.alert(
                      "Scores",
                      numOfBlankTiles.forEach((element) => {
                        sum = sum + element;
                      })
                    );
                  }}
                />
              </View>
            </ScrollView>
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
              {players.map((item, key) => (
                <View style={stylesLand.gridItem} key={key}>
                  <GridItem
                    style={stylesLand.gridItemScore}
                    blurOnSubmit
                    autoCapitalize="none"
                    autoCorrect={false}
                    key={key}
                    value={item}
                    maxLength={8}
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

                <View style={stylesLand.gridContent}>
                  {[...Array(numOfBlankTiles)].map((item, key) => (
                    <View style={stylesLand.gridItemCol} key={key}>
                      <GridItem
                        style={stylesLand.gridItemScore}
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

              <View style={stylesLand.button}>
                <CustomButton
                  title="Calculate Scores"
                  onPress={() => {
                    Alert.alert(
                      "Scores",
                      numOfBlankTiles.forEach((element) => {
                        sum = sum + element;
                      })
                    );
                  }}
                />
              </View>
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
    flexWrap: "wrap",
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

    justifyContent: "center",
    alignItems: "center",
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

  //modal added stuff

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ScoreboardScreen;
