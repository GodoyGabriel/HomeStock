import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Components
import Test from "./screens/Test";
import Home from "./screens/Home";
import CreateUserScreen from "./screens/CreateUserScreen";
import UserDetailScreen from "./screens/UserDetailScreen";
import UsersList from "./screens/UsersList";
import { Platform, LogBox } from "react-native";
import Tabs from './navigation/Tabs';

if (Platform.OS === "android" || Platform.OS === "ios") {
  LogBox.ignoreLogs(["Setting a timer for a long period of time"]);
}

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"Home"}
    >
      <Stack.Screen name="Home" component={Tabs}  />
      <Stack.Screen
        name="UsersList"
        component={UsersList}
      />
      <Stack.Screen
        name="CreateUserScreen"
        component={CreateUserScreen}
      />
      <Stack.Screen name="Test" component={Test} options={{ title: "Test" }} />
      <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
