import React from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import AnimatedLoader from "react-native-animated-loader";
import ResultDetails from "./ResultDetails";

const ResultsList = ({ title, results, loading }) => {
  console.log(loading);

  return (
    <View>
      {loading ? (
        <AnimatedLoader
          visible={loading}
          overlayColor="rgba(255,255,255,0.75)"
          animationStyle={styles.lottie}
          speed={1}
          source={require("../utils/loader-animation2.json")}
        >
          <Text>Doing something...</Text>
        </AnimatedLoader>
      ) : (
        <>
          <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={results}
              keyExtractor={(result) => result.id}
              renderItem={({ item }) => {
                return <ResultDetails result={item} />;
              }}
            />
          </View>
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  lottie: {
    width: 100,
    height: 100,
  },
});

export default ResultsList;
