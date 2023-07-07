import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ColorComponent = ({ color, onIncrease, onDecrease, colorCount }) => {
  return (
    <View>
      <Text>
        {color}
        {`   ${colorCount}`}
      </Text>
      <Button title={`Increase ${color}`} onPress={() => onIncrease()} />
      <Button title={`Decrease ${color}`} onPress={() => onDecrease()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorComponent;
