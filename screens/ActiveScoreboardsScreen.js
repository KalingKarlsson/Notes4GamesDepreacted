import React from "react";
import { StyleSheet, Platform, View, Text, ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const ActiveScoreboardsScreen = (props) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Text style={styles.title}>Your Active Games</Text>
      <View style={styles.content}>
        <View style={styles.listContainer}>
          <View>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>1. Liverpool 2021-08-13</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>2. Liverpool 2021-08-13</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>3. Liverpool 2021-08-13</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>4. Liverpool 2021-08-13</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>5. Liverpool 2021-08-13</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>6. Liverpool 2021-08-13</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>7. Liverpool 2021-08-13</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>8. Liverpool 2021-08-13</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>9. Liverpool 2021-08-13</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>10. Liverpool 2021-08-13</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>11. Liverpool 2021-08-13</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>12. Liverpool 2021-08-13</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>13. Liverpool 2021-08-13</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>14. Liverpool 2021-08-13</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>15. Liverpool 2021-08-13</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

ActiveScoreboardsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Notes4Games",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="New Scoreboard"
          iconName={
            Platform.OS === "android"
              ? "md-add-circle-outline"
              : "ios-add-circle-outline"
          }
          iconSize={6}
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
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    maxWidth: 350,
  },
  listContainer: {
    alignItems: "center",
  },
  listItem: {
    //container
    marginVertical: 4,
    paddingHorizontal: "5%",
    backgroundColor: "white",

    //ios
    shadowColor: Colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    //android
    elevation: 4,

    //border
    borderRadius: 8,
    borderColor: Colors.ceruleancrayola,
    borderWidth: 1,
  },
  listItemText: {
    //text
    fontSize: 22,
    fontFamily: "open-sans",
    color: Colors.black,
  },
  title: {
    fontSize: 28,
    fontFamily: "open-sans-bold",
    color: Colors.black,
    marginTop: "16%",
    marginBottom: "2%",
  },
});

export default ActiveScoreboardsScreen;
