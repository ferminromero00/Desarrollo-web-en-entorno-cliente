import { Tabs } from 'expo-router';
import FlatListBasics from './FlatListBasics'; // Asegúrate de que la ruta sea correcta

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="about" options={{ title: 'About' }} />
      <Tabs.Screen 
        name="flatlist" 
        options={{ title: 'FlatList' }}
      />
    </Tabs>
  );
}