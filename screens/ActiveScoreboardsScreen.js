import React from "react";
import { StyleSheet, Platform, View, Text, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { LinearGradient } from "expo-linear-gradient";

import HeaderButton from "../components/HeaderButton";
import * as scoreboardActions from "../store/scoreboard-actions";
import Colors from "../constants/Colors";

const ActiveScoreboardsScreen = (props) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.third, Colors.blue]}
        style={styles.gradient}
      >
        <Text style={styles.title}>Your Active Games</Text>
        <ScrollView style={styles.scrollView}>
          <View style={styles.listContainer}>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>1. Liverpool 2021-08-13</Text>
              <Text style={styles.listItemText}>2. Liverpool 2021-08-13</Text>
              <Text style={styles.listItemText}>3. Liverpool 2021-08-13</Text>
              <Text style={styles.listItemText}>4. Liverpool 2021-08-13</Text>
              <Text style={styles.listItemText}>5. Liverpool 2021-08-13</Text>
              <Text style={styles.listItemText}>6. Liverpool 2021-08-13</Text>
              <Text style={styles.listItemText}>7. Liverpool 2021-08-13</Text>
              <Text style={styles.listItemText}>8. Liverpool 2021-08-13</Text>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

ActiveScoreboardsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Notes4Games",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="New Scoreboard"
          iconName={Platform.OS === "android" ? "md-add" : "ios.add"}
          onPress={() => {
            navData.navigation.navigate("NewScoreboard");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: Colors.secondary,
  },
  gradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  listContainer: {
    alignItems: "center",
  },

  listItem: {
    marginVertical: 8,
  },
  listItemText: {
    marginVertical: 4,
    paddingHorizontal: "10%",
    paddingVertical: 4,
    color: Colors.black,
    fontSize: 22,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
    backgroundColor: "white",
    borderRadius: 8,
  },
  scrollView: {
    width: "80%",
    maxWidth: 350,
  },
  title: {
    fontSize: 28,
    color: "white",
    marginTop: "16%",
    marginBottom: "6%",
  },
});

export default ActiveScoreboardsScreen;
