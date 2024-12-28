// src/screens/ProductDetailScreen.js
import React from 'react';
import { View, Text, Image, Button } from 'react-native';

export default function ProductDetailScreen({ route, navigation }) {
  const { cake } = route.params;

  return (
    <View>
      <Image source={cake.image} style={{ width: 200, height: 200 }} />
      <Text>{cake.name}</Text>
      <Text>${cake.price}</Text>
      <Button title="Add to Cart" onPress={() => alert('Added to Cart')} />
    </View>
  );
}
