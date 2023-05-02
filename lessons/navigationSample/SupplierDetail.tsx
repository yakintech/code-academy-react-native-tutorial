import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SupplierModel } from './SupplierModel';
import axios from 'axios';

const SupplierDetail = ({ navigation, route }: any) => {

    const [detail, setdetail] = useState<SupplierModel>();

    const { id } = route.params;

    useEffect(() => {
      
        axios.get('https://northwind.vercel.app/api/suppliers/' + id)
        .then(response => {
            setdetail(response.data)
        })
      
    }, [])
    

    return (
        <View>
            <Text style={{fontSize:40}}>Id: {id}</Text>
            <Text style={{fontSize:40}}>Name: {detail?.companyName}</Text>
            <Text style={{fontSize:40}}>Contact Title: {detail?.contactTitle}</Text>
  

        </View>
    )
}

export default SupplierDetail