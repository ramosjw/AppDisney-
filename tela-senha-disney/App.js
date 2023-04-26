import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
        <AssetExample />
        <Text style= {styles.text}>   Digite a senha</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Senha"
          placeholderTextColor="#a0a0a0"
        />
        <Text style= {styles.text4}>     (maiúsculas e minúsculas)</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordText}>     Esqueceu a senha?</Text>
        </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#00020c',
    padding: 8,
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
  text4: {
    color: '#a0a0a0',
    fontSize: 15,
    marginTop: 10,
  },
  textInput: {
    height: 80,
    borderColor: '#31343e',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    color: '#94969b',
    backgroundColor: '#31343e',
    paddingBottom: 40,   
    fontSize: 15,
  },
  button: {
    backgroundColor: '#007aff',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'Feather bold',
  },
  forgotPasswordButton: {
    marginTop: 10,
    marginBottom: 400,
    marginTop: 20,
  },
  forgotPasswordText: {
    color: '#3eabff'
  }
});