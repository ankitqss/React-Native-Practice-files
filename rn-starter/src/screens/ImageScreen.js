import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ImageDetail from "../Components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        ImageToDisplay={require("../../assets/beach.jpg")}
      />
      <ImageDetail
        title="Beach"
        ImageToDisplay={require("../../assets/forest.jpg")}
      />
      <ImageDetail
        title="Mountains"
        ImageToDisplay={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
