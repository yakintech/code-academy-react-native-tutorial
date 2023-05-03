import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DeviceInfoScreen from '../screens/device/DeviceInfoScreen';

const DeviceMainStack = createNativeStackNavigator();


const DeviceStack = () => {
  return (
    <>
    <DeviceMainStack.Navigator>
        <DeviceMainStack.Screen
            name="DeviceInfo"
            component={DeviceInfoScreen}
            options={{ title: 'Device Info' }}
        />
       
    </DeviceMainStack.Navigator>
</>
  )
}

export default DeviceStack