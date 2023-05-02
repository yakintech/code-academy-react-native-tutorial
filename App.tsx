import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import EffectSample from './lessons/effectSample/EffectSample'
import Box from './lessons/propSample/Box'
import ProductList from './lessons/flatListSample/ProductList'
import AddProduct from './lessons/axiosSample/AddProduct'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './lessons/navigationSample/HomeScreen'
import AboutScreen from './lessons/navigationSample/AboutScreen'

const Stack = createNativeStackNavigator();

const App = () => {


  return (<>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
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