import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, List } from 'react-native-paper';


const ProductList = ({ navigation }: any) => {

    const [products, setproducts] = useState([]);


    useEffect(() => {
        
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data);
            });

    }, [])


    const goToDetail = (id: number, name:string) => {
        navigation.navigate('ProductDetail', { id: id, name: name })
    }

    const renderItem = ({ item }: any) => {
        return <>
            <Pressable onPress={() => goToDetail(item.id, item.name)}>
                <List.Item
                    title={item.name}
                    description={item.unitPrice}
                    left={props => <List.Icon {...props} icon="star" />}
                />
            </Pressable>

        </>
    }


    return (<>
        <FlatList
            data={products}
            renderItem={renderItem}
        />
    </>)
}

export default ProductList