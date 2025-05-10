import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Button } from 'react-native';
import { useState } from 'react';
import Login from './components/Login';
import MinMax from './components/MinMax';

export default function App() {
  // const [numberA, setNumberA] = useState('');
  // const [numberB, setNumberB] = useState('');
  // const [numberC, setNumberC] = useState('');
  // const [result, setResult] = useState('');

  // const handleMax = () => {
  //   const numbers = [parseInt(numberA), parseInt(numberB), parseInt(numberC)];
  //   const max = Math.max(...numbers);
  //   setResult(` Max: ${max}`);
  // };
  // const handleMin = () => {
  //   const numbers = [parseInt(numberA), parseInt(numberB), parseInt(numberC)];
  //   const min = Math.min(...numbers);
  //   setResult(`Min: ${min}`);
  // }

  return (
    <View style={styles.container}>
      {/* <TextInput
        value={numberA}
        onChangeText={(text) => setNumberA(text)}
        style={{width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Enter number a"
      />
      <TextInput
        value={numberB}
        onChangeText={(text) => setNumberB(text)}
        style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Enter number b"
      />
      <TextInput
        value={numberC}
        onChangeText={(text) => setNumberC(text)}
        style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Enter number c"
      />
      <Button title="Min" onPress={handleMin} />
      <Button title="Max" onPress={handleMax} />


      <Text style={{ fontWeight: 'bold', fontSize: 20,marginTop: 20 }}>Result: {result}</Text> */}

      {/* <MinMax /> */}
      <Login/>
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