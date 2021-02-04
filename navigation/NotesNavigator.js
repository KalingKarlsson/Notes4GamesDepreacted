import React from "react";
import { Platform, Text } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ActiveScoreboardsScreen from "../screens/ActiveScoreboardsScreen";
import NewScoreboardScreen from "../screens/NewScoreboardScreen";
import ScoreboardScreen from "../screens/ScoreboardScreen";
import HistoryScreen from "../screens/HistoryScreen";
import GameHistoryScreen from "../screens/GameHistoryScreen";
import Colors from "../constants/Colors";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
  headerTitle: "This Screen",
};

const NotesNavigator = createStackNavigator(
  {
    ActiveScoreboards: ActiveScoreboardsScreen,
    NewScoreboard: { screen: NewScoreboardScreen },
    Scoreboard: { screen: ScoreboardScreen },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const HistoryNavigator = createStackNavigator(
  {
    History: HistoryScreen,
    GameHistory: GameHistoryScreen,
    ActiveScoreboards: ActiveScoreboardsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const tabScreenConfig = {
  Active: {
    screen: NotesNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.third,
      tabBarLabel: Platform.OS === "android" ? <Text>Active</Text> : "Active",
    },
  },
  History: {
    screen: HistoryNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.primary,
      tabBarLabel: Platform.OS === "android" ? <Text>History</Text> : "History",
    },
  },
};

const BottomTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: "white",
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primary,
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accent,
        },
      });

export default createAppContainer(BottomTabNavigator);
