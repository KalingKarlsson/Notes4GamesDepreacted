import React from "react";
import { Platform, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
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
    backgroundColor: Platform.OS === "android" ? Colors.blue : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.blue,
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
          <Ionicons
            name="ios-home-outline"
            size={25}
            color={tabInfo.tintColor}
          />
        );
      },
      tabBarColor: Colors.blue,
      tabBarLabel: Platform.OS === "android" ? <Text>Active</Text> : "Active",
    },
  },
  History: {
    screen: HistoryNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="ios-time-outline"
            size={25}
            color={tabInfo.tintColor}
          />
        );
      },
      tabBarColor: Colors.ceruleancrayola,
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
          backgroundColor: Colors.blue,
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.blue,
        },
      });

export default createAppContainer(BottomTabNavigator);
