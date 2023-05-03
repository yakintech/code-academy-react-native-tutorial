import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './lessons/navigationSample/HomeScreen';
import AboutScreen from './lessons/navigationSample/AboutScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductMainStack from './lessons/stack/ProductMainStack';


const Tab = createBottomTabNavigator();

const App = () => {


  return (<>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home3"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <MaterialCommunityIcons name="home" size={26} />
          }}
        />
        <Tab.Screen
          name="Products"
          component={ProductMainStack}
          options={{
            headerShown: false
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