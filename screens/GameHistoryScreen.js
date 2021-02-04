import React, { useEffect } from "react";
import { StyleSheet, Platform, FlatList, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import * as scoreboardActions from "../store/scoreboard-actions";

const GameHistoryScreen = (props) => {
  return (
    <View>
      <Text>Skummeslöv 2021-10-13</Text>
    </View>
  );
};

GameHistoryScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Notes4Games",
  };
};

const styles = StyleSheet.create({});

export default GameHistoryScreen;
