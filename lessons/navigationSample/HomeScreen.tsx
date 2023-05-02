import { View, Text, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }: any) => {

    const goTo = () => {
        navigation.navigate('About')
    }

    const goToHome = () => {
        navigation.navigate('Suppliers')
    }

    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title='go to suppliers screen' onPress={goToHome}></Button>
            <Button title='go to about screen' onPress={goTo}></Button>
        </View>
    )
}

export default HomeScreen