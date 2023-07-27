import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View>
      <Text style={styles.heading}>box model</Text>
      <View style={styles.parent}>
        <Text style={styles.content}>Content</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    borderWidth: 3,
    borderColor: "black",
    alignItems: "flex-start",
  },
  heading: {
    display: "flex",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    marginVertical: 40,
    fontSize: 30,
    borderWidth: 10,
    borderColor: "red",
  },
});

export default BoxScreen;
