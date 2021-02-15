import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={{ fontSize: 32 }}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
