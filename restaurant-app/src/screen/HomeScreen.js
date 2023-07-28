import React from "react";
import { Button, Text, View } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>This is Home Screen</Text>
      <Button onPress={() => navigation.navigate('Search')} title="Search" />
    </View>
  );
};

export default HomeScreen;
