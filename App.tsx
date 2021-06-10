import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import AddBook from './pages/AddBook';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Add Book" component={AddBook} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
