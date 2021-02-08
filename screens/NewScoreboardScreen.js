import React, { useState } from "react";
import { StyleSheet, Platform, View, Text, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomButton from "../components/CustomButton";
import GameInput from "../components/GameInput";
import HeaderButton from "../components/HeaderButton";
import * as scoreboardActions from "../store/scoreboard-actions";
import Colors from "../constants/Colors";

const NewScoreboardScreen = (props) => {
  const [isPickedGame, setIsPickedGame] = useState("");
  const [isPickedNumber, SetIsPickedNumber] = useState(3);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    isModalVisible === false
      ? setIsModalVisible(true)
      : setIsModalVisible(false);
  };

  const createScoreboardHandler = () => {
    props.navigation.navigate("Scoreboard");
  };

  if (Platform.OS === "android") {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.contentAndroid}>
          <Text style={styles.title}>Select Game</Text>
          <Picker
            selectedValue={isPickedGame}
            style={styles.pickerContainerAndroid}
            onValueChange={(itemValue) => setIsPickedGame(itemValue)}
            itemStyle={styles.selectedItem}
          >
            <Picker.Item label="Liverpool" value="pool" />
            <Picker.Item label="Skummeslöv" value="löv" />
          </Picker>
          <View style={styles.inputContainer}>
            <Text style={styles.amountPlayers}>Amount of Players</Text>
            <Slider
              value={isPickedNumber}
              minimumValue={2}
              maximumValue={8}
              onValueChange={(number) => {
                SetIsPickedNumber(number);
              }}
              style={styles.numPicker}
              minimumTrackTintColor={Colors.blue}
              maximumTrackTintColor={Colors.grey}
              thumbTintColor={Colors.black}
            ></Slider>
            <Text style={styles.number}>{isPickedNumber.toFixed(0)}</Text>
            <View style={styles.createScoreboardButton}>
              <CustomButton
                onPress={() => {
                  createScoreboardHandler();
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Select Game</Text>
          <Picker
            selectedValue={isPickedGame}
            style={styles.pickerContainer}
            onValueChange={(itemValue) => setIsPickedGame(itemValue)}
            itemStyle={styles.selectedItem}
          >
            <Picker.Item label="Liverpool" value="pool" />
            <Picker.Item label="Skummeslöv" value="löv" />
          </Picker>
          <Text style={styles.amountPlayers}>Amount of Players</Text>
          <Slider
            value={isPickedNumber}
            minimumValue={2}
            maximumValue={8}
            onValueChange={(number) => {
              SetIsPickedNumber(number);
            }}
            style={styles.numPicker}
            minimumTrackTintColor={Colors.blue}
            maximumTrackTintColor={Colors.grey}
            thumbTintColor={Colors.black}
          ></Slider>
          <Text style={styles.number}>{isPickedNumber.toFixed(0)}</Text>
          <View style={styles.createScoreboardButton}>
            <CustomButton
              onPress={() => {
                createScoreboardHandler();
              }}
            />
          </View>
        </View>
      </View>
    );
  }
};

NewScoreboardScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Notes4Games",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName={
            Platform.OS === "android"
              ? "md-information-circle-outline"
              : "ios-information-circle-outline"
          }
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  amountPlayers: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: Colors.black,
  },
  content: {
    alignItems: "center",
  },
  contentAndroid: {
    alignItems: "center",
    marginTop: "10%",
  },
  createScoreboardButton: {
    backgroundColor: Colors.ceruleancrayola,
    padding: 6,
    marginTop: "16%",
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
  mainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.white,
  },
  number: {
    fontSize: 32,
  },
  numPicker: {
    width: "80%",
    height: 100,
  },
  inputContainer: {
    alignItems: "center",
    width: "100%",
    marginTop: "15%",
  },
  item: {
    color: Colors.black,
  },
  pickerContainer: {
    width: "50%",
  },
  pickerContainerAndroid: {
    width: "50%",
    marginTop: "4%",
  },
  selectedItem: {
    color: Colors.blue,
  },
  title: {
    fontSize: 28,
    fontFamily: "open-sans-bold",
    color: Colors.black,
    marginTop: "8%",
  },
});

export default NewScoreboardScreen;
