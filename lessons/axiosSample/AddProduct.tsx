import { View, Text, Button, StyleSheet, TextInput, SafeAreaView } from 'react-native'
import React from 'react'
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';




const AddProduct = () => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            unitPrice: '',
            unitsInStock: ''
        }
    });

    const add = (values: any) => {

        let newProduct: Product = {
            name: values.name,
            unitPrice: Number(values.unitPrice),
            unitsInStock: Number(values.unitsInStock)
        }

        axios.post('https://northwind.vercel.app/api/products', newProduct)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
                
            })

    }

    return (
        <SafeAreaView>
            <Controller
                control={control}
                rules={{
                    required: true
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="name"
            />


            <Controller
                control={control}
                rules={{
                    required: true
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="Unit Price"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="unitPrice"
            />
            {errors.name && <Text style={{ color: 'tomato' }}>This is required.</Text>}
            <Controller
                control={control}
                rules={{
                    required: true
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="Units In Stock"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="unitsInStock"
            />
            <Button title="Submit" onPress={handleSubmit(add)} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});


interface Product {
    name: string
    unitPrice: number
    unitsInStock: number
}

export default AddProduct



