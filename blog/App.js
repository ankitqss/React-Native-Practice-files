import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import IndexScreen from "./src/screens/IndexScreen";
import { BlogProvider } from "./src/context/BlogContext";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Index">
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={{ title: "Home" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
