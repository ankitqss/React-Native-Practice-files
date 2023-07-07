import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text style={styles.textHeading}>Text Input</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      {name.length < 5 ? (
        <Text style={styles.inputError}>
          Name must be atleast 5 character !
        </Text>
      ) : (
        <Text style={styles.valueText}>Value of Input Box is: {name}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
  inputError: {
    color: "red",
    marginLeft: 15,
    fontWeight: "bold",
    marginTop: -14
  },
  textHeading: {
    display: "flex",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "3rem",
  },
  valueText:{
    display: "flex",
    justifyContent: "center",
    color: "green",
    fontSize: "2rem",
    fontWeight: "bolder"
  }
});

export default TextScreen;
