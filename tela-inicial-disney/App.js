import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
        <AssetExample />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ASSINAR AGORA</Text>
        </TouchableOpacity>
        <Text style= {styles.text}>
        Comece a assistir ao Disney+ por R$ 27,90/mês ou R$ 279,90/ano. Os preços podem variar em outras moedas ou plataformas
        </Text>
        <View style={styles.line} />
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>ENTRAR</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#1a1d29',
    padding: 8,
  },
  text: {
    marginTop: 15,
    color: '#cacaca' ,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007aff',
    borderRadius: 5,
    padding: 10,
    marginTop: 10, 
    width: '95%',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'Feather bold',
    textAlign: 'center',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#30333e',
    marginTop: 20,
    marginBottom: 1,
  },
    button2: {
    backgroundColor: '#1a1d29',
    borderRadius: 5,
    padding: 10,
    marginTop: 5, 
    width: '95%',
  },
  buttonText2: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'Feather bold',
    textAlign: 'center',
  },
});
