import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ComponentsScreen = (props) => {
  const name = "ANKIT";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native</Text>
      <Text style={styles.nameStyle}>My name is {name}</Text>

      <Button
        title="Go Back"
        onPress={() => props.navigation.navigate("Home")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  nameStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
