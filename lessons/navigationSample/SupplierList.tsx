import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const SupplierList = ({ navigation }: any) => {

    const [suppliers, setsuppliers] = useState([]);


    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/suppliers')
            .then(response => {
                setsuppliers(response.data)
            })

    }, [])


    const goToDetail = (id: any) => {
        navigation.navigate('SupplierDetail', { id: id })
    }

    const renderItem = ({ item }: any) => {
        return <>
            <Pressable onPress={() => goToDetail(item.id)}>
                <Text style={{ fontSize: 25 }}>{item.companyName}</Text>
            </Pressable>
        </>
    }

    return (
        <View>
            <FlatList
                data={suppliers}
                renderItem={renderItem}
            />
        </View>
    )
}



export default SupplierList