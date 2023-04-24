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
        <Text style= {styles.text}> Use o seu e-mail para entrar </Text>
        <TextInput
          style={styles.textInput}
          placeholder="E-mail"
          placeholderTextColor="#a0a0a0"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>C O N T I N U A R</Text>
        </TouchableOpacity>
        <Text style= {styles.text2}>         Não tem Disney+?</Text>
        <Text style= {styles.text3}>         ASSINAR </Text>
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
    textAlign: 'center',
    fontSize: 24,
  },
   text2: {
    color: '#fff',
    marginTop: 20,
    fontSize: 15,
  },
   text3: {
    color: '#fff',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 400,
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});
