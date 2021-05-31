import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Components
import Test from "./screens/Test";
import Home from "./screens/Home";
import CreateUserScreen from "./screens/CreateUserScreen";
import UserDetailScreen from "./screens/UserDetailScreen";
import UsersList from "./screens/UsersList";
import { Platform, LogBox } from "react-native";

if(Platform.OS === 'android' || Platform.OS === 'ios'){
  LogBox.ignoreLogs(['Setting a timer for a long period of time'])
}

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UsersList" component={UsersList} options={{title: 'Users List',}}/>
      <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} options={{title: 'Create a new user'}}/>
      <Stack.Screen name="Test" component={Test} options={{title: 'Test'}}/>
      <Stack.Screen name="Home" component={Home} options={{title: 'Home'}}/>
      <Stack.Screen name="UserDetailScreen" component={UserDetailScreen} options={{title: 'User detail'}}/>
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
