import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { PaperProvider, TextInput } from 'react-native-paper';

export default function App() {
 

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.contenido}>
          Resgistrate :)
        </Text>
        <Image source={require('./src/img/image1.jpg')} style={styles.img}/>
        <TextInput style={styles.input} 
          placeholder='Nombre'
          placeholderTextColor='#aaa'
          onChangeText={(text) => setNombre(text)}
          autoCapitalize='none'
          transparent= 'none'
        />
        <TextInput style={styles.input}
          placeholder='Correo'
          placeholderTextColor='#aaa'
          onChangeText={(text) => setCorreo(text)}
          autoCapitalize='none'
        />
        <TextInput style={styles.input}
          placeholder='Contraseña'
          placeholderTextColor='#aaa'
          onChangeText={(text) => setContrasena(text)}
          autoCapitalize='none'
        />
        <TextInput style={styles.input}
          placeholder='Confirmar Contraseña'
          placeholderTextColor='#aaa'
          onChangeText={(text) => setConfirmarContrasena(text)}
          autoCapitalize='none'
        />

        <Button title="Registrarme" onPress={() => alert('Registrandose...')} style={styles.button} />

        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'khaki',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contenido: {
    fontSize: 20,
    textAlign: 'center',
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: 20,

  },
  button: {
    backgroundColor: '#788eec',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 30,
    paddingLeft: 16,
  },
});
