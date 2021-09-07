import React from 'react'
import { Home, Detail, AddBook } from '../screens'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Feather from 'react-native-vector-icons/Feather'
import { COLORS, FONTS } from '../constants'
import { NativeBaseProvider } from 'native-base'

export default function Routes() {
  const Tab = createBottomTabNavigator()

  const Stack = createNativeStackNavigator()

  const TabStackScreen = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName: any
          let color

          if (route.name === 'Home') {
            iconName = 'home'
            color = focused ? COLORS.black : COLORS.lightGray
          } else if (route.name === 'Add Book') {
            iconName = 'plus'
            color = focused ? COLORS.black : COLORS.lightGray
          } else if (route.name === 'Profile') {
            iconName = 'user'
            color = focused ? COLORS.black : COLORS.lightGray
          }
          return <Feather name={iconName} size={20} color={color} />
        },
        tabBarActiveTintColor: COLORS.black,
        tabBarInactiveTintColor: COLORS.lightGray,
        tabBarLabelStyle: { marginBottom: 4, fontFamily: FONTS.regular },
        headerShown: false
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Add Book" component={AddBook} />
      <Tab.Screen name="Profile" component={Detail} />
    </Tab.Navigator>
  )

  const StackScreen = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={TabStackScreen} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
