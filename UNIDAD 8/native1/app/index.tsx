import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { fetchApi } from "./script";

// interfaz del producto
interface Producto {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
}

// pantalla de inicio
function HomeScreen({ navigation }: { navigation: any }) {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    fetchApi('https://fakestoreapi.com/products')
      .then((data: Producto[]) => {
        setProductos(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {productos.map((producto) => (
        <View key={producto.id} style={styles.producto}>
          <Text style={styles.titulo}>{producto.title}</Text>
          <Image source={{ uri: producto.image }} style={styles.imagen} />
          <Text style={styles.precio}>Price: ${producto.price}</Text>
          <Button
            title="Ver detalles"
            onPress={() => navigation.navigate('Detalles', { producto })}
          />
        </View>
      ))}
    </ScrollView>
  );
}

// pantalla de detalles
function DetallesScreen({ route }: { route: any }) {
  const { producto } = route.params;

  return (
    <View style={styles.detalleContainer}>
      <Text style={styles.titulo}>{producto.title}</Text>
      <Image source={{ uri: producto.image }} style={styles.imagenDetalle} />
      <Text style={styles.precio}>Price: ${producto.price}</Text>
      <Text style={styles.descripcion}>{producto.description}</Text>
    </View>
  );
}

// navegación
const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="Detalles" component={DetallesScreen} />
    </Stack.Navigator>
  );
}

// estilos CSS
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  producto: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    width: '90%',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  imagen: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  precio: {
    fontSize: 16,
    color: '#333',
  },
  detalleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imagenDetalle: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  descripcion: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
});
