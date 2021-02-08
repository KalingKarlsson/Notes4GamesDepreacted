import React, { useEffect } from "react";
import {
  StyleSheet,
  Platform,
  FlatList,
  View,
  Text,
  TextInput,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import * as scoreboardActions from "../store/scoreboard-actions";
import Colors from "../constants/Colors";

const ScoreboardScreen = (props) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Skummeslöv</Text>
      <View style={styles.grid}>
        <View style={styles.gridItem}>
          <Text style={styles.gridItemScore}></Text>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}>Kalinga</TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}>Kalinga</TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}>Kalinga</TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}>Kalinga</TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}>Kalinga</TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}>Kalinga</TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}>Kalinga</TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}>Kalinga</TextInput>
        </View>

        <View style={styles.gridItem}>
          <Text style={styles.gridItemScore}>3</Text>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>

        <View style={styles.gridItem}>
          <Text style={styles.gridItemScore}>4</Text>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>

        <View style={styles.gridItem}>
          <Text style={styles.gridItemScore}>5</Text>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>

        <View style={styles.gridItem}>
          <Text style={styles.gridItemScore}>6</Text>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>

        <View style={styles.gridItem}>
          <Text style={styles.gridItemScore}>7</Text>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>

        <View style={styles.gridItem}>
          <Text style={styles.gridItemScore}>8</Text>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>

        <View style={styles.gridItem}>
          <Text style={styles.gridItemScore}>9</Text>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>

        <View style={styles.gridItem}>
          <Text style={styles.gridItemScore}>10</Text>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>

        <View style={styles.gridItem}>
          <Text style={styles.gridItemScore}>11</Text>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>

        <View style={styles.gridItem}>
          <Text style={styles.gridItemScore}>12</Text>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>

        <View style={styles.gridItem}>
          <Text style={styles.gridItemScore}>13</Text>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
        <View style={styles.gridItem}>
          <TextInput style={styles.gridItemScore}></TextInput>
        </View>
      </View>
    </View>
  );
};

ScoreboardScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Notes4Games",
  };
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "80%",
  },
  gridItem: {
    width: 70,
    height: 20,
    backgroundColor: Colors.white,

    borderWidth: 1,
    borderColor: Colors.black,

    justifyContent: "center",
    alignItems: "center",
  },
  gridItemScore: {
    fontSize: 18,
  },
  mainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: Colors.black,
    marginBottom: 2,
  },
});

export default ScoreboardScreen;
