import React from "react";
import { StyleSheet, View } from "react-native";
import ColorComponent from "./ColorComponent";

const SquareScreen = () => {
  return (
    <View>
      <ColorComponent color="Red" />
      <ColorComponent color="Green" />
      <ColorComponent color="Blue   " />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
