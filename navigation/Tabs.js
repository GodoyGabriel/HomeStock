import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'
import fireIcon from '../assets/icons/fire.png';

import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
         options={{
          tabBarIcon: ({focused}) => {
            <Image
              source={fireIcon}
              height="1000"
              width="100"
              reasizeMode="contain"
              style={{
                width: 25,
                height: 25
              }}            />
          }
        }} 
      />
    </Tab.Navigator>
  )
}

export default Tabs;