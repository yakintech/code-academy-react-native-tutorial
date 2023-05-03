import { View, Text } from 'react-native'
import React, { useState } from 'react'
import DeviceInfo from 'react-native-device-info';

const DeviceInfoScreen = () => {
    const [memory, setmemory] = useState<number>(0)

    let brand = DeviceInfo.getBrand();

    DeviceInfo.getTotalMemory().then((totalMemory) => {
        setmemory(totalMemory)
      });

    return (<>
        <Text>Brand: {brand}</Text>
        <Text>Memory: {memory}</Text>

    </>
    )
}

export default DeviceInfoScreen