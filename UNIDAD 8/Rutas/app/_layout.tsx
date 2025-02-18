import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="flatlist" 
        options={{ title: 'FlatList' }}
      />
    </Tabs>
  );
}