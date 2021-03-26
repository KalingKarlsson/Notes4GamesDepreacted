import React from "react";
import { StyleSheet, View, Text } from "react-native";

const GameHistoryScreen = (props) => {
  return (
    <View>
      <Text>Skummeslöv 2021-10-13</Text>
    </View>
  );
};

GameHistoryScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("scoreboardTitle"),
  };
};

const styles = StyleSheet.create({});

export default GameHistoryScreen;
