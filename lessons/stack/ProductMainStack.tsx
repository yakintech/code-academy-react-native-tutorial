import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from '../screens/product/ProductList';
import AddProduct from '../screens/product/AddProduct';
import ProductDetail from '../screens/product/ProductDetail';

const ProductStack = createNativeStackNavigator();

const ProductMainStack = () => {
    return (
        <>
            <ProductStack.Navigator>
                <ProductStack.Screen
                    name="ProductList"
                    component={ProductList}
                    options={{ title: 'Product List' }}
                />
                <ProductStack.Screen name="AddProduct" component={AddProduct} />
                <ProductStack.Screen
                    name="ProductDetail"
                    component={ProductDetail}
                    options={({ route } : any) => ({ title: route.params.name })}
                />
            </ProductStack.Navigator>
        </>
    )
}

export default ProductMainStack