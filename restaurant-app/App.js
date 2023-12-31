import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screen/HomeScreen";
import SearchScreen from "./src/screen/SearchScreen";
import ResultShowScreen from "./src/screen/ResultShowScreen";

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "Business Search" }}
        />
        <Stack.Screen
          name="ResultShowScreen"
          component={ResultShowScreen}
          options={{ title: "Images" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
