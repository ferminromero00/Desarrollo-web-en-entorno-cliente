// filepath: /c:/Users/fermin/Desktop/2DAW/Desarrollo web en entorno cliente/PRIMER TRIMESTRE/TAREAS/Desarrollo-web-en-entorno-cliente/UNIDAD 8/native1/app/index.tsx
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
    backgroundColor: '#f0f0f0',
  },
  producto: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  imagen: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  precio: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  detalleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  imagenDetalle: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  descripcion: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
});