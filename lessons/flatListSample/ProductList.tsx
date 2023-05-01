import { View, Text, SafeAreaView, FlatList, Button, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ProductList = () => {

    
    const [products, setproducts] = useState<Product[]>([]);
    const [originalProducts, setoriginalProducts] = useState<Product[]>([])
    const [loading, setloading] = useState(true);

    useEffect(() => {
        loadData();
    }, [])


    const loadData = () => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data);
                setoriginalProducts(res.data);
                setloading(false);
            })
    }

    const renderItem = ({ item }: any) => {
        return <Text style={{ fontSize: 20 }}>{item.name}</Text>
    }

    const sortByName = () => {
        let sortedProducts = products.sort((a: Product, b: Product) => a.name.localeCompare(b.name));
        setproducts([...sortedProducts])
    }



    const search = (value:string) => {
        //value -> ofu...

        
        let filteredProducts = originalProducts.filter(q => q.name.toLowerCase().includes(value.toLowerCase()));
     
        setproducts([...filteredProducts])
        
    }
    return (
        <SafeAreaView>
            <Button onPress={() => sortByName()} title='Sort by name'></Button>

            <TextInput style={styles.input} onChangeText={search}/>



            {
                loading ? <Text>loading..</Text> : <FlatList
                    data={products}
                    renderItem={renderItem}
                />
            }

        </SafeAreaView>
    )
}

interface Product {
    name: string
    unitPrice: number
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default ProductList