import React, { useState } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";

const ColorScreen = () => {
  const [Color, setColor] = useState([]);
  console.log(Color);
  return (
    <View>
      <Text>ColorScreen</Text>
      <Button
        title="Add a Color"
        onPress={() => {
          setColor([...Color, randomColor()]);
        }}
      />
      <FlatList
        data={Color}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: item,
              }}
            />
          );
        }}
      />
    </View>
  );
};

const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const opacity = Math.random() * 1;

  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
