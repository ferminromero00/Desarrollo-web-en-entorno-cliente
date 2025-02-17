import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');

  const users = [{ user: 'pepe', pass: 'pepe' }];

  const valida = (login, pass) => {
    if (login === users[0].user && pass === users[0].pass) {
      alert('Login successful');
      window.location("PagPrincipal.js")
    } else {
      alert('ERROR');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput style={styles2.input} value={login} onChangeText={setLogin}></TextInput>
      <Text>Pass</Text>
      <TextInput style={styles2.input} value={pass} onChangeText={setPass} secureTextEntry={true}></TextInput>

      <Button
        title="Acceder"
        onPress={() => {
          valida(login, pass);
        }}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const styles2 = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
