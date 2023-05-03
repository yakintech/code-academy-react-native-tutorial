import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native';


const HomeScreen = ({ navigation }: any) => {

    useFocusEffect(() => {
        console.log(' Focus Effect');
    })

    useEffect(() => {

        console.log('Hello Home Screen');

    }, [])

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