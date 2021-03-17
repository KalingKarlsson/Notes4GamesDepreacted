import React from "react";
import { TextInput, StyleSheet } from "react-native";

const GridItem = (props) => {
  return (
    <TextInput
      {...props}
      style={styles.input}
      placeholder={props.placeholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    justifyContent: "center",
  },
});

export default GridItem;
