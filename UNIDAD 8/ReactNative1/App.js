import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput style={styles2.input} value={setLogin}></TextInput>
      <Text>Pass</Text>
      <TextInput style={styles2.input} value={setPass}></TextInput>

      <Button
        title="Acceder"
        onPress={() => {
          alert("Boton presionado");
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const styles2 = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
});
