import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { fetchApi } from "./script";
import Ionicons from '@expo/vector-icons/Ionicons'; 

// Interfaz del producto
interface Producto {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
}

// Contexto del carrito
const CarritoContext = React.createContext<{
  items: Producto[];
  addItem: (item: Producto) => void;
}>({ items: [], addItem: () => { } });

// Pantalla del carrito
function CarritoScreen() {
  const { items } = React.useContext(CarritoContext);
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {items.length === 0 ? (
        <Text style={styles.emptyCart}>El carrito está vacío</Text>
      ) : (
        <>
          {items.map((producto, index) => (
            <View key={index} style={styles.producto}>
              <Text style={styles.titulo}>{producto.title}</Text>
              <Image source={{ uri: producto.image }} style={styles.imagen} />
              <Text style={styles.precio}>Precio: ${producto.price}</Text>
            </View>
          ))}
          <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
        </>
      )}
    </ScrollView>
  );
}

// Pantalla de inicio
function HomeScreen({ navigation }: { navigation: any }) {
  const [productos, setProductos] = useState<Producto[]>([]);
  const { addItem } = React.useContext(CarritoContext);

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
          <Text style={styles.precio}>Precio: ${producto.price}</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Ver detalles"
              onPress={() => navigation.navigate('Detalles', { producto })}
            />
            <Button
              title="Añadir al carrito"
              onPress={() => {
                addItem(producto);
                alert('Producto añadido al carrito');
              }}
              color="#4CAF50"
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

// Pantalla de detalles
function DetallesScreen({ route }: { route: any }) {
  const { producto } = route.params;
  const { addItem } = React.useContext(CarritoContext);

  return (
    <View style={styles.detalleContainer}>
      <Text style={styles.titulo}>{producto.title}</Text>
      <Image source={{ uri: producto.image }} style={styles.imagenDetalle} />
      <Text style={styles.precio}>Precio: ${producto.price}</Text>
      <Text style={styles.descripcion}>{producto.description}</Text>
      <Button
        title="Añadir al carrito"
        onPress={() => {
          addItem(producto);
          alert('Producto añadido al carrito');
        }}
        color="#4CAF50"
      />
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Productos" component={HomeScreen} />
      <Stack.Screen name="Detalles" component={DetallesScreen} />
    </Stack.Navigator>
  );
}

export default function MainNavigator() {
  const [carritoItems, setCarritoItems] = useState<Producto[]>([]);

  return (
    <CarritoContext.Provider
      value={{
        items: carritoItems,
        addItem: (item) => setCarritoItems([...carritoItems, item])
      }}
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // Esto ocultará el header
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = focused
              ? route.name === 'Home' ? 'home' : 'cart'
              : route.name === 'Home' ? 'home-outline' : 'cart-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerShown: false // Esto asegura que no se muestre el header en esta pantalla
          }}
        />
        <Tab.Screen name="Carrito" component={CarritoScreen} />
      </Tab.Navigator>
    </CarritoContext.Provider>
  );
}

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
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    gap: 10,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'right',
    width: '100%',
  },
  emptyCart: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  }
});