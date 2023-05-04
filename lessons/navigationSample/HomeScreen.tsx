import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen = ({ navigation }: any) => {

    const [randomNumber, setrandomNumber] = useState<number>(0)

    useEffect(() => {

        AsyncStorage.getItem('random')
            .then(res => {
                setrandomNumber(Number(res))
            })

    }, [])


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

    const setNewRandom = () => {
        let random = Math.floor(Math.random() * 1000);
        setrandomNumber(random);

        AsyncStorage.setItem('random', random.toString());

    }
    return (
        <View>
            <Text style={{ fontSize: 30 }}>{randomNumber}</Text>
            <Button onPress={() => setNewRandom()} title='Set Random'></Button>
            {/* <Text>HomeScreen</Text>
            <Button title='go to suppliers screen' onPress={goToHome}></Button>
            <Button title='go to about screen' onPress={goTo}></Button> */}
        </View>
    )
}

export default HomeScreen