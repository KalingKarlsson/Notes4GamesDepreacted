import React from "react";
import { TextInput, StyleSheet } from "react-native";

const GridItem = (props) => {
  return <TextInput {...props} placeholder={""} style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    width: "100%",
    height: "100%",
    textAlign: "center",
    justifyContent: "center",
  },
});

export default GridItem;
