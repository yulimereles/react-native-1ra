import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Home from './views/Home'


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
  <>
  <NavigationContainer>
    <Stack.Navigator>
     <Stack.Screen name="home" options={{ headerShown: false }} component={Home}/>
    </Stack.Navigator>
  </NavigationContainer>
  <StatusBar style="auto" />
  </>
  );
}

