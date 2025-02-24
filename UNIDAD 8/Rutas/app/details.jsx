// filepath: /c:/Users/fermin/Desktop/2DAW/Desarrollo web en entorno cliente/PRIMER TRIMESTRE/TAREAS/Desarrollo-web-en-entorno-cliente/UNIDAD 8/Rutas/app/details.jsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
});

const ProductDetails = ({ route }) => {
  const { item } = route.params;

  if (!item) {
    return (
      <View style={styles.container}>
        <Text>No item data available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

export default ProductDetails;