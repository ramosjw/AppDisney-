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
        <Text style= {styles.text}>Comece a assistir hoje mesmo</Text>
        <Text style= {styles.text2}>Cancele quando quiser.</Text>
        <Text style= {styles.text3}>Ao selecionar o botão de assinatura mensal ou anual abaixo, você concorda em iniciar a assinatura imediatamente e que o pagamento mensal ou anual não é reembolsável. A anuidade ou mensalidade será cobrada de forma recorrente. Você pode cancelar a qualquer momento, com efeito no final do período de cobrança.</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>R$ 33,90/mês</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>R$ 279,90/ano</Text>
        </TouchableOpacity>

        <Text style= {styles.text4}>(12 meses por R$ 23,32/mês. Economize 15%)</Text>

        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordText}>Restaurar Compra</Text>
        </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#040814',
    padding: 8,
  },
  text: {
    color: '#fff',
    fontSize: 28,
    marginTop: -25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text2: {
    color: '#a0a0a0',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 17,
  },
  text3: {
    color: '#fff',
    marginTop: 100,
    marginBottom: 10,
    fontSize: 16,
  },
  text4: {
    color: '#f9f9f9',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 12
  },
  forgotPasswordButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#3eabff',
    fontSize: 16,
    marginTop: 7,
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
   button2: {
    backgroundColor: '#007aff',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },
  buttonText2: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'Feather bold',
  },
});