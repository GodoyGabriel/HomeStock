import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Components
import Test from "./screens/Test";
import Home from "./screens/Home";
import CreateUserScreen from "./screens/CreateUserScreen";
import UserDetailScreen from "./screens/UserDetailScreen";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} />
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="UserDetailScreen" component={UserDetailScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
};

export default App;
