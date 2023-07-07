import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to Component Demo"
        onPress={() => props.navigation.navigate("Components")}
      />
      <Button
        style={styles.listButton}
        title="GO to List SCreen"
        onPress={() => props.navigation.navigate("List")}
      />
      <Button
        title="Go to Image Screen"
        onPress={() => props.navigation.navigate("Image")}
      />
      <Button
        title="Go to Counter SCreen"
        onPress={() => {
          props.navigation.navigate("Counter");
        }}
      />
      <Button
        title="Go to color Screen"
        onPress={() => {
          props.navigation.navigate("Color");
        }}
      />
      <Button
        title="Go to Color Mixture"
        onPress={() => props.navigation.navigate("Mixture")}
      />
      <Button
        title="Go to Color component wala Mixture"
        onPress={() => props.navigation.navigate("Square")}
      />
      {/* <TouchableOpacity>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  listButton: {
    marginVertical: 10,
  },
});

export default HomeScreen;
