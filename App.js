import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/routes/tabs';

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}