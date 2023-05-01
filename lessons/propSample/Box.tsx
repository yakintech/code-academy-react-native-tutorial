import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const Box = (props:Product) => {
  return (
    <SafeAreaView>
      <Text>Name: {props.name}</Text>
      <Text>Price: {props.price.toString()}</Text>
      <Text>Country: {props.country}</Text>
    </SafeAreaView>
  )
}

interface Product{
    name:String
    price:Number
    country:String
}

Box.defaultProps = {
    country:'Azerbaycan'
}
export default Box