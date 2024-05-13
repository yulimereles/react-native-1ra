import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
  <>
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
          name="Inicio" component={Home} />
        <Stack.Screen
          name="Login" component={Login} />
      </Stack.Navigator>
  </NavigationContainer>
  </>
  );
}

