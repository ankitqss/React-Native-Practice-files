import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
      <Image source={props.ImageToDisplay} />
      {/* <Image source={require("../../assets/beach.jpg")} /> */}
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
