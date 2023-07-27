import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const ColorMixture = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  return (
    <View>
      <Text>Color Mixture</Text>

      <Text style={{color: "red", fontSize: 20}}>
        RED
      </Text>
      <Button title="Increase Red" onPress={() => setRed(red + 10)} />
      <Button
        title="Decrease Red"
        onPress={() => {
          setRed(red - 10);
        }}
      />
      <Text style={{color: "green", fontSize: 20}}>
        GREEN
      </Text>
      <Button title="Increase Green" onPress={() => setGreen(green + 10)} />
      <Button
        title="Decrease Green"
        onPress={() => {
          setRed(green - 10);
        }}
      />
      <Text style={{color: "blue", fontSize: 20}}>
       BLUE
      </Text>
      <Button title="Increase Blue" onPress={() => setBlue(blue + 10)} />
      <Button
        title="Decrease Blue"
        onPress={() => {
          setRed(blue - 10);
        }}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

export default ColorMixture;
