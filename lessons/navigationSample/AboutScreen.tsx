import { View, Text, Button } from 'react-native'
import React from 'react'

const AboutScreen = ({ navigation }: any) => {
    return (
        <View>
            <Text>AboutScreen</Text>
            <Button title='go back' onPress={() => navigation.goBack()}></Button>
        </View>
    )
}

export default AboutScreen