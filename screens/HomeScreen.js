    // src/screens/HomeScreen.js
import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const cakes = [
  { id: 1, name: 'Chocolate Cake', price: 20, image: require('../assets/cake.jpg') },
  { id: 2, name: 'Vanilla Cake', price: 15, image: require('../assets/R.jpg') },
];

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <FlatList
        data={cakes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { cake: item })}>
            <View>
              <Image source={item.image} style={{ width: 100, height: 100 }} />
              <Text>{item.name}</Text>
              <Text>${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
