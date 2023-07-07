import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ColorComponent from "./ColorComponent";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const colorCount = 10;

  return (
    <View>
      <ColorComponent
        colorCount={red}
        color="Red"
        onIncrease={() => {
          if (red + colorCount > 255) {
            return window.alert("Color is reached to max");
          }
          setRed(red + colorCount);
        }}
        onDecrease={() => {
          if (red - colorCount < 0) {
            return window.alert("Color is reached to min");
          }
          setRed(red - colorCount);
        }}
      />
      <ColorComponent
        colorCount={green}
        color="Green"
        onIncrease={() => {
          if (green + colorCount > 255) {
            return window.alert("Color is reached to max");
          }
          setGreen(green + colorCount);
        }}
        onDecrease={() => {
          if (green - colorCount < 0) {
            return window.alert("Color is reached to min");
          }
          setGreen(green - colorCount);
        }}
      />
      <ColorComponent
        colorCount={blue}
        color="Blue"
        onIncrease={() => {
          if (blue + colorCount > 255) {
            return window.alert("Color is reached to max");
          }
          setBlue(blue + colorCount);
        }}
        onDecrease={() => {
          if (blue - colorCount < 0) {
            return window.alert("Color is reached to min");
          }
          setBlue(blue - colorCount);
        }}
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
