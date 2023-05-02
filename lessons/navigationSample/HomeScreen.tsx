import { View, Text, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }: any) => {

    const goTo = () => {
        navigation.navigate('About')
    }

    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title='go to about screen' onPress={goTo}></Button>
        </View>
    )
}

export default HomeScreen