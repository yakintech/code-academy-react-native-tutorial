import { View, Text, Button, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'

const EffectSample = () => {

    const [counter, setcounter] = useState(0);
    const [counter2, setcounter2] = useState(0);

    const [categories, setcategories] = useState<Category[]>([])


    // useEffect(() => {
    //     loadData();
    // }, [])

    useEffect(() => {

        console.log('Hello');
        loadData();



    }, [counter, counter2])


    useEffect(() => {
    
    
      return () => {
        
      }

      
    }, [])
    



    const loadData = () => {
        fetch('https://northwind.vercel.app/api/categories')
            .then(res => res.json())
            .then(data => {
                setcategories(data);
            })
    }

    return (
        <SafeAreaView>
            <Text style={{ fontSize: 40 }}>{counter}</Text>
            <Button title='Increase' onPress={() => setcounter(counter + 1)}></Button>
            <View>
                {
                    categories && categories.map(item => <Text>{item.name}</Text>)
                }
            </View>
        </SafeAreaView >
    )
}

export default EffectSample

interface Category {
    name: string
}


//STATE - PROPS - EFFECT