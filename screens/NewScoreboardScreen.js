import React, { useState } from "react";
import { StyleSheet, Platform, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import GameInput from "../components/GameInput";
import HeaderButton from "../components/HeaderButton";
import * as scoreboardActions from "../store/scoreboard-actions";

const NewScoreboardScreen = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    isModalVisible === false
      ? setIsModalVisible(true)
      : setIsModalVisible(false);
  };
  return (
    <View>
      <Text>Select Game</Text>
      <View style={styles.MainContainer}></View>
      <GameInput visible={isModalVisible} />
    </View>
  );
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
          onPress={() => {
            toggleModal();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS == "ios" ? 20 : 0,
  },
});

export default NewScoreboardScreen;
