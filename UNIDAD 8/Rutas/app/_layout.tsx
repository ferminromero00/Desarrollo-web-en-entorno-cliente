// filepath: /c:/Users/fermin/Desktop/2DAW/Desarrollo web en entorno cliente/PRIMER TRIMESTRE/TAREAS/Desarrollo-web-en-entorno-cliente/UNIDAD 8/Rutas/app/_layout.tsx
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="flatlist" 
        options={{ title: 'FlatList' }}
      />
      <Tabs.Screen 
        name="details" 
        options={{ title: 'Details', headerShown: false }}
      />
    </Tabs>
  );
}