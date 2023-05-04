import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './lessons/navigationSample/HomeScreen';
import AboutScreen from './lessons/navigationSample/AboutScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductMainStack from './lessons/stack/ProductMainStack';
import DeviceStack from './lessons/stack/DeviceStack';
import ToDoScreen from './lessons/todoListAsyncStorage/ToDoScreen';


const Tab = createBottomTabNavigator();

const App = () => {


  return (<>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={ToDoScreen}
          options={{
            tabBarIcon: () => <MaterialCommunityIcons name="home" size={26} />
          }}
        />
        <Tab.Screen
          name="Products"
          component={ProductMainStack}
          options={{
            headerShown: false,
            tabBarIcon: () => <MaterialCommunityIcons name="star" size={26} />
          }}
        />

        <Tab.Screen
          name="Device"
          component={DeviceStack}
          options={{
            headerShown: false,
            tabBarIcon: () => <MaterialCommunityIcons name="star" size={26} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  </>
  )
}

export default App

interface Category {
  id: number
  name: string
  description: string
}