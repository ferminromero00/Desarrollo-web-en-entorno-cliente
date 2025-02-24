// filepath: /c:/Users/fermin/Desktop/2DAW/Desarrollo web en entorno cliente/PRIMER TRIMESTRE/TAREAS/Desarrollo-web-en-entorno-cliente/UNIDAD 8/Rutas/app/FlatListBasics.jsx
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from 'expo-router';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#f5f5f5',
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  details: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginTop: 5,
  },
});

const FlatListBasics = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>${item.price}</Text>
              <Button
                title="Ver más detalles"
                onPress={() => navigation.navigate('details', { item })}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default FlatListBasics;