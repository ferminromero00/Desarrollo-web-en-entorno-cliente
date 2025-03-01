import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { fetchApi } from "./script";
import Ionicons from '@expo/vector-icons/Ionicons';

interface Producto {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface CarritoItem {
  producto: Producto;
  cantidad: number;
}

const CarritoContext = React.createContext<{
  items: CarritoItem[];
  addItem: (item: Producto) => void;
  updateCantidad: (itemId: number, newCantidad: number) => void;
}>({
  items: [],
  addItem: () => { },
  updateCantidad: () => { }
});

function CarritoScreen() {
  const { items, updateCantidad } = React.useContext(CarritoContext);
  const total = items.reduce((sum, item) => {
    return sum + (item.producto.price * item.cantidad);
  }, 0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {items.length === 0 ? (
        <Text style={styles.emptyCart}>El carrito está vacío</Text>
      ) : (
        <>
          {items.map((item, index) => (
            <View key={index} style={styles.producto}>
              <Text style={styles.titulo}>{item.producto.title}</Text>
              <Image 
                source={{ uri: item.producto.image }} 
                style={styles.imagen}
              />
              <Text style={styles.precio}>
                Precio: ${item.producto.price.toFixed(2)}
              </Text>
              <View style={styles.cantidadContainer}>
                <TouchableOpacity
                  onPress={() => updateCantidad(item.producto.id, item.cantidad - 1)}
                  style={styles.cantidadButton}
                >
                  <Text style={styles.cantidadButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.cantidad}>{item.cantidad}</Text>
                <TouchableOpacity
                  onPress={() => updateCantidad(item.producto.id, item.cantidad + 1)}
                  style={styles.cantidadButton}
                >
                  <Text style={styles.cantidadButtonText}>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.subtotal}>
                Subtotal: ${(item.producto.price * item.cantidad).toFixed(2)}
              </Text>
            </View>
          ))}
          <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
        </>
      )}
    </ScrollView>
  );
}

function HomeScreen({ navigation }: { navigation: any }) {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { addItem } = React.useContext(CarritoContext);
  const [allProducts, setAllProducts] = useState<Producto[]>([]);
  const [categorias, setCategorias] = useState<string[]>([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('');

  useEffect(() => {
    setIsLoading(true);
    // Obtener productos
    fetchApi('https://fakestoreapi.com/products')
      .then((data: Producto[]) => {
        setAllProducts(data);
        setProductos(data);
        // Extraer categorías únicas
        const uniqueCategories = [...new Set(data.map(product => product.category))];
        setCategorias(uniqueCategories);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      let filteredProducts = allProducts;

      // Filtrar por categoría si hay una seleccionada
      if (categoriaSeleccionada) {
        filteredProducts = filteredProducts.filter(
          product => product.category === categoriaSeleccionada
        );
      }

      // Filtrar por término de búsqueda si existe
      if (searchTerm) {
        filteredProducts = filteredProducts.filter(product =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setProductos(filteredProducts);
    }, 1000);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, categoriaSeleccionada, allProducts]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.filtersContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar productos..."
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
        </View>
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        >
          <TouchableOpacity
            style={[
              styles.categoryButton,
              !categoriaSeleccionada && styles.categoryButtonActive
            ]}
            onPress={() => setCategoriaSeleccionada('')}
          >
            <Text style={[
              styles.categoryButtonText,
              !categoriaSeleccionada && styles.categoryButtonTextActive
            ]}>
              Todos
            </Text>
          </TouchableOpacity>
          {categorias.map((categoria) => (
            <TouchableOpacity
              key={categoria}
              style={[
                styles.categoryButton,
                categoriaSeleccionada === categoria && styles.categoryButtonActive
              ]}
              onPress={() => setCategoriaSeleccionada(categoria)}
            >
              <Text style={[
                styles.categoryButtonText,
                categoriaSeleccionada === categoria && styles.categoryButtonTextActive
              ]}>
                {categoria}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      
      {isLoading ? (
        <ActivityIndicator size="large" color="#4CAF50" style={styles.loader} />
      ) : productos.length === 0 ? (
        <Text style={styles.noResults}>No se encontraron productos</Text>
      ) : (
        productos.map((producto) => (
          <View key={producto.id} style={styles.producto}>
            <Text style={styles.titulo}>{producto.title}</Text>
            <Image source={{ uri: producto.image }} style={styles.imagen} />
            <Text style={styles.precio}>Precio: ${producto.price.toFixed(2)}</Text>
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
        ))
      )}
    </ScrollView>
  );
}

function DetallesScreen({ route }: { route: any }) {
  const { producto } = route.params;
  const { addItem } = React.useContext(CarritoContext);

  return (
    <View style={styles.detalleContainer}>
      <Text style={styles.titulo}>{producto.title}</Text>
      <Image source={{ uri: producto.image }} style={styles.imagenDetalle} />
      <Text style={styles.precio}>Precio: ${producto.price.toFixed(2)}</Text>
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
  const [carritoItems, setCarritoItems] = useState<CarritoItem[]>([]);

  return (
    <CarritoContext.Provider
      value={{
        items: carritoItems,
        addItem: (item) => {
          setCarritoItems(prevItems => {
            const existingItem = prevItems.find(i => i.producto.id === item.id);
            if (existingItem) {
              return prevItems.map(i =>
                i.producto.id === item.id
                  ? { ...i, cantidad: i.cantidad + 1 }
                  : i
              );
            }
            return [...prevItems, { producto: item, cantidad: 1 }];
          });
        },
        updateCantidad: (itemId, newCantidad) => {
          if (newCantidad <= 0) {
            setCarritoItems(prevItems => 
              prevItems.filter(item => item.producto.id !== itemId)
            );
          } else {
            setCarritoItems(prevItems =>
              prevItems.map(item =>
                item.producto.id === itemId
                  ? { ...item, cantidad: newCantidad }
                  : item
              )
            );
          }
        }
      }}
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
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
            headerShown: false
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
  filtersContainer: {
    width: '100%',
    marginBottom: 20,
  },
  categoriesContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    gap: 10,
  },
  categoryButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  categoryButtonActive: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  categoryButtonText: {
    color: '#666',
    fontSize: 14,
  },
  categoryButtonTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  searchContainer: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 15,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  loader: {
    marginTop: 20,
  },
  noResults: {
    fontSize: 16,
    color: '#666',
    marginTop: 20,
    textAlign: 'center',
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
  cantidad: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  subtotal: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    marginVertical: 5,
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
  },
  cantidadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    gap: 15,
  },
  cantidadButton: {
    backgroundColor: '#4CAF50',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cantidadButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});