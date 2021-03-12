import React, { useState } from "react";
import { StyleSheet, Platform, View, Text, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomButton from "../components/CustomButton";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const NewScoreboardScreen = (props) => {
  const [isPickedGame, setIsPickedGame] = useState("Liverpool");
  const [isPickedNumber, SetIsPickedNumber] = useState(3);

  const createScoreboardHandler = () => {
    props.navigation.navigate({
      routeName: "Scoreboard",
      params: {
        gameName: isPickedGame,
        playerAmount: parseInt(isPickedNumber.toPrecision(1)),
      },
    });
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.content}>
        <Text style={styles.title}>Select Game</Text>
        <Picker
          selectedValue={isPickedGame}
          style={styles.pickerContainerAndroid}
          onValueChange={(itemValue) => setIsPickedGame(itemValue)}
          itemStyle={styles.selectedItem}
        >
          <Picker.Item label="Liverpool" value="Liverpool" />
          <Picker.Item label="Skummeslöv" value="Skummeslöv" />
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
            tapToSeek={true}
          ></Slider>
          <Text style={styles.number}>{isPickedNumber.toPrecision(1)}</Text>
          <View style={styles.createScoreboardButton}>
            <CustomButton
              title="Create Scoreboard"
              onPress={() => {
                createScoreboardHandler();
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

NewScoreboardScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Notes4Games",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Info"
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
    marginTop: Platform.OS === "android" ? "10%" : 0,
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
    flex: 1,
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
    marginTop: Platform.OS === "android" ? "15%" : 0,
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
