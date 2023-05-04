import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductDetail = ({ route, navigation }: any) => {


  const [detail, setdetail] = useState<any>({});
  const [isFavorite, setisFavorite] = useState(false);

  let { id } = route.params;

  useEffect(() => {

    axios.get(`https://northwind.vercel.app/api/products/${id}`)
      .then(res => {
        setdetail(res.data);
      }
      );

    AsyncStorage.getItem('favorites')
      .then(data => {
        let favorites: any[] = JSON.parse(data ?? '[]');
        let favoritesControl = favorites.find(q => q.id == detail.id);


        console.log('favorites', favorites);
        
        if(favoritesControl){
          setisFavorite(true) 
        }
        else{
          setisFavorite(false)
        }
      })

  }, [])

  //JSON.Parse - JSON.Stringfy
  const favoritesOperation = () => {

    AsyncStorage.getItem('favorites')
      .then(data => {

        //?? null ise empty array
        let favorites: any[] = JSON.parse(data ?? '[]');
        let favoritesControl = favorites.find(q => q.id == detail.id);
        
        //favori varsa çıkar yoksa ekle!
        if (favoritesControl) {

          let filteredFavorites = favorites.filter(q => q.id != detail.id);
          AsyncStorage.setItem('favorites', JSON.stringify(filteredFavorites));

        }
        else {
          favorites.push(detail);
          AsyncStorage.setItem('favorites', JSON.stringify(favorites));
        }


      })
  }

  return (
    <View>
      <Text style={styles.textStyle}>Id: {detail.id}</Text>
      <Text style={styles.textStyle}>Name: {detail.name}</Text>
      <Text style={styles.textStyle}>Price: {detail.unitPrice}</Text>
      <Text style={styles.textStyle}>Stock: {detail.unitsInStock}</Text>
      <Button onPress={favoritesOperation}>{

        isFavorite ? "Remove to Fav" : "Add to Fav"
      }</Button>
    </View>
  )
}

let styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  }
})

export default ProductDetail