import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import EffectSample from './lessons/effectSample/EffectSample'
import Box from './lessons/propSample/Box'
import ProductList from './lessons/flatListSample/ProductList'

const App = () => {


  return (
    <ProductList/>
  )
}

export default App

interface Category {
  id: number
  name: string
  description: string
}