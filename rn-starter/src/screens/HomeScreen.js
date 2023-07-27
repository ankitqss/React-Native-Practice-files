import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        style={styles.navigateButton}
        title="Go to Component Demo"
        onPress={() => props.navigation.navigate("Components")}
      />
      <Button
        style={styles.navigateButton}
        title="GO to List SCreen"
        onPress={() => props.navigation.navigate("List")}
      />
      <Button
        style={styles.navigateButton}
        title="Go to Image Screen"
        onPress={() => props.navigation.navigate("Image")}
      />
      <Button
        style={styles.navigateButton}
        title="Go to Counter SCreen"
        onPress={() => {
          props.navigation.navigate("Counter");
        }}
      />
      <Button
        style={styles.navigateButton}
        title="Go to color Screen"
        onPress={() => {
          props.navigation.navigate("Color");
        }}
      />
      <Button
        style={styles.navigateButton}
        title="Go to Color Mixture"
        onPress={() => props.navigation.navigate("Mixture")}
      />
      <Button
        style={styles.navigateButton}
        title="Go to Color component wala Mixture"
        onPress={() => props.navigation.navigate("Square")}
      />
      <Button
        style={styles.navigateButton}
        title="Go to input text"
        onPress={() => props.navigation.navigate("TextInput")}
      />
      <Button
        style={styles.navigateButton}
        title="Go to Box Model Page"
        onPress={() => props.navigation.navigate("Box")}
      />
      <Button
        title="Go to Postioninng Tutorial"
        onPress={() => props.navigation.navigate("Position")}
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
  navigateButton: {
    marginVertical: 1,
    color: "red",
    backgroundColor: "white",
  },
});

export default HomeScreen;
